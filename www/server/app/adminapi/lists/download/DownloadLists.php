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

namespace app\adminapi\lists\download;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\download\Download;
use app\common\lists\ListsSearchInterface;


/**
 * download列表
 * Class DownloadLists
 * @package app\adminapi\listsdownload
 */
class DownloadLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function setSearch(): array
    {
        return [
            '=' => ['tel', 'info'],
            '%like%' => ['name', 'company', 'job', 'email'],
        ];
    }


    /**
     * @notes 获取download列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function lists(): array
    {
        return Download::where($this->searchWhere)
            ->field(['id', 'name', 'company', 'job', 'tel', 'email', 'info','inserttime'])
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
    }


    /**
     * @notes 获取download数量
     * @return int
     * @author likeadmin
     * @date 2023/07/08 18:18
     */
    public function count(): int
    {
        return Download::where($this->searchWhere)->count();
    }

}