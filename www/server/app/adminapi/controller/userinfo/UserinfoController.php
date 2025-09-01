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


namespace app\adminapi\controller\userinfo;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\userinfo\UserinfoLists;
use app\adminapi\logic\userinfo\UserinfoLogic;
use app\adminapi\validate\userinfo\UserinfoValidate;


/**
 * 电话信息控制器
 * Class UserinfoController
 * @package app\adminapi\controller\userinfo
 */
class UserinfoController extends BaseAdminController
{


    /**
     * @notes 获取电话信息列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function lists()
    {
        return $this->dataLists(new UserinfoLists());
    }


    /**
     * @notes 添加电话信息
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function add()
    {
        $params = (new UserinfoValidate())->post()->goCheck('add');
        $result = UserinfoLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserinfoLogic::getError());
    }


    /**
     * @notes 编辑电话信息
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function edit()
    {
        $params = (new UserinfoValidate())->post()->goCheck('edit');
        $result = UserinfoLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(UserinfoLogic::getError());
    }


    /**
     * @notes 删除电话信息
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function delete()
    {
        $params = (new UserinfoValidate())->post()->goCheck('delete');
        UserinfoLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取电话信息详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function detail()
    {
        $params = (new UserinfoValidate())->goCheck('detail');
        $result = UserinfoLogic::detail($params);
        return $this->data($result);
    }


}