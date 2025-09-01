<!--
 * @Description: widash介绍页
 * @FilePath: pages\introduce\widash.vue
-->
<template>
    <div class="container">
        <client-only>
            <square-card
                v-if="deviceSize=='large'"
                top="570px"
                left="-14%"
            ></square-card>
            <!-- 右边背景 -->
            <right-bg v-if="deviceSize=='large'"></right-bg>
            <section class="pannel1">
                <div>
                    <!-- 左边介绍 -->
                    <div class="txt-intro">
                        <div class="title-box">WiDash 迈大师</div>
                        <div class="sub-title">全新智能管理云平台</div>
                        <div class="txt-box">迈大师WiDash是云端管理平台，结合迈外迪商业IoT设备，
                            实现流量监控、助力营销、终端认证、网络安全审计合规等应用。
                            设备管理，应用赋能，统一入口，运维管理尽在掌握。
                        </div>
                    </div>
                    <!-- 右边 -->
                    <div
                        class="img-box"
                        v-if="deviceSize=='large'"
                        :style="{width:pannel.width,height:pannel.height}"
                    >
                        <img
                            src="~/static/imgs/widash-pc-bg.png"
                            alt=""
                            :style="{width:pannel.width,height:pannel.height}"
                        >
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                    <div
                        class="bg-div"
                        v-else
                    >
                        <div class="bg-top"></div>
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                        <img
                            src="~/static/imgs/widash.png"
                            alt=""
                        >
                    </div>

                </div>
            </section>
            <section class="pannel2">
                <div>
                    <div>
                        <i class="iconfont icon-zidonghua"></i>
                        <div class="bg-w">
                            <h3>自动化、自主化</h3>
                            <p>统一管理平台，便捷的查看设备状态</p>
                        </div>
                    </div>
                    <div class="mr0">
                        <i class="iconfont icon-jianrongxing"></i>
                        <div class="bg-w">
                            <h3>兼容性强</h3>
                            <p>兼容性强，可支持产品、方案的快速搭建，降低产品方案的开发成本</p>
                        </div>
                    </div>
                    <div>
                        <i class="iconfont icon-a-lujing31"></i>
                        <div class="bg-w">
                            <h3>完善应用生态</h3>
                            <p>打造完善的应用生态，提供丰富应用价值输出</p>
                        </div>
                    </div>
                    <div class="mr0">
                        <i class="iconfont icon-a-lujing32"></i>
                        <div class="bg-w">
                            <h3>深入分析数据</h3>
                            <p>输出更具实用性的数据形态和深度，完善数据管理业务的目标闭环</p>
                        </div>
                    </div>
                </div>
            </section>
        </client-only>
    </div>
