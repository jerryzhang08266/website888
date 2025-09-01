import {
  Message
} from 'element-ui' // element-ui的消息提示
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据
export default function ({
  store,
  redirect,
  req,
  app: {
    $axios,
    $cookiz
  }
}) {
  // 基本配置
  // $axios.defaults.baseURL = process.env.baseUrl
  $axios.defaults.timeout = 10000
  if (process.server) {
    $axios.setBaseURL(process.env.baseUrl)
  }
  // 请求回调
  $axios.onRequest((config) => {
    if (store.state.token) {
      config.headers['Http-Token'] = store.state.token
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = qs.stringify(config.data, {
      allowDots: true
    })
    return config
  })

  // 返回回调
  $axios.onResponse((resp) => {
    // console.log(resp, '========================')
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
  })

  // 错误回调
  $axios.onError((error) => {
    // console.log(error, '--------------------------')
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
     
    }
  })
}
