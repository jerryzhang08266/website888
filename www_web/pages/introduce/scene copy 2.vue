<!--
 * @Description: 应用 - 商业场景感知
 * @FilePath: pages\introduce\scene.vue
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
                    <div class="title-box">商业场景<br />感知应用</div>
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
                        src="~/static/imgs/scene-bg.png"
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
import Api from "~/plugins/api";
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
        console.log("params", params);
    },
    mounted() {},
    methods: {},
    data() {
        return {
            cur_nav_id: 1,
            cur_nav: {
                app_url: [
                    require("~/static/imgs/Desktop7.png"),
                    require("~/static/imgs/Laptop7.png"),
                    require("~/static/imgs/keliujishu-bg.png")
                ]
            },
            nav_data: [
                {
                    id: 1,
                    iconfont: "icon-claim-icon6",
                    name: "客流计数",
                    sub: [],
                    title: "应用描述",
                    desc: "准确感知与识别顾客和店员在店内的各种行为，如商品触摸、导购服务等，深入洞察顾客的消费习惯和偏好，以及标准化店员服务。",
                    app_value: [
                        {
                            iconfont: "icon-a-lujing25",
                            title: "商品触摸",
                            desc: "识别顾客触摸商品的次数和人次，分析顾客对商品的喜爱度，进而优化商品陈列和柜台布局。"
                        },
                        {
                            iconfont: "icon-a-1640929070105941",
                            title: "导购服务",
                            desc: "识别店员的服务行为，助力管理者及时发现店员在服务过程中存在的问题，制定服务标准。"
                        },
                        {
                            iconfont: "icon-a-1640330705532150",
                            title: "脱岗检测",
                            desc: "识别店员在规定时间内是否有脱岗行为，对门店工作人员的脱岗行为进行报警提醒，实现高效管理。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop7.png"),
                        require("~/static/imgs/Laptop7.png"),
                        require("~/static/imgs/keliujishu-bg.png")
                    ]
                },
                {
                    id: 2,
                    iconfont: "icon-claim-icon19",
                    name: "全景客流分析",
                    sub: [],
                    title: "应用描述",
                    desc: "360度洞悉顾客在场所内不同区域的驻留时长/人次，以及行动路线、轨迹，形成全景客流热力图、客流动线轨迹图，辅助优化场所布局、商品陈列等。",
                    app_value: [
                        {
                            iconfont: "icon-shangsheng-1",
                            title: "",
                            desc: "明确店内冷热区域（高集客力区域和底集客力区域），进而优化门店布局，提升顾客消费体验。"
                        },
                        {
                            iconfont: "icon-icon-shengchengshouzhong1",
                            title: "",
                            desc: "洞察顾客对不同货柜的关注度，辅助门店优化柜台布局与商品陈列。"
                        },
                        {
                            iconfont: "icon-zhinanzhen",
                            title: "",
                            desc: "发现更具吸引力的商品，及时调整商品品类，最大化门店营收。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop8.png"),
                        require("~/static/imgs/Laptop8.png"),
                        require("~/static/imgs/quanjinkeliu-bg.png"),
                    ]
                },
                {
                    id: 3,
                    iconfont: "icon-claim-icon16",
                    name: "全景云巡店",
                    sub: [],
                    title: "应用描述",
                    desc: "360度全时段远程监控门店，实时掌握门店的运营状况，及时发现问题、整改问题，实现智能化巡店，提升巡店效率，降低巡店成本。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330872931025",
                            title: "高效巡店",
                            desc: "通过实时视频、历史点播、事件驱动等多种方式，在线完成巡店工作，节省人力，提高效率。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "科学巡店",
                            desc: "在线完成问题记录、系统化推进跟踪，帮助管理人员把管理要求、管理措施落实到位、贯彻到底。"
                        },
                        {
                            iconfont: "icon-a-1640330930754717",
                            title: "科学管理",
                            desc: "门店考核有据可依、科学透明，真正达到科学化管理。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop9.png"),
                        require("~/static/imgs/Laptop9.png"),
                        require("~/static/imgs/quanjinxundian-bg.png")
                    ]
                },
                {
                    id: 4,
                    iconfont: "icon-claim-icon91",
                    name: "销售漏斗分析",
                    sub: [],
                    title: "应用描述",
                    desc: "基于顾客的进店率、深访率、商品触摸率，以及销售数据实现销售漏斗分析建模，精准定位影响销售额的环节、因素，以便及时整改，提升门店业绩。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330970143351",
                            title: "进店率",
                            desc: "分析各种要素对周边客流和进店率的影响，评估门店和产品对顾客的吸引度，助力门店经营优化和门店选址决策。"
                        },
                        {
                            iconfont: "icon-a-1640330963896309",
                            title: "深访率",
                            desc: "分析有效客户数量，同时对比不同门店数据，诊断客户流失原因，助力商品陈列优化、助力营销活动策划。"
                        },
                        {
                            iconfont: "icon-a-1640330999870462",
                            title: "触摸率",
                            desc: "分析顾客对商品的喜爱度，辅助商品优化陈列和柜台布局；同时，找出热点关注商品。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop10.png"),
                        require("~/static/imgs/Laptop10.png"),
                        require("~/static/imgs/xiaoshouloudou-bg.png")
                    ]
                },
                {
                    id: 5,
                    iconfont: "icon-claim-icon14",
                    name: "SOP事件感知",
                    sub: [],
                    title: "应用描述",
                    desc: "准确感知与识别顾客和店员在店内的各种行为，如商品触摸、导购服务等，深入洞察顾客的消费习惯和偏好，以及标准化店员服务。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330999870462",
                            title: "商品触摸",
                            desc: "识别顾客触摸商品的次数和人次，分析顾客对商品的喜爱度，进而优化商品陈列和柜台布局。"
                        },
                        {
                            iconfont: "icon-a-1640330992261830",
                            title: "导购服务",
                            desc: "识别店员的服务行为，助力管理者及时发现店员在服务过程中存在的问题，制定服务标准。"
                        },
                        {
                            iconfont: "icon-a-1640330979128277",
                            title: "脱岗检测",
                            desc: "识别店员在规定时间内是否有脱岗行为，对门店工作人员的脱岗行为进行报警提醒，实现高效管理。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop11.png"),
                        require("~/static/imgs/Laptop11.png"),
                        require("~/static/imgs/sopshijian-bg.png")
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
                background: url("~/static/imgs/scene-bg.png") no-repeat center
                    center;
                background-size: 100%;
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
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 20px;
                    color: $font-high-color;
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
            height: 188px;
            margin: 0 auto;
            .el-row {
                width: 100%;
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
            height: vw(960);
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
                    // height: vw(546);
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
            height: vw(450);
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
/** IPAD */
@include pad {
}
/**  phone */
@include phone {
}
</style>