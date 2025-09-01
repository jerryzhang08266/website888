<!--
 * @Description: 联系我们
 * @FilePath: pages\contact\index.vue
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
                        <div class="title-box">联系我们</div>
                        <div class="txt-box">迈外迪，中国领先的智能商业解决方案提供商。</div>
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
                            src="~/static/imgs/contact-bg.png"
                            alt=""
                        >
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </div>
            </section>
            <section class="pannel2">
                <div>
                    <div class="lf-box"></div>
                    <div class="rt-box"></div>
                    <div class="content-div">
                        <div>
                            <i class="iconfont icon-Vector1"></i>
                            <h5>售后咨询</h5>
                            <span>
                                <i class="iconfont icon-a-lujing141"></i>
                                400-6500-311（7*24h）
                            </span>
                            <span>
                                <span><i class="iconfont icon-email email"></i></span>
                                online@wiwide.com
                            </span>
                        </div>
                        <div>
                            <i class="iconfont icon-a-Vector11"></i>
                            <h5>商务咨询</h5>
                            <span v-if="0">
                                <i class="iconfont icon-a-lujing141"></i>
                                010-85891038
                            </span>
                            <span>
                                <span><i class="iconfont icon-a-lujing161 vx"></i></span>
                                18518721599 （与微信同号）
                            </span>
                            <span>
                                <span><i class="iconfont icon-email email"></i></span>
                                hello@wiwide.com
                            </span>
                        </div>
                        <div>
                            <i class="iconfont icon-a-lujing131"></i>
                            <h5>品牌与媒体合作</h5>
                            <span>
                                <span><i class="iconfont icon-email email"></i></span>
                                marketing@wiwide.com
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pannel3">
                <div class="title-box">公司地址</div>
                <div class="pannel-box">
                    <div>
                        <h4>北京</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>北京市朝阳区广渠路</p>
                    </div>
                    <div>
                        <h4>深圳</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>深圳市罗湖区金丰城</p>
                    </div>
                    <div class="mr0">
                        <h4>广州</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>广州市天河区体育西路</p>
                    </div>
                    <div>
                        <h4>上海</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>上海市徐汇区漕溪北路</p>
                    </div>
                    <div v-if="0">
                        <h4>杭州</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>杭州市上城区火车东站西广场</p>
                    </div>
                    <div class="mr0">
                        <h4>成都</h4>
                        <p><i class="iconfont icon-a-lujing121"></i>成都市高新区天府大道</p>
                    </div>
                </div>
                <round-card
                    v-if="deviceSize=='large'"
                    top="-48%"
                    right="-10%"
                ></round-card>
            </section>
        </client-only>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
