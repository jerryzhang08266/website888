// index.js
import Vue from 'vue' // 引入 Vue
import Main from './Main.vue' // 引入toast 组件

const ToastConstructor = Vue.extend(Main) // 这个在前面的前置知识内容里面有讲到
let instance

const Toast = function (options = {}) {
  instance = new ToastConstructor({
    data: options
  }) // 这里的 data 会传到 main.vue 组件中的 data 中，当然也可以写在 props 里
  document.body.appendChild(instance.$mount().$el) // 挂载到 body 下
}
  ;['success', 'error'].forEach((type) => {
    Toast[type] = (options) => {
      options.type = type
      return Toast(options)
    }
  })
export default Toast
