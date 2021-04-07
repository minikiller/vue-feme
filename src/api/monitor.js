import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/ListService',
        method: 'get',
        params
    })
}

export function start(id) {
    if (id == 1) {
        return request({
            url: '/MDStartService',
            method: 'get',
        })
    } else {
        return request({
            url: '/MEStartService',
            method: 'get',
        })
    }

}

export function stop(id) {
    if (id == 1) {
        return request({
            url: '/MDStopService',
            method: 'get',
        })
    } else {
        return request({
            url: '/MEStopService',
            method: 'get',
        })
    }
}


