import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/trades',
    method: 'get',
    params
  })
}

export function delData(id) {
  return request({
    url: '/trade/' + id,
    method: 'delete',
  })
}

export function updateData(data) {
  return request({
    url: '/trade/' + data.id,
    method: 'put',
    data: data
  })
}

export function newData(data) {
  return request({
    url: '/trades',
    method: 'post',
    data: data
  })
}

