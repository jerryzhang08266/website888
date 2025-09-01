<!--
 * @Description: 应用 - 商业场景感知
 * @FilePath: pages\introduce\scene.vue
-->
<template>
    <div class="container">
        <client-only>
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
                            <!-- <p><i class="iconfont icon-shangyinhao"></i></p> -->
                            <div>{{cur_nav.desc}}</div>
                            <!-- <p class="txt-right"><i class="iconfont icon-xiayinhao"></i></p> -->
                        </div>

                    </div>
                </div>
            </section>
            <section class="pannel5">
                <h3 class="title-box ">应用板块</h3>
                <div
                    class="content-box"
                    v-show="deviceSize=='large'"
                >
                    <div
                        class="item-box"
                        v-for="(item,idx) in cur_nav.app_plate"
                        :key="idx"
                    >
                        <div class="sub-title">{{item.title}}</div>
                        <div class="desc-box">{{item.desc}}</div>
                    </div>
                </div>
                <el-carousel
                    v-show="deviceSize!='large'"
                    :interval="3000"
                    type="card"
                    height="55vw"
                    class="carousel-m"
                >
                    <el-carousel-item
                        v-for="(item,idx) in cur_nav.app_plate"
                        :key="idx"
                        class="content-box-m"
                    >
                        <div class="item-box">
                            <div class="sub-title">{{item.title}}</div>
                            <div class="desc-box">{{item.desc}}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </section>
            <section class="pannel3">
                <div class="title-box">应用价值</div>
                <div class="pannel-box">
                    <el-row :gutter="0">
                        <el-col
                            :span="8"
                            v-for="(item,idx) in cur_nav.app_value"
                            :key="idx"
                            :class="[deviceSize=='large'?'w280':'',(idx+1)%3==2?'middel-col':'']"
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
        </client-only>
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
                    require("~/static/imgs/keliufenxi_app-bg.png")
                ]
            },
            nav_data: [
                {
                    id: 1,
                    iconfont: "icon-claim-icon19",
                    name: "客流分析",
                    sub: [],
                    title: "应用描述",
                    desc: "感知顾客在场所内不同区域的驻留时长/人次，识别顾客性别、年龄等属性、获取顾客行动路线、轨迹，生成店铺关联图、业态关联图，场所热力图、客流动线轨迹图等，辅助优化场所业态布局、商品陈列，为商场门店运营、营销推广、招商调改等商业活动提供数据支撑。",
                    app_value: [
                        {
                            iconfont: "icon-shangsheng-1",
                            title: "招商调改",
                            desc: "支撑招调谈判，支撑业态优化 ，为租金定价店铺选址提供依据。"
                        },
                        {
                            iconfont: "icon-icon-shengchengshouzhong1",
                            title: "营销推广",
                            desc: "流量转化提升，为活动策划、广告选址、商品优化等营销活动效果评估提供数据支撑。"
                        },
                        {
                            iconfont: "icon-zhinanzhen",
                            title: "经营管理",
                            desc: "全场客流感知，经营分析 ，客流分析等结果助力排班优化、降本增效。"
                        }
                    ],
                    app_plate: [
                        {
                            title: "客流分析",
                            desc: "统计广场、楼层、店铺等场所顾客流量，为门店运营、营销推广、招商调改等商业活动提供数据支撑。"
                        },
                        {
                            title: "客群分析",
                            desc: "辨识客流性别、年龄、人员属性，将客流按不同规则划分为不同客群。可为经营场所营销策划、流量转化、经营优化提供更具有参考价值的数据。"
                        },
                        {
                            title: "业态分析",
                            desc: "基于客流数据、客群数据、关联数据，分析各个业态的客流量、集客力、关联度等指标，辅助商场管理者进行业态调整，优化业态配比，使整个商场的客流更加平衡，提高综合效益 。"
                        },
                        {
                            title: "关联分析",
                            desc: "根据顾客在在场所中的行动轨迹，生成楼层、店铺、出入口、区域、业态间的关联关系。可以得到店铺的引流能力、店铺间的转化关系。为经营场所动线规划、业态布局、商品陈列等提供决策依据。"
                        },
                        {
                            title: "热区分析",
                            desc: "对广角摄像机覆盖范围内的顾客进行驻留时长与频次检测，以实景图、平面图形式展示区域的驻留率、驻留时长，直观体现顾客对区域的关注度。"
                        },
                        {
                            title: "经营分析",
                            desc: "基于客流人次，客群分类、游逛轨迹、营销数据，输出各种维度的报表数据，实现销售漏斗分析建模，精准定位影响销售额的环节、因素，以便及时整改，提升门店业绩。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop8.png"),
                        require("~/static/imgs/Laptop8.png"),
                        // require("~/static/imgs/quanjinkeliu-bg.png")
                        require("~/static/imgs/keliufenxi_app-bg.png")
                    ]
                },
                {
                    id: 2,
                    iconfont: "icon-claim-icon16",
                    name: "云监控",
                    sub: [],
                    title: "应用描述",
                    desc: "门店监控系统云端统一管理，支持远程实时视频与录像回放，支持远程巡店与事件整改，助力总部监督门店运营规范化管理与考评。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330872931025",
                            title: "增效降本",
                            desc: "随时随地监管门店，提高巡店效率，降低管理成本。"
                        },
                        {
                            iconfont: "icon-a-1640330930754717",
                            title: "科学管理",
                            desc: "门店考核有据可依、科学透明，真正达到科学化管理。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "主动监测",
                            desc: "主动发现问题，记录问题，从流程上让事件处理形成闭环。"
                        }
                    ],
                    app_plate: [
                        {
                            title: "云巡店",
                            desc: "全时段远程监控门店，实时掌握门店的运营状况，及时发现问题、整改问题，实现智能化巡店，提升巡店效率，降低巡店成本。"
                        },
                        {
                            title: "事件感知",
                            desc: "感知顾客和店员在店行为，监测店内异常事件，实时掌握门店的运营状况，及时发现问题、整改问题，实现智能化巡店，提升巡店效率，降低巡店成本。"
                        },
                        {
                            title: "事件管理",
                            desc: "标记与跟踪事件处理流程，使事情处理形成闭环并生成记录，不断提高店铺运行能力。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop9.png"),
                        require("~/static/imgs/Laptop9.png"),
                        // require("~/static/imgs/quanjinxundian-bg.png")
                        require("~/static/imgs/yunjiankong_app-bg.png")
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
            // width: 63.54%;
            height: 188px;
            width: 1220px;
            margin: 0 auto;
            .el-row {
                width: 100%;
                .w280 {
                    width: 280px;
                }
                .middel-col {
                    margin: 0 190px;
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
    .pannel5 {
        width: 100%;
        height: 520px;
        background: url("~/static/imgs/app_plate_bg.png") no-repeat center
            center;
        // background-size: 100%;
        background-size: cover;
        margin-top: 60px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 60px 0 86px 0;
            color: $font-high-color;
        }
        .content-box {
            width: 95%;
            margin: 0 auto;
            height: auto;
            display: flex;
            justify-content: center;
            .item-box {
                margin: 0 5px;
                padding: 12px;
                padding-bottom: 20px;
                width: 196px;
                height: fit-content;
                border-radius: 10px;
                background: #fff;
                &:hover {
                    background: $font-high-color;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    position: relative;
                    top: -20px;
                    .sub-title {
                        color: #fff;
                    }
                    .desc-box {
                        color: #fff;
                    }
                }
                .sub-title {
                    font-size: 22px;
                    font-weight: bold;
                    font-family: "SourceHanSansCN-Bold";
                    padding: 12px 0;
                    color: $font-high-color;
                }
                .desc-box {
                    font-size: 14px;
                    font-weight: normal;
                    color: $font-main-color;
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
                            font-size: vw(24);
                            line-height: vw(44);
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
        .pannel5 {
            height: vw(683);
            margin-top: 0px;
            background-size: cover;
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                text-align: center;
                padding: vw(60) 0 vw(86) 0;
            }
            /deep/.el-carousel__indicator--horizontal {
                button {
                    padding: vw(0);
                    width: vw(20);
                    height: vw(20);
                    border-radius: 50%;
                    background: #65816d;
                }
                &.is-active {
                    button {
                        background: $font-high-color;
                    }
                }
            }
            .content-box-m {
                &.is-active {
                    .item-box {
                        background: $font-high-color;
                        box-shadow: 0px 0px vw(20) 0px rgba(0, 0, 0, 0.1);
                        padding: vw(20);
                        position: relative;
                        .sub-title {
                            color: #fff;
                        }
                        .desc-box {
                            color: #fff;
                        }
                    }
                }
                .item-box {
                    margin: 0 vw(5);
                    padding: vw(45);
                    padding-bottom: vw(20);
                    height: fit-content;
                    border-radius: 10px;
                    background: #fff;
                    .sub-title {
                        font-size: vw(22);
                        font-weight: bold;
                        font-family: "SourceHanSansCN-Bold";
                        padding: vw(0) 0 vw(12) 0;
                        color: $font-high-color;
                    }
                    .desc-box {
                        font-size: vw(22);
                        font-weight: normal;
                        color: $font-main-color;
                    }
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