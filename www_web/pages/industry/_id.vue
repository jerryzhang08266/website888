<!--
 * @Description: 购物中心
 * @FilePath: pages\industry\shopping.vue
-->
<template>
    <div class="container">
        <client-only>
            <round-card
                v-show="deviceSize=='large'"
                width="34%"
                height="34%"
                top="1127px"
                right="-15%"
                zIndex="-1"
            ></round-card>
            <!-- 右边背景 -->
            <right-bg v-show="deviceSize=='large'"></right-bg>
            <section class="pannel1">
                <div>
                    <!-- 左边介绍 -->
                    <div class="txt-intro">
                        <div class="title-box">{{detail.title}}</div>
                        <div class="txt-box">{{detail.desc}}</div>
                        <!-- <div class="down-btn">
                        <nuxt-link to="/download"> 产品技术资料下载</nuxt-link>
                    </div> -->
                    </div>
                    <!-- 右边 -->
                    <div class="img-box">
                        <div
                            class="box"
                            :style="{ backgroundImage: `url(${detail.image})` }"
                        ></div>
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                    <div
                        class="bg-div"
                        v-show="deviceSize!='large'"
                    >
                        <div class="bg-top"></div>
                        <img
                            :src="detail.image"
                            alt=""
                        >
                        <!-- <img
                        src="~/static/imgs/contact-bg.png"
                        alt=""
                    > -->
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </div>
            </section>
            <section class="pannel2">
                <h3>行业场景及痛点</h3>
                <div class="pannel-box">
                    <div
                        class="one-box"
                        :class="idx==1?'':'medium'"
                        v-for="(item,idx) in scenes"
                        :key="idx"
                    >
                        <img
                            :src="item.image"
                            alt=""
                        >
                        <!-- <img
                        src="~/static/imgs/one-top.png"
                        alt=""
                    > -->
                        <div class="content-box">
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                    <!-- <div class="two-box medium">
                    <img
                        src="~/static/imgs/two-top.png"
                        alt=""
                    >
                    <div class="content-box">
                        <h3>营销引流难</h3>
                        <p>
                            通过营销活动引流是购物中心的日常运营动作，但在实际操作中却缺少有效的营销方式，以及营销效果评估数据。
                        </p>
                    </div>
                </div>
                <div class="three-box">
                    <img
                        src="~/static/imgs/three-top.png"
                        alt=""
                    >
                    <div class="content-box">
                        <h3>运营管理复杂</h3>
                        <p>
                            购物中心场所空间大，场景复杂，需要管理大量的设备、人员以及运营流程，这对购物中心的运营能力提出了更高的要求
                        </p>
                    </div>

                </div> -->
                </div>
            </section>
            <section class="pannel3">
                <h3>解决方案及价值</h3>
                <div class="pannel-box">
                    <div
                        v-for="(item,idx) in values"
                        :key="idx"
                    >
                        <i
                            class="iconfont"
                            :class="item.author"
                        ></i>
                        <div>
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                    <!-- <div>
                    icon-a-lujing110
                    <i class="iconfont icon-a-lujing41"></i>
                    <div>
                        <h3>改善营销引流</h3>
                        <p>
                            通过迈外迪Wi-Fi解决方案提供的云会员服务，购物中心可以跟顾客更好的连接，进而创新营销方式；同时，通过客流系统掌握客流数据，购物中心可以有效评估商场内营销活动的效果。
                        </p>
                    </div>
                </div>
                <div>
                    <i class="iconfont icon-a-lujing31"></i>
                    <div>
                        <h3>简化运营管理</h3>
                        <p>
                            通过迈外迪的商业IoT网络解决方案，购物中心可以建立完整的数字化运营管理平台，让购物中心的设备、人员、SaaS应用之间实现实时的数据交互，进行智能化运营管理。
                        </p>
                    </div>

                </div> -->
                </div>
            </section>
            <section class="pannel4">
                <h3>成功案例</h3>
                <el-carousel
                    indicator-position="none"
                    :autoplay="true"
                    :loop="true"
                    :height="deviceSize=='large'?'500px':'48vw'"
                    :arrow="deviceSize!='large'?'always':'always'"
                >
                    <el-carousel-item
                        v-for="(item,idx) in transData(cases)"
                        :key="idx"
                    >
                        <div class="item-out-box">
                            <div class="point1"></div>
                            <div class="point2"></div>
                            <div class="bg-div1"></div>
                            <div class="bg-div2"></div>
                            <div
                                class="item-box"
                                v-for="(subitem,index) in item"
                                :key="''+idx+index"
                            >
                                <img
                                    :src="subitem.image"
                                    alt=""
                                >
                                <p>{{subitem.desc}}</p>

                            </div>
                        </div>

                    </el-carousel-item>
                </el-carousel>
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
        console.log("params99", params);
        return {
            id: params.id * 1
        };
        // Api.industryDetail.get({ id: params.id }).then((res) => {
        //     console.log(111, res);
        // });
    },
    created() {},
    mounted() {
        this.getData();
    },
    methods: {
        getData(page) {
            Api.industryDetail.get({ id: this.id }).then((res) => {
                if (res.code == 1) {
                    this.detail = res.data;
                    let author = res.data.author.split(",");
                    if (author[0]) {
                        Api.industry.get({ cid: author[0] }).then((res) => {
                            if (res.code == 1) {
                                this.scenes = res.data.lists;
                            }
                        });
                    }
                    if (author[1]) {
                        Api.industry.get({ cid: author[1] }).then((res) => {
                            if (res.code == 1) {
                                this.values = res.data.lists;
                            }
                        });
                    }
                    if (author[2]) {
                        Api.industry.get({ cid: author[2] }).then((res) => {
                            if (res.code == 1) {
                                this.cases = res.data.lists;
                            }
                        });
                    }
                }
            });
        },
        transArr(arr, num) {
            const newData = arr.reduce((prev, curr, index) => {
                // num 一行要显示的数量
                const i = Math.floor(index / num);
                prev[i] = [...(prev[i] || []), curr];
                return prev;
            }, []);
            return newData;
        },
        transData(data) {
            let newArr = [];
            let num = this.deviceSize == "large" ? 1 : 1;
            newArr = this.transArr(data, num);
            return newArr;
        }
    },
    data() {
        return {
            id: "",
            detail: {
                title: "",
                desc: "",
                image: ""
            },
            scenes: [],
            values: [],
            cases: [
                // {
                //     logo_url: "",
                //     desc: "作为万达广场的数字化战略合作伙伴，迈外迪深度参与了全国350多家万达广场的数智化建设，为万达广场的精细化运营和智能化服务提供助力。"
                // },
                // {
                //     logo_url: "",
                //     desc: "迈外迪为全国14家融创文旅城提供了全面的网络接入、覆盖以及网监、营销服务，同时还有全国的网络运维服务，提升了融创文旅城的运营效率及整体体验。"
                // },
                // {
                //     logo_url: "",
                //     desc: "新城控股是国内商业地产龙头企业，旗下地产项目遍布100多个城市。迈外迪为新城控股旗下的吾悦广场提供了网络覆盖服务，为商场的数字化运营提供了助力。"
                // },
                // {
                //     logo_url: "",
                //     desc: "迈外迪为新世界全国30多家商场，包括新世界百货、新世界K11购物中心，提供了全面的网络覆盖及网络运营服务。"
                // },
                // {
                //     logo_url: "",
                //     desc: "作为万达广场的数字化战略合作伙伴，迈外迪深度参与了全国350多家万达广场的数智化建设，为万达广场的精细化运营和智能化服务提供助力。"
                // },
                // {
                //     logo_url: "",
                //     desc: "迈外迪为全国14家融创文旅城提供了全面的网络接入、覆盖以及网监、营销服务，同时还有全国的网络运维服务，提升了融创文旅城的运营效率及整体体验。"
                // },
                // {
                //     logo_url: "",
                //     desc: "新城控股是国内商业地产龙头企业，旗下地产项目遍布100多个城市。迈外迪为新城控股旗下的吾悦广场提供了网络覆盖服务，为商场的数字化运营提供了助力。"
                // },
                // {
                //     logo_url: "",
                //     desc: "迈外迪为新世界全国30多家商场，包括新世界百货、新世界K11购物中心，提供了全面的网络覆盖及网络运营服务。"
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
            .box {
                // width: 26.45vw;
                // padding-top: 32.6vw;
                width: 488px;
                height: 602px;
                border-radius: 0px 100px 0px 100px;
                overflow: hidden;
                // background: url("~/static/imgs/contact-bg.png") no-repeat center
                //     center;
                background-repeat: no-repeat;
                background-position: center;
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
                cursor: pointer;
            }
        }
    }
    .pannel2 {
        margin-top: 50px;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            margin-bottom: 90px;
            color: $font-high-color;
        }
        .pannel-box {
            // width: 63.53%;
            height: 507px;
            margin: 0 auto;
            // display: flex;
            min-width: 1166px;
            max-width: 1920px;
            overflow-x: auto;
            text-align: center;
            width: auto;
            white-space: nowrap;
            > div {
                flex: 1;
                display: inline-flex;
                width: 340px;
                padding: 30px;
                // height: 507px;
                height: 480px;
                text-align: left;
                border-radius: 20px;
                position: relative;
                margin-right: 25px;
                &:last-child {
                    margin-right: 0;
                }
                &.one-box {
                    background: url("~/static/imgs/one-box.png") no-repeat
                        center center;
                    background-size: 110%;
                }
                &.two-box {
                    background: url("~/static/imgs/two-box.png") no-repeat
                        center center;
                    background-size: 110%;
                }
                &.three-box {
                    background: url("~/static/imgs/three-box.png") no-repeat
                        center center;
                    background-size: 110%;
                }
                &.medium {
                    // margin: 0 25px;
                }

                > img {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 215px;
                    left: 0;
                    border-radius: 20px 20px 0 0;
                }
                .content-box {
                    padding-top: 200px;
                    white-space: initial;
                    h3 {
                        // font-size: 32px;
                        font-size: 29px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 32px;
                        text-align: left;
                        color: $font-high-color;
                        margin: 30px 0;
                        text-align: center;
                    }
                    p {
                        font-size: 16px;
                        color: $font-main-color;
                        line-height: 28px;
                        padding: 0 10%;
                    }
                }
            }
        }
    }
    .pannel3 {
        margin-top: 100px;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            margin-bottom: 80px;
            color: $font-high-color;
        }
        .pannel-box {
            width: 63.53%;
            height: 240px;
            margin: 0 auto;
            display: flex;
            min-width: 1166px;
            > div {
                flex: 1;
                padding: 30px;
                height: inherit;
                text-align: left;
                i {
                    font-size: 35px;
                    color: $main-color;
                }
                h3 {
                    font-size: 20px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 20px;
                    text-align: left;
                    color: $font-high-color;
                    margin: 15px 0 20px 0;
                }
                > div {
                    p {
                        font-size: 16px;
                        color: $font-main-color;
                        line-height: 28px;
                    }
                }
            }
        }
    }

    .pannel4 {
        // margin-top: 110px;
        width: 100%;
        height: 1000px;
        position: relative;
        // background: $sub-color url("~/static/imgs/case-bg.png") no-repeat center
        //     center;
        // background-size: 110%;
        background: linear-gradient(
            180deg,
            rgba(241, 248, 241, 0) -3%,
            rgba(241, 248, 241, 0.53) 14%,
            #f1f8f1 45%,
            rgba(241, 248, 241, 0.43) 84%,
            rgba(241, 248, 241, 0) 100%
        );
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 180px 0 80px 0;
            color: $font-high-color;
        }

        /deep/ {
            .el-carousel {
                width: 1120px;
                margin: 0 auto;
            }
            .el-carousel__arrow {
                background: none;
                &:hover {
                    background: none;
                }
                i {
                    font-size: 35px;
                    color: $font-high-color;
                    font-weight: bolder;
                }
            }
            .el-carousel__item {
                > div {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 20px 30px;
                    justify-content: center;
                }
            }
            .item-out-box {
                width: 985px;
                margin: 0 auto;
                height: inherit;
                position: relative;
                .point1 {
                    background: url("~/static/imgs/point11.png") no-repeat
                        center center;
                    background-size: 100%;
                    position: absolute;
                    top: 44px;
                    right: 0px;
                    width: 472.16px;
                    height: 213.76px;
                    z-index: -1;
                }
                .point2 {
                    background: url("~/static/imgs/point22.png") no-repeat
                        center center;
                    background-size: 100%;
                    position: absolute;
                    left: 0px;
                    bottom: 20px;
                    width: 472.16px;
                    height: 213.76px;
                    z-index: -1;
                }
                .bg-div1 {
                    width: 790px;
                    height: 400px;
                    position: absolute;
                    z-index: 2;
                    background-color: #fff;
                    bottom: 30px;
                    left: 96px;
                    border-radius: 20px;
                    box-shadow: 0px 18px 52.85px 0px rgba(241, 248, 241, 0.5);
                }
                .bg-div2 {
                    width: 730px;
                    height: 400px;
                    position: absolute;
                    z-index: 1;
                    background-color: #fff;
                    // opacity: 0.8;
                    bottom: 5px;
                    left: 128px;
                    border-radius: 20px;
                    // box-shadow: 0px 18px 52.85px 0px rgba(241, 248, 241, 0.5);
                }
            }
            .item-box {
                // width: 22%;
                width: 850px;
                height: 400px;
                padding: 30px 175px;
                padding-top: 37px;
                background: url("~/static/imgs/yinhao.png") no-repeat 500px 30px;
                background-size: 234px 168px;
                background-color: #fff;
                margin: 20px;
                border-radius: 20px;
                position: relative;
                z-index: 5;
                img {
                    height: 96px;
                    max-width: 230px;
                    margin-bottom: 20px;
                    border: 1px solid #e4f0e4;
                    border-radius: 20px;
                    padding: 10px 20px;
                }
                p {
                    font-size: 22px;
                    font-weight: normal;
                    line-height: 30px;
                    color: $font-main-color;
                    height: 180px;
                    overflow-y: auto;
                }
                .point3 {
                    background: url("~/static/imgs/yinhao.png") no-repeat center
                        center;
                    background-size: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 20px;
                    width: 234px;
                    height: 168px;
                    z-index: -1;
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            // height: vw(1120);
            height: vw(1040);
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
                        width: vw(286);
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(48);
                        font-size: vw(26);
                        margin: 0 auto;
                        margin-top: vw(50);
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
                    top: 0;
                    width: vw(981);
                    height: vw(760);
                    // height: vw(960);
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
                    background-size: 280%;
                }
                img {
                    margin-top: vw(30);
                    width: vw(510);
                    height: vw(600);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    // top: vw(465);
                    top: vw(365);
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
                        top: vw(891);
                        left: vw(94);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(500);
                        right: vw(99);
                        transform: rotate(180deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(891);
                        right: vw(93);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel2 {
            margin-top: vw(50);
            h3 {
                font-size: vw(42);
                line-height: vw(42);
                margin-bottom: vw(60);
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                height: auto;
                min-width: auto;
                > div {
                    padding: 0;
                    height: vw(590);
                    margin-right: 0;
                    border-radius: vw(20);
                    overflow: hidden;
                    background-size: 170% !important;
                    flex-direction: column;
                    &.medium {
                        margin: 0 vw(20);
                    }
                    > img {
                        position: relative;
                        height: vw(320);
                        border-radius: vw(20) vw(20) 0 0;
                    }
                    .content-box {
                        padding-top: vw(0);
                        h3 {
                            font-size: vw(26);
                            margin: vw(20) 0;
                            line-height: vw(26);
                            padding: 0 vw(20);
                        }
                        p {
                            font-size: vw(20);
                            line-height: vw(22);
                            padding: 0 vw(20);
                            max-height: vw(160);
                            overflow-y: auto;
                        }
                    }
                }
            }
        }
        .pannel3 {
            height: vw(500);
            margin-top: vw(80);
            > h3 {
                font-size: vw(42);
                line-height: vw(42);
                margin-bottom: vw(40);
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                height: vw(300);
                min-width: auto;
                > div {
                    padding: vw(20);
                    text-align: center;
                    i {
                        font-size: vw(35);
                        color: $main-color;
                    }
                    h3 {
                        font-size: vw(24);
                        line-height: vw(26);
                        text-align: center;
                        margin: vw(15) 0 vw(20) 0;
                    }
                    > div {
                        p {
                            font-size: vw(22);
                            line-height: vw(26);
                        }
                    }
                }
            }
        }
        .pannel4 {
            margin-top: vw(60);
            margin-bottom: vw(60);
            padding-top: vw(60);
            height: vw(542);
            background-size: 210%;
            > h3 {
                font-size: vw(42);
                line-height: vw(42);
                margin-bottom: vw(40);
                padding: 0;
            }
            /deep/ {
                .el-carousel {
                    width: 100%;
                    margin: 0;
                }
                .el-carousel__arrow {
                    i {
                        font-size: vw(35);
                        font-weight: normal;
                    }
                }
                .el-carousel__item {
                    > div {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0 vw(90);
                    }
                }
                .item-box {
                    width: 100%;
                    padding: vw(30) vw(50);
                    box-shadow: 0px vw(6) vw(30) 0px #bfc8bf;
                    margin: 0;
                    margin-top: vw(20);
                    border-radius: vw(20);
                    height: vw(300);
                    img {
                        height: vw(80);
                        margin-bottom: vw(20);
                        border-radius: vw(20);
                        padding: vw(10) vw(20);
                    }
                    p {
                        font-size: vw(26);
                        line-height: vw(30);
                        height: vw(123);
                        overflow-y: auto;
                    }
                }
            }
            .item-out-box {
                width: inherit;
                .point1 {
                    display: none;
                }
                .point2 {
                    display: none;
                }
                .point3 {
                    display: none;
                }
                .bg-div1 {
                    display: none;
                }
                .bg-div2 {
                    display: none;
                }
            }
        }
    }
}
@media screen and (min-width: 1200px) and (max-width: 1730px) {
}
/** IPAD */
@include pad {
}
/**  phone */
@include phone {
}
</style>