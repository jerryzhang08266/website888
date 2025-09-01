<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\api\controller;


use app\api\lists\article\ArticleCollectLists;
use app\api\lists\article\ArticleLists;
use app\api\logic\ArticleLogic;
use app\api\logic\DownloadLogic;
use app\api\validate\DownloadValidate;

use app\api\logic\UserinfoLogic;
use app\api\validate\UserinfoValidate;
use think\cache\driver\Redis;

/**
 * 文章管理
 * Class ArticleController
 * @package app\api\controller
 */
class ArticleController extends BaseApiController
{
    private $code;
    private $width;
    private $height;
    private $image;
    private $sessionKey = 'captcha_code';
    public array $notNeedLogin = ['verify','createImage','lists', 'cate', 'detail','adddownload','addtel','getverify'];


    // 生成随机验证码
    private function generateCode($length = 4) {
        $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $code = '';
        for ($i = 0; $i < $length; $i++) {
            $code .= $chars[mt_rand(0, strlen($chars) - 1)];
        }
        return $code;
    }

    // 创建验证码图片
    public function createImage() {
        // 初始化图像尺寸（新增：明确设置 width 和 height）
        $this->width = 120;
        $this->height = 40;

        // 创建图像
        $this->image = imagecreatetruecolor($this->width, $this->height);
        $this->code = $this->generateCode();

        // **先设置背景色**（确保不覆盖后续绘制的元素）
        $bgColor = imagecolorallocate($this->image, 255, 255, 255);
        imagefill($this->image, 0, 0, $bgColor);

        // 绘制干扰线（新增：确保 width 和 height 已定义）
        for ($i = 0; $i < 5; $i++) {
            $lineColor = imagecolorallocate($this->image, mt_rand(0, 200), mt_rand(0, 200), mt_rand(0, 200));
            imageline(
                $this->image,
                mt_rand(0, $this->width), mt_rand(0, $this->height),
                mt_rand(0, $this->width), mt_rand(0, $this->height),
                $lineColor
            );
        }

        // 绘制干扰点（新增：确保 width 和 height 已定义）
        for ($i = 0; $i < 50; $i++) {
            $pointColor = imagecolorallocate($this->image, mt_rand(0, 200), mt_rand(0, 200), mt_rand(0, 200));
            imagesetpixel(
                $this->image,
                mt_rand(0, $this->width - 1),  // 确保不超出边界
                mt_rand(0, $this->height - 1), // 确保不超出边界
                $pointColor
            );
        }

        // 绘制验证码
        for ($i = 0; $i < strlen($this->code); $i++) {
            $textColor = imagecolorallocate($this->image, mt_rand(0, 100), mt_rand(0, 100), mt_rand(0, 100));
            imagestring($this->image, 5, 10 + $i * 25, 15, $this->code[$i], $textColor);
        }

        // 存储验证码到 session
        session_start();
        $_SESSION[$this->sessionKey] = $this->code;

        // 输出图像
        header('Content-Type: image/png');
        ob_clean();
        imagepng($this->image);
        imagedestroy($this->image);
        exit;
    }

    // 验证验证码
    public function verify($code) {
        session_start();
        $sessionKey = 'captcha_code';
        if (isset($_SESSION[$sessionKey]) && strtolower($code) === strtolower($_SESSION[$sessionKey])) {
            // 验证后销毁验证码
            unset($_SESSION[$sessionKey]);
            return true;
        }
        unset($_SESSION[$sessionKey]);
        return false;
    }

    public function getverify(){
        $p = (new DownloadValidate())->post()->goCheck('add');

        $captchaCode = $p['captcha'] ?? '';

        // 验证图形验证码
        if (!$this->verify($captchaCode)) {
//            echo json_encode([
//                'status' => false,
//                'message' => '图形验证码错误'
//            ]);
            return $this->success('图形验证码错误。',[],-1,1);
            exit;
        }


        $tel = $p['tel'];

        if(empty($tel)){
            return $this->success('手机号不能为空。',[],-1,1);
        }
        $code = "";
        for ($i=0; $i <4 ; $i++) {
            $code .= mt_rand(0,9);
        }

        $l = UserinfoLogic::limitc(2);//一分钟三次

        if($l === false){
            return $this->success('请求频率超过限制，请稍后再试。',[],1,1);
        }

        $body = "您好,验证码是".$code."，请在1分钟内使用，超时请重新获取，转发无效。";

        $url = "http://wisms.wiwide.com/sendsms/send";  //接口地址
        $params['appid']   = 'widash';  //需求方账号
        $params['mobile']  = $tel;   //手机号码
        $params['content'] = $body; //短信内容
        $appkey = 'bklmovyAFIKPX146'; //需求方申请的key

        ksort($params);
        $strtomd5 = array();
        foreach($params as $k=>$v)
        {
            $strtomd5[]=$k.'='.$v;
        }
        $params['token'] = md5(md5(implode('&',$strtomd5).$appkey));
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);    // post数据
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params); // post的变量
        $output = curl_exec($ch);     //执行并获取HTML文档内容
        curl_close($ch);  //释放curl句柄
//      print_r($output); //打印获得的数据

        $kk = json_decode($output,true);


        (new \think\cache\driver\Redis)->set('WIWIDE_CODE_'.$tel,$code,60);


        return $this->success('success', [], 1, 1);

    }
    public function adddownload(){
        $params = (new DownloadValidate())->post()->goCheck('add');
        $result = DownloadLogic::add($params);
        if($result === -2)return $this->success('验证码不能为空', [], -1, 1);
        if($result === -1)return $this->success('验证码不匹配，请重新输入', [], -1, 1);
        if (true === $result) {
            $l = UserinfoLogic::limitc(1);

            if($l === false){
                return $this->success('请求频率超过限制，请稍后再试。',[],1,1);
            }
            DownloadLogic::send_mail($params);
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(DownloadLogic::getError());
    }
    /**
     * @notes 添加电话信息
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function addtel()
    {
        $params = (new UserinfoValidate())->post()->goCheck('add');
        $l = UserinfoLogic::limitc();

        if($l === false){
            return $this->success('请求频率超过限制，请稍后再试。',[],1,1);
        }
        $result = UserinfoLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserinfoLogic::getError());
    }

    /**
     * @notes 文章列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 15:30
     */
    public function lists()
    {
        return $this->dataLists(new ArticleLists());
    }


    /**
     * @notes 文章分类列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 15:30
     */
    public function cate()
    {
        return $this->data(ArticleLogic::cate());
    }


    /**
     * @notes 收藏列表
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 16:31
     */
    public function collect()
    {
        return $this->dataLists(new ArticleCollectLists());
    }


    /**
     * @notes 文章详情
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 17:09
     */
    public function detail()
    {
        $id = $this->request->get('id/d');
        $result = ArticleLogic::detail($id, $this->userId);
        return $this->data($result);
    }


    /**
     * @notes 加入收藏
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 17:01
     */
    public function addCollect()
    {
        $articleId = $this->request->post('id/d');
        ArticleLogic::addCollect($articleId, $this->userId);
        return $this->success('操作成功');
    }


    /**
     * @notes 取消收藏
     * @return \think\response\Json
     * @author 段誉
     * @date 2022/9/20 17:01
     */
    public function cancelCollect()
    {
        $articleId = $this->request->post('id/d');
        ArticleLogic::cancelCollect($articleId, $this->userId);
        return $this->success('操作成功');
    }


}
