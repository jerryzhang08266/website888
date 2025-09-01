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


namespace app\adminapi\controller;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\DownloadLists;
use app\adminapi\logic\DownloadLogic;
use app\adminapi\validate\DownloadValidate;


/**
 * download控制器
 * Class DownloadController
 * @package app\adminapi\controller
 */
class DownloadController extends BaseAdminController
{


    /**
     * @notes 获取download列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public function lists()
    {
        return $this->dataLists(new DownloadLists());
    }


    /**
     * @notes 添加download
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public function add()
    {
        $params = (new DownloadValidate())->post()->goCheck('add');
        $result = DownloadLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(DownloadLogic::getError());
    }


    /**
     * @notes 编辑download
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public function edit()
    {
        $params = (new DownloadValidate())->post()->goCheck('edit');
        $result = DownloadLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(DownloadLogic::getError());
    }


    /**
     * @notes 删除download
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public function delete()
    {
        $params = (new DownloadValidate())->post()->goCheck('delete');
        DownloadLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取download详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public function detail()
    {
        $params = (new DownloadValidate())->goCheck('detail');
        $result = DownloadLogic::detail($params);
        return $this->data($result);
    }


}