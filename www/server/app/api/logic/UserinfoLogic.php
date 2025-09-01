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
use app\common\model\userinfo\Userinfo;


/**
 * 下载中心逻辑
 * Class ArticleLogic
 * @package app\api\logic
 */
class UserinfoLogic extends BaseLogic
{
    public static function limitc($flag=1){
        // 获取客户端IP地址
        //$ip = $_SERVER['REMOTE_ADDR'];
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                // IP from shared internet
                $ip = $_SERVER['HTTP_CLIENT_IP'];
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                // IP passed from proxy
                $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                // 可能会有多个IP，取第一个非unknown的有效IP
                foreach ($ips as $ip) {
                    $ip = trim($ip);
                    if (filter_var($ip, FILTER_VALIDATE_IP)) {
                        break;
                    }
                }
            } elseif (!empty($_SERVER['HTTP_X_REAL_IP'])) {
                // IP from Nginx proxy
                $ip = $_SERVER['HTTP_X_REAL_IP'];
            } else {
                // Direct IP address
                $ip = $_SERVER['REMOTE_ADDR'];
            }

// 设定一个时间段（1分钟），用于限制请求次数
        $limit = 60;

// 设定一个文件路径，用于保存每个IP的请求时间戳
        if($flag==1){
            $logFile = __DIR__ . '/request_logs.txt';
        }else{
            $logFile = __DIR__ . '/request_logs_verify.txt';
        }


// 获取当前时间戳
        $currentTime = time();

// 初始化限制次数为0
        $requests = 0;

// 检查日志文件是否存在
        if (file_exists($logFile)) {
            // 读取日志文件内容
            $logContent = file_get_contents($logFile);

            // 将日志内容转换为数组
            $logArr = json_decode($logContent, true);

            // 检查当前IP是否存在日志中
            if (isset($logArr[$ip])) {
                $requests = $logArr[$ip]['requests']; // 获取当前IP的请求次数
                $lastRequestTime = $logArr[$ip]['time']; // 获取当前IP的最后一次请求时间

                // 检查最后一次请求时间是否在时间限制范围内
                if ($lastRequestTime + $limit > $currentTime) {
                    // 如果在时间限制范围内，则增加请求次数
                    $requests++;
                } else {
                    // 如果不在时间限制范围内，则重置请求次数为1
                    $requests = 1;
                }
            }
        }

// 更新IP的请求次数和请求时间
        $logArr[$ip] = [
            'requests' => $requests,
            'time' => $currentTime
        ];

// 将更新后的日志内容写入文件
        file_put_contents($logFile, json_encode($logArr));

// 在这里进行接口处理
        if ($requests > 3) {
            // 如果请求次数大于1，则表示超过了限制，返回错误信息或进行其他处理
            return false;
        } else {
            // 否则，可以继续执行接口处理逻辑
            return true;
        }
    }

    public static function add($params){
        //echo "<pre>";print_r($params);exit;
        try {

            Userinfo::create([
                'mobile' => $params['mobile'],
                'create_time' => time()//date('Y-m-d H:i:s',time())
            ]);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }




}
