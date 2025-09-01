<!--
 * @Description: 设备介绍页
 * @FilePath: pages\product\iot\_id.vue
-->
<template>
    <div class="container">
        <client-only>
            <!-- 正方形card -->
            <square-card
                v-if="deviceSize=='large'"
                top="600px"
                left="-15%"
            ></square-card>
            <round-card
                v-if="deviceSize=='large'"
                top="1290px"
                right="-11%"
            ></round-card>
            <section class="pannel1">
                <template v-if="deviceSize=='large'">
                    <!-- 左边介绍 -->
                    <div class="txt-intro">
                        <div class="title-box">{{detail.title}}</div>
                        <div class="sub-title">{{detail.desc}}</div>
                        <div class="txt-box">{{detail.abstract}}</div>
                        <!-- <div class="down-btn"><nuxt-link to="/download">产品技术资料下载</nuxt-link></div> -->
                    </div>
                    <!-- 右边背景 -->
                    <right-bg>
                        <div class="content">
                            <img
                                :src="detail.image"
                                alt=""
                            >
                            <i class="iconfont icon-zhijiao triangle1"></i>
                            <i class="iconfont icon-zhijiao triangle2"></i>
                            <i class="iconfont icon-zhijiao triangle3"></i>
                        </div>
                    </right-bg>
                </template>
                <template v-else>
                    <div class="bg-div">
                        <!-- 背景图 -->
                        <div class="bg-top"></div>
                        <!-- 文案内容 -->
                        <div class="txt-intro">
                            <div class="title-box">{{detail.title}}</div>
                            <div class="sub-title">{{detail.desc}}</div>
                            <div class="txt-box">{{detail.abstract}}</div>
                            <!-- <div class="down-btn"><nuxt-link to="/download">产品技术资料下载</nuxt-link></div> -->
                        </div>
                        <div class="img-div-box">
                            <img
                                :src="detail.image"
                                alt=""
                            >
                        </div>

                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </template>

            </section>
            <section class="pannel2">
                <div class="title-box">
                    产品特性
                </div>
                <div class="pro-feature">
                    <div
                        class="item-box"
                        :class="(idx+1)%3==0?'mr0':''"
                        v-for="(item,idx) in features"
                        :key="idx"
                    >
                        <span>
                            <i
                                class="iconfont"
                                :class="item.author"
                                :style="{fontSize:item.size+'px'}"
                            ></i>
                        </span>
                        <div>
                            <div>{{item.title}}</div>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pannel3">
                <div class="line-bg">
                    <div>支持的应用</div>
                </div>
                <div class="content-box">
                    <template v-for="(item,idx) in apps">
                        <div
                            :key="idx"
                            class="grid-content"
                            :class="fold==item.id?'bg':''"
                            @mouseover="()=>{fold=item.id}"
                        >
                            <div class="icon-box">
                                <i
                                    class="iconfont"
                                    :class="item.author"
                                ></i>
                            </div>
                            <!-- 展开内容 -->
                            <div
                                v-if="fold==item.id"
                                class="fold-content"
                            >
                                <div class="title-box">{{item.title}}</div>
                                <div class="desc-box">{{item.desc}}</div>
                                <div class="bottom-box">
                                    <nuxt-link :to="item.abstract">了解更多></nuxt-link>
                                    <i
                                        class="iconfont icon-reduce"
                                        @click="()=>{fold=flase}"
                                    ></i>
                                </div>
                            </div>
                            <!-- 折起内容 -->
                            <div
                                class="fold-box"
                                v-if="fold!=item.id"
                            >
                                {{item.title}}
                                <i
                                    class="iconfont icon-plus"
                                    @click="()=>{fold=item.id}"
                                ></i>
                            </div>
                        </div>
                    </template>
                </div>

            </section>
            <section class="pannel4">
                <div class="title-box">规格参数</div>
                <div class="content-box">
                    <div class="left-box">
                        <img
                            :src="detail.image"
                            alt=""
                        >
                        <!-- <img
                        src="https://image.widash.wiwide.com/images/10909/75db7081e1ed23aca44322b86e9c885e5.png"
                        alt=""
                    > -->
                    </div>
                    <div class="right-box">
                        <div v-html="detail.content"></div>
                        <!-- <div
                        class="item-box"
                        v-for="(item,idx) in params"
                        :key="idx"
                    >
                        <div class="name-box">{{item.title}}</div>
                        <div class="desc-box">{{item.desc}}</div>
                    </div> -->
                    </div>
                </div>
            </section>
        </client-only>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
