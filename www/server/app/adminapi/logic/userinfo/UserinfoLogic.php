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

namespace app\adminapi\logic\userinfo;


use app\common\model\userinfo\Userinfo;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * 电话信息逻辑
 * Class UserinfoLogic
 * @package app\adminapi\logic\userinfo
 */
class UserinfoLogic extends BaseLogic
{


    /**
     * @notes 添加电话信息
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Userinfo::create([
                'mobile' => $params['mobile']
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 编辑电话信息
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Userinfo::where('id', $params['id'])->update([
                'mobile' => $params['mobile']
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除电话信息
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public static function delete(array $params): bool
    {
        return Userinfo::destroy($params['id']);
    }


    /**
     * @notes 获取电话信息详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2023/07/12 19:18
     */
    public static function detail($params): array
    {
        return Userinfo::findOrEmpty($params['id'])->toArray();
    }
}