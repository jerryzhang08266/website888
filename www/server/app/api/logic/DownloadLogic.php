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

namespace app\api\logic;

use app\common\logic\BaseLogic;
use app\common\model\Download;

use app\common\model\file\File;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require '../vendor/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/src/SMTP.php';
require '../vendor/phpmailer/src/Exception.php';

/* case 'wismart8':
                        $body .= "<tr>
                        <th>".$v."</th>
                        <th><a target='_blank' href='".config('project.website.url')."uploads/file/local/20230711/2023071111041055efb4457.xlsx'>下载</a></th>
                        </tr>";
                        break;*/
/* {
    "iot":[
        "WiSmart 6",
        "WiSmart 3e",
        "WiRouter Mini",
        "WiRouter Pro",
        "WiMagic 4G魔盒",
        "WiMaster T",
        "WiMaster T3",
        "WiMaster G5005",
        "WiMaster X3s",
        "WiMaster X3s-G",
        "WiSwitch 7062",
        "WiSwitch S3028",
        "WiSwitch S2404P",
        "WiSwitch S802P",
        "WiSwitch S2400",
        "WiSwitch S2402P-F",
        "WiSwitch S802P-F"
    ],
    "aiot":[
        "WiMatrix",
        "WiSight 2 Mini客流一体机",
        "WiPano Mini全景客流一体机",
        "筒形客流一体机",
        "WiSight海螺摄像机",
        "WiSight半球摄像机",
        "WiSight筒形摄像机",
        "SensorHub"
    ],
    "iotsolution":[
        "全时段业务在线",
        "宽带及云宽带",
        "网络安全合规"
    ],
    "aiotsolution":[
        "购物中心客流",
        "连锁门店客流",
        "连锁云巡店"
    ],
    "industry":[
        "购物中心",
        "智慧商超",
        "智慧药店",
        "珠宝行业",
        "鞋服行业",
        "茶饮行业",
        "餐饮行业",
        "金融行业"
    ]
}*/

/**
 * 下载中心逻辑
 * Class ArticleLogic
 * @package app\api\logic
 */
class DownloadLogic extends BaseLogic
{

    public static function add($params){
        //echo "<pre>";print_r($params);exit;
        if(empty($params['verify'])){
            return -2;
        }
        $code = (new \think\cache\driver\Redis)->get('WIWIDE_CODE_'.$params['tel']);

        error_log('code:'.$code.'--'.$params['verify']);
        if($code != $params['verify']){
            return -1;
        }
        try {

            Download::create([
                'name' => $params['name'],
                'job' => $params['job'],
                'company' => $params['company'],
                'email' => $params['email'],
                'tel' => $params['tel'],
                'info' => json_encode($params['info'])
            ]);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }
    public static function send_mail($params){
        $subject = '产品资料';

        $body = "
<html>
<head>
<title>产品资料</title>
</head>
<body>
<p>请复制链接进行下载</p>
<table>
";

        foreach ($params['info'] as $key=>$value){
            foreach ($value as $k=>$v){
                $arr[] = $v;
//                switch($v){
//                    case 'WiSmart 6':
//                        $body .= "<tr>
//                        <th>".$v.":</th>
//                        <th>".config('project.website.url')."uploads/file/local/20230711/2023071111041055efb4457.xlsx</th>
//                        </tr>";
//                        break;
//                    case 'WiSmart 3e':
//                        $body .= "<tr>
//                        <th>".$v."</th>
//                        <th>".config('project.website.url')."uploads/file/local/20230711/2023071111041055efb4457.xlsx</th>
//                        </tr>";
//                        break;
//
//
//                }
            }
        }
        $arr[] = "产品全景图";
        // 文件 列表
        $field = [
            'id', 'name', 'uri'
        ];

        $filelist = File::field($field)
            ->where(['type' => 30])
            ->select()->toArray();
//print_r($filelist);
        foreach ($filelist as $m=>$n){
            $name = explode(".",$n['name']);

            if(in_array($name[0],$arr)){
                $body .= "<tr>
                <th>".$name[0].":</th>
                <th>http://".$_SERVER['HTTP_HOST']."/".$n['uri']."</th>
                </tr>";
            }
        }
        //print_r($_ENV);exit;

        $body .="</table></body></html>";

        $address[] = $params['email'];

        DownloadLogic::send($subject,$body,$address);
        return true;

    }
    public static function send($subject, $body, array $address_list = [])
    {
        $mail = new PHPMailer(true);

        //服务器配置
        $mail->CharSet   = "UTF-8";   //设定邮件编码
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // 调试模式输出
        $mail->isSMTP();                 // 使用SMTP
        // SMTP服务器
        $mail->Host = 'smtp.exmail.qq.com';//config();
        // 服务器端口 25 或者465 具体要看邮箱服务器支持
        $mail->Port       = 465;
        $mail->SMTPAuth   = true;  // 允许 SMTP 认证
        //$user='device_message@wiwide.com', $pass='Devicemessage123'
        $mail->Username   = 'device_message@wiwide.com';//config('');  // SMTP 用户名  即邮箱的用户名
        $mail->Password   = 'Devicemessage123';//config('');  // SMTP 密码  部分邮箱是授权码(例如163邮箱)
        $mail->SMTPSecure = 'ssl';  // 允许 TLS 或者ssl协议

        //发件人
        //$mail->setFrom(config('device_message@wiwide.com'), config('device_message@wiwide.com'));
        $mail->setFrom('device_message@wiwide.com', 'Wiwider');

        // 收件人
        foreach ($address_list as $address) {
            $mail->addAddress($address);
        }

        //Content
        $mail->isHTML(true);                                  // 是否以HTML文档格式发送  发送后客户端可直接显示对应HTML内容
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $r = $mail->send();
        return $r;
    }




}
