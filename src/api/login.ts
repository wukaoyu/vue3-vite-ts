import { request } from '@/utils/apiHelp'

// 登录
export async function login(data = {}) {
  return request({
    url:'/users/login',
    method:'POST',
    data: data
  })
}