import rectCard from "~/components/rect-card";
import rightBg from "~/components/right-bg";
import roundCard from "~/components/round-card";
export default {
    components: {
        rectCard,
        rightBg,
        roundCard
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    async asyncData({ params }) {},
    mounted() {},
    methods: {},
    data() {
        return {
           
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
                background: url("~/static/imgs/contact-bg.png") no-repeat center
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
        width: 100%;
        margin-top: 50px;
        > div {
            width: 63.54%;
            margin: 0 auto;
            height: 319px;
            border-radius: 52px;
            overflow: hidden;
            position: relative;
            display: flex;
            > div {
                flex: 1;
                height: 319px;
                &.lf-box {
                    background: $font-high-color
                        url("~/static/imgs/left-line.png") no-repeat center
                        center;
                    background-size: 100%;
                }
                &.rt-box {
                    background: $font-high-color
                        url("~/static/imgs/right-line2.png") no-repeat center
                        center;
                    background-size: 100%;
                }
                &.content-div {
                    width: 100%;
                    position: absolute;
                    height: 319px;
                    display: flex;
                    padding: 0 120px;
                    padding-top: 80px;
                    > div {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        > i {
                            font-size: 35px;
                            color: #fff;
                        }
                        h5 {
                            margin-top: 24px;
                            font-size: 18px;
                            font-family: "SourceHanSansCN-Bold";
                            font-weight: bold;
                            color: #fff;
                            margin-bottom: 10px;
                        }
                        > span {
                            display: flex;
                            margin-top: 10px;
                            color: #fff;
                            i {
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background-color: #fff;
                                color: $font-high-color;
                                font-size: 8px;
                                @include displayCenter;
                                margin-right: 10px;
                            }
                            > span {
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background-color: #fff;
                                color: $font-high-color;
                                @include displayCenter;
                                margin-right: 10px;
                                i {
                                    transform: scale(0.6) translateX(7.5px);
                                    &.vx {
                                        transform: scale(0.8) translateX(6.5px);
                                    }
                                    &.email {
                                        transform: scale(0.6) translateX(9px);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .pannel3 {
        position: relative;
        width: 100%;
        min-height: 500px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 80px 0 80px 0;
            color: $font-high-color;
        }
        .pannel-box {
            width: 63.53%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            > div {
                width: 31.14%;
                height: 170px;
                border-radius: 40px;
                margin-right: 3.27%;
                margin-bottom: 3.27%;
                padding: 2.8%;
                background: $sub-color url("~/static/imgs/address-bg.png")
                    no-repeat center center;
                background-size: 100%;
                &.mr0 {
                    margin-right: 0;
                }
                h4 {
                    font-size: 28px;
                    line-height: 32px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: $font-high-color;
                }
                p {
                    padding-left: 20px;
                    position: relative;
                    line-height: 28px;
                    i {
                        font-size: 16px;
                        color: $main-color;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(880);
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
                        font-size: vw(60);
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
                    top: vw(265);
                    transform: translateX(-50%);
                    border-radius: 0px vw(100) 0px vw(100);
                }
                i {
                    position: absolute;
                    z-index: 4;
                    color: $main-color;
                    font-size: vw(42);
                    &.triangle1 {
                        font-size: vw(58);
                        top: vw(711);
                        left: vw(94);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(280);
                        right: vw(99);
                        transform: rotate(270deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(723);
                        right: vw(93);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel2 {
            margin-top: vw(50);
            > div {
                width: 100%;
                border-radius: 0;
                height: vw(319);
                > div {
                    height: vw(319);
                    &.lf-box {
                        background-size: 125%;
                    }
                    &.rt-box {
                        background-size: 125%;
                    }
                    &.content-div {
                        height: vw(319);
                        padding: 0;
                        padding: vw(40);
                        > div {
                            > i {
                                font-size: vw(35);
                            }
                            h5 {
                                margin-top: vw(24);
                                font-size: vw(22);
                                margin-bottom: vw(10);
                            }
                            > span {
                                margin-top: vw(10);
                                font-size: vw(16);
                                i {
                                    width: vw(26);
                                    height: vw(26);
                                    font-size: vw(12);
                                    margin-right: vw(10);
                                }
                                > span {
                                    width: vw(26);
                                    height: vw(26);
                                    margin-right: vw(10);
                                    i {
                                        font-size: vw(12);
                                        transform: scale(0.6)
                                            translateX(vw(7.5vw));
                                        &.vx {
                                            transform: scale(0.8)
                                                translateX(vw(6.5));
                                        }
                                        &.email {
                                            transform: scale(0.6)
                                                translateX(vw(9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .pannel3 {
            min-height: auto;
            height: vw(650);
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(80) 0;
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                > div {
                    width: vw(220);
                    height: vw(180);
                    border-radius: vw(20);
                    margin-right: vw(20);
                    margin-bottom: vw(20);
                    padding: vw(20);
                    background-size: 200%;
                    h4 {
                        font-size: vw(28);
                        line-height: vw(32);
                        margin-bottom: vw(10);
                    }
                    p {
                        padding-left: vw(20);
                        line-height: vw(28);
                        font-size: vw(20);
                        i {
                            font-size: vw(16);
                        }
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