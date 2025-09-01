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

namespace app\adminapi\logic;


use app\common\model\Download;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * download逻辑
 * Class DownloadLogic
 * @package app\adminapi\logic
 */
class DownloadLogic extends BaseLogic
{


    /**
     * @notes 添加download
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            Download::create([
                'name' => $params['name'],
                'company' => $params['company'],
                'job' => $params['job'],
                'tel' => $params['tel'],
                'email' => $params['email'],
                'info' => $params['info']
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
     * @notes 编辑download
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            Download::where('id', $params['id'])->update([
                'name' => $params['name'],
                'company' => $params['company'],
                'job' => $params['job'],
                'tel' => $params['tel'],
                'email' => $params['email'],
                'info' => $params['info']
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
     * @notes 删除download
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public static function delete(array $params): bool
    {
        return Download::destroy($params['id']);
    }


    /**
     * @notes 获取download详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2023/07/08 17:48
     */
    public static function detail($params): array
    {
        return Download::findOrEmpty($params['id'])->toArray();
    }
}