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

namespace app\adminapi\validate\download;


use app\common\validate\BaseValidate;


/**
 * download验证器
 * Class DownloadValidate
 * @package app\adminapi\validate\download
 */
class DownloadValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'name' => 'require',
        'company' => 'require',
        'job' => 'require',
        'tel' => 'require',
        'email' => 'require',
        'info' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'name' => '名称',
        'company' => '公司',
        'job' => '职位',
        'tel' => '电话',
        'email' => '邮箱',
        'info' => '下载项',
    ];


    /**
     * @notes 添加场景
     * @return DownloadValidate
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function sceneAdd()
    {
        return $this->only(['name','company','job','tel','email','info']);
    }


    /**
     * @notes 编辑场景
     * @return DownloadValidate
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function sceneEdit()
    {
        return $this->only(['id','name','company','job','tel','email','info']);
    }


    /**
     * @notes 删除场景
     * @return DownloadValidate
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return DownloadValidate
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}