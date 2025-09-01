<!--
 * @Description: 解决方案 - 商业场景感知
 * @FilePath: pages\introduce\perception.vue
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
                        <div class="title-box">商业场景感知</div>
                        <div class="txt-box">通过传感器、AI算法、大数据分析等数智化技术的运用，建立一套智能化商业场景感知系统，对场景和事件进行数字化还原，实现线下商业场景的数据可视化，进而助力商业场所的精细化运营和标准化管理，从“云、边、端”的统一管理，为商业数智化转型赋能。
                        </div>
                        <div class="down-btn"><nuxt-link to="/download">方案资料下载</nuxt-link></div>
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
                        <div
                            class="img"
                            src="~/static/imgs/scene-aiot.png"
                            alt=""
                        ></div>
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
                    >{{item.name}}</div>
                </div>
                <div class="desc-box">
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
            <section class="pannel3">
                <div class="pannel-box">
                    <h3>方案全景图</h3>
                    <div
                        class="item-box"
                        :class="cur_nav.panorama.app.length>1?'w100':''"
                    >
                        <div class="left">
                            SaaS应用
                        </div>
                        <div class="right">
                            <div
                                class="mr20"
                                v-for="(item,idx) in cur_nav.panorama.app"
                                :key="idx"
                            >
                                <i
                                    class="iconfont"
                                    :class="item.iconfont"
                                ></i>
                                <span
                                    class="title-name"
                                    v-html="item.name"
                                ></span>
                            </div>
                        </div>
                    </div>
                    <div class="item-box">
                        <div class="left">
                            SaaS平台
                        </div>
                        <div class="right">
                            <!-- <div
                            v-for="(item,idx) in cur_nav.panorama.platform"
                            :key="idx"
                        >
                            <i
                                class="iconfont"
                                :class="item.iconfont"
                            ></i>
                            <span class="title-name">{{item.name}}</span>
                        </div> -->
                            <div class="plat-name">
                                迈大师平台
                            </div>
                            <div class="plat-content">
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-a-lianji4"></i></span>
                                    <span class="txt-box">工作台</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-a-lujing5"></i></span>
                                    <span class="txt-box">场所管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-a-lujing6"></i></span>
                                    <span class="txt-box">设备管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-a-lujing8"></i></span>
                                    <span class="txt-box">权限管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-a-lujing10"></i></span>
                                    <span
                                        class="txt-box"
                                        v-if="deviceSize=='large'"
                                    >云<br />市场</span>
                                    <span
                                        class="txt-box"
                                        v-else
                                    >云市场</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-box mr">
                        <div class="left">
                            硬件
                        </div>
                        <div class="right">
                            <div
                                v-for="(item,idx) in cur_nav.panorama.hardware"
                                :key="idx"
                            >
                                <img
                                    :src="item.img_url"
                                    alt=""
                                    :class="cur_nav.id==3?'w40':''"
                                >
                                <span>{{item.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 半圆 -->
                <!-- <div class="half-round"></div> -->
            </section>
            <section class="pannel4">
                <div>
                    <div
                        v-if="deviceSize!='large'"
                        class="item-content"
                    >
                        <div><span class="name-btn">方案价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="0">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in cur_nav.scenes"
                                    :key="scene_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="scene.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{scene.title}}</div>
                                            <div class="desc-txt-box">{{scene.desc}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div><span class="name-btn">方案优势</span></div>
                        <div class="desc-card">
                            <el-row :gutter="0">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in cur_nav.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="grid-desc-advantage">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                            <p>{{advantage.desc}}</p>
                                        </div>
                                    </div>
                                </el-col>

                            </el-row>
                        </div>
                    </div>
                    <div
                        v-else
                        class="item-content"
                    >
                        <div><span class="name-btn">方案价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="40">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in cur_nav.scenes"
                                    :key="scene_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="scene.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{scene.title}}</div>
                                            <div class="desc-txt-box">{{scene.desc}}</div>
                                        </div>
                                    </div>
                                </el-col>

                            </el-row>
                        </div>
                        <div><span class="name-btn">方案优势</span></div>
                        <div class="desc-card">
                            <el-row :gutter="40">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in cur_nav.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-advantage">
                                        <i
                                            class="iconfont"
                                            :class="advantage.iconfont"
                                        ></i>
                                        <p>{{advantage.desc}}</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
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
                if (this.$route.query.active && this.$route.query.active < 4) {
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
        console.log("params", params);
    },
    created() {},
    mounted() {},
    methods: {
        transVal(str) {
            return str ? str.replace("<br/>", "&nbsp;&nbsp;") : "";
        }
    },
    data() {
        return {
            cur_nav_id: 1,
            cur_nav: {},
            nav_data: [
                {
                    id: 1,
                    name: "购物中心客流解决方案",
                    title: "方案描述",
                    desc: "流量招租时代，如何运营数据来支撑购物中心精准招商和精细运营？采用目标检测、人体识别、ReID识别、轨迹跟踪、时空关联、关联分析等一系列人工智能算法，实现购物中心的客流数据分析，助力购物中心实现精准招商、精细运营、精准营销。",
                    scenes: [
                        {
                            iconfont: "icon-qushi1",
                            title: "招商调改",
                            desc: "提供丰富数据支撑，招商谈判和调整铺位有据可依"
                        },
                        {
                            iconfont: "icon-a-lianji28",
                            title: "店铺诊断",
                            desc: "通过客流分析对比及时发现问题店铺，为引进、扶持和汰换店铺提供支撑"
                        },
                        {
                            iconfont: "icon-a-lianji28",
                            title: "精准营销",
                            desc: "活动营销闭环管理，做到精细策划、精准执行、科学评估、经验沉淀"
                        },
                        {
                            iconfont: "icon-a-lianji29",
                            title: "高效运营",
                            desc: "实时感知客流趋势和变化，合理调整排班计划和设备使用，降本增效"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing33",
                            title: "选择灵活",
                            desc: "提供俯拍、侧拍多种选择，满足不同场景需求。"
                        },
                        {
                            iconfont: "icon-xinjianzhuang",
                            title: "计数精准",
                            desc: "能很好的适应人群拥挤、客流交叉、背景干扰等复杂场景。"
                        },
                        {
                            iconfont: "icon-gaojingduxiaoguox",
                            title: "隐私保护",
                            desc: "通过ISO27701、欧盟GDPR等国内外认证，无侵犯个人隐私风险。"
                        },
                        {
                            iconfont: "icon-gaojingduxiaoguox",
                            title: "案例丰富",
                            desc: "经过100+购物中心客户实践检验，产品成熟稳定。"
                        }
                    ],
                    panorama: {
                        hardware: [
                            {
                                name: "400W半球客流摄像机",
                                img_url: require("~/static/imgs/keliu400w.png")
                            },
                            {
                                name: "400W筒型客流摄像机",
                                img_url: require("~/static/imgs/tongxing400w.png")
                            },
                            {
                                name: "WiSight2 Mini客流一体机",
                                img_url: require("~/static/imgs/wisight2mini.png")
                            }
                        ],
                        platform: [
                            {
                                name: "WiDash",
                                iconfont: "icon-a-jianqudingceng22"
                            }
                        ],
                        app: [
                            {
                                name: "客流分析",
                                iconfont: "icon-a-lianji47"
                            },
                            // {
                            //     name: "区域客流",
                            //     iconfont: "icon-quyukeliu"
                            // },
                            {
                                name: "客群分析",
                                iconfont: "icon-kequnfenxi"
                            },
                            {
                                name: "业态分析",
                                iconfont: "icon-exchange-two"
                            },
                            {
                                name: "关联分析",
                                iconfont: "icon-guanlianfenxi"
                            },
                            // {
                            //     name: "游逛分析",
                            //     iconfont: "icon-a-39daiwoguang"
                            // },
                            {
                                name: "热区分析",
                                iconfont: "icon-requfenxi"
                            },
                            {
                                name: "经营分析",
                                iconfont: "icon-quyukeliu"
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    name: "连锁门店客流解决方案",
                    title: "方案描述",
                    desc: "如何运用数据实现门店的精准营销、科学决策？采用目标检测、人体识别、ReID识别、关联分析等一系列人工智能算法，实现连锁门店的客流数据采集和智能分析，助力连锁门店实现科学的营销决策和运营管理。",
                    scenes: [
                        {
                            iconfont: "icon-qushi1",
                            title: "绩效分析",
                            desc: "对比门店客流趋势和营业收入，科学分析门店经营绩效"
                        },
                        {
                            iconfont: "icon-a-lianji28",
                            title: "营销评估",
                            desc: "洞察客群和偏好，精准制定营销方案，评估效果"
                        },
                        {
                            iconfont: "icon-a-lianji29",
                            title: "动线优化",
                            desc: "分析顾客游逛路线和冷热区，合理优化动线设计"
                        },
                        {
                            iconfont: "icon-a-lianji29",
                            title: "降本增效",
                            desc: "根据店内客流变化，合理制定人员排班和设备使用"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-tubiao",
                            title: "计数精准",
                            desc: "应用场景广泛，可应用于购物中心、连锁门店等各类商业场所的客流采集。"
                        },
                        {
                            iconfont: "icon-gaojingduxiaoguox",
                            title: "应用丰富",
                            desc: "可以自动检测收银、脱岗等违规事件，提供门店管理效率。"
                        },
                        {
                            iconfont: "icon-a-lujing33",
                            title: "隐私保护",
                            desc: "通过ISO27701、欧盟GDPR等国内外认证，无侵犯个人隐私风险。"
                        },
                        {
                            iconfont: "icon-a-lujing33",
                            title: "应用广泛",
                            desc: "在鞋服、美妆、商超、零食等连锁门店应用，头部品牌认可。"
                        }
                    ],
                    panorama: {
                        hardware: [
                            {
                                name: "400W半球客流摄像机",
                                img_url: require("~/static/imgs/keliu400w.png")
                            },
                            {
                                name: "WiSight2 Mini客流一体机",
                                img_url: require("~/static/imgs/wisight2mini.png")
                            },
                            {
                                name: "WiPano Mini全景摄像机",
                                img_url: require("~/static/imgs/wipanomini.png")
                            }
                        ],
                        platform: [
                            {
                                name: "WiDash",
                                iconfont: "icon-a-jianqudingceng22"
                            }
                        ],
                        app: [
                            {
                                name: "客流分析",
                                iconfont: "icon-a-lianji47"
                            },
                            {
                                name: "客群分析",
                                iconfont: "icon-kequnfenxi"
                            },
                            {
                                name: "业态分析",
                                iconfont: "icon-exchange-two"
                            },
                            {
                                name: "关联分析",
                                iconfont: "icon-guanlianfenxi"
                            },
                            {
                                name: "热区分析",
                                iconfont: "icon-requfenxi"
                            },
                            {
                                name: "经营分析",
                                iconfont: "icon-quyukeliu"
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    name: "连锁云监控解决方案",
                    title: "方案描述",
                    desc: "提升管理效率、降低管理成本，始终是连锁运营的关键所在，在门店视频监控摄像头的基础上，结合视频上云和人工智能分析，可实现云端视频监控、智能算法感知、闭环事件管理，助力门店运营管理。",
                    scenes: [
                        {
                            iconfont: "icon-shoujishezhi",
                            title: "远程巡店",
                            desc: "不需到店即可远程视频巡店，节省差旅费用和时间成本"
                        },
                        {
                            iconfont: "icon-ganzhi",
                            title: "智能感知",
                            desc: "针对收银违规、着装不规范、服务不规范等行为智能识别，解放人力"
                        },
                        {
                            iconfont: "icon-yewufuneng",
                            title: "闭环管理",
                            desc: "发现违规事件快速整改，提升管理效率"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lianji44",
                            title: "统一管理",
                            desc: "可将门店网络、监控和客流纳入统一云端管理平台"
                        },
                        {
                            iconfont: "icon-a-lianji411",
                            title: "算法定制",
                            desc: "可根据客户场景需求定制和优化算法，快速满足客户需求"
                        },
                        {
                            iconfont: "icon-a-lujing21",
                            title: "兼容第三方",
                            desc: "可以通过标准协议接入海康等第三方监控摄像头，保护客户现有投资"
                        }
                    ],
                    panorama: {
                        hardware: [
                            {
                                name: "WiSight IPC迈智瞳半球摄像机",
                                img_url: require("~/static/imgs/banqiuwisight.png")
                            },
                            {
                                name: "WiSight IPC迈智瞳海螺摄像机",
                                img_url: require("~/static/imgs/hailuowisight.png")
                            },
                            {
                                name: "WiSight IPC迈智瞳筒型摄像机",
                                img_url: require("~/static/imgs/WiSight筒型摄像机.png")
                            },
                            {
                                name: "400W半球客流摄像机",
                                img_url: require("~/static/imgs/keliu400w.png")
                            },
                            {
                                name: "SensorHub 巡店终端",
                                img_url: require("~/static/imgs/sensorhubxundian.png")
                            }
                        ],
                        platform: [
                            {
                                name: "WiDash",
                                iconfont: "icon-a-jianqudingceng22"
                            }
                        ],
                        app: [
                            // {
                            //     name: "视频监控",
                            //     iconfont: "icon-a-lujing112"
                            // },
                            {
                                name: "云巡店",
                                iconfont: "icon-rongqi"
                            },
                            {
                                name: "事件感知",
                                iconfont: "icon-huanjingganzhi"
                            },
                            {
                                name: "事件管理",
                                iconfont: "icon-shijianguanli"
                            }
                            // {
                            //     name: "收银巡检",
                            //     iconfont: "icon-claim-icon81"
                            // },
                            // {
                            //     name: "例会巡检",
                            //     iconfont: "icon-claim-icon91"
                            // },
                            // {
                            //     name: "脱岗检测",
                            //     iconfont: "icon-claim-icon101"
                            // }
                        ]
                    }
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
                background: url("~/static/imgs/scene-aiot.png") no-repeat 67%
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
            }
        }
        .desc-box {
            width: 100%;
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
                    width: 75%;
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
        margin-top: 100px;
        position: relative;
        width: 100%;
        min-height: 552px;
        background-color: $sub-color;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            padding: 150px 0 80px 0;
            color: $font-high-color;
        }
        .pannel-box {
            // width: 63.53%;
            width: 100%;
            margin: 0 auto;
            display: block;
            text-align: center;
            height: 700px;
            h3 {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                text-align: center;
                padding: 80px 0;
                color: $font-high-color;
                display: block;
            }
            .item-box {
                display: flex;
                min-width: 47.5%;
                width: 1250px;
                height: 120px;
                border-radius: 20px;
                margin-bottom: 30px;
                text-align: left;
                position: relative;
                left: 50%;
                transform: translatex(-50%);
                &.mr {
                    // margin-right: 4.5%;
                }
                // &.w100 {
                //     width: 100%;
                // }
                .left {
                    width: 200px;
                    border-radius: 20px 0 0 20px;
                    background: $font-high-color;
                    font-size: 28px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: #fff;
                    @include displayCenter;
                    text-align: center;
                }
                .right {
                    width: calc(100% - 200px);
                    border-radius: 0px 20px 20px 0px;
                    background-color: #fff;
                    @include displayCenter;
                    padding-right: 20px;
                    .mr20 {
                        // margin-right: 30px;
                        margin-right: 0px;
                    }
                    > div {
                        display: flex;
                        align-items: center;
                        padding-left: 20px;
                        img {
                            // width: 126px;
                            // width: 100px;
                            width: 95px;
                        }
                        span {
                            display: inline-flex;
                            margin-left: 20px;
                            // font-size: 18px;
                            font-size: 14px;
                            color: #545454;
                            &.title-name {
                                width: 40px;
                            }
                        }
                        i {
                            // width: 80px;
                            // height: 80px;
                            width: 55px;
                            height: 55px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            background: $main-color;
                            border-radius: 50%;
                            // font-size: 40px;
                            font-size: 25px;
                            color: #fff;
                        }
                    }
                    .plat-name {
                        width: 170px;
                        height: 55px;
                        line-height: 55px;
                        text-align: center;
                        border-radius: 27.69px;
                        background-color: $sub-color;
                        font-size: 20.77px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        margin-left: 30px;
                        justify-content: center;
                        padding-left: 0;
                    }
                    .plat-content {
                        width: calc(100% - 170px);
                        display: flex;
                        padding-left: 0;
                        > div {
                            flex: 1;
                            padding-left: 30px;
                            display: flex;
                            align-items: center;
                            > span {
                                display: inline-block;
                            }
                            .icon-box {
                                width: 55px;
                                height: 55px;
                                background-color: $main-color;
                                border-radius: 13.84px;
                                @include displayCenter;
                                i {
                                    color: #fff;
                                    font-size: 30px;
                                }
                            }
                            .txt-box {
                                margin-left: 20px;
                                font-size: 18px;
                                font-family: "SourceHanSansCN-Bold";
                                font-weight: bold;
                                color: #545454;
                                width: 40px;
                            }
                        }
                    }
                }
            }
        }
        .half-round {
            position: absolute;
            top: 230px;
            right: -180px;
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
        height: 1027px;
        background-color: #fff;
        > div {
            width: 63.53%;
            margin: 0 auto;
            /deep/ {
                .el-tabs--left .el-tabs__active-bar.is-left {
                    height: 24px !important;
                    background-color: $main-color !important;
                    width: 4px !important;
                    right: 0 !important;
                }
                .el-tabs__item {
                    height: 96px !important;
                    line-height: inherit;
                    font-size: 20px;
                    color: $font-main-color;
                    &.is-active {
                        font-size: 20px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 20px;
                        color: $font-high-color;
                    }
                }
                .el-tabs__item:focus.is-active.is-focus:not(:active) {
                    box-shadow: none !important;
                }
                .el-tab-pane {
                    padding-left: 50px;
                }
                .el-col-8 {
                    margin-bottom: 30px;
                }
            }
            .name-btn {
                display: block;
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                padding: 100px 0 70px 0;
                text-align: center;
                color: $font-high-color;
            }
            .desc-txt {
                padding: 30px 0 40px 0;
                font-size: 20px;
                font-weight: normal;
                line-height: 32px;
                color: $font-main-color;
                width: 80%;
            }
            .desc-card {
                .grid-desc-card {
                    width: 100%;
                    height: 275px;
                    position: relative;
                    text-align: center;
                    .bg-icon {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 6;
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        background-color: $main-color;
                        @include displayCenter;
                        i {
                            font-size: 38px;
                            color: #fff;
                        }
                    }
                    .bg-white {
                        position: absolute;
                        top: 45px;
                        width: inherit;
                        height: 230px;
                        padding: 40px;
                        border-radius: 20px;
                        box-shadow: 0px 10px 60px 0px rgba(38, 45, 118, 0.08);
                        @include displayCenter;
                        flex-direction: column;
                        .txt-name {
                            font-size: 18px;
                            font-family: "SourceHanSansCN-Bold";
                            font-weight: bold;
                            line-height: 32px;
                            color: $font-high-color;
                            margin-bottom: 10px;
                        }
                        .desc-txt-box {
                            font-size: 16px;
                            line-height: 20px;
                            color: $font-main-color;
                            width: 90%;
                            text-align: left;
                            min-width: 182px;
                        }
                    }
                }
                .grid-desc-advantage {
                    width: 100%;
                    min-height: 200px;
                    border-radius: 20px;
                    border: 1px solid #d3dcd4;
                    padding: 40px;
                    > i {
                        display: block;
                        color: $main-color;
                        font-size: 36px;
                    }
                    p {
                        margin-top: 30px;
                        font-size: 18px;
                        font-weight: normal;
                        line-height: 28px;
                        color: $font-main-color;
                        max-height: 56px;
                        min-width: 202px;
                    }
                }
            }
        }
    }
}
@include pcMini {
    .container {
        .pannel3 {
            .pannel-box {
                width: 1182px;
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(1130);
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
                margin-top: vw(30);
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
                .img {
                    width: vw(510);
                    height: vw(600);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    top: vw(425);
                    transform: translateX(-50%);
                    border-radius: 0px vw(100) 0px vw(100);
                    background: url("~/static/imgs/scene-aiot.png") no-repeat
                        67% center;
                    background-size: 250%;
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
                        top: vw(523);
                        right: vw(99);
                        transform: rotate(270deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(823);
                        right: vw(93);
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
                height: vw(60);
                line-height: vw(60);
                border-radius: vw(10);
                font-size: vw(24);
                white-space: nowrap;
                overflow-x: auto;
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
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(10);
                    }
                }
            }
            .desc-box {
                .title-box {
                    padding: vw(62) 0 vw(60) 0;
                    font-size: vw(42);
                    line-height: vw(42);
                }
                .desc-pannel {
                    height: vw(460);
                    border-radius: 0;
                    background: url("~/static/imgs/line-bg-m.png") no-repeat
                        center center;
                    background-size: 106%;
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
            // height: vw(800);
            height: auto;
            min-height: vw(800);
            margin-top: 0;
            .pannel-box {
                width: 100%;
                padding: 0 vw(20);
                height: auto;
                padding-bottom: vw(50);
                h3 {
                    font-size: vw(42);
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: vw(42);
                    text-align: center;
                    padding: vw(80) 0;
                    color: $font-high-color;
                    display: block;
                }
                .item-box {
                    min-width: 100%;
                    width: 100%;
                    // height: vw(140);
                    height: auto;
                    min-height: vw(140);
                    border-radius: vw(20);
                    margin-bottom: vw(30);
                    &.mr {
                        margin-right: 0;
                    }
                    &.w100 {
                        width: 100%;
                        .right {
                            > div {
                                padding-left: 0;
                                flex-direction: column;
                            }
                        }
                    }

                    .left {
                        width: vw(100);
                        border-radius: vw(20) 0 0 vw(20);
                        font-size: vw(28);
                    }
                    .right {
                        width: calc(100% - 13.33vw);
                        border-radius: 0px vw(20) vw(20) 0px;
                        padding: vw(10) 0;
                        // align-items: inherit;
                        flex-wrap: wrap;
                        height: auto;
                        .mr20 {
                            margin-right: vw(0);
                        }
                        > div {
                            padding-left: 0;
                            img {
                                // width: vw(126);
                                width: vw(100);
                                &.w40 {
                                    width: vw(40);
                                    margin-left: vw(16);
                                }
                            }
                            span {
                                display: inline-flex;
                                margin-left: vw(20);
                                font-size: vw(18);
                                color: #545454;
                                &.title-name {
                                    min-width: vw(90);
                                }
                            }
                            i {
                                width: vw(60);
                                height: vw(60);
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                background: $main-color;
                                border-radius: 50%;
                                font-size: vw(30);
                                color: #fff;
                            }
                        }
                        .plat-name {
                            width: vw(170);
                            height: vw(35);
                            line-height: vw(35);
                            border-radius: vw(20);
                            font-size: vw(20);
                            font-family: "";
                            float: left;
                            text-align: center;
                            margin-left: 0;
                        }
                        .plat-content {
                            width: vw(600);
                            padding: vw(18) 0;
                            > div {
                                padding-left: 0;
                                flex-direction: column;
                                .icon-box {
                                    width: vw(60);
                                    height: vw(60);
                                    border-radius: 50%;
                                    i {
                                        font-size: vw(30);
                                    }
                                }
                                .txt-box {
                                    font-size: vw(18);
                                    font-weight: normal;
                                    margin-left: 0;
                                    width: auto;
                                    margin-top: vw(8);
                                    font-family: "";
                                    padding-left: vw(20);
                                }
                            }
                        }
                    }
                }
            }
            .half-round {
                display: none;
            }
        }
        .pannel4 {
            min-height: vw(890);
            height: auto;
            padding-bottom: vw(80);
            > div {
                width: 100%;
                padding: 0;
                .tab-box {
                    width: 100%;
                    padding: 0 vw(40);

                    white-space: nowrap;
                    overflow-x: auto;
                    background: #fff;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    > span {
                        display: inline-block;
                        margin-right: vw(30);
                        font-size: vw(32);
                        color: $font-main-color;
                        padding-bottom: vw(30);
                        position: relative;
                        &.active {
                            color: $font-high-color;
                            font-family: "SourceHanSansCN-Bold";
                            font-weight: bold;
                            &::after {
                                content: "";
                                width: vw(80);
                                border-bottom: vw(5) solid $main-color;
                                display: inline-block;
                                position: absolute;
                                left: 0;
                                bottom: 0;
                            }
                        }
                    }
                }
                .item-content {
                    padding: 0 vw(20);
                    width: 100%;
                    .name-btn {
                        font-size: vw(42);
                        padding: vw(60) 0 vw(40) 0;
                    }
                    .desc-txt {
                        margin-top: vw(30);
                        width: vw(670);
                        font-size: vw(26);
                        line-height: vw(46);
                        padding: 0;
                    }
                    .desc-card {
                        /deep/ {
                            .el-col {
                                width: vw(226.5);
                                position: relative;
                                &:nth-child(2) {
                                    margin: 0 vw(15);
                                }
                            }
                        }
                        .grid-desc-card {
                            width: 100%;
                            min-height: vw(275);
                            height: auto;
                            border-radius: 0;
                            text-align: center;
                            padding-top: vw(45);
                            .bg-icon {
                                width: vw(90);
                                height: vw(90);
                                i {
                                    font-size: vw(38);
                                }
                            }
                            .bg-white {
                                position: relative;
                                top: 0;
                                min-height: vw(230);
                                height: auto;
                                padding: vw(20);
                                padding-bottom: 0;
                                overflow: hidden;
                                .txt-name {
                                    font-size: vw(18);
                                    line-height: vw(32);
                                    margin-bottom: vw(10);
                                }
                                .desc-txt-box {
                                    font-size: vw(16);
                                    line-height: vw(20);
                                }
                            }
                        }
                        .grid-desc-advantage {
                            width: 100%;
                            min-height: vw(200);
                            height: auto;
                            border-radius: vw(20);
                            border: 1px solid #d3dcd4;
                            padding: vw(40) vw(20);
                            > i {
                                display: block;
                                color: $main-color;
                                font-size: vw(36);
                            }
                            p {
                                margin-top: vw(20);
                                font-size: vw(18);
                                font-weight: normal;
                                line-height: vw(22);
                                color: $font-main-color;
                            }
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