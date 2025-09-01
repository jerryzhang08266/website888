<!--
 * @Description: 运维服务
 * @FilePath: pages\service\maintenance.vue
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
        <!-- 半圆 -->
        <div
            class="half-round"
            v-if="deviceSize=='large'"
        ></div>
        <section class="pannel1">
            <div>
                <!-- 左边介绍 -->
                <div class="txt-intro">
                    <div class="title-box">运维服务</div>
                    <div class="txt-box">
                        为客户提供迈外迪产品或其他弱电厂商涉及的产品售后运维支持服务，涉及远程技术支持、现场服务、驻场服务以及IT服务外包等各类运维服务。
                    </div>
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
                    <!-- <img
                        src="~/static/imgs/maintenance-bg.png"
                        alt=""
                    > -->
                    <div class="img-box-div"></div>
                    <i class="iconfont icon-zhijiao triangle1"></i>
                    <i class="iconfont icon-zhijiao triangle2"></i>
                    <i class="iconfont icon-zhijiao triangle3"></i>
                </div>
            </div>
        </section>
        <section class="pannel2">
            <div class="square-box"></div>
            <div class="yuancheng"></div>
            <div class="desc-box">
                <h3>远程技术支持</h3>
                <div class="item-box">
                    <div>
                        <span class="left">7*24小时</span>
                        <span class="right">400客服响应</span>
                    </div>
                    <div>
                        <span class="left">7*12小时</span>
                        <span class="right">专家技术支持</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="pannel3">
            <div class="desc-box">
                <div>
                    <h3>现场运维服务</h3>
                    <p><i class="iconfont icon-plus"></i>现场故障处理</p>
                    <p><i class="iconfont icon-plus"></i>现场网络优化</p>
                    <p><i class="iconfont icon-plus"></i>定期巡检</p>
                </div>
            </div>
            <div class="service"></div>
            <div class="square-box"></div>

        </section>
        <section class="pannel4">
            <div class="title-box">驻场运维服务</div>
            <p class="desc-p">现场技术支持 系统健康检查 技术文档整理<br />系统运行监控 系统配置优化 服务总结报告</p>
            <div class="pannel-box">
                <el-row :gutter="deviceSize=='large'?26:0">
                    <el-col :span="6">
                        <div class="grid-content">
                            <i class="iconfont icon-a-lujing1"></i>
                            <h3>服务内容</h3>
                            <p>采用双中心模式，建立强大的招募团队，两大运维中心同时推荐，双管齐下。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <i class="iconfont icon-a-lianji1"></i>
                            <h3>精准匹配</h3>
                            <p>实现平台智能筛选，精确匹配工程师资源。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <i class="iconfont icon-a-lianji2"></i>
                            <h3>兜底保障</h3>
                            <p>迈外迪拥有分布于全国各地的自有工程师，可以为客户提供兜底式服务，保障项目顺利交付。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content">
                            <i class="iconfont icon-a-lujing22"></i>
                            <h3>管理无忧</h3>
                            <p>两大运维中心为全国工程师提供支持，提高全国驻场工程师的稳定性和归属感，并获得成长和激励。</p>
                        </div>
                    </el-col>
                </el-row>
            </div>

        </section>
        <section class="pannel5">
            <div>
                <h3>IT服务外包</h3>
                <i class="icon-box iconfont icon-jiangbei"></i>
                <span class="txt-box">
                    涵盖多技能<br />方向类型
                </span>
                <div class="square-box"></div>
                <div class="mohu">
                    <div>
                        <span class="txt1">软件开发类</span>
                        <span class="txt2">系统运维</span>
                        <span class="txt3">桌面网络运维</span>
                        <span class="txt4">渗透测试</span>
                        <span class="txt5">IT技术支持</span>
                        <span class="txt6">云计算</span>
                        <span class="txt7">项目管理</span>
                    </div>
                </div>
                <div class="right-box">
                    <h3>以客户IT服务需求为核心</h3>
                    <p class="mb100">通过标准化管理、专家团队应急保障等，提供全生命周期的IT外包服务。</p>
                    <h3>互联网+平台</h3>
                    <p>基于互联网+平台的思维，建立工程师云资源池，通过大数据可视化标签，解决客户IT服务痛点，为客户快速精准匹配服务需求。</p>
                </div>
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
    async asyncData({ params }) {},
    mounted() {},
    methods: {},
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    overflow: hidden;
    .half-round {
        position: absolute;
        top: 1650px;
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
                background: url("~/static/imgs/maintenance-bg.png") no-repeat
                    center center;
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
                font-weight: 400;
                line-height: 26px;
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
        height: auto;
        margin: 0 auto;
        margin-top: 100px;
        position: relative;
        .square-box {
            width: 40.32%;
            padding-top: 39%;
            background: $sub-color;
            border-radius: 0 30px 0 30px;
            display: inline-block;
        }
        .yuancheng {
            position: absolute;
            left: 7.3%;
            bottom: 0;
            width: 41.63%;
            padding-top: 33.52%;
            background: url("~/static/imgs/yuancheng.png") no-repeat center
                center;
            background-size: 100%;
        }
        .desc-box {
            width: calc(100% - 41%);
            float: right;
            h3 {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                color: $font-high-color;
                padding-left: 22%;
                margin-top: 95px;
                margin-bottom: 60px;
            }
            .item-box {
                width: 100%;
                height: auto;
                padding-left: 22%;
                > div {
                    margin-bottom: 20px;
                }
                span {
                    display: inline-block;
                }
                .left {
                    width: 146.98px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    font-size: 24px;
                    color: #fff;
                    background: url("~/static/imgs/arrow-r.png") no-repeat
                        center center;
                    background-size: 100%;
                    position: relative;
                    z-index: 8;
                }
                .right {
                    width: 260px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    font-size: 24px;
                    color: $font-high-color;
                    background: $sub-color;
                    margin-left: -15px;
                }
            }
        }
    }
    .pannel3 {
        // width: 63.54%;
        width: 1167px;
        height: auto;
        margin: 0 auto;
        margin-top: 100px;
        position: relative;
        .desc-box {
            width: 100%;
            padding-top: 43.44%;
            position: relative;
            > div {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                padding-left: 7.7%;
                h3 {
                    margin-top: 106px;
                    font-size: 42px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 42px;
                    color: $font-high-color;
                    margin-bottom: 60px;
                }
                p {
                    font-size: 24px;
                    line-height: 35px;
                    height: 35px;
                    color: $font-high-color;
                    margin-bottom: 20px;
                    i {
                        color: $main-color;
                        font-size: 26px;
                        margin-right: 15px;
                        position: relative;
                        top: 2px;
                    }
                }
            }
        }
        .service {
            width: 35.81%;
            padding-top: 38.27%;
            background: url("~/static/imgs/service-bg.png") no-repeat 89% 86%;
            background-size: 250%;
            position: absolute;
            top: 63px;
            right: 0;
            z-index: 3;
        }
        .square-box {
            width: 40.32%;
            padding-top: 39%;
            background: $sub-color;
            border-radius: 30px 0 30px 0;
            position: absolute;
            top: 0;
            right: 80px;
        }
    }
    .pannel4 {
        position: relative;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 80px 0 0 0;
            color: $font-high-color;
        }
        .desc-p {
            font-size: 20px;
            line-height: 29px;
            margin: 30px 0 70px 0;
            color: $font-high-color;
            text-align: center;
        }
        .pannel-box {
            display: flex;
            // width: 63.54%;
            width: 1167px;
            height: auto;
            margin: 0 auto;
            padding-bottom: 50px;
            .el-row {
                width: 100%;
            }
            .grid-content {
                border-radius: 20px;
                box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                @include displayCenter;
                justify-content: normal;
                flex-direction: column;
                padding: 30px 26px;
                height: 244px;
                i {
                    display: block;
                    width: 74px;
                    height: 74px;
                    background: $main-color;
                    color: #fff;
                    font-size: 30px;
                    border-radius: 50%;
                    @include displayCenter;
                }
                h3 {
                    font-size: 18px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 26px;
                    color: $font-medium-color;
                    margin: 20px 0 10px 0;
                }
                p {
                    font-size: 14px;
                    font-weight: normal;
                    // height: auto;
                    height: 53px;
                    overflow-y: auto;
                    line-height: 18px;
                    color: $font-medium-color;
                    text-align: center;
                }
            }
        }
    }
    .pannel5 {
        margin-top: 40px;
        width: 100%;
        height: 718px;
        background: $sub-color url("~/static/imgs/it-bg.png") no-repeat center
            center;
        > div {
            // width: 63.54%;
            width: 1167px;
            height: inherit;
            margin: 0 auto;
            padding-top: 70px;
            position: relative;
            h3 {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                text-align: center;
                color: $font-high-color;
            }
            .icon-box {
                width: 80px;
                height: 80px;
                background: $main-color;
                border-radius: 50%;
                @include displayCenter;
                color: #fff;
                font-size: 40px;
                position: absolute;
                top: 150px;
                left: 0;
                z-index: 4;
            }
            .txt-box {
                position: absolute;
                top: 185px;
                left: 40px;
                z-index: 3;
                width: 23.85%;
                height: 135px;
                border-radius: 20px;
                @include displayCenter;
                font-size: 36px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 52px;
                background: #fff;
                color: $font-high-color;
            }
            .square-box {
                width: 40.32%;
                padding-top: 39%;
                background: $font-high-color url("~/static/imgs/it-line.png")
                    no-repeat center center;
                border-radius: 0 30px 0 30px;
                position: absolute;
                top: 150px;
                left: 10.6%;
            }
            .mohu {
                width: 44%;
                padding-top: 34%;
                border: 1px solid $sub-color;
                border-radius: 20px;
                background: url("~/static/imgs/mengceng.png") no-repeat center
                    center;
                position: absolute;
                bottom: 55px;
                left: 19%;
                z-index: 2;
                > div {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    span {
                        display: inline-block;
                        width: auto;
                        height: 62px;
                        line-height: 62px;
                        background: $main-color;
                        color: #fff;
                        text-align: center;
                        font-size: 24px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        padding: 0 30px;
                        border-radius: 60px;
                        position: absolute;
                        &.txt1 {
                            top: 16%;
                            left: 20%;
                        }
                        &.txt2 {
                            top: 40%;
                            left: 15%;
                        }
                        &.txt3 {
                            bottom: 20%;
                            left: 7%;
                        }
                        &.txt4 {
                            top: 5.7%;
                            right: 8%;
                        }
                        &.txt5 {
                            top: 30%;
                            right: 4%;
                        }
                        &.txt6 {
                            top: 52%;
                            right: 20%;
                        }
                        &.txt7 {
                            right: 4%;
                            bottom: 10%;
                        }
                    }
                }
            }
            .right-box {
                width: 50%;
                float: right;
                padding-left: 17.5%;
                padding-top: 90px;
                h3 {
                    font-size: 32px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: $font-high-color;
                    text-align: left;
                }
                p {
                    margin-top: 20px;
                    font-size: 16px;
                    line-height: 22px;
                    color: $font-high-color;
                    &.mb100 {
                        margin-bottom: 100px;
                    }
                }
            }
        }
    }
}
@include pcMini {
    .container {
        .pannel2 {
            width: 1167px;
        }

        .pannel4 {
            .pannel-box {
                width: 69%;
                .grid-content {
                    height: auto;
                    min-height: 244px;
                }
            }
        }
        .pannel5 {
            > div {
                width: 75%;
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(920);
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
                        font-size: vw(26);
                        line-height: vw(33);
                        margin-top: vw(30);
                        text-align: center;
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
                .img-box-div {
                    width: vw(510);
                    height: vw(586);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    top: vw(310);
                    transform: translateX(-50%);
                    border-radius: 0px vw(100) 0px vw(100);
                    background: url("~/static/imgs/maintenance-bg.png")
                        no-repeat center center;
                    background-size: 100%;
                }
                img {
                    width: vw(510);
                    height: vw(546);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    top: vw(310);
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
                        top: vw(330);
                        right: vw(99);
                        transform: rotate(180deg);
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
            margin-top: vw(30);
            width: 100%;
            height: vw(340);
            overflow: hidden;
            padding: 0 vw(40) 0 0;
            .square-box {
                display: none;
            }
            .yuancheng {
                position: relative;
                padding: 0;
                width: vw(325);
                height: vw(300);
                margin-right: vw(10);
                display: inline-block;
            }
            .desc-box {
                display: inline-block;
                width: vw(285);
                margin-left: vw(10);
                h3 {
                    padding-left: 0;
                    font-size: vw(42);
                    line-height: vw(42);
                    margin-top: vw(10);
                    margin-bottom: vw(40);
                }
                .item-box {
                    padding-left: 0;
                    > div {
                        margin-bottom: vw(30);
                    }
                    .left {
                        width: vw(120);
                        height: vw(40);
                        line-height: vw(40);
                        font-size: vw(22);
                    }
                    .right {
                        width: vw(160);
                        height: vw(40);
                        line-height: vw(40);
                        font-size: vw(22);
                        margin-left: vw(-15);
                    }
                }
            }
        }
        .pannel3 {
            width: 100%;
            height: vw(460);
            margin-top: vw(10);
            padding: 0 vw(40);
            .desc-box {
                padding: 0;
                > div {
                    padding-left: 0;
                    h3 {
                        margin-top: vw(40);
                        font-size: vw(42);
                        line-height: vw(42);
                        margin-bottom: vw(40);
                    }
                    p {
                        font-size: vw(24);
                        line-height: vw(35);
                        height: vw(35);
                        margin-bottom: vw(20);
                        i {
                            font-size: vw(26);
                            margin-right: vw(20);
                            top: vw(2);
                        }
                    }
                }
            }
            .square-box {
                width: vw(360);
                height: vw(380);
                padding: 0;
                border-radius: vw(60) 0 vw(60) 0;
                right: vw(60);
            }
            .service {
                width: vw(360);
                height: vw(400);
                padding: 0;
                top: vw(60);
                right: vw(20);
            }
        }
        .pannel4 {
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(80) 0 0 0;
            }
            .desc-p {
                font-size: vw(24);
                line-height: vw(36);
                margin: vw(30) 0 vw(60) 0;
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                /deep/ {
                    .el-col {
                        width: vw(162.5);
                        margin-right: vw(20);
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
                .grid-content {
                    border-radius: vw(20);
                    box-shadow: 0px 0px vw(20) 0px rgba(0, 0, 0, 0.1);
                    padding: vw(20) vw(10);
                    height: vw(324);
                    i {
                        width: vw(74);
                        height: vw(74);
                        font-size: vw(30);
                    }
                    h3 {
                        font-size: vw(22);
                        line-height: vw(26);
                        margin: vw(20) 0 vw(10) 0;
                    }
                    p {
                        font-size: vw(20);
                        line-height: vw(22);
                    }
                }
            }
        }
        .pannel5 {
            margin-top: vw(60);
            height: vw(580);
            background-size: 200%;
            margin-bottom: vw(50);
            > div {
                width: 100%;
                padding-top: vw(60);
                h3 {
                    font-size: vw(42);
                    line-height: vw(42);
                }
                .icon-box {
                    width: vw(80);
                    height: vw(80);
                    font-size: vw(40);
                    top: vw(150);
                    left: vw(10);
                }
                .txt-box {
                    top: vw(170);
                    left: vw(50);
                    font-size: vw(26);
                    width: vw(220);
                    height: vw(80);
                    line-height: vw(28);
                    border-radius: vw(20);
                }
                .square-box {
                    width: vw(300);
                    height: vw(280);
                    padding: 0;
                    background-size: 150%;
                    top: vw(140);
                    left: vw(30);
                }
                .mohu {
                    width: vw(350);
                    height: vw(320);
                    padding: 0;
                    border-radius: vw(20);
                    bottom: vw(50);
                    left: vw(60);
                    background-size: 150%;
                    > div {
                        span {
                            height: vw(50);
                            line-height: vw(50);
                            font-size: vw(24);
                            padding: 0 vw(20);
                            border-radius: vw(50);
                            &.txt1 {
                                top: vw(70);
                                left: vw(20);
                            }
                            &.txt2 {
                                top: vw(150);
                                left: 15%;
                            }
                            &.txt3 {
                                bottom: vw(40);
                                left: vw(15);
                            }
                            &.txt4 {
                                top: vw(15);
                                right: vw(10);
                            }
                            &.txt5 {
                                top: vw(90);
                                right: vw(-10);
                            }
                            &.txt6 {
                                top: vw(170);
                                right: vw(18);
                            }
                            &.txt7 {
                                right: vw(5);
                                bottom: vw(20);
                            }
                        }
                    }
                }
                .right-box {
                    width: vw(300);
                    padding: vw(60) vw(10) 0 0;
                    h3 {
                        font-size: vw(26);
                    }
                    p {
                        margin-top: vw(20);
                        font-size: vw(20);
                        line-height: vw(22);
                        padding: 0 vw(10);
                        &.mb100 {
                            margin-bottom: vw(40);
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