import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/trades',
    method: 'get',
    params
  })
}
