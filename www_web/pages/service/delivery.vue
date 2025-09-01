<!--
 * @Description: 交付服务
 * @FilePath: pages\service\delivery.vue
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
                    <div class="title-box">交付服务</div>
                    <div
                        class="txt-box"
                        v-if="deviceSize=='large'"
                    >为客户提供包含产品及产品系统的现场实施、交付服务。
                    </div>
                    <div
                        class="txt-box"
                        v-else
                    >为客户提供包含产品及产品系统的现场实施、交付服务。
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
                        src="~/static/imgs/delivery-bg.png"
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
            <div class="title-box">交付内容</div>
            <p class="desc-p">为客户提供迈外迪产品或其他弱电厂商涉及的设备安装、调试、施工、布线等技术服务。</p>
            <div class="flex-div">
                <div class="mr">
                    <div class="icon-div"><i class="iconfont icon-Vector"></i></div>
                    <div class="bg-div">
                        <h3>设备安装调试</h3>
                        <p>
                            提供设备上架、现场调试、远程调试等全流程的<br />设备安装调试服务。
                        </p>
                    </div>
                </div>
                <div>
                    <div class="icon-div"><i class="iconfont icon-a-Vector1"></i></div>
                    <div class="bg-div">
                        <h3>现场布线施工</h3>
                        <p>提供管道预埋、线缆铺设、机柜安装、线缆测试<br />等专业的现场施工布线服务。</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="pannel3">
            <div class="title-box">服务优势</div>
            <div class="pannel-box">
                <div class="flex">
                    <div class="grid-content">
                        <span class="icon-span">
                            <i class="iconfont icon-lujing"></i>
                        </span>
                        <div class="box">
                            <h3>覆盖全国的交付团队</h3>
                            <p>合作约有3000多支工程施工、交付团队，可以达到全国地市级城市的全覆盖。</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="grid-content">
                        <span class="icon-span">
                            <i class="iconfont icon-a-Vector2"></i>
                        </span>
                        <div class="box">
                            <h3>丰富的交付实施经验</h3>
                            <p>拥有合作多年且具备丰富的综合布线施工经验的专业化队伍，技术熟练、经验丰富。</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="grid-content">
                        <span class="icon-span">
                            <i class="iconfont icon-jishu"></i>
                        </span>
                        <div class="box">
                            <h3>强大的专业技术实力</h3>
                            <p>拥有完善的技术队伍、高技术能力的认证工程师（多人拥有服务器、 VMware、 Oracle、 Cisco网络、 Windows、 Linux等专业技证，以及CCIE、HCIE工程师 ）。</p>
                        </div>
                    </div>
                </div>
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
                background: url("~/static/imgs/delivery-bg.png") no-repeat
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
        .desc-p {
            font-size: 16px;
            font-weight: normal;
            line-height: 18px;
            text-align: center;
            margin: 30px 0 50px 0;
            color: $font-high-color;
        }
        .flex-div {
            display: flex;
            justify-content: center;
            > div {
                // width: 575px;
                width: 47.13%;
                height: 170px;
                position: relative;
                border-radius: 20px;
                box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                background: transparent;
                position: relative;
                .icon-div {
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    @include displayCenter;
                    background: $main-color;
                    i {
                        font-size: 28px;
                        color: #fff;
                    }
                }
                .bg-div {
                    // width: 575px;
                    width: 100%;
                    height: 170px;
                    position: relative;
                    border-radius: 20px;
                    padding-left: 80px;
                    background: url("~/static/imgs/white-bg.png") no-repeat
                        center center;
                    background-size: 130%;
                    background-position-y: 43%;
                    h3 {
                        font-size: 22px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 32px;
                        padding: 30px 0 20px 0;
                        color: $font-high-color;
                    }
                    p {
                        font-size: 16px;
                        font-weight: normal;
                        line-height: 28px;
                        color: $font-main-color;
                    }
                }
            }
            .mr {
                margin-right: 5.5%;
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
            padding: 100px 0 70px 0;
            color: $font-high-color;
        }
        .pannel-box {
            display: flex;
            // width: 63.54%;
            width: 1167px;
            height: 425px;
            margin: 0 auto;
            > div {
                flex: 1;
                &:nth-child(2) {
                    margin: 0 40px;
                }
            }
            .grid-content {
                position: relative;
                width: 100%;
                height: 375px;
                .icon-span {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: $main-color;
                    @include displayCenter;
                    i {
                        font-size: 32px;
                        color: #fff;
                    }
                }
                .box {
                    width: 100%;
                    height: 330px;
                    border-radius: 20px;
                    padding: 0 40px;
                    padding-top: 95px;
                    box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                    position: absolute;
                    top: 45px;
                    h3 {
                        font-size: 24px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 24px;
                        text-align: center;
                        color: $font-high-color;
                        margin-bottom: 28px;
                    }
                    p {
                        font-size: 20px;
                        font-weight: normal;
                        line-height: 28px;
                        height: 140px;
                        overflow-y: auto;
                        text-align: center;
                        color: $font-main-color;
                    }
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
                    background: url("~/static/imgs/delivery-bg.png") no-repeat
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
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
            }
            .desc-p {
                padding: 0 vw(140);
                margin: 0;
                font-size: vw(22);
                line-height: vw(26);
                text-align: left;
                margin: vw(30) 0 vw(50) 0;
            }
            .flex-div {
                padding: 0 vw(40);
                width: 100%;
                > div {
                    width: vw(325);
                    height: vw(200);
                    margin-right: vw(20);
                    margin-bottom: vw(20);
                    padding: 0;
                    border-radius: vw(20);
                    box-shadow: 0px vw(10) vw(60) 0px rgba(38, 45, 118, 0.08);
                    .icon-div {
                        width: vw(65);
                        height: vw(65);
                        i {
                            font-size: vw(28);
                        }
                    }
                    .bg-div {
                        height: vw(200);
                        padding: vw(30);
                        background: url("~/static/imgs/bg-tixing.png") no-repeat
                            73% 44%;
                        background-size: 250%;
                        h3 {
                            font-size: vw(22);
                            line-height: vw(32);
                            padding: 0;
                        }
                        p {
                            width: 100%;
                            margin-top: vw(10);
                            font-size: vw(20);
                            line-height: vw(28);
                        }
                    }
                }
            }
        }
        .pannel3 {
            min-height: auto;
            height: vw(750);
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(80) 0;
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                > div {
                    flex: 1;
                    &:nth-child(2) {
                        margin: 0 vw(40);
                    }
                }
                .grid-content {
                    height: vw(440);
                    .icon-span {
                        width: vw(90);
                        height: vw(90);
                        i {
                            font-size: vw(32);
                        }
                    }
                    .box {
                        height: vw(440);
                        border-radius: vw(20);
                        padding: 0 vw(20);
                        padding-top: vw(70);
                        box-shadow: 0px vw(10) vw(60) 0px
                            rgba(38, 45, 118, 0.08);
                        position: absolute;
                        top: vw(45);
                        h3 {
                            padding: 0 vw(20);
                            font-size: vw(24);
                            line-height: vw(30);
                            margin-bottom: vw(20);
                        }
                        p {
                            font-size: vw(20);
                            line-height: vw(28);
                            height: vw(140);
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