import request from '@/utils/request'

// 下载中心列表
export function apiDownloadLists(params: any) {
    return request.get({ url: '/download.download/lists', params })
}

// 添加下载中心
export function apiDownloadAdd(params: any) {
    return request.post({ url: '/download.download/add', params })
}

// 编辑下载中心
export function apiDownloadEdit(params: any) {
    return request.post({ url: '/download.download/edit', params })
}

// 删除下载中心
export function apiDownloadDelete(params: any) {
    return request.post({ url: '/download.download/delete', params })
}

// 下载中心详情
export function apiDownloadDetail(params: any) {
    return request.get({ url: '/download.download/detail', params })
}