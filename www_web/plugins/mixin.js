import Vue  from 'vue'
// 混入方法
Vue.mixin({
  methods: {
    $seo(title, meta, payload = []) {
      return  {
        title,
        meta:[
          {
            hid: 'description',
            name: 'description',
            content: meta.description
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: meta.keywords
          }
      ].concat(payload)
      }
    }
  }
})