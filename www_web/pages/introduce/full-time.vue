<!--
 * @Description: 商业IOT介绍页
 * @FilePath: pages\introduce\iot.vue
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
                        v-if="0"
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
                    require("~/static/imgs/shengchanyingyong-bg.png")
                ]
            },
            nav_data: [
                {
                    id: 1,
                    iconfont: "icon-a-lujing31",
                    name: "生产应用",
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
                    desc: "门店的生产网络是商业运营的核心支柱之一，它确保了信息和服务能够顺畅支持门店提供客户Wi-Fi、数字化支付解决方案和其他现代零售服务，是连接现代商业活动各个方面的桥梁，对于保持业务连续性、提升客户满意度和实现运营效率至关重要。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330889840403",
                            title: "双机热备",
                            desc: "保障关键业务在主系统或主线路故障时无缝切换至备用系统，大幅降低断网时间，保障业务连续性和数据完整性，从而提升系统的可靠性和企业的应急响应能力。"
                        },
                        {
                            iconfont: "icon-a-1640330714274953",
                            title: "主动运维",
                            desc: "网络主动运维通过预见性策略，对关键终端的实时监控和数据分析，主动预防故障，确保业务流畅运行。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "互联互通",
                            desc: "分支和总部网络的互联互通实现了数据和资源的无缝共享，加强了组织内部的协作效率，同时增强了企业对各地业务的统一管理和快速响应能力。"
                        }
                    ],
                    app_plate: [
                        {
                            title: "智能路由",
                            desc: "根据客户需求对内网业务和应用进行路由的选择和线路备份，设备内置丰富的选路机制，配合线路质量检测手段，用户可对线路进行精细管理，平台可以集中下发查看配置，提升运维效率。"
                        },
                        {
                            title: "SD-WAN",
                            desc: "通过云平台集中管理门店网络，实现集团总部与分支门店的互联互通，实现了控制与转发分离，拓扑编排、策略绑定、路由选路等均有控制器完成，实现了商业场所全站点网络拓扑图可视化、链路可视化，流量可视化。"
                        },
                        {
                            title: "应用控制",
                            desc: "网关设备内置了DPI模块，拥有精准而全面的应用识别库，实现基于用户、应用、内容、流量方向、时间段等多维度的精细化控制，实时监控、日志追溯等可视化管理以及强大的报表统计分析。"
                        },
                        {
                            title: "流量控制",
                            desc: "基于时间段可以对应用或用户的流量进行控制，实现保障某些应用的网络畅通。"
                        },
                        {
                            title: "IPSec VPN",
                            desc: "迈外迪IPSec VPN用于集团总部和门店的互联，保障了链路的数据安全，此外也可以和第三方厂商进行对接。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop.png"),
                        require("~/static/imgs/Laptop.png"),
                        require("~/static/imgs/shengchanyingyong-bg.png")
                    ]
                },
                {
                    id: 2,
                    iconfont: "icon-a-lujing32",
                    name: "顾客服务",
                    sub: [
                        {
                            iconfont: "icon-Commercial-icon3",
                            name: "流量助手"
                        }
                    ],
                    title: "应用描述",
                    desc: "门店客用网络，为顾客提供便捷互联网接入，增强购物体验，满足安全监管。不仅延长顾客在店停留时间，促进消费，还可通过用户数据分析优化商家的营销策略，实现个性化服务，从而打造无缝的线上线下购物环境。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330851712246",
                            title: "提升客户满意度与忠诚度",
                            desc: "通过提供稳定、快速的网络服务，顾客可享受更便捷的上网体验，如在线点单、使用电子优惠券等，从而感受到更高的服务水平，增加回头率。"
                        },
                        {
                            iconfont: "icon-a-16403307628451041",
                            title: "数据收集与分析",
                            desc: "可通过客用网络收集顾客行为数据，分析其偏好和习惯，为市场营销策略提供精准依据，实现个性化推广和服务，更有效地提升销售转化率。"
                        },
                        {
                            iconfont: "icon-a-1640330992261830",
                            title: "增强品牌形象与差异化竞争",
                            desc: "设立客用网络显示了品牌的现代化和portal门户，有助于在竞争中突显差异，加强顾客对品牌的认同感和归属感，从而在激烈的市场竞争中脱颖而出。"
                        }
                    ],
                    app_plate: [
                        {
                            title: "网安审计",
                            desc: "为非经营上网服务场所，提供网络安全审计合规服务。"
                        },
                        {
                            title: "Portal认证",
                            desc: "实现分布在不同地理位置的连锁实体门店的统一无线认证、网络访问控制管理,并实现总部集中式控制、分支个性化认证及策略，Portal认证页面自定义展现设置,实现对认证页面自由设计的需求,可以自定义成图片广告等。"
                        },
                        {
                            title: "小程序认证",
                            desc: "通过小程序开发对接，展现样式更多样化，实现用户直接转化成小程序会员。"
                        },
                        {
                            title: "云会员",
                            desc: "云会员是为了满足第三方客户会员运营需求的一个功能，充分利用入口流量，为商家更好的进行会员服务提供基础数据。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop2.png"),
                        require("~/static/imgs/Laptop2.png"),
                        require("~/static/imgs/gukefuwu-bg.png")
                    ]
                },
                {
                    id: 3,
                    iconfont: "icon-a-lujing29",
                    name: "运维应用",
                    sub: [
                        {
                            iconfont: "icon-Commercial-icon5",
                            name: "SD - WAN"
                        }
                    ],
                    title: "应用描述",
                    desc: "连锁门店网络运维关键在于利用先进工具实时监控和管理复杂网络，确保业务连续性和数据安全。通过智能应用快速应对故障，实施远程诊断和自动化解决方案，减少断网时间，降低成本。不仅强化了门店的日常运作效率和客户服务体验，还通过持续的网络安全加固，保障了企业和消费者信息的完整性，对维护品牌信誉和推动业务增长具有重要作用。",
                    app_value: [
                        {
                            iconfont: "icon-a-1640330808616142",
                            title: "业务连续性",
                            desc: "通过实时监控和快速响应，确保门店运营和客户服务的稳定性，减少因网络问题可能导致的收入损失。"
                        },
                        {
                            iconfont: "icon-a-1640330800571408",
                            title: "效率提升",
                            desc: "自动化和远程管理工具降低了人力需求和响应时间，提高了问题解决的效率。"
                        },
                        {
                            iconfont: "icon-a-1640330791329161",
                            title: "数据保护",
                            desc: "强化网络安全，保护公司和客户的敏感数据，降低因数据泄露带来的风险和潜在损失。"
                        },
                        {
                            iconfont: "icon-a-1640330782227960",
                            title: "客户满意度",
                            desc: "稳定可靠的网络服务提升客户体验，增强了客户对品牌的信任，有助于促进客户忠诚度和回购率。"
                        },
                        {
                            iconfont: "icon-a-1640330842950859",
                            title: "品牌声誉",
                            desc: "通过有效的网络运维，公司能够维持高水平的运营标准，增强消费者和市场对品牌的正面认知，为企业声誉加分。"
                        }
                    ],
                    app_plate: [
                        {
                            title: "拓扑管理",
                            desc: "可视化呈现出门店的网络拓扑架构，观察关键终端的各种状态。让网络运维变得更加可视化。"
                        },
                        {
                            title: "终端管理",
                            desc: "查看所有联网终端的数据情况，上网时长，上下线告警。"
                        },
                        {
                            title: "告警管理",
                            desc: "迈外迪Widash系统推出告警中心，可以提供APP、邮件、短信、企业微信、飞书、钉钉等多种手段实现告警，运维人员可以自行定制告警内容和告警接受能源，一体化的呈现告警数据，提升运维效率。"
                        },
                        {
                            title: "业务监测",
                            desc: "边缘管理网关推出业务检测功能，从终端、AP、网关、互联网、业务系统，逐级跟踪，实现端到端的监控与判断，将被动运维变为主动运维，主动监控门店网络、终端、宽带、业务，门店故障主动发现。"
                        },
                        {
                            title: "远程恢复",
                            desc: "自动化和远程管理工具降低了人力需求和响应时间，提高了问题解决的效率，减少了上门和现场自我检查解决的成本。"
                        },
                        {
                            title: "配置管理",
                            desc: "迈外迪所有网络可管理设备均可云管云控，从出口路由器到交换机再到AP，均可通过Widash平台进行远程管理运维，为用户提供一个高效便捷的运维、运营平台。"
                        }
                    ],
                    app_url: [
                        require("~/static/imgs/Desktop3.png"),
                        require("~/static/imgs/Laptop3.png"),
                        require("~/static/imgs/yunweiyingyong-bg.png")
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
                    // width: 73%;
                    width: 90%;
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
            width: 1220px;
            min-height: 188px;
            margin: 0 auto;
            .el-row {
                width: 100%;
                .el-col {
                    margin-bottom: 40px;
                }
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
                    // height: vw(420);
                    height: auto;
                    min-height: vw(420);
                    border-radius: 0;
                    background: url("~/static/imgs/line-bg-m.png") no-repeat
                        center center;
                    // background-size: 106%;
                    background-size: cover;
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
@media screen and (min-width: 1200px) and (max-width: 1730px) {
    .container {
        .pannel3 {
            .pannel-box {
                // width: 1167px;
                width: 1220px;
                .el-row .middel-col{
                    margin: 0px 142px;
                }
                .el-row .w280 {
                    width: 286px;
                }
                .grid-content{
                    padding-left:20px;
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