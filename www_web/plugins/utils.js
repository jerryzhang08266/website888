function createStateCode () {
  let code = ''
  const codeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  const length = 4
  for (let i = 0; i < length; i++) {
    const randomI = Math.floor(Math.random() * 35)
    code += codeArr[randomI]
  }
  return code
}

function isEmpty (val) {
  // null or undefined
  if (val == null) { return true }

  if (typeof val === 'boolean') { return false }

  if (typeof val === 'number') { return !val }

  if (val instanceof Error) { return val.message === '' }

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
};

const emailValidator = (rule, value, callback) => {
  const patrn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (value === '') {
    callback(new Error(`请输入${rule.label}`))
  } else if (!patrn.exec(value)) {
    callback(new Error('邮箱格式有误'))
  } else {
    callback()
  }
}
const mobileValidator = (rule, value, callback) => {
  if (value === '') {
    callback(new Error(`请输入${rule.label}`))
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    callback(new Error('输入手机号有误'))
  } else {
    callback()
  }
}
const requiredValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback(new Error(`请输入${rule.label}`))
  } else {
    callback()
  }
}
const urlValidator = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback()
  } else {
    const strRegex =
      '^((https|http|ftp|rtsp|mms){1}://)' +
      "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + // ftp的user@
      '(([0-9]{1,3}.){3}[0-9]{1,3}' + // IP形式的URL- 199.194.52.184
      '|' + // 允许IP和DOMAIN（域名）
      "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
      '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' + // 二级域名
      '[a-z]{2,6})' + // first level domain- .com or .museum
      '(:[0-9]{1,4})?' // 端口- :80
    // '((/?)|' + // a slash isn't required if there is no file name
    // "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    const reg = new RegExp(strRegex)
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的以http或https开头的地址'))
    }
  }
}

function dateFormat (fmt, date) {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

function addItem (a, b) {
  return a.filter(function (i) {
    return !b.includes(i)
  })
}

function deleteItem (a, b) {
  return b.filter(function (i) {
    return !a.includes(i)
  })
}

function sameItem (a, b) {
  return a.filter(function (i) {
    return b.includes(i)
  })
}

function deepClone (obj) {
  // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  const objClone = Array.isArray(obj) ? [] : {}
  // 进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

function downloadFile (url, name) {
  const request = new XMLHttpRequest()
  request.responseType = 'blob'
  request.open('GET', url)
  request.onload = function () {
    const url = window.URL.createObjectURL(this.response)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = name
    a.click()
  }
  request.send()
}
function dataSync (token, days) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = "https://www.newconsumerd.com/SET_USER.html"
  document.body.appendChild(iframe)
  const win = iframe.contentWindow
  setTimeout(() => {
    win.postMessage({ token, days }, '*')
  }, 500)
  setTimeout(() => {
    iframe.remove()
  }, 2000)
}
export default {
  createStateCode,
  isEmpty,
  emailValidator,
  mobileValidator,
  requiredValidator,
  urlValidator,
  dateFormat,
  addItem,
  deleteItem,
  sameItem,
  deepClone,
  downloadFile,
  dataSync
}
