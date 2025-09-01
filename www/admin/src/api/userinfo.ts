import request from '@/utils/request'

// 电话信息列表
export function apiUserinfoLists(params: any) {
    return request.get({ url: '/userinfo.userinfo/lists', params })
}

// 添加电话信息
export function apiUserinfoAdd(params: any) {
    return request.post({ url: '/userinfo.userinfo/add', params })
}

// 编辑电话信息
export function apiUserinfoEdit(params: any) {
    return request.post({ url: '/userinfo.userinfo/edit', params })
}

// 删除电话信息
export function apiUserinfoDelete(params: any) {
    return request.post({ url: '/userinfo.userinfo/delete', params })
}

// 电话信息详情
export function apiUserinfoDetail(params: any) {
    return request.get({ url: '/userinfo.userinfo/detail', params })
}