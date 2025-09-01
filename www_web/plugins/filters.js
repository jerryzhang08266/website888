import Vue  from 'vue'
const dfilters = {
    /** 
     * 时间戳格式化函数 
     * @param  {string} format    格式 
     * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
     * @return {string}           格式化的时间字符串 
     */
    formatTime(date,fmt){
        try{
            date = new Date(date*1000);
        }catch(e){
            date = date;
        }
        if (date == null)
          return null;
          
        fmt = fmt ? fmt:'yyyy-MM-dd';
        const weeks = {
          '0':'星期日',
          '1':'星期一',
          '2':'星期二',
          '3':'星期三',
          '4':'星期四',
          '5':'星期五',
          '6':'星期六'
        }
        var o = {
          "M+": date.getMonth() + 1, //月份 
          "d+": date.getDate(), //日 
          "H+": date.getHours(), //小时 
          "m+": date.getMinutes(), //分
          "s+": date.getSeconds(), //秒 
          "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
          "w+": weeks[date.getDay()],//星期几
          "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    
}

Object.keys(dfilters).forEach(key => Vue.filter(key, dfilters[key]))