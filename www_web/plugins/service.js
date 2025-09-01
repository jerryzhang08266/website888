import axios from 'axios'
import Cookie from 'cookie-universal'
import Vue from 'vue' // 获取vue实例
import store from 'vuex'
import {
  Message,
  Notification
} from 'element-ui'
const $cookiz = Cookie()
const vm = new Vue({}) // element-ui的消息提示

const startLoading = () => {
  if (process.browser) { // 判断是否为客户端（必须）
    vm.$loading()
  }
}
const endLoading = () => {
  if (process.browser) { // 判断是否为客户端（必须）
    const load = vm.$loading()
    load.close()
  }
}

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 120000
if (process.server) {
  axios.defaults.baseURL = process.env.baseUrl
}
const service = axios.create()
// 请求拦截 可在请求头中加入token等
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use((resp) => {
  // endLoading();
  if (resp.data) {
    if (resp.data.code === 0) {
      Message({
        type: 'error',
        message: resp.data.msg,
        duration: 2000
      })
    }
    return {
      code: resp.data.code,
      data: resp.data.data,
      msg: resp.data.msg
    }
  } else {
    return resp
  }
}, (error) => {
  if (error.response) {
    // endLoading();
    switch (error.response.status) {
      case 401: {
        break
      }
    }
    return {
      code: error.response.status,
      data: {},
      msg: 'error'
    }
  }
})
export default service
