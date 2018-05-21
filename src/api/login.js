import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: '/login',
    method: 'post',
    data: userInfo
  })
}
