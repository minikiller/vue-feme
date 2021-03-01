import request from '@/utils/request'
import jwt_decode from "jwt-decode";

export function login(data) {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  //解析token 
  var decoded = jwt_decode(token);
  return request({
    url: '/user/' + decoded.identity,
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
