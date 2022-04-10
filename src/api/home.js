// home页面的网络请求
import request from "@/utils/request"

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}