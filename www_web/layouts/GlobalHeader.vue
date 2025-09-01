<template>
    <div class="app-header">
        <div
            v-show="deviceSize=='large'"
            class="header pd360"
        >
            <div class="box">

                <!-- 导航菜单 -->
                <div class="left-box">
                    <el-menu
                        :default-active="activeIndex"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <template v-for="(item,idx) in navs">
                            <el-menu-item
                                :key="idx"
                                :index="item.type"
                                @mouseover.native="()=>{sub_menu = item.children||[];sub_menu_layout= item.layout}"
                            >
                                <template v-if="item.type=='index'">
                                    <nuxt-link :to="item.path">
                                        <img
                                            class="logo-icon"
                                            src="~/static/imgs/logo.png"
                                            alt="Logo"
                                        >
                                    </nuxt-link>
                                </template>
                                <template v-else>
                                    {{item.name}}
                                </template>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </div>
                <!-- 搜索切换语言 -->
                <div class="right-box">
                    <span class="icon-search-box">
                        <span
                            class="iconfont icon-search"
                            @click.stop="()=>{isShowSearch=!isShowSearch}"
                        ></span>
                        <el-input
                            v-show="isShowSearch"
                            placeholder="请输入关键字"
                            suffix-icon="el-icon-search"
                            v-model="keyword"
                            @change="openSearch"
                        >
                        </el-input>
                    </span>
                    <span class="try-btn"><nuxt-link to="/download">30秒，免费获得白皮书及试用</nuxt-link></span>
                    <span class="lang-box">
                        <span class="active">中文</span><span @click="jumpEn()">EN</span>
                    </span>
                </div>
            </div>

        </div>
        <div
            v-show="deviceSize!='large'"
            class="header"
        >
            <div class="pannel">
                <div class="left-box">
                    <nuxt-link
                        class="logo-box"
                        to="/index"
                    >
                        <img
                            class="logo-icon"
                            src="~/static/imgs/logo.png"
                            alt="Logo"
                        >
                    </nuxt-link>
                </div>
                <div class="right-box">
                    <div class="btns-div">
                        <span class="icon-search-box">
                            <span
                                class="iconfont icon-search"
                                @click.stop="()=>{isShowSearch=!isShowSearch}"
                            ></span>
                            <el-input
                                v-show="isShowSearch"
                                placeholder="请输入关键字"
                                suffix-icon="el-icon-search"
                                v-model="keyword"
                                @change="openSearch"
                            >
                            </el-input>
                        </span>
                        <span class="lang-box">
                            <span class="active">中文</span><span @click="jumpEn()">EN</span>
                        </span>
                        <span
                            class="menu-btn"
                            :class="openMenu?'on':''"
                            @click="()=>{openMenu=!openMenu}"
                        >
                            <i></i><i></i><i></i>
                        </span>
                    </div>
                    <div class="try-box" style="z-index:1">
                        <nuxt-link to="/download">30秒，免费获得白皮书及试用</nuxt-link>
                    </div>

                </div>
            </div>

            <menum-component
                :drawer="openMenu"
                :navs="navs"
            ></menum-component>

        </div>
        <!-- PC子菜单容器-->
        <div
            v-show="deviceSize=='large' && sub_menu && sub_menu.length"
            class="sub-container"
            @mouseleave="()=>{sub_menu = []}"
        >
            <menu-component
                :data_obj="sub_menu"
                :sub_menu_layout="sub_menu_layout"
            ></menu-component>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
