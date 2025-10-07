const BASE_URL = '/'
export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    ssr: false,
    // Global page headers: https://go.nuxtjs.dev/config-head
    router: {
        base: BASE_URL,
        // middleware: 'routeActive',
        // scrollBehavior (to, from, savedPosition) {
        //     return {
        //         x: 0,
        //         y: 0
        //     }
        // },
        //扩展路由
        extendRoutes (routes, resolve) {
            routes.push({
                name: 'root',
                path: '/index',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    head: {
        title: 'WiWide 迈外迪',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: process.env.npm_description || '迈外迪是中国领先的智能商业解决方案提供商。商业扩张，科技驱动——迈外迪致力于通过物联网、人工智能、大数据、云计算、信息安全等数智化技术在线下商业场景的应用，推动中国线下商业场景变革，成为客户数字化转型、规模化扩张的最可信赖的合作伙伴。' },
            { hid: 'keywords', name: 'keywords', content: '迈外迪、wiwide、物联网' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            //   {
            //     src: 'https://hm.baidu.com/hm.js?a7bdd4aad4c605f6e9ca971067682c04888'
            //   },
            //   {
            //     src: 'https://www.morketing.com/js/qrcode.min.js'
            //   }
        ]
    },
    env: {
        copyright: 'Copyright©2007-2023 WiWide Inc 沪ICP备08023648号-1 沪公网安备31010402000932号',
        baseUrl: '', // 后端接口地址
        testUrl: '', // 测试地址
        appid: '', // 微信授权appid 
        redirectUrl: '' // 微信授权返回地址
    },
    /*
      ** Customize the progress-bar color
    */
    loading: {
        color: '#45B871'
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/css/global.css',
        'assets/css/animate.min.css',
        'assets/css/text-overflow-fix.css', // 文字溢出修复样式
        'element-ui/lib/theme-chalk/index.css',
        'element-ui/lib/theme-chalk/display.css',
        '@/static/font/iconfont.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/element-ui',
            ssr: true,
        },
        '@/plugins/axios',
        '@/plugins/filters',
        '@/plugins/mixin',
        { src: '@/plugins/storage', mode: 'client' },
        { src: '@/plugins/text-overflow-fix', mode: 'client' } // 文字溢出修复插件
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        [
            'cookie-universal-nuxt',
            {
                alias: 'cookiz'
            }
        ]
    ],
    styleResources: { // 需要添加这个 用来配置全局
        scss: [
            './assets/scss/variables.scss'
        ]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true // 表示开启代理
    },
    proxy: {
        '/api': 'http://www-admin.wiwide.net'
        // '/api': 'https://webatt.wiwide.com'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
        // babel: {
        //   // 按需加载
        //   plugins: [
        //     [
        //       'component',
        //       {
        //         libraryName: 'element-ui',
        //         styleLibraryName: '~theme'
        //       }
        //     ]
        //   ]
        // }
    },
    //端口可以自定义，主要要跟nginx配置的代理端口保持一致
    server: {
        port: 3001,
        host: '0.0.0.0',
        timing: false
    },
}
