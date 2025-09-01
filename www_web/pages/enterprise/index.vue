<!--
 * @Description: 企业资讯
 * @FilePath: pages\enterprise\index.vue
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
                        <div class="title-box">企业资讯</div>
                        <div class="txt-box">了解迈外迪最新的企业资讯动态。</div>
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
                            src="~/static/imgs/enterprise-bg.png"
                            alt=""
                        >
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </div>
            </section>
            <section class="pannel2">
                <div></div>
                <div class="right-box"></div>
                <div class="content-box">
                    <el-carousel
                        :height="deviceSize=='large'?'370px':'88vw'"
                        :arrow="deviceSize=='large'?'never':'alaways'"
                        :autoplay="true"
                    >
                        <el-carousel-item
                            v-for="(item,idx) in cases"
                            :key="idx"
                        >

                            <div
                                class="img-box"
                                @click="jumpFn(item)"
                            >
                                <img
                                    :src="item.img_url"
                                    alt=""
                                >
                            </div>
                            <div
                                class="right-box"
                                @click="jumpFn(item)"
                            >
                                <!-- <div class="btn-box">客户案例>>></div> -->
                                <h3>{{item.title}}</h3>
                                <p>{{item.desc}}</p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </section>
            <section class="pannel3">
                <div>
                    <div class="box">
                        <div
                            class="item-box"
                            v-for="(item,idx) in list"
                            :key="idx"
                            @click="jumpFn(item)"
                        >
                            <img
                                :src="item.image"
                                alt=""
                            >
                            <h3>
                                {{item.title}}
                            </h3>
                            <span>{{item.desc}}</span>
                        </div>
                    </div>
                    <!-- <div
                    v-if="deviceSize!='large'"
                    class="more-btn"
                >
                    {{list.length!=total?'加载更多...':'没有更多了'}}
                </div> -->

                </div>
            </section>
            <el-pagination
                v-if="list.length"
                class="page-box"
                background
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-size="pageSize"
                :total="total"
                hide-on-single-page
            >
            </el-pagination>
        </client-only>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
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
    created() {
        this.getList();
        this.getData();
    },
    mounted() {},
    methods: {
        getData() {
            let param = {
                cid: 12,
                page_no: this.page,
                page_size: this.deviceSize == "large" ? 9 : 8
            };
            Api.news.get(param).then((res) => {
                if (res.code == 1) {
                    this.list = res.data.lists;
                    this.total = res.data.count * 1;
                }
            });
        },
        handleCurrentChange(val) {
            this.page = val;
            this.getData();
        },
        getList() {
            let param = {
                cid: 88
            };
            Api.userCases.get(param).then((res) => {
                if (res.code == 1) {
                    res.data.lists.forEach((element) => {
                        element.url = element.abstract;
                        element.author = element.abstract;
                        element.img_url = element.image;
                    });
                    this.cases = res.data.lists;
                }
            });
        },
        jumpFn(item) {
            // console.log(item);
            // window.location.href = item.author;
            window.open(item.author, "_blank");
        }
    },
    data() {
        return {
            cases: [
                {
                    url: "https://mp.weixin.qq.com/s?__biz=MjM5OTA1NzAwMA==&mid=2653088417&idx=1&sn=22b30279af9f00433963c4570c365fb9&chksm=bd1709a68a6080b0b3f419c10e64a0c47878c5ce2d47c87bed4373035f35ebcc155248d",
                    title: "西贝的中餐现代化战略",
                    desc: "西贝进一步将自身需要不断发展的能力总结为“中餐现代化能力”，即〝中餐现代化=传统中餐烹饪艺术＋现代食品科学技术＋现代化管理手段〞",
                    img_url:
                        "https://wiwide.com/static/upload/other/20230224/1677229760638448.jpeg"
                },
                {
                    url: "https://mp.weixin.qq.com/s?__biz=MjM5OTA1NzAwMA==&mid=2653087682&idx=1&sn=e1ff8c106b767c783238074c7edf1f3d&chksm=bd1704c58a608dd33815d2faf0f189232e1fdd8b4a03c044523eae311368b68dc90efbd",
                    title: "深耕线下商业智能化，迈外迪获德勤“2021中国明日之星”大奖",
                    desc: "此次荣获德勤“2021中国明日之星”奖项，标志着行业对迈外迪的高创新、高成长、高潜力的充分认可。德勤中国高科技高成长项目主管合伙人赵锦东表示：“本届评选旨在发掘中国高速成长、成绩优异、创新独特、增长蓬...",
                    img_url:
                        "https://wiwide.com/static/upload/other/20211223/1640225757296688.jpeg"
                },
                {
                    url: "https://mp.weixin.qq.com/s?__biz=MjM5OTA1NzAwMA==&mid=2653087228&idx=1&sn=4c43fba8a24512295b0c209134e4a90d&chksm=bd1706fb8a608feddd284a3ce3b031e72d5e675cdccfd271409dcc623b8bf1c828357fc",
                    title: "商业扩张，科技驱动｜迈外迪CEO张程：商业IoT+场景感知，助力连锁门店扩张",
                    desc: "迈外迪CEO&联合创始人张程：让每一家门店都成为最优秀的门店。今天，由中国连锁经营协会（CCFA）主办的“首届中国服务业连锁品牌发展峰会暨2021中国特许加盟大会”在上海成功举办，众多连锁企业高管、数...",
                    img_url:
                        "https://wiwide.com/static/upload/image/20211222/1640170881292752.jpg"
                },
                {
                    url: "https://mp.weixin.qq.com/s?__biz=MjM5OTA1NzAwMA==&mid=2653087023&idx=1&sn=22328d8a22174b4bbd01698ed05e5362&chksm=bd1706288a608f3e95a63159f30ce05d4411527b1a8d2926970b3fd9d083e0f9987f331",
                    title: "迈外迪“小热”赋能李宁门店数字化升级",
                    desc: "对于迈外迪，李宁数据管理部总监肖岩如此评价：“迈外迪是一家理想的数字化合作伙伴，技术强，产品好，服务全面，相信李宁和迈外迪之间的合作会走的很远。”",
                    img_url:
                        "https://wiwide.com/static/upload/image/20211224/1640323245650892.png"
                }
            ],
            list: [],
            page: 1,
            pageSize: 9,
            total: 0
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
                background: url("~/static/imgs/enterprise-bg.png") no-repeat
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
        // width: 63.54%;
        width: 1167px;
        margin: 0 auto;
        margin-top: 50px;
        height: 370px;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        position: relative;
        > div {
            flex: 1;
            &.right-box {
                height: inherit;
                background: $font-high-color
                    url("~/static/imgs/right-line2.png") no-repeat center center;
                background-size: 100%;
            }
        }
        /deep/.content-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: inherit;
            .el-carousel__item {
                display: flex;
                > div {
                    flex: 1;
                }
                .img-box {
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .right-box {
                    width: 50%;
                    padding: 80px 0 0 0;
                    .btn-box {
                        width: 200px;
                        height: 50px;
                        line-height: 50px;
                        border-radius: 8px;
                        border: 1px solid $main-color;
                        color: $main-color;
                        font-size: 28px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        padding-left: 20px;
                        margin-left: 67px;
                    }
                    h3 {
                        font-size: 28px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 34px;
                        color: #fff;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        padding-left: 67px;
                        padding-right: 80px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2; // 2行
                    }
                    p {
                        font-size: 20px;
                        line-height: 24px;
                        color: #fff;
                        padding-left: 67px;
                        padding-right: 80px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3; // 2行
                    }
                }
            }
            .el-carousel__indicators--horizontal {
                bottom: 30px;
                right: 100px;
                left: auto;
                transform: none;
            }
            .el-carousel__indicator.is-active button {
                background-color: $main-color;
                width: 80px;
            }
        }
    }
    .pannel3 {
        margin-top: 60px;
        > div {
            // width: 63.54%;
            width: 1167px;
            margin: 0 auto;
            height: auto;

            .box {
                margin-left: -0.8%;
                margin-right: -0.8%;
                .item-box {
                    display: inline-flex;
                    flex-direction: column;
                    // width: 31.7%;
                    width: 376px;
                    height: 355px;
                    border-radius: 10px;
                    border: 1px solid #d3dcd4;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    margin: 0 0.8%;
                    margin-bottom: 2.4%;
                    padding: 10px;
                    img {
                        border-radius: 10px;
                        // height: 177px;
                        width: 354px;
                        height: 236px;
                    }
                    h3 {
                        padding: 20px 30px 0 30px;
                        font-size: 18px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 28px;
                        color: $font-high-color;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    span {
                        font-size: 14px;
                        font-weight: normal;
                        line-height: 28px;
                        color: $font-medium-color;
                        padding-left: 30px;
                        height: 28px;
                        overflow: hidden; /* 超出最大高度的内容隐藏 */
                        text-overflow: ellipsis; /* 超过单行的文本显示省略号 */
                        white-space: nowrap; /* 防止单元格内的文本换行 */
                    }
                    &:hover {
                        border-color: $main-color;
                        h3 {
                            color: $main-color;
                        }
                    }
                }
            }
        }
    }
    .page-box {
        text-align: center;
        margin-top: 10px;
    }
    /deep/ {
        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: $main-color;
            color: #fff;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover {
            color: #fff;
            background-color: $main-color;
        }
        .el-pagination.is-background .btn-next,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .el-pager li {
            min-width: 50px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            border-radius: 16px;
            color: $main-color;
            background-color: $sub-color;
        }
        .el-pagination .btn-next .el-icon,
        .el-pagination .btn-prev .el-icon {
            font-size: 24px;
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
            width: 100%;
            padding: 0 vw(40);
            height: vw(660);
            flex-direction: column;
            border-radius: vw(20);
            overflow: hidden;
            > div {
                width: 100%;
                height: vw(330);
                &.right-box {
                    border-radius: 0 0 vw(20) vw(20);
                }
            }
            /deep/.content-box {
                border-radius: vw(20) !important;
                height: vw(660);
                padding: 0 vw(40);
                .el-carousel__item {
                    border-radius: vw(20) !important;
                    flex-direction: column;
                    .img-box {
                        img {
                            width: 100%;
                            height: vw(330);
                            border-radius: vw(20) vw(20) 0 0;
                        }
                    }
                    .right-box {
                        width: 100%;
                        height: vw(330);
                        padding: vw(20) vw(40);

                        .btn-box {
                            width: vw(200);
                            height: vw(60);
                            line-height: vw(60);
                            border-radius: vw(10);
                            font-size: vw(28);
                            margin: 0 auto;
                            text-align: center;
                            padding: 0;
                        }
                        h3 {
                            font-size: vw(28);
                            line-height: vw(34);
                            margin-top: vw(20);
                            margin-bottom: vw(10);
                            padding-left: 0;
                            padding-right: 0;
                        }
                        p {
                            font-size: vw(24);
                            line-height: vw(28);
                            padding-left: 0;
                            padding-right: 0;
                        }
                    }
                }
                .el-carousel__indicators--horizontal {
                    bottom: vw(0);
                    right: auto;
                    left: vw(40);
                }
                .el-carousel__indicator.is-active button {
                    background-color: $main-color;
                    width: vw(80);
                }
            }
        }
        .pannel3 {
            height: auto;
            margin-top: vw(80);
            > div {
                width: 100%;
                padding: 0 vw(40);
                > .box {
                    margin: 0;
                    .item-box {
                        width: vw(325);
                        height: auto;
                        min-height: vw(370);
                        height: auto;
                        border-radius: 10px;
                        box-shadow: 0px 0px vw(20) 0px rgba(0, 0, 0, 0.1);
                        margin: 0;
                        margin-right: vw(20);
                        margin-bottom: vw(20);
                        padding: vw(20);
                        &:nth-child(even) {
                            margin-right: 0;
                        }
                        img {
                            border-radius: vw(10);
                            // height: vw(200);
                            margin-bottom: vw(10);
                            width: vw(285);
                            height: vw(190);
                        }
                        h3 {
                            padding: 0;
                            font-size: vw(24);
                            line-height: vw(28);
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3; // 2行
                        }
                        span {
                            margin-top: vw(10);
                            font-size: vw(22);
                            line-height: vw(24);
                            padding-left: 0;
                        }
                    }
                }
                .more-btn {
                    width: vw(670);
                    margin: vw(30) auto;
                    height: vw(50);
                    line-height: vw(50);
                    text-align: center;
                    background: $main-color;
                    color: #fff;
                    font-size: vw(24);
                    border-radius: vw(15);
                }
            }
        }
        .page-box {
            margin-top: vw(0);
            margin-bottom: vw(80);
        }
        /deep/ {
            .el-pagination.is-background .btn-next,
            .el-pagination.is-background .btn-prev,
            .el-pagination.is-background .el-pager li {
                min-width: vw(50);
                height: vw(50);
                line-height: vw(50);
                font-size: vw(20);
                border-radius: vw(16);
            }
            .el-pagination .btn-next .el-icon,
            .el-pagination .btn-prev .el-icon {
                font-size: vw(24);
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