import menuComponent from "./menu";
import menumComponent from "./menu-m";
export default {
    name: "GlobalHeader",
    components: { menuComponent, menumComponent },
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                // 如果路由变了， 需要关闭菜单展示
                this.sub_menu = [];
                this.openMenu = false;
            }
        }
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath)
            // 跳转页面的就不执行了
            if (
                key &&
                key.indexOf("jump") == -1 &&
                key.indexOf("click") == -1
            ) {
                // for (let i = 0; i < this.navs.length; i++) {
                //     const item = this.navs[i];
                //     if (i == key) {
                //         this.$router.push(item.path);
                //     }
                //     if (item.children) {
                //         for (let j = 0; j < item.children.length; j++) {
                //             const subitem = item.children[j];
                //             if (i + "" + j == key) {
                //                 this.$router.push(subitem.path);
                //             }
                //         }
                //     }
                // }
            } else {
            }
        },
        openSearch() {
            this.$router.push({
                path: "/search/" + this.keyword
            });
            this.keyword = "";
            this.isShowSearch = false;
        },
        getMenu() {
            Api.menu.get({}).then((res) => {
                // console.log(111, res);
                if (res.code == 1) {
                    let iot = [],
                        aiot = [];
                    for (let i = 0; i < res.data.length; i++) {
                        const item = res.data[i];
                        item.children = item.article;
                        item.children = item.children.filter((item, key) => {
                            item.img_url = item.image;
                            item.name = item.title;
                            item.path = "/product/iot/" + item.id;
                            if (item.is_show == 0) {
                                return false;
                            } else {
                                return true;
                            }
                        });

                        switch (item.id) {
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 89:
                                iot.push(item);
                                break;
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                                aiot.push(item);
                                break;

                            default:
                                break;
                        }
                    }
                    this.navs[1].children[1].children[0].children = iot;
                    this.navs[1].children[1].children[1].children = aiot;
                }
            });
            Api.industry.get({ cid: "11" }).then((res) => {
                if (res.code == 1) {
                    let arr = [];
                    for (let i = 0; i < res.data.lists.length; i++) {
                        const item = res.data.lists[i];
                        item.name = item.title;
                        item.path = "/industry/" + item.id;
                        arr.push(item);
                    }
                    this.navs[3].children = arr;
                }
            });
        },
        jumpEn() {
            window.open("https://en.wiwide.com/");
        }
    },
    created() {
        this.getMenu();
    },
    mounted() {},

    data() {
        return {
            keyword: "",
            isShowSearch: false,
            activeIndex: "0",
            navs: [
                {
                    name: "首页",
                    type: "index",
                    layout: "horizontal",
                    path: "/index",
                    children: null
                },
                {
                    name: "产品与服务",
                    type: "productAndService",
                    layout: "vertical",
                    path: "",
                    children: [
                        {
                            name: "产品全景图",
                            path: "/product/panorama"
                            // children:[
                            //     {
                            //         name:"产品全景图",
                            //         children:[]
                            //     }
                            // ]
                        },
                        {
                            name: "硬件",
                            children: [
                                {
                                    name: "商业IoT网络",
                                    children: [
                                        {
                                            name: "无线覆盖",
                                            children: [
                                                {
                                                    id: "1",
                                                    name: "WiSmart6",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211224/1640331832582202.png"
                                                },
                                                {
                                                    id: 2,
                                                    name: "WiSmart3e",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211224/1640331832582202.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "云宽带",
                                            children: [
                                                {
                                                    name: "WiRouter Mini",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640833887393647.png"
                                                },
                                                {
                                                    name: "WiRouter Rro",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640833944808471.png"
                                                },
                                                {
                                                    name: "边缘管理网关",
                                                    img_url:
                                                        "https://image.widash.wiwide.com/images//10909/20e5e09386c18aa594082ee9dddf97078.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "智能网关",
                                            children: [
                                                {
                                                    name: "WiMaster T",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640834040913417.png"
                                                },
                                                {
                                                    name: "WiMaster T3",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640834040913417.png"
                                                },
                                                {
                                                    name: "WiMaster G5005",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640834040913417.png"
                                                },
                                                {
                                                    name: "WiMaster X3s",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640834040913417.png"
                                                },
                                                {
                                                    name: "WiMaster X3s-G",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640834040913417.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "智能交换机",
                                            children: [
                                                {
                                                    name: "WiMaster T",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster T3",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster G5005",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster X3s WiMaster X3s",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster X3s-G",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster X3s-G",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                },
                                                {
                                                    name: "WiMaster X3s-G",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20220607/1654578611875014.png"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "商业场景感知",
                                    children: [
                                        {
                                            name: "客流传感器",
                                            children: [
                                                {
                                                    id: "1",
                                                    name: "Wimatrix",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211224/1640331768452032.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "客流摄像机",
                                            children: [
                                                {
                                                    id: "1",
                                                    name: "WiSight 2 Mini客流一体机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673316875159555.png",
                                                    path: ""
                                                },
                                                {
                                                    id: "2",
                                                    name: "WiPano Mini全景客流一体机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673316875159555.png",
                                                    path: ""
                                                },
                                                {
                                                    id: "3",
                                                    name: "筒形客流一体机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673316875159555.png",
                                                    path: ""
                                                }
                                            ]
                                        },
                                        {
                                            name: "巡店摄像机",
                                            children: [
                                                {
                                                    id: "1",
                                                    name: "WiSight海螺摄像机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673317376465075.png"
                                                },
                                                {
                                                    id: "2",
                                                    name: "WiSight半球摄像机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673317376465075.png"
                                                },
                                                {
                                                    id: "3",
                                                    name: "WiSight筒形摄像机",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20230110/1673317376465075.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "视频网关",
                                            children: [
                                                {
                                                    id: "1",
                                                    name: "SensorHub",
                                                    img_url:
                                                        "https://wiwide.com/static/upload/image/20211230/1640833536226419.png"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "SaaS",
                            children: [
                                {
                                    name: "SaaS平台",
                                    children: [
                                        {
                                            name: "平台",
                                            children: [
                                                {
                                                    name: "WiDash 迈大师",
                                                    path: "/introduce/widash"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "SaaS应用",
                                    children: [
                                        {
                                            name: "商业IoT应用",
                                            path: "/introduce/full-time",
                                            children: [
                                                {
                                                    name: "生产应用",
                                                    iconfont: "icon-a-lujing31",
                                                    path: "/introduce/full-time?active=1"
                                                },
                                                {
                                                    name: "顾客服务",
                                                    iconfont: "icon-a-lujing32",
                                                    path: "/introduce/full-time?active=2"
                                                },
                                                {
                                                    name: "运维应用",
                                                    iconfont: "icon-a-lujing29",
                                                    path: "/introduce/full-time?active=3"
                                                }
                                                
                                            ]
                                        },
                                        {
                                            name: "商业场景感知应用",
                                            path: "/introduce/scene",
                                            children: [
                                                {
                                                    name: "客流分析",
                                                    iconfont:
                                                        "icon-claim-icon19",
                                                    path: "/introduce/scene?active=1"
                                                },
                                                {
                                                    name: "云监控",
                                                    iconfont:
                                                        "icon-claim-icon16",
                                                    path: "/introduce/scene?active=2"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "服务",
                            type: "horizontal",
                            children: [
                                {
                                    name: "咨询服务",
                                    path: "/service/advisory",
                                    children: []
                                },
                                {
                                    name: "交付服务",
                                    path: "/service/delivery",
                                    children: []
                                },
                                {
                                    name: "运维服务",
                                    path: "/service/maintenance",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "解决方案",
                    type: "solution",
                    layout: "horizontal",
                    path: "",
                    children: [
                        {
                            name: "商业IoT",
                            type: "introduce",
                            path: "/introduce/iot",
                            children: [
                                {
                                    name: "全时段业务在线解决方案",
                                    type: "introduce",
                                    path: "/introduce/iot?active=1"
                                },
                                {
                                    name: "宽带及云宽带解决方案",
                                    type: "introduce",
                                    path: "/introduce/iot?active=2"
                                },
                                // {
                                //     name: "网络安全合规解决方案",
                                //     type: "introduce",
                                //     path: "/introduce/iot?active=3"
                                // }
                            ]
                        },
                        {
                            name: "商业场景感知",
                            type: "introduce",
                            path: "/introduce/perception",
                            children: [
                                {
                                    name: "购物中心客流解决方案",
                                    type: "introduce",
                                    path: "/introduce/perception?active=1"
                                },
                                {
                                    name: "连锁门店客流解决方案",
                                    type: "introduce",
                                    path: "/introduce/perception?active=2"
                                },
                                {
                                    name: "连锁云监控解决方案",
                                    type: "introduce",
                                    path: "/introduce/perception?active=3"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "行业实践",
                    type: "industryPractice",
                    layout: "horizontal",
                    path: "",
                    children: [
                        {
                            name: "餐饮行业",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "咖啡茶饮",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "美妆行业",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "珠宝行业",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "服装行业",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "超市便利",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "购物中心",
                            type: "industry",
                            path: "/industry"
                        },
                        {
                            name: "机场",
                            type: "industry",
                            path: "/industry"
                        }
                    ]
                },
                {
                    name: "关于迈外迪",
                    layout: "horizontal",
                    type: "about",
                    path: "",
                    children: [
                        {
                            name: "关于我们",
                            type: "about_us",
                            path: "/about"
                        },
                        {
                            name: "企业资讯",
                            type: "enterprise",
                            path: "/enterprise"
                        },
                        {
                            name: "联系我们",
                            type: "contact_us",
                            path: "/contact"
                        }
                    ]
                }
            ],
            sub_menu: null,
            sub_menu_layout: "horizontal",
            openMenu: false
        };
    }
};
</script>
<style lang="scss" scoped>
.app-header {
    .pd360 {
        // padding: 0 360px;
        // padding: 0 18.75%;
    }
    &::after {
        content: "";
        display: block;
        height: 70px;
    }
    .header {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: $bg-color-fff;
        border-bottom: 1px solid #abb9b4;
        // box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        .box {
            max-width: 1200px;
            min-width: 900px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
        }
        .left-box {
            display: flex;
            .logo-icon {
                height: 50px;
                position: relative;
                top: -3px;
            }
        }
        .right-box {
            display: flex;
            align-items: center;
            .icon-search-box {
                cursor: pointer;
                font-size: 20px;
                color: #9499a4;
                display: inline-block;
                position: relative;
                .el-input {
                    position: absolute;
                    width: 220px;
                    top: 32px;
                    left: -181px;
                }
            }
            .try-btn {
                display: inline-block;
                width: 246px;
                height: 40px;
                line-height: 40px;
                color: #fff;
                font-size: 16px;
                border-radius: 48px;
                background-color: $main-color;
                text-align: center;
                cursor: pointer;
                margin-left: 16px;
                margin-right: 20px;
            }
            .lang-box {
                display: inline-block;
                color: $placeholder-color;
                font-size: 16px;
                > span {
                    padding: 0 10px;
                    cursor: pointer;
                    &:first-child {
                        border-right: 1.5px solid #d3dcd4;
                    }
                    &.active {
                        color: $font-high-color;
                    }
                }
            }
        }
        .content {
            position: relative;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            width: 100%;

            .nav-box {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                .el-menu.el-menu--horizontal {
                    border: none;
                }

                .el-menu--horizontal > .el-menu-item {
                    font-size: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #333333ff;
                    height: 60px;
                    position: relative;
                    transition: all ease 0.5s;
                    -webkit-transition: all ease 0.5s;
                    -moz-transition: all ease 0.5s;
                    -o-transition: all ease 0.5s;
                    -ms-transition: all ease 0.5s;
                }
            }
        }
    }
    .sub-container {
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        position: fixed;
        padding-left: 18.75%;
        padding-right: 18.75%;
        left: 0;
        top: 70px;
        // width: calc(100% - 37.5%);
        z-index: 666;
        background: #fff;
        color: $font-high-color;
        box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.2);
    }
}
@media screen and (min-width: 1440px) and (max-width: 1920px) {
    .app-header {
        .header {
            .box {
                width: calc(100% - 29%);
            }
        }
    }
}
@include notPc {
    .app-header {
        &::after {
            content: "";
            display: block;
            height: 90px;
        }
        .header {
            border: none;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
            flex-direction: column;
            // padding-bottom: vw(20);
            height: auto;
            .pannel {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .left-box {
                    .logo-box {
                        display: inline-flex;
                        align-items: center;
                        margin-left: 20px;
                    }
                    .logo-icon {
                        width: vw(230);
                        height: auto;
                    }
                }
                .right-box {
                    flex-direction: column;
                    > div {
                        display: flex;
                    }
                    .btns-div {
                        margin-top: 10px;
                        .icon-search-box {
                            top: -4px;
                        }
                    }
                    .lang-box {
                        font-size: vw(30);
                    }
                    .menu-btn {
                        display: block;
                        position: relative;
                        width: 30px;
                        height: 30px;
                        margin: 0 20px;
                        i {
                            position: absolute;
                            width: 100%;
                            height: 2px;
                            background: #666;
                            left: 0;
                            top: 50%;
                            margin-top: -1px;
                            transition: 0.3s;
                        }
                        &:not(.on) i:nth-child(1) {
                            margin-top: -10px;
                        }
                        &:not(.on) i:nth-child(3) {
                            margin-top: 8px;
                        }
                        &.on {
                            i {
                                &:nth-child(2) {
                                    opacity: 0;
                                }
                                &:nth-child(1) {
                                    transform: rotate(-45deg);
                                }
                                &:nth-child(3) {
                                    transform: rotate(45deg);
                                }
                            }
                        }
                    }
                    .try-box {
                        position: relative;
                        z-index: -1;
                        // left: vw(328);
                        width: vw(350);
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        border-radius: vw(48) 0px 0px vw(48);
                        background: #45b871;
                        color: #fff;
                        font-size: vw(20);
                        justify-content: center;
                        margin: 10px 0;
                    }
                }
            }
        }
    }
}
/** IPAD */
@include pad {
    .app-header {
        .header {
            .pannel {
                .left-box {
                    .logo-icon {
                        max-width: 20vw;
                    }
                }
            }
        }
    }
}
/** phone */
@include phone {
}
</style>
<style lang="scss">
.header {
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-menu--horizontal > .el-menu-item {
        height: 68px;
        line-height: 70px;
        font-size: 16px;
        color: $font-high-color;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: 2px solid transparent;
    }
}
</style>