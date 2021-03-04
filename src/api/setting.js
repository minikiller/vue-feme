import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/settings',
        method: 'get',
        params
    })
}

export function delData(id) {
    return request({
        url: '/setting/' + id,
        method: 'delete',
    })
}

export function updateData(data) {
    return request({
        url: '/setting/' + data.id,
        method: 'put',
        data: data
    })
}

export function newData(data) {
    return request({
        url: '/settings',
        method: 'post',
        data: data
    })
}

