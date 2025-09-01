<template>
    <div class="app-footer">
        <div
            v-if="deviceSize!='large'"
            class="footer-content"
        >
            <div class="content-box">
                <div class="top-div">
                    <div class="item-box mr60">
                        <h4>产品与服务</h4>
                        <a href="/product/panorama">产品全景图</a>
                        <a href="/product/iot/6">硬件</a>
                        <a href="/introduce/widash">SaaS</a>
                        <a href="/service/advisory">服务</a>
                        <!-- <br />
                        <a href="/service/advisory">咨询服务</a>
                        <a href="/service/delivery">交付服务</a>
                        <a href="/service/maintenance">运维服务</a> -->
                    </div>
                    <div class="item-box mr60">
                        <h4>解决方案</h4>
                        <a href="/introduce/iot?active=1">全时段业务在线</a>
                        <a href="/introduce/iot?active=2">宽带及云宽带</a>
                        <a href="/introduce/iot?active=3">网络安全合规</a>
                        <br />
                        <a href="/introduce/perception?active=1">购物中心客流</a>
                        <a href="/introduce/perception?active=2">连锁门店客流</a>
                        <a href="/introduce/perception?active=3">连锁云监控</a>
                    </div>
                    <div class="item-box mr60">
                        <h4>行业实践</h4>
                        <div
                            v-for="(item,idx) in industry"
                            :key="idx"
                        >
                            <a
                                href="javascript:void;"
                                @click="jumpFn(`/industry/`+item.id)"
                            >{{item.title}}</a>
                        </div>
                    </div>
                    <div class="item-box">
                        <h4>关于迈外迪</h4>
                        <a href="/about">关于我们</a>
                        <a href="/enterprise">企业资讯</a>
                        <a href="/contact">联系我们</a>
                    </div>
                </div>
                <div class="bottom-div">
                    <div class="concat-us">
                        联系我们
                        <img
                            class="logo-icon"
                            src="~/static/imgs/logo-white.png"
                            alt="Logo"
                            @click="jumpFn('/index')"
                        >
                    </div>
                    <div class="seek-box">
                        <div>
                            <h4>商务咨询</h4>
                            <a
                                class="sub-box"
                                href="tel:18518721599"
                            ><i class="iconfont icon-tel"></i> 18518721599</a>
                            <div class="sub-box"><i class="iconfont icon-email"></i> hello@wiwide.com</div>
                        </div>
                        <div>
                            <h4>售后咨询</h4>
                            <a
                                class="sub-box"
                                href="tel:400-6500-311"
                            ><i class="iconfont icon-service"></i> 400-6500-311</a>
                            <div class="sub-box"><i class="iconfont icon-email"></i> online@wiwide.com</div>
                        </div>
                        <div>
                            <div
                                class="try-btn"
                                @click="jumpFn('/download')"
                            >30秒，免费获得白皮书及试用</div>
                        </div>
                    </div>
                    <p class="beian">
                        {{webConfig.copyright}} <a
                            target="_blank"
                            :href="beianUrl"
                        >{{webConfig.beian}}</a>
                    </p>
                </div>
            </div>
        </div>
        <div
            v-else
            class="footer-content"
        >
            <div class="top-box">
                <p></p>
            </div>
            <div class="content-box">
                <div>
                    <img
                        class="icon-logo"
                        src="~/static/imgs/logo.png"
                        alt="logo"
                        @click="jumpFn('/index')"
                    >
                    <div class="title-box">产品与服务</div>
                    <div class="sub-title"> <a href="/product/panorama">产品全景图</a></div>
                    <div class="sub-title"> <a href="/product/iot/6">硬件</a></div>
                    <div class="sub-title"><a href="/introduce/widash">SaaS</a></div>
                    <div class="sub-title"><a href="/service/advisory">服务</a></div>
                    <!-- <br />
                    <div class="sub-title"><a href="/service/advisory">咨询服务</a></div>
                    <div class="sub-title"><a href="/service/delivery">交付服务</a></div>
                    <div class="sub-title"><a href="/service/maintenance">运维服务</a></div> -->
                </div>
                <div>

                    <div class="title-box">解决方案</div>
                    <div class="sub-title"> <a href="/introduce/iot?active=1">全时段业务在线</a></div>
                    <div class="sub-title"><a href="/introduce/iot?active=2">宽带及云宽带</a></div>
                    <div class="sub-title"><a href="/introduce/iot?active=3">网络安全合规</a></div>
                    <br />
                    <div class="sub-title"> <a href="/introduce/perception?active=1">购物中心客流</a></div>
                    <div class="sub-title"> <a href="/introduce/perception?active=2">连锁门店客流</a></div>
                    <div class="sub-title"> <a href="/introduce/perception?active=3">连锁云监控</a></div>
                </div>
                <div>
                    <div class="title-box">行业实践</div>
                    <div
                        class="sub-title"
                        v-for="(item,idx) in industry"
                        :key="idx"
                    >
                        <a :href="`/industry/`+item.id">{{item.title}}</a>
                    </div>
                </div>
                <div>
                    <div class="title-box">关于迈外迪</div>
                    <div class="sub-title"> <a href="/about">关于我们</a></div>
                    <div class="sub-title"> <a href="/enterprise">企业资讯</a></div>
                    <div class="sub-title"><a href="/contact">联系我们</a></div>
                </div>
                <div>
                    <div
                        v-if="isHide"
                        class="try-btn"
                        @click="jumpFn('/download')"
                    >30秒，免费获得白皮书及试用</div>
                    <div class="title-box">联系我们</div>
                    <div class="sub-title bold">商务咨询</div>
                    <div class="sub-title"><i class="iconfont icon-tel"></i> 18518721599</div>
                    <div class="sub-title"><i class="iconfont icon-email"></i> hello@wiwide.com</div>
                    <br />
                    <div class="sub-title bold">售后咨询</div>
                    <div class="sub-title"><i class="iconfont icon-service"></i> 400-6500-311</div>
                    <div class="sub-title"><i class="iconfont icon-email"></i> online@wiwide.com</div>
                </div>
            </div>
        </div>
        <div
            class="footer-text"
            v-if="deviceSize=='large'"
        >
            <p>{{webConfig.copyright}} <a
                    target="_blank"
                    :href="beianUrl"
                >{{webConfig.beian}}</a></p>
        </div>
    </div>
