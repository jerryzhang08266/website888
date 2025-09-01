import service from '@/plugins/service'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据

class BasicService {
    constructor(url, link) {
        this.url = url
    }

    post (params) {
        return service({
            method: 'post',
            url: this.url,
            data: qs.stringify(params)
        })
    }

    postJson (params) {
        return service({
            method: 'post',
            url: this.url,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            data: params
        })
    }

    get (params) {
        return service({
            method: 'get',
            url: this.url,
            params
        })
    }

    upload (params) {
        return service({
            method: 'post',
            url: this.url,
            data: params,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        })
    }

    uploadProgress (params, vm) {
        return service({
            method: 'post',
            url: this.url,
            data: params,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            },
            onUploadProgress: (progressEvent) => {
                const complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                vm.uploadRate = complete
            }
        })
    }
}

const base = {
    menu: '/api/pc/infoCenter', //菜单
    indexImg: '/api/article/lists', //主页img
    productDetail: '/api/pc/articleDetail', //产品详情
    product: '/api/article/lists', //产品
    industry: '/api/article/lists', //行业实践
    industryDetail: '/api/pc/articleDetail', //行业实践详情
    free_start: '/api/article/addtel',//30秒，免费获取白皮书及产品试用
    download: '/api/article/adddownload', //下载中心
    news: '/api/article/lists', //新闻资讯
    keyword: '/api/article/lists', //搜索结果
    beian: '/api/pc/config', //备案信息
    userCases: '/api/article/lists', //客户案例
    getverify: '/api/article/getverify' //获取验证码
}
const menu = new BasicService(base.menu);
const indexImg = new BasicService(base.indexImg);
const productDetail = new BasicService(base.productDetail);
const product = new BasicService(base.product);
const industry = new BasicService(base.industry);
const industryDetail = new BasicService(base.industryDetail);
const free_start = new BasicService(base.free_start);
const download = new BasicService(base.download);
const news = new BasicService(base.news);
const keyword = new BasicService(base.keyword);
const beian = new BasicService(base.beian);
const userCases = new BasicService(base.userCases);
const getverify = new BasicService(base.getverify);


export default {
    /* 特殊请求 需要拼接参数的*/
    BasicService,
    /* 公共部分 */
    menu,
    indexImg,
    productDetail,
    product,
    industry,
    industryDetail,
    free_start,
    download,
    news,
    keyword,
    beian,
    userCases,
    getverify
}