import squareCard from "~/components/square-card";
import rightBg from "~/components/right-bg";
import roundCard from "~/components/round-card";
export default {
    components: {
        squareCard,
        rightBg,
        roundCard
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    async asyncData({ params }) {
        return {
            id: params.id * 1
        };
    },
    created() {
        this.getData(1);
    },
    mounted() {},
    methods: {
        getData() {
            Api.productDetail.get({ id: this.id }).then((res) => {
                if (res.code == 1) {
                    this.detail = res.data;
                    let author = res.data.author.split(",");
                    if (author[0]) {
                        Api.product.get({ cid: author[0] }).then((res) => {
                            if (res.code == 1) {
                                this.features = res.data.lists;
                            }
                        });
                    }
                    if (author[1]) {
                        Api.product.get({ cid: author[1] }).then((res) => {
                            if (res.code == 1) {
                                this.apps = res.data.lists;
                                this.fold = this.apps[0].id;
                            }
                        });
                    }
                }
            });
        }
    },
    data() {
        return {
            id: null,
            detail: {},
            features: [
                // {
                //     title: "信号更强",
                //     desc: "覆盖及穿墙能力，全面提升",
                //     iconfont: "icon-xinhaota",
                //     size: 38
                // },
                // {
                //     title: "超高并发",
                //     desc: "更多连接，不在话下",
                //     iconfont: "icon-bingfa"
                // },
                // {
                //     title: "速度更快",
                //     desc: "商用标杆，极速体验",
                //     iconfont: "icon-shandian",
                //     size: 38
                // },
                // {
                //     title: "定制Portal",
                //     desc: "满足客户个性化，营销需求",
                //     iconfont: "icon-dingzhi"
                // },
                // {
                //     title: "统一管理",
                //     desc: "云端配置与管理，解决运维实施困扰",
                //     iconfont: "icon-tongyiguanli"
                // },
                // {
                //     title: "网监合规",
                //     desc: "全面符合监管部门，相关要求",
                //     iconfont: "icon-wangjian"
                // }
            ],
            fold: false,
            apps: [
                // {
                //     id: 1,
                //     iconfont: "icon-yingxiao",
                //     title: "营销",
                //     desc: "统计商家各场所的Wi-Fi流量，包含“日、周、月”的带宽使用情况，展示各时段的流量排名及各个场所的流量使用排名。",
                //     path: ""
                // },
                // {
                //     id: 2,
                //     iconfont: "icon-data",
                //     title: "数据",
                //     desc: "统计商家各场所的Wi-Fi流量，包含“日、周、月”的带宽使用情况，展示各时段的流量排名及各个场所的流量使用排名。",
                //     path: ""
                // },
                // {
                //     id: 3,
                //     iconfont: "icon-shan",
                //     title: "安全",
                //     desc: "统计商家各场所的Wi-Fi流量，包含“日、周、月”的带宽使用情况，展示各时段的流量排名及各个场所的流量使用排名。",
                //     path: ""
                // },
                // {
                //     id: 4,
                //     iconfont: "icon-trans",
                //     title: "传输",
                //     desc: "统计商家各场所的Wi-Fi流量，包含“日、周、月”的带宽使用情况，展示各时段的流量排名及各个场所的流量使用排名。",
                //     path: ""
                // }
            ],
            params: [
                // {
                //     title: "端口",
                //     desc: "WAN：1个  LAN：2个"
                // },
                // {
                //     title: "覆盖范围（半径）",
                //     desc: "2.4G：150米  5G：100米"
                // },
                // {
                //     title: "工作温度",
                //     desc: "-10℃~45℃"
                // },
                // {
                //     title: "尺寸",
                //     desc: "158×158×28mm"
                // },
                // {
                //     title: "工作湿度",
                //     desc: "5%~95%（无凝结）"
                // },
                // {
                //     title: "重量",
                //     desc: "约250g"
                // },
                // {
                //     title: "安装方式	",
                //     desc: "桌面/挂墙/吸顶"
                // },
                // {
                //     title: "无线标准",
                //     desc: "IEEE802.11a/b/g/n/ac/ax"
                // },
                // {
                //     title: "功耗",
                //     desc: "＜15.4W"
                // },
                // {
                //     title: "传输速率",
                //     desc: "最高可支持1800Mbps"
                // },
                // {
                //     title: "电源",
                //     desc: "PoE 48V/0.5A"
                // },
                // {
                //     title: "无线配置	",
                //     desc: "2T2R"
                // },
                // {
                //     title: "功耗",
                //     desc: "＜15.4W"
                // },
                // {
                //     title: "传输速率",
                //     desc: "最高可支持1800Mbps"
                // },
                // {
                //     title: "电源",
                //     desc: "PoE 48V/0.5A"
                // },
                // {
                //     title: "无线配置	",
                //     desc: "2T2R"
                // }
            ]
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
        .content {
            display: flex;
            align-items: center;
            // padding-top: 70px;
            position: relative;
            width: 100%;
            height: inherit;
            img {
                // margin: 110px 0 0 95px;
                margin: 110px 0 0 14%;
                max-width: 500px;
            }
            i {
                position: absolute;
                color: $main-color;
                font-size: 40px;
                &.triangle1 {
                    top: 349px;
                    left: 60px;
                    transform: rotate(270deg);
                }
                &.triangle2 {
                    top: 170px;
                    right: 300px;
                    transform: rotate(180deg);
                }
                &.triangle3 {
                    font-size: 72px;
                    bottom: 100px;
                    right: 300px;
                    transform: rotate(180deg);
                }
            }
        }
        .txt-intro {
            padding-left: 18.22%;
            width: 45%;
            .title-box {
                font-size: 60px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 60px;
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
                line-height: 26px;
                color: $font-main-color;
                margin-top: 30px;
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
        width: 63.54%;
        min-width: 1213px;
        margin: 0 auto;
        margin-bottom: 50px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            margin: 70px 0;
            color: $font-high-color;
        }
        .pro-feature {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .item-box {
                position: relative;
                width: 31.14%;
                height: 275px;
                margin-right: 3.2%;
                margin-bottom: 50px;
                &.mr0 {
                    margin-right: 0;
                }
                > span {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background-color: $main-color;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i {
                        font-size: 30px;
                        color: #fff;
                    }
                }
                > div {
                    width: 100%;
                    height: 230px;
                    margin-top: 45px;
                    box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // justify-content: center;
                    padding-top: 70px;
                    > div {
                        font-size: 24px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 24px;
                        margin-bottom: 28px;
                        color: $font-high-color;
                    }
                    > p {
                        font-size: 20px;
                        font-weight: normal;
                        line-height: 26px;
                        color: $font-main-color;
                        padding: 0 20px;
                    }
                }
            }
        }
    }
    .pannel3 {
        position: relative;
        width: 100%;
        height: 500px;
        overflow: hidden;
        .line-bg {
            width: 100%;
            height: 300px;
            background: url("~/static/imgs/line-bg.png") no-repeat center center;
            background-size: 100%;
            div {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                text-align: center;
                color: #fff;
                padding-top: 80px;
            }
        }
        .content-box {
            position: absolute;
            top: 210px;
            left: 50%;
            z-index: 3;
            transform: translateX(-50%);
            min-width: 63.54%;
            // min-height: 390px;
            min-height: 290px;
            white-space: nowrap;
            text-align: center;
            max-width: 95%;
            overflow-x: auto;
            .grid-content {
                text-align: left;
                display: inline-block;
                vertical-align: text-top;
                margin: 0 30px;
                width: 260px;
                background-color: #fff;
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                &.bg {
                    background-color: $main-color;
                    .icon-box {
                        i {
                            font-size: 42px;
                            color: #fff;
                        }
                    }
                }
                .icon-box {
                    i {
                        font-size: 42px;
                        color: $main-color;
                    }
                }
                .fold-content {
                    .title-box {
                        font-size: 18px;
                        font-weight: normal;
                        line-height: 22px;
                        color: #fff;
                        margin-bottom: 20px;
                        margin-top: 8px;
                    }
                    .desc-box {
                        font-size: 14px;
                        font-weight: normal;
                        line-height: 19px;
                        color: #fff;
                        max-height: 95px;
                        overflow-y: auto;
                        white-space: normal;
                    }
                    .bottom-box {
                        padding-top: 24px;
                        font-size: 12px;
                        font-weight: normal;
                        line-height: 14px;
                        color: #fff;
                        i {
                            float: right;
                            cursor: pointer;
                        }
                    }
                }
                .fold-box {
                    width: 100%;
                    margin-top: 50px;
                    height: 22px;
                    font-size: 18px;
                    font-weight: normal;
                    line-height: 22px;
                    color: $main-color;
                    i {
                        float: right;
                        // color: $main-color;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .pannel4 {
        padding-top: 50px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
        }
        .content-box {
            width: 63.53%;
            height: 360px;
            margin: 0 auto;
            display: flex;
            // padding-top: 40px;
            margin-top: 40px;
            justify-content: center;
            .left-box {
                position: relative;
                // width: 25.4%;
                // padding-top: 29.5%;
                width: 296px;
                height: 344px;
                background: $sub-color url("~/static/imgs/params-line.png")
                    no-repeat center center;
                border-top-right-radius: 25%;
                border-bottom-left-radius: 25%;
                img {
                    max-width: 70%;
                    // border:1px solid #f00;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .right-box {
                // width: calc(100% - 344px);
                width: 822px;
                display: flex;
                flex-wrap: wrap;
                padding: 15px 0 15px 40px;
                .item-box {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    .name-box {
                        font-size: 18px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 24px;
                        color: $font-high-color;
                    }
                    .desc-box {
                        margin-top: 10px;
                        font-size: 18px;
                        font-weight: normal;
                        line-height: 24px;
                        color: $font-main-color;
                    }
                }
                > div {
                    width: 100%;
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: auto;
            // height: vw(1035);
            overflow: hidden;

            .bg-div {
                width: 100%;
                height: inherit;
                position: relative;
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
                .txt-intro {
                    padding-left: 0;
                    width: 100%;
                    padding: 0 vw(50);
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    .title-box {
                        font-size: vw(60);
                        line-height: vw(60);
                        padding-top: vw(67);
                    }
                    .sub-title {
                        font-size: vw(26);
                        line-height: vw(39);
                        margin-top: vw(30);
                    }
                    .txt-box {
                        font-size: vw(22);
                        line-height: vw(33);
                        margin-top: vw(20);
                        text-indent: vw(44);
                    }
                    .down-btn {
                        width: vw(288);
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(48);
                        font-size: vw(26);
                        margin: 0 auto;
                        margin-top: vw(30);
                    }
                }
                .img-div-box {
                    position: relative;
                    margin: vw(50) auto vw(50) auto;
                    width: vw(580);
                    height: vw(400);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        max-width: vw(500);
                        max-height: vw(400);
                    }
                }
                i {
                    position: absolute;
                    z-index: 4;
                    color: $main-color;
                    font-size: vw(40);
                    &.triangle1 {
                        top: vw(658);
                        left: vw(83);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(450);
                        right: vw(102);
                        transform: rotate(180deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(782);
                        right: vw(102);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel2 {
            width: 100%;
            padding: 0 vw(25);
            margin-bottom: vw(55);
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                margin: vw(60) 0;
            }
            .pro-feature {
                .item-box {
                    width: vw(220);
                    height: vw(275);
                    margin-right: vw(20);
                    margin-bottom: vw(50);
                    > span {
                        width: vw(90);
                        height: vw(90);
                        box-shadow: 0px vw(10) vw(40) 0px
                            rgba(54, 61, 136, 0.06);
                        i {
                            font-size: vw(30);
                        }
                    }
                    > div {
                        height: vw(230);
                        margin-top: vw(55);
                        box-shadow: 0px vw(10) vw(60) 0px
                            rgba(38, 45, 118, 0.08);
                        padding-top: vw(30);
                        > div {
                            font-size: vw(24);
                            line-height: vw(24);
                            margin-bottom: vw(20);
                            padding: 0 vw(30);
                            margin-top: vw(20);
                        }
                        > p {
                            font-size: vw(20);
                            line-height: vw(30);
                            padding: 0 vw(30);
                            height: vw(90);
                            overflow-y: auto;
                        }
                    }
                }
            }
        }
        .pannel3 {
            height: vw(600);
            .line-bg {
                height: vw(409);
                background: url("~/static/imgs/line-bg.png") no-repeat 71% 47%;
                background-size: 346%;
                div {
                    font-size: vw(42);
                    line-height: vw(42);
                    padding-top: vw(70);
                }
            }
            .content-box {
                width: 100%;
                position: absolute;
                left: 0;
                padding: 0 vw(40);
                padding-left: vw(10);
                top: vw(172);
                transform: translateX(0);
                overflow-x: auto;
                white-space: nowrap;
                min-height: vw(340);
                &::-webkit-scrollbar {
                    display: none; /*隐藏滚动条*/
                }
                /deep/ {
                    .el-col {
                        width: vw(260);
                        margin-right: vw(20);
                        float: none;
                        display: inline-block;
                        min-height: vw(340);
                        vertical-align: text-top;
                    }
                }
                .grid-content {
                    display: inline-block;
                    border-radius: vw(20);
                    padding: vw(30);
                    margin: 0 vw(30);
                    width: vw(260);
                    box-shadow: 0px vw(10) vw(60) 0px rgba(38, 45, 118, 0.08);
                    margin-right: 0;
                    &.bg {
                        .icon-box {
                            i {
                                font-size: vw(42);
                            }
                        }
                    }
                    .icon-box {
                        i {
                            font-size: vw(42);
                        }
                    }
                    .fold-content {
                        .title-box {
                            font-size: vw(24);
                            line-height: vw(22);
                            margin-bottom: vw(20);
                            margin-top: vw(10);
                        }
                        .desc-box {
                            font-size: vw(20);
                            line-height: vw(26);
                            white-space: normal;
                        }
                        .bottom-box {
                            padding-top: vw(24);
                            font-size: vw(12);
                            line-height: vw(14);
                        }
                    }
                    .fold-box {
                        margin-top: vw(50);
                        height: vw(22);
                        font-size: vw(24);
                        line-height: vw(22);
                    }
                }
            }
        }
        .pannel4 {
            padding-top: 0;
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
            }
            .content-box {
                width: 100%;
                padding: 0 vw(40);
                padding-top: vw(60);
                margin-top: 0;
                .left-box {
                    display: none;
                }
                .right-box {
                    width: 100%;
                    padding: 0;
                    .item-box {
                        width: 50%;
                        .name-box {
                            font-size: vw(24);
                            line-height: vw(24);
                        }
                        .desc-box {
                            font-size: vw(24);
                            line-height: vw(24);
                            margin-top: vw(10);
                            margin-bottom: vw(30);
                        }
                    }
                }
            }
        }
    }
}
@include pcMini {
    .container {
        .pannel4 {
            .content-box {
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
<style  lang="scss" >
.container {
    .pannel4 {
        .right-box {
            height: 360px;
            overflow-y: auto;
        }
        table {
            width: 100%;
            table-layout: fixed; /* 确保列宽度固定 */
            th {
                text-align: left !important;
                font-size: 18px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 24px;
                color: $font-high-color;
                width: 25%;
            }
            td {
                padding-top: 10px;
                font-size: 18px;
                font-weight: normal;
                line-height: 24px;
                color: $font-main-color;
                max-height: 150px;
                overflow-y: auto;
                overflow-x: hidden;
                vertical-align: baseline;
            }
        }
    }
}
@include notPc {
    .container {
        .pannel4 {
            table {
                th {
                    text-align: left !important;
                    font-size: vw(24);
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: vw(28);
                    color: $font-high-color;
                }
                td {
                    padding-top: vw(10);
                    font-size: vw(24);
                    font-weight: normal;
                    line-height: vw(24);
                    color: $font-main-color;
                }
            }
        }
    }
}
</style>