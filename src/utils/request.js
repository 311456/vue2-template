// 请求封装
import axios from "axios";
import { Message } from 'element-ui'

const BASE_URL = "http://hhhh"

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  //! 请求头携带token的操作
  return config
},
  error => {
    // 对于请求的错误的相关处理
    console.log(error);
    return Promise.reject(error)
  })

// 响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    Message({
      message: res.message || "发生错误！",
      type: "error",
      duration: 5 * 1000
    })
    //! 响应错误码的处理：比如token过期
  } else {
    return res
  }
}, error => {
  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service