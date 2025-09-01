<!--
 * @Description: 商业IOT介绍页
 * @FilePath: pages\introduce\iot.vue
-->
<template>
    <div class="container">
        <rect-card
            v-if="deviceSize=='large'"
            top="570px"
            left="-6%"
        ></rect-card>
        <!-- 右边背景 -->
        <right-bg v-if="deviceSize=='large'"></right-bg>
        <section class="pannel1">
            <div>
                <!-- 左边介绍 -->
                <div class="txt-intro">
                    <div class="title-box">商业IoT应用</div>
                </div>
                <!-- 右边 -->
                <div class="img-box">
                    <div class="box"></div>
                    <i class="iconfont icon-zhijiao triangle1"></i>
                    <i class="iconfont icon-zhijiao triangle2"></i>
                    <i class="iconfont icon-zhijiao triangle3"></i>
                </div>
                <div
                    class="bg-div"
                    v-if="deviceSize!='large'"
                >
                    <div class="bg-top"></div>
                    <img
                        src="~/static/imgs/full-time.png"
                        alt=""
                    >
                    <i class="iconfont icon-zhijiao triangle1"></i>
                    <i class="iconfont icon-zhijiao triangle2"></i>
                    <i class="iconfont icon-zhijiao triangle3"></i>
                </div>
            </div>
        </section>
        <section class="pannel2">
            <div class="nav-box">
                <div
                    :class="cur_nav_id==item.id?'active':''"
                    v-for="(item,idx) in nav_data"
                    :key="idx"
                    @click="()=>{cur_nav_id=item.id;cur_nav=item;}"
                >
                    <i
                        class="iconfont"
                        :class="item.iconfont"
                    ></i>
                    {{item.name}}
                </div>
            </div>
            <div class="desc-box">
                <div
                    class="sub-nav-box"
                    v-if="cur_nav.sub && cur_nav.sub.length"
                >
                    <div
                        class="sub-nav-item"
                        :class="cur_nav.sub.length==2?'line':''"
                        v-for="(subitem,idx) in cur_nav.sub"
                        :key="idx"
                    >
                        <i
                            class="iconfont"
                            :class="subitem.iconfont"
                        ></i>
                        {{subitem.name}}
                    </div>
                </div>
                <div class="title-box">{{cur_nav.title}}</div>
                <div class="desc-pannel">
                    <div>
                        <p><i class="iconfont icon-shangyinhao"></i></p>
                        <div>{{cur_nav.desc}}</div>
                        <p class="txt-right"><i class="iconfont icon-xiayinhao"></i></p>
                    </div>

                </div>
            </div>
        </section>
        <section class="pannel3">
            <div class="title-box">应用价值</div>
            <div class="pannel-box">
                <el-row :gutter="0">
                    <el-col
                        :span="8"
                        v-for="(item,idx) in cur_nav.app_value"
                        :key="idx"
                    >
                        <div class="grid-content">
                            <i
                                class="iconfont icon-box"
                                :class="item.iconfont"
                            ></i>
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 半圆 -->
            <div class="half-round"></div>
        </section>
        <section class="pannel4">
            <div class="title-box">应用界面</div>
            <div class="bg-box"></div>
            <div class="img-box">
                <!-- <div class="big-bg">
                    <img
                        :src="cur_nav.app_url[0]"
                        alt=""
                    >
                </div>
                <div class="small-bg">
                    <img
                        :src="cur_nav.app_url[1]"
                        alt=""
                    >
                </div> -->
                <img
                    :src="cur_nav.app_url[2]"
                    alt=""
                >
            </div>
        </section>

    </div>