</template>
<script>
import { mapState } from "vuex";
import squareCard from "~/components/square-card";
import rightBg from "~/components/right-bg";
export default {
    components: {
        squareCard,
        rightBg
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    async asyncData({ params }) {},
    created() {
        if (this.deviceSize == "large") {
            if (typeof window !== "undefined") {
                window.addEventListener("resize", () => {
                    this.computedWidth();
                });
                window.dispatchEvent(new Event('resize'))
            }
        }
    },
    mounted() {},
    methods: {
        computedWidth() {
            const width = document.body.clientWidth;
            if (width > 1920) {
                this.pannel = {
                    width: "1110px",
                    height: "626px"
                };
            } else {
                let lastW = width * 0.5489;
                let lastH = (lastW * 626) / 1110;
                lastW = lastW>1040?1040:lastW;
                this.pannel = {
                    width: lastW + "px",
                    height: lastH + "px"
                };
            }
        }
    },
    data() {
        return {
            pannel: {
                width: "1110px",
                height: "626px"
            }
        };
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    overflow: hidden;
    .right-bg {
        top: 0 !important;
    }
    .pannel1 {
        height: 762px;
        width: 100%;
        position: relative;
        > div {
            // width: 1920px;
            width: auto;
            height: inherit;
            margin: 0 auto;
            display: flex;
            // justify-content: flex-end;
            justify-content: center;
            position: relative;
            z-index: 10;
        }

        .txt-intro {
            // padding-left: 400px;
            padding-left: 200px;
            width: 605px;
            .title-box {
                font-size: 50px;
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
        .img-box {
            position: relative;
            top: 69px;
            z-index: 8;
            width: 1054px;
            height: 627px;
            img {
                width: 1054px;
                height: 627px;
                border-radius: 10px;
                // box-shadow: 0px 19.72px 78.89px 0px rgba(0, 0, 0, 0.2);
                // box-shadow: -3px 3px 3px -2px rgba(0, 0, 0, 0.2);
            }
            i {
                position: absolute;
                color: $main-color;
                font-size: 40px;
                &.triangle1 {
                    bottom: 13%;
                    left: -1%;
                    transform: rotate(270deg);
                }
                &.triangle2 {
                    top: -3%;
                    right: 47%;
                    transform: rotate(180deg);
                }
                &.triangle3 {
                    font-size: 72px;
                    bottom: -4%;
                    right: 39%;
                    transform: rotate(180deg);
                }
            }
        }
        > img {
            position: absolute;
            // right: -7%;
            left: 41%;
            top: -4%;
            z-index: 9;
            width: 66%;
            width: 1211px;
            height: 810px;
        }
    }
    .pannel2 {
        width: 100%;
        min-height: 374px;
        margin-top: 50px;
        > div {
            width: 55.2%;
            height: inherit;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            > div {
                margin-right: 6.8%;
                margin-bottom: 6.8%;
                width: 46.6%;
                padding-top: 16.42%;
                border-radius: 20px;
                box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                position: relative;

                .bg-w {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 174px;
                    background: url("~/static/imgs/bg-tixing.png") no-repeat
                        center 47%;
                    background-size: 135%;
                    padding-left: 70px;
                    padding-top: 30px;
                    h3 {
                        font-size: 22px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 32px;
                        color: $font-high-color;
                    }
                    p {
                        // width: 65%;
                        width: 90%;
                        margin-top: 20px;
                        font-size: 16px;
                        font-weight: normal;
                        line-height: 28px;
                        color: $font-main-color;
                        height: 56px;
                        overflow-y: auto;
                    }
                }
                &.mr0 {
                    margin-right: 0;
                }
                i {
                    @include displayCenter;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                    background-color: $main-color;
                    font-size: 40px;
                    color: #fff;
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(842);
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
                    width: vw(750);
                    position: relative;
                    z-index: 2;
                    left: 50%;
                    top: vw(306);
                    transform: translateX(-50%);
                }
                i {
                    position: absolute;
                    z-index: 4;
                    color: $main-color;
                    font-size: vw(62);
                    &.triangle1 {
                        font-size: vw(54);
                        top: vw(322);
                        right: vw(334);
                        transform: rotate(180deg);
                    }
                    &.triangle2 {
                        top: vw(629);
                        left: vw(49);
                        transform: rotate(270deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(673);
                        right: vw(82);
                        transform: rotate(180deg);
                    }
                }
            }
            > img {
                display: none;
            }
        }
        .pannel2 {
            width: 100%;
            padding: 0;
            margin-bottom: vw(0);
            margin-top: 0;
            min-height: auto;
            > div {
                width: 100%;
                padding: 0 vw(40);
                > div {
                    width: vw(325);
                    height: vw(170);
                    margin-right: vw(20);
                    margin-bottom: vw(20);
                    // border: 1px solid #f00;
                    padding: 0;
                    border-radius: vw(20);
                    box-shadow: 0px vw(10) vw(60) 0px rgba(38, 45, 118, 0.08);
                    .bg-w {
                        height: vw(170);
                        padding: vw(30);
                        background: url("~/static/imgs/bg-tixing.png") no-repeat
                            73% 44%;
                        background-size: 200%;
                        h3 {
                            font-size: vw(22);
                            line-height: vw(32);
                        }
                        p {
                            width: 100%;
                            margin-top: vw(20);
                            font-size: vw(20);
                            line-height: vw(28);
                        }
                    }
                    i {
                        width: vw(65);
                        height: vw(65);
                        font-size: vw(40);
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1200px) and (max-width: 1730px) {
    .container {
        .pannel2 {
            > div {
                width: 1050px;
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