</template>
<script>
import Api from "~/plugins/api";
import { mapState } from "vuex";
export default {
    name: "GlobalFooter",
    components: {},
    watch: {
        $route: {
            immediate: true,
            handler(route) {
                // console.log(666,route)
                if (route.name == "index" || route.name == "root") {
                    this.isHide = false;
                } else {
                    this.isHide = true;
                }
            }
        }
    },
    created() {
        this.getConfig();
    },
    mounted() {
        this.getData();
    },
    methods: {
        jumpFn(path) {
            this.$router.push(path || "/index");
        },
        getConfig() {
            Api.beian.get({}).then((res) => {
                // console.log(111, res);
                if (res.code == 1) {
                    this.webConfig = {
                        copyright: res.data.copyright[0].key,
                        beian: res.data.copyright[1].key
                    };
                    this.beianUrl = res.data.copyright[1].value;
                }
            });
        },
        getData() {
            Api.industry.get({ cid: "11" }).then((res) => {
                if (res.code == 1) {
                    let arr = [];
                    for (let i = 0; i < res.data.lists.length; i++) {
                        const item = res.data.lists[i];
                        item.name = item.title;
                        item.path = "/industry/" + item.id;
                        arr.push(item);
                    }
                    this.industry = arr;
                }
            });
        }
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    data() {
        return {
            isHide: true,
            industry: [],
            webConfig: {
                copyright: "Copyright©2007-2021 WiWide Inc",
                beian: "沪ICP备08023648号-1 沪公网安备31010402000932号"
            },
            beianUrl: "https://beian.miit.gov.cn/"
        };
    }
};
</script>
<style lang="scss" scoped>
.app-footer {
    background: #fff;
    min-height: 667px;
    position: relative;
    width: 100%;
    .footer-content {
        width: 100%;
        .top-box {
            width: 100%;
            padding: 100px 0;
            p {
                border-bottom: 1px solid #abb9b4;
            }
        }
        .content-box {
            display: flex;
            padding: 0 360px;
            > div {
                flex: 1;
                .icon-logo {
                    height: 48px;
                    margin-bottom: 38px;
                }
                .title-box {
                    font-family: "SourceHanSansCN-Bold";
                    height: 23px;
                    line-height: 23px;
                    font-size: 16px;
                    font-weight: bold;
                    color: $font-high-color;
                    margin-bottom: 10px;
                }
                .sub-title {
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: $font-high-color;
                    cursor: pointer;
                    &.bold {
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: 700;
                        cursor: default;
                    }
                    i {
                        color: $main-color;
                    }
                    .icon-email {
                        font-size: 14px;
                    }
                }
                .try-btn {
                    width: 230px;
                    height: 43px;
                    line-height: 43px;
                    background: $main-color;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 16px;
                    text-align: center;
                    margin-bottom: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    .footer-text {
        position: absolute;
        width: calc(100% - 720px);
        bottom: 0;
        border-top: 1px solid #abb9b4;
        margin: 0 360px;
        padding: 30px 0 50px 0;
        p {
            text-align: center;
            color: $font-main-color;
            font-size: 14px;
            > a {
                display: inline-block;
                text-decoration: none;
                height: 20px;
                line-height: 20px;
            }
        }
    }
}
@include pcMini {
    .app-footer {
        .footer-content {
            .content-box {
                width: 890px;
                padding: 0;
                margin: 0 auto;
            }
        }
        .footer-text {
            width: 890px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0 auto;
        }
    }
}
@include notPc {
    .app-footer {
        min-height: auto;
        .footer-content {
            border-top: 1px solid #abb9b4;
            .content-box {
                padding: 0;
                flex-direction: column;
                .top-div {
                    width: 100vw;
                    height: vw(528);
                    background: #fff;
                    padding: vw(80) vw(40) vw(40) vw(40);
                    display: flex;
                    > div {
                        text-align: left;
                        // flex: 1;
                        &.mr60 {
                            // margin-right: vw(46);
                            margin-right: vw(36);
                        }
                        h4 {
                            font-size: vw(22);
                            font-family: "SourceHanSansCN-Bold";
                            font-weight: bold;
                            margin-bottom: 0.25rem;
                            color: $font-high-color;
                        }
                        a {
                            display: block;
                            text-decoration: none;
                            font-size: vw(22);
                            line-height: vw(40);
                        }
                    }
                }
                .bottom-div {
                    width: 100%;
                    height: vw(296);
                    padding: vw(30) vw(40);
                    background: $font-high-color;
                    color: #fff;
                    .concat-us {
                        font-size: vw(20);
                        height: vw(40);
                        line-height: vw(40);
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        .logo-icon {
                            float: right;
                            width: vw(130);
                        }
                    }
                    .seek-box {
                        width: 100%;
                        display: flex;
                        > div {
                            flex: 1;
                            h4 {
                                font-size: vw(20);
                                font-family: "SourceHanSansCN-Bold";
                                font-weight: bold;
                                line-height: vw(40);
                            }
                            .sub-box {
                                font-size: vw(20);
                                line-height: vw(40);
                                color: #fff;
                                i {
                                    color: $main-color;
                                    font-size: vw(16);
                                }
                            }
                            .try-btn {
                                position: relative;
                                top: vw(30);
                                right: vw(-50);
                                width: vw(170);
                                border-radius: vw(10);
                                font-size: vw(22);
                                line-height: vw(30);
                                @include displayCenter;
                            }
                        }
                    }
                    .beian {
                        text-align: center;
                        border-top: 1px solid #f1f8f1;
                        padding-top: vw(20);
                        margin-top: vw(30);
                        font-size: vw(14);
                        color: $font-main-color;
                    }
                }
            }
        }
    }
}
@include pad {
}
@include phone {
}
</style>