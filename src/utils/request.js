import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'

Vue.use(iView)

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.withCredentials = true
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === -1) {
      iView.Message.warning('This is a warning tip')
    } else if (res.status === 1) {
      return res
    } else {
      if (res.code === '9000') {

      }
      return res
    }
  },
  error => {
    console.log('err' + error)// for debug

    return Promise.reject(error)
  }
)

export default service
