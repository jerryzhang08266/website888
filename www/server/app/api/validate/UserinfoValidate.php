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

namespace app\api\validate;


use app\common\validate\BaseValidate;


/**
 * 电话信息验证器
 * Class UserinfoValidate
 * @package app\adminapi\validate\userinfo
 */
class UserinfoValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'mobile' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'mobile' => 'mobile',
    ];


    /**
     * @notes 添加场景
     * @return UserinfoValidate
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function sceneAdd()
    {
        return $this->only(['mobile']);
    }


    /**
     * @notes 编辑场景
     * @return UserinfoValidate
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function sceneEdit()
    {
        return $this->only(['id','mobile']);
    }


    /**
     * @notes 删除场景
     * @return UserinfoValidate
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return UserinfoValidate
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}