</template>
<script>
import { mapState } from "vuex";
import rectCard from "~/components/rect-card";
import squareCard from "~/components/square-card";
import rightBg from "~/components/right-bg";
import roundCard from "~/components/round-card";
export default {
    components: {
        rectCard,
        squareCard,
        rightBg,
        roundCard
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    watch: {
        //监听路由地址的改变
        $route: {
            immediate: true,
            handler() {
                console.log("路由");
                if (this.$route.query.active && this.$route.query.active < 6) {
                    this.cur_nav = this.nav_data[this.$route.query.active - 1];
                    this.cur_nav_id = this.cur_nav.id;
                } else {
                    this.cur_nav_id = 1;
                    this.cur_nav = this.nav_data[0];
                }
            }
        }
    },
    async asyncData({ params }) {
        // console.log("params", params);
    },
    created() {},
    mounted() {},
    methods: {},
    data() {
        return {
            cur_nav_id: 1,
            cur_nav: {
                app_url: [
                    require("~/static/imgs/Desktop.png"),
                    require("~/static/imgs/Laptop.png"),
                    require("~/static/imgs/yingxiao-bg.png")
                ]
            },
            nav_data: [
                {
                    id: 1,
                    iconfont: "icon-a-lujing31",
                    name: "营销",
                    sub: [
                        {
                            iconfont: "icon-dingzhi",
                            name: "自助Wi-Fi门户"
                        },
                        {
                            iconfont: "icon-a-jianqudingceng21",
                            name: "云会员服务"
                        }
                    ],
                    title: "应用描述",
                    desc: "自定义认证页面和商家主页，用户首次登录网络时，可显示自定义认证页面；用户联网后的页面，可展示商家信息，配置各类营销应用。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330889840403",
                            title: "自定义页面配置",
                            desc: "认证页面支持背景图、轮播图多组合自定义界面配置，满足客户个性化需求。"
                        },
                        {
                            iconfont: "icon-a-1640330714274953",
                            title: "认证方式多样化",
                            desc: "支持手机号、账号、小程序、抖音等多重认证方式。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "品牌推广高效",
                            desc: "支持H5界面、小程序、图片、自定义商家主页跳转方式，全方面满足客户的品牌宣传需求。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop.png"),
                        require("~/static/imgs/Laptop.png"),
                        require("~/static/imgs/yingxiao-bg.png")
                    ]
                },
                {
                    id: 2,
                    iconfont: "icon-a-lujing32",
                    name: "数据",
                    sub: [
                        {
                            iconfont: "icon-Commercial-icon3",
                            name: "流量助手"
                        }
                    ],
                    title: "应用描述",
                    desc: "统计商家各场所的Wi-Fi流量，包含‘日、周、月’的带宽使用情况，展示各时段的流量排名及各个场所的流量使用排名。",
                    app_value: [
                        {
                            iconfont: "icon-a-16403307628451041",
                            title: "",
                            desc: "助力商家及时了解场所内各业务的带宽使用率，对场所的带宽资源进行合理分配，控制带宽预算支出。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop2.png"),
                        require("~/static/imgs/Laptop2.png"),
                        require("~/static/imgs/shuju-bg.png")
                    ]
                },
                {
                    id: 3,
                    iconfont: "icon-a-lujing29",
                    name: "SD-WAN",
                    sub: [
                        {
                            iconfont: "icon-Commercial-icon5",
                            name: "SD - WAN"
                        }
                    ],
                    title: "应用描述",
                    desc: "SD-WAN是将SDN技术应用到企业广域互联场景中的一种网络服务，从应用场景角度而言，SD-WAN是企业WAN互联方案的演进，侧重于企业分支互联的智能化和服务化，从而简化网络部署复杂度和提高网络带宽的利用率。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330808616142",
                            title: "",
                            desc: "通过零配置等方式，实现分支的快速部署和上线，提高部署效率。"
                        },
                        {
                            iconfont: "icon-a-1640330800571408",
                            title: "",
                            desc: "基于不同的应用类型，动态调整流量的路径，实现灵活便捷的调度方式。"
                        },
                        {
                            iconfont: "icon-a-1640330791329161",
                            title: "",
                            desc: "集中管控，全网状态可视化，提供自动化、智能化运维能力。"
                        },
                        {
                            iconfont: "icon-a-1640330782227960",
                            title: "",
                            desc: "提供广域优化、安全等增值业务，实现业务快速发放。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop3.png"),
                        require("~/static/imgs/Laptop3.png"),
                        require("~/static/imgs/sdwan-bg.png")
                    ]
                },
                {
                    id: 4,
                    iconfont: "icon-a-lujing30",
                    name: "安全",
                    sub: [
                        {
                            iconfont: "icon-a-1640928981773733",
                            name: "联网终端管理"
                        }
                    ],
                    title: "应用描述",
                    desc: "将场所中连入基础网络的终端，根据类别进行分组管理，同时基于MAC地址进行过滤、限速的管理，保障终端接入的安全，及合理的带宽利用。",
                    app_value: [
                        {
                            iconfont: "icon-a-16403308277436751",
                            title: "",
                            desc: "为商家建立各个场所中生产终端的统计和管理平台，实现各个场所接入终端的合规、安全，保障场所基础网络的稳定性、可靠性和安全性。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop4.png"),
                        require("~/static/imgs/Laptop4.png"),
                        require("~/static/imgs/anquan-bg.png")
                    ]
                },
                {
                    id: 5,
                    iconfont: "icon-trans",
                    name: "传输",
                    sub: [
                        {
                            iconfont: "icon-Commercial-icon7",
                            name: "检测助手"
                        }
                    ],
                    title: "应用描述",
                    desc: "针对场所设备的‘连通性、网速、自检’3个纬度进行单项或者组合项的健康检查，了解场所基础网络设备运行的状况。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330851712246",
                            title: "",
                            desc: "在线远程检测场所内基础网络设备的运行状况，减少人力成本，提高网络运维效率。"
                        },
                        {
                            iconfont: "icon-a-1640330842950859",
                            title: "",
                            desc: "定期巡查，提前预知网络问题，及时进行系统维护，排除系统隐患，为业务护航。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop5.png"),
                        require("~/static/imgs/Laptop5.png"),
                        require("~/static/imgs/chuanshu-bg.png")
                    ]
                }
            ],
            activeName: "1"
        };
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    overflow: hidden;
    .pannel1 {
        height: 690px;
        width: 100%;
        position: relative;
        > div {
            // width: 63.54vw;
            width: 1167px;
            height: inherit;
            margin: 0 auto;
            display: flex;
        }
        .img-box {
            padding-top: 40px;
            position: relative;
            z-index: 8;
            // width: 55%;
            width: 641px;
            height: inherit;
            height: 690px;
            .box {
                // width: 26.45vw;
                // padding-top: 32.6vw;
                width: 488px;
                height: 602px;
                border-radius: 0px 100px 0px 100px;
                overflow: hidden;
                background: url("~/static/imgs/full-time.png") no-repeat center
                    center;
            }

            i {
                position: absolute;
                color: $main-color;
                font-size: 40px;
                &.triangle1 {
                    top: 349px;
                    left: -40px;
                    transform: rotate(270deg);
                }
                &.triangle2 {
                    top: 70px;
                    right: 18%;
                    transform: rotate(180deg);
                }
                &.triangle3 {
                    font-size: 72px;
                    bottom: 100px;
                    right: 18%;
                    transform: rotate(180deg);
                }
            }
        }
        .txt-intro {
            // width: 45%;
            width: 525px;
            .title-box {
                font-size: 60px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 80px;
                color: $font-high-color;
                padding-top: 170px;
            }
            .sub-title {
                font-size: 20px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 20px;
                color: $font-main-color;
                margin-top: 25px;
            }
            .txt-box {
                font-size: 16px;
                font-weight: normal;
                line-height: 20px;
                color: $font-main-color;
                margin-top: 30px;
                width: 80%;
            }
            .down-btn {
                width: 208px;
                height: 48px;
                line-height: 48px;
                border-radius: 48px;
                background-color: $main-color;
                color: #fff;
                text-align: center;
                margin-top: 90px;
            }
        }
    }
    .pannel2 {
        // width: 63.54%;
        width: 1167px;
        margin: 0 auto;
        margin-top: 50px;
        .nav-box {
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            line-height: 70px;
            border-radius: 35px;
            background: $sub-color;
            font-size: 20px;
            color: $font-main-color;
            > div {
                cursor: pointer;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                &.active {
                    height: 60px;
                    border-radius: 30px;
                    color: #fff;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    background: $font-high-color;
                }
                i {
                    font-size: 28px;
                    margin-right: 20px;
                }
            }
        }
        .desc-box {
            width: 100%;
            .sub-nav-box {
                margin-top: 50px;
                @include displayCenter;
                .sub-nav-item {
                    font-size: 20px;
                    // font-weight: bold;
                    line-height: 20px;
                    // color: $font-high-color;
                    color: $font-main-color;
                    i {
                        font-size: 22px;
                        margin-right: 10px;
                        color: $font-high-color;
                    }
                    &.line {
                        &:last-child::before {
                            padding: 0 50px;
                            color: #abb9b4;
                            font-weight: normal;
                            content: "|";
                        }
                    }

                    &:last-child {
                        font-weight: normal;
                        color: $font-main-color;
                        i {
                            font-size: 20px;
                            font-weight: normal;
                            color: $font-main-color;
                        }
                    }
                }
            }
            .title-box {
                padding: 100px 0 60px 0;
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                text-align: center;
                color: $font-high-color;
            }
            .desc-pannel {
                width: 100%;
                height: 340px;
                background: url("~/static/imgs/line-bg2.png") no-repeat center
                    center;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;

                > div {
                    width: 73%;
                    height: auto;
                    margin: 0 auto;
                    > div {
                        padding: 0 40px;
                        font-size: 28px;
                        font-weight: normal;
                        line-height: 46px;
                        color: #fff;
                    }
                    p {
                        color: #fff;
                        &.txt-right {
                            text-align: right;
                        }
                        i {
                            color: #fff;
                            font-size: 43px;
                        }
                    }
                }
            }
        }
    }
    .pannel3 {
        position: relative;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 80px 0 100px 0;
            color: $font-high-color;
        }
        .pannel-box {
            display: flex;
            width: 63.54%;
            min-height: 188px;
            margin: 0 auto;
            .el-row {
                width: 100%;
                .el-col {
                    margin-bottom: 40px;
                }
            }
            .grid-content {
                .icon-box {
                    display: block;
                    font-size: 40px;
                    color: $main-color;
                }
                h3 {
                    font-size: 22px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 32px;
                    color: $font-high-color;
                    margin: 8px 0 20px 0;
                }
                p {
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 28px;
                    color: $font-main-color;
                    width: 280px;
                }
            }
        }
        .half-round {
            position: absolute;
            top: 230px;
            right: -205px;
            width: 395px;
            height: 393px;
            transform: rotate(180deg);
            border-radius: 50%;
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
    }
    .pannel4 {
        margin-top: 110px;
        height: auto;
        position: relative;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 0 0 100px 0;
            color: $font-high-color;
        }
        .bg-box {
            height: 550px;
            width: 100%;
            background: $sub-color url("~/static/imgs/jiemian.png") no-repeat
                center center;
        }
        .img-box {
            height: 300px;
            position: absolute;
            width: 100%;
            top: 120px;
            img {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -50px;
            }
            .big-bg {
                position: absolute;
                left: 21.45%;
                top: -50px;
                width: 739px;
                height: 587px;
                z-index: 3;
                img {
                    width: 95%;
                }
            }
            .small-bg {
                position: absolute;
                left: 41.35%;
                top: 120px;
                z-index: 4;
                width: 714px;
                height: 382px;
                img {
                    width: 95%;
                    margin: 0 auto;
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(882);
            overflow: hidden;
            > div {
                width: 100%;
                .txt-intro {
                    padding-left: 0;
                    width: 100%;
                    padding: 0 vw(79);
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    .title-box {
                        font-size: vw(56);
                        line-height: vw(60);
                        padding-top: vw(70);
                    }
                    .sub-title {
                        font-size: vw(26);
                        line-height: vw(39);
                        margin-top: vw(30);
                    }
                    .txt-box {
                        width: 100%;
                        font-size: vw(22);
                        line-height: vw(33);
                        margin-top: vw(30);
                        text-align: left;
                    }
                    .down-btn {
                        width: vw(236);
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(48);
                        font-size: vw(26);
                        margin: 0 auto;
                        margin-top: vw(30);
                    }
                }
                .img-box {
                    display: none;
                }
            }

            .bg-div {
                width: 100%;
                height: inherit;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                .bg-top {
                    position: absolute;
                    width: vw(981);
                    height: vw(760);
                    left: vw(50);
                    background: url("~/static/imgs/right-m.png") no-repeat
                        center center;
                    background-size: 100%;
                }
                img {
                    width: vw(510);
                    height: vw(546);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    top: vw(256);
                    transform: translateX(-50%);
                    border-radius: 0px vw(100) 0px vw(100);
                }
                i {
                    position: absolute;
                    z-index: 4;
                    color: $main-color;
                    font-size: vw(42);
                    &.triangle1 {
                        font-size: vw(54);
                        top: vw(282);
                        left: vw(94);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(689);
                        left: vw(99);
                        transform: rotate(270deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(493);
                        right: vw(82);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel2 {
            width: 100%;
            padding: 0;
            margin-bottom: vw(0);
            margin-top: 0;
            .nav-box {
                display: block;
                padding: 0 vw(40);
                height: vw(74);
                line-height: vw(74);
                border-radius: vw(10);
                font-size: vw(24);
                white-space: nowrap;
                overflow-x: auto;
                overflow-y: hidden;
                background: #fff;
                &::-webkit-scrollbar {
                    display: none;
                }
                > div {
                    background: $sub-color;
                    margin-right: vw(20);
                    display: inline-flex;
                    text-align: center;
                    padding: 0 vw(20);
                    border-radius: vw(10);
                    &.active {
                        height: vw(74);
                        line-height: vw(74);
                        border-radius: vw(10);
                    }
                    i {
                        font-size: vw(28);
                        margin-right: vw(20);
                    }
                }
            }
            .desc-box {
                .sub-nav-box {
                    margin-top: vw(40);
                    justify-content: flex-start;
                    padding: 0 vw(40);
                    .sub-nav-item {
                        font-size: vw(22);
                        line-height: vw(22);
                        i {
                            font-size: vw(26);
                            margin-right: vw(10);
                        }
                        &:first-child::after {
                            padding: 0 vw(50);
                        }
                        &:last-child {
                            i {
                                font-size: vw(26);
                            }
                        }
                    }
                }
                .title-box {
                    padding: vw(62) 0 vw(60) 0;
                    font-size: vw(42);
                    line-height: vw(42);
                }
                .desc-pannel {
                    height: vw(420);
                    border-radius: 0;
                    background: url("~/static/imgs/line-bg-m.png") no-repeat
                        center center;
                    background-size: 106%;
                    > div {
                        width: vw(676);
                        > div {
                            padding: 0 vw(66);
                            font-size: vw(30);
                            line-height: vw(54);
                        }
                        p {
                            i {
                                font-size: vw(33);
                            }
                        }
                    }
                }
            }
        }
        .pannel3 {
            min-height: vw(400);
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(80) 0 vw(60) 0;
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(40);
                margin-bottom: 0;
                .grid-content {
                    .icon-box {
                        font-size: vw(40);
                        color: $main-color;
                    }
                    h3 {
                        font-size: vw(22);
                        line-height: vw(32);
                        margin: vw(20) 0;
                    }
                    p {
                        width: vw(200);
                        font-size: vw(22);
                        line-height: vw(32);
                    }
                }
            }
            .half-round {
                display: none;
            }
        }
        .pannel4 {
            margin-top: 0;
            height: vw(591);
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(80) 0 vw(60) 0;
            }
            .bg-box {
                height: vw(351);
                position: absolute;
                bottom: 0;
                background-size: 200%;
            }

            .img-box {
                width: vw(745);
                height: vw(399);
                border: none;
                top: vw(191);
                left: 0;
                // background: transparent url("~/static/imgs/bg-full-time.png")
                // no-repeat center center;
                // background-size: 100%;
                img {
                    width: vw(700);
                    position: absolute;
                    left: 50%;
                    transform: translateX(-47%);
                    top: vw(-10);
                }
                .big-bg {
                    width: vw(500);
                    height: auto;
                    top: vw(-20);
                    left: vw(100);
                }
                .small-bg {
                    width: vw(450);
                    height: auto;
                    left: vw(280);
                    top: vw(130);
                }
            }
        }
    }
}
@media screen and (min-width: 1200px) and (max-width: 1730px) {
    .container {
        .pannel3 {
            .pannel-box {
                width: 1167px;
            }
        }
    }
}
/** IPAD */
@include pad {
}
/**  phone */
@include phone {
}
</style>