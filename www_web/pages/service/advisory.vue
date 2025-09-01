<!--
 * @Description: 咨询服务
 * @FilePath: pages\service\advisory.vue
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
                    <div class="title-box">咨询服务</div>
                    <div
                        class="txt-box"
                        v-if="deviceSize=='large'"
                    >为客户提供从解决方案到<br />技术支持的全方位咨询服务。</div>
                    <div
                        class="txt-box"
                        v-else
                    >为客户提供从解决方案到技术支持的全方位咨询服务。</div>
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
                        src="~/static/imgs/advisory-bg.png"
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
            <div class="title-box">解决方案咨询服务</div>
            <p>基于客户的企业战略、业务及IT规划，进行全方位的现状评估及管理诊断分析，为客户提供未来业务及IT架构的规划设计，
                最终为客户提供切实可行的信息化规划和落地实施方案。</p>
            <el-row :gutter="deviceSize!='large'?0:60">
                <el-col :span="6">
                    <div class="grid-content">
                        <i class="iconfont icon-a-lianji21"></i>
                        <p>连锁、商业、写字楼<br />网络架构方案<br />(有线+无线网络)</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <i class="iconfont icon-a-Vector3"></i>
                        <p>巡店、客流<br />客群属性及试穿试戴等<br />顾客行为分析</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <i class="iconfont icon-a-lujing3"></i>
                        <p>弱电系统<br />方案设计</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content">
                        <i class="iconfont icon-a-lianji20"></i>
                        <p>驻场、巡检<br />现场运维服务</p>
                    </div>
                </el-col>
            </el-row>
        </section>
        <section class="pannel3">
            <div class="title-box">技术支持咨询服务</div>
            <p>通过一流的工程师技术团队为客户提供专人技术咨询服务，解决客户在出口防火墙、企业路由器、核心交换机、服务器等项目交付中遇到的技术问题。</p>
            <div class="pannel-box">
                <el-row :gutter="deviceSize!='large'?0:25">
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="iconfont icon-a-Vector4"></i>
                            <p>为客户解决涵盖迈外迪自有产品以外的国内外主流厂商设备技术问题。</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="iconfont icon-a-Vector5"></i>
                            <p>技术支持咨询团队多人拥有CCIE、HCIE等高级认证和丰富的技术咨询经验。</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content">
                            <i class="iconfont icon-a-Vector11"></i>
                            <p>技术咨询支持方式包括远程电话、远程操作协助和现场技术咨询等多种方式。</p>
                        </div>
                    </el-col>
                </el-row>

            </div>

        </section>

    </div>
</template>
<script>
import { mapState } from "vuex";
import rectCard from "~/components/rect-card";
import rightBg from "~/components/right-bg";
export default {
    components: {
        rectCard,
        rightBg
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    async asyncData({ params }) {
        console.log("params", params);
    },
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
            height: 690px;
            .box {
                // width: 26.45vw;
                // padding-top: 32.6vw;
                width: 488px;
                height: 602px;
                border-radius: 0px 100px 0px 100px;
                overflow: hidden;
                background: url("~/static/imgs/advisory-bg.png") no-repeat 65%
                    75%;
                // background: url("~/static/imgs/advisory-bg.png") no-repeat 25%
                //     55%;
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
        margin: 0 auto;
        margin-top: 50px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
        }
        > p {
            width: 750px;
            margin: 30px auto 50px auto;
            font-size: 16px;
            font-weight: normal;
            line-height: 18px;
            text-align: center;
            color: $font-high-color;
        }
        .el-row {
            width: 100%;
            height: 214px;
            .grid-content {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 30px 0;
                i {
                    font-size: 34px;
                    color: $main-color;
                }
                p {
                    font-size: 18px;
                    font-weight: normal;
                    line-height: 25px;
                    text-align: center;
                    color: $font-main-color;
                    margin-top: 10px;
                }
            }
        }
    }
    .pannel3 {
        position: relative;
        margin-top: 70px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
        }
        > p {
            width: 750px;
            margin: 30px auto 50px auto;
            font-size: 16px;
            font-weight: normal;
            line-height: 18px;
            text-align: center;
            color: $font-high-color;
        }
        .pannel-box {
            display: flex;
            width: 63.54%;
            margin: 0 auto;
            .el-row {
                width: 100%;
            }
            .grid-content {
                height: 200px;
                border-radius: 20px;
                border: 1px solid #d3dcd4;
                display: flex;
                justify-content: center;
                flex-direction: column;
                // padding-left: 40px;
                padding: 0 30px;
                i {
                    font-size: 35px;
                    color: $main-color;
                }

                p {
                    margin-top: 30px;
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 28px;
                    color: $font-main-color;
                    max-width: 280px;
                }
            }
        }
    }
}
@include pcMini {
    .container {
        .pannel1 {
            > div {
                width: 65%;
            }
        }
        .pannel2 {
            width: 1167px;
        }
        .pannel3 {
            .pannel-box {
                width: 1167px;
                .grid-content {
                    p {
                        width: auto;
                        max-width: 280px;
                    }
                }
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
                    top: vw(265);
                    transform: translateX(-50%);
                    border-radius: 0px vw(100) 0px vw(100);
                    background: url("~/static/imgs/advisory-bg.png") no-repeat
                        65% 75%;
                    background-size: 200%;
                }
                img {
                    width: vw(510);
                    height: vw(586);
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
            height: vw(550);
            overflow: hidden;
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
            }
            > p {
                width: 100%;
                padding: 0 vw(40);
                font-size: vw(26);
                line-height: vw(40);
                text-align: left;
                margin: vw(30) 0 vw(30) 0;
            }
            .el-row {
                height: vw(280);
                .grid-content {
                    padding: vw(20) 0;
                    i {
                        font-size: vw(34);
                    }
                    p {
                        font-size: vw(22);
                        line-height: vw(28);
                        margin-top: vw(10);
                        padding: 0 vw(20);
                    }
                }
            }
        }
        .pannel3 {
            display: block;
            width: 100%;
            height: vw(530);
            margin-top: vw(10);
            .title-box {
                width: 100%;
                font-size: vw(42);
                line-height: vw(42);
            }
            > p {
                width: 100%;
                padding: 0 vw(40);
                font-size: vw(26);
                line-height: vw(40);
                text-align: left;
                margin: vw(30) 0 vw(50) 0;
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                /deep/ {
                    .el-col {
                        width: vw(223);
                        &:nth-child(2) {
                            margin: 0 vw(20);
                        }
                    }
                }
                .grid-content {
                    height: vw(240);
                    border-radius: vw(20);
                    text-align: center;
                    padding: vw(20);
                    i {
                        font-size: vw(35);
                    }
                    p {
                        margin-top: vw(20);
                        width: auto;
                        font-size: vw(24);
                        line-height: vw(28);
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