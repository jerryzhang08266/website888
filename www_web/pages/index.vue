<template>
    <div class="container-home clearfix">
        <section class="pannel1">
            <div v-show="deviceSize=='large'">
                <div class="content-box">
                    <!-- 左边 -->
                    <div class="content-txt">
                        <div class="title-box">中国领先的智能商业<br />解决方案提供商</div>
                        <p class="txt-box">通过端到端的智能商业解决方案，实现运营管理的数字智能化，为降本增效及业务扩张赋能。
                        </p>
                        <div class="input-box">
                            <!-- <el-input
                                v-model="tel"
                                placeholder="请输入您的手机号"
                            ></el-input> -->
                            <span
                                class="start-btn"
                                @click="freeStart"
                            >30秒，免费获取白皮书及试用</span>
                        </div>
                        <i class="pattern1 iconfont icon-sanjiao"></i>
                        <i class="pattern2 iconfont icon-zfx"></i>
                        <i class="pattern3 iconfont icon-sanjiao1"></i>

                    </div>
                    <!-- 右边图片 -->
                    <div class="img-box">
                        <div>
                            <div class="bg-box"></div>
                            <img
                                :src="img_url"
                                alt=""
                            >
                        </div>
                        <i class="pattern4 iconfont icon-yuan"></i>
                        <i class="pattern5 iconfont icon-zhijiao"></i>
                    </div>
                </div>
                <div class="right-circle">
                    <!-- 右边第一个圆 -->
                    <div class="circle-box"></div>
                    <!-- 右边第二个圆 -->
                    <div class="circle-box2"></div>
                </div>
            </div>
            <div v-show="deviceSize!='large'">
                <!-- 左边 -->
                <div class="content-txt">
                    <div class="title-box">中国领先的智能商业<br />解决方案提供商</div>
                    <p class="txt-box">通过端到端的智能商业解决方案，实现运营管理的数字智能化，为降本增效及业务扩张赋能。
                    </p>
                    <div class="input-box">
                        <!-- <el-input
                            v-model="tel"
                            placeholder="请输入您的手机号"
                        ></el-input> -->
                        <span
                            class="start-btn"
                            @click="freeStart"
                        >30秒，免费获取白皮书及试用</span>
                    </div>
                </div>
                <!-- 左边点缀 -->
                <i class="pattern1 iconfont icon-sanjiao"></i>
                <i class="pattern2 iconfont icon-zfx"></i>
                <i class="pattern3 iconfont icon-sanjiao1"></i>
                <i class="pattern4 iconfont icon-yuan"></i>
                <i class="pattern5 iconfont icon-zhijiao"></i>
                <!-- 右边图片 -->
                <div class="img-box">
                    <div>
                        <div class="bg-box"></div>
                        <img
                            :src="img_url"
                            alt=""
                        >
                    </div>

                </div>
            </div>

        </section>
        <section class="pannel2">
            <div class="bg-box"></div>
            <div
                class="bg-img-box"
                v-if="deviceSize=='large'"
                :style="{width:pannel2.width,height:pannel2.height}"
            ></div>
            <div
                class="bg-img-box"
                v-else
            ></div>
        </section>
        <section class="pannel3">
            <div class="content-box">
                <div class="title-box">我们解决的门店痛点</div>
                <div
                    class="item-box"
                    v-if="deviceSize=='large'"
                >
                    <div class="left-box">
                        <div class="sub-title">全时段业务在线解决方案</div>
                        <div class="item-pannel">
                            <div>
                                <div class="item-txt">
                                    <i class="iconfont icon-net"></i>
                                    门店网络经常中断
                                </div>
                                <div class="item-txt">
                                    <i class="iconfont icon-yunwei"></i>
                                    不同厂家设备运维难
                                </div>
                                <div class="item-txt">
                                    <i class="iconfont icon-shop"></i>
                                    全国门店网络情况不明
                                </div>
                                <div class="item-txt">
                                    <i class="iconfont icon-warm"></i>
                                    简单故障无法即时处理
                                </div>
                            </div>
                            <div>
                                <div class="item-txt">
                                    <i class="iconfont icon-low-net"></i>
                                    网络不给力门店坪效低
                                </div>
                                <div class="item-txt">
                                    <i class="iconfont icon-loading"></i>
                                    故障报修一等再等
                                </div>
                                <div class="item-txt">
                                    <i class="iconfont icon-a-lujing2"></i>
                                    遭遇网络恶意攻击导致损失
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="sub-title">商业场景感知解决方案</div>
                        <div class="item-pannel">
                            <div class="item-txt">
                                <i class="iconfont icon-pie"></i>
                                大空间大客流难以统计
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-jingzhun"></i>
                                门店经营分析缺少精准的客户行为数据
                            </div>
                            <div class="item-txt ">
                                <i class="iconfont icon-qushi"></i>
                                传统门店督导效率低
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-else
                    class="item-box-m"
                >
                    <div class="m-div btborder">
                        <div class="head-div">
                            全时段业务在线解决方案
                            <i
                                class="iconfont icon-top-arrow2 is-revers"
                                @click="foldFn($event)"
                            ></i>
                        </div>
                        <div class="item-div h308 h0">
                            <div class="item-txt">
                                <i class="iconfont icon-net"></i>
                                门店网络经常中断
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-yunwei"></i>
                                不同厂家设备运维难
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-shop"></i>
                                全国门店网络情况不明
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-warm"></i>
                                简单故障无法即时处理
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-low-net"></i>
                                网络不给力门店坪效低
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-loading"></i>
                                故障报修一等再等
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-a-lujing2"></i>
                                遭遇网络恶意攻击导致损失
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                        </div>
                    </div>
                    <div class="m-div">
                        <div class="head-div">
                            商业场景感知解决方案
                            <i
                                class="iconfont icon-top-arrow2 "
                                @click="foldFn($event)"
                            ></i>
                        </div>
                        <div class="item-div h132">
                            <div class="item-txt">
                                <i class="iconfont icon-pie"></i>
                                大空间大客流难以统计
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt">
                                <i class="iconfont icon-jingzhun"></i>
                                门店经营分析缺少精准的客户行为数据
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                            <div class="item-txt ">
                                <i class="iconfont icon-qushi"></i>
                                传统门店督导效率低
                                <!-- <nuxt-link
                                    class="jump-btn"
                                    to="/introduce/perception"
                                ><i class="iconfont icon-left-arrow"></i></nuxt-link> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pannel4">
            <div class="circle-box"></div>
            <div class="circle-box2"></div>
            <div class="title-box">解决方案分类</div>
            <div
                class="content-box"
                v-if="deviceSize=='large'"
            >
                <div
                    class="left-box"
                    :class="cur_scheme.id==2?'aside':''"
                >
                    <div></div>
                    <template v-for="(item,idx) in cur_scheme.items">
                        <span
                            :key="idx"
                            :class="'label'+(idx+1)"
                        >{{item}}</span>
                    </template>
                    <!-- <span class="label2">连接保障</span>
                    <span class="label3">主动监控</span>
                    <span class="label4">远程恢复</span>
                    <span class="label5">及时上门</span>
                    <span class="label6">降本增效</span>
                    <span class="label7">安全防护</span> -->
                </div>
                <div class="right-box">
                    <div
                        class="subtitle-box"
                        @mouseover="mouseOver(0)"
                    >
                        <i
                            class="iconfont icon-left-arrow"
                            v-show="cur_scheme.id==1"
                        ></i>
                        全时段业务在线解决方案
                    </div>
                    <template v-if="cur_scheme.id==1">
                        <p class="txt-box">
                            {{cur_scheme.desc}}
                        </p>
                        <div class="more-btn">
                            <nuxt-link to="/introduce/iot?active=1">更多</nuxt-link>
                        </div>
                    </template>

                    <div class="line"></div>
                    <div
                        class="subtitle-box"
                        @mouseover="mouseOver(1)"
                    >
                        <i
                            class="iconfont icon-left-arrow"
                            v-show="cur_scheme.id==2"
                        ></i>
                        商业场景感知解决方案
                    </div>
                    <template v-if="cur_scheme.id==2">
                        <p class="txt-box">
                            {{cur_scheme.desc}}
                        </p>
                        <div class="more-btn">
                            <nuxt-link to="/introduce/perception">更多</nuxt-link>
                        </div>
                    </template>
                </div>
            </div>
            <div
                class="content-box-m"
                v-else
            >
                <h3>全时段业务在线解决方案</h3>
                <p>
                    {{scheme[0].desc}}
                </p>
                <h6><nuxt-link to="/introduce/iot?active=1">更多</nuxt-link></h6>
                <div class="bg-box">
                    <div class="bg-div"></div>
                    <template v-for="(item,idx) in scheme[0].items">
                        <span
                            :key="idx"
                            :class="'label'+(idx+1)"
                        >{{item}}</span>
                    </template>
                    <!-- <span class="label1">云端配置</span>
                    <span class="label2">连接保障</span>
                    <span class="label3">主动监控</span>
                    <span class="label4">远程恢复</span>
                    <span class="label5">及时上门</span>
                    <span class="label6">降本增效</span>
                    <span class="label7">安全防护</span> -->
                </div>
                <h3>商业场景感知解决方案</h3>
                <p>
                    {{scheme[1].desc}}
                </p>
                <h6><nuxt-link to="/introduce/perception">更多</nuxt-link></h6>
                <div class="bg-box">
                    <div class="bg-div"></div>
                    <template v-for="(item,idx) in scheme[1].items">
                        <span
                            :key="idx"
                            :class="'label'+(idx+1)"
                        >{{item}}</span>
                    </template>
                </div>
            </div>

        </section>
        <section class="pannel5">
            <div class="graph1"></div>
            <div class="graph2"></div>
            <div class="content">
                <div class="left-box">
                    <div class="bg1">
                        <el-carousel
                            :height="deviceSize=='large'?'470px':'54.66vw'"
                            arrow="never"
                        >
                            <el-carousel-item
                                v-for="(item,idx) in descs"
                                :key="idx"
                            >

                                <span class="label-box">典型客户</span>
                                <p class="brand-txt">
                                    {{item.txt}}
                                </p>
                                <span class="brand-logo">
                                    <img
                                        v-if="deviceSize=='large'"
                                        :src="item.img_url"
                                        alt=""
                                        :style="{height:idx==2?'36px':''}"
                                    >
                                    <img
                                        v-else
                                        :src="item.img_url"
                                        alt=""
                                        :style="{height:idx==2?'6vw':'4vw'}"
                                    >
                                </span>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="bg2"></div>
                </div>
                <!-- brand card -->
                <div class="brand-box">
                    <div
                        class="card-box"
                        :class="((idx+1)%4==0)?'mr0':''"
                        v-for="(item,idx) in brands"
                        :key="idx"
                    >
                        <img
                            :style="{width:deviceSize=='large'?item.width:item.widthm}"
                            :src="item.img_url"
                            alt=""
                        >
                    </div>
                </div>
            </div>
            <div class="title-box">1000+<br />知名连锁品牌的共同选择</div>
            <p class="starts">
                <i
                    class="iconfont icon-start"
                    v-for="item in 5"
                    :key="item"
                ></i>
            </p>
            <div class="txt-pannel">
                <template v-if="deviceSize=='large'">
                    <span
                        v-for="(item,idx) in txts"
                        :key="idx"
                        :class="idx==6?'ml20':(idx==10?'ml10':'')"
                    >{{item}}</span>
                </template>
                <template v-else>
                    <div>
                        <span
                            v-for="(item,idx) in txts.slice(0,3)"
                            :key="idx"
                        >{{item}}</span>
                    </div>
                    <div>
                        <span
                            v-for="(item,idx) in txts.slice(3,6)"
                            :key="idx"
                        >{{item}}</span>
                    </div>
                    <div>
                        <span
                            v-for="(item,idx) in txts.slice(6,10)"
                            :key="idx"
                        >{{item}}</span>
                    </div>
                </template>

            </div>
        </section>
        <section class="pannel6">
            <div class="title-box">资质认证与奖项荣誉</div>
            <div class="rewards-box">
                <div>
                    <template v-if="deviceSize=='large'">
                        <div
                            v-for="(item,idx) in rewards"
                            :key="idx"
                        >
                            <img
                                :style="{width:item.width}"
                                :src="item.img_url"
                                alt=""
                            >
                            <p
                                v-html="item.name"
                                :class="!item.time?'bold':''"
                            ></p>
                            <!-- 时间 -->
                            <p
                                v-if="item.time"
                                class="time-box"
                            >{{item.time}}</p>
                        </div>
                    </template>
                    <template v-else>
                        <div
                            v-for="(item,idx) in rewards_m"
                            :key="idx"
                        >
                            <div
                                v-for="(subitem,index) in item"
                                :key="index"
                            >
                                <img
                                    :style="{width:subitem.widthm}"
                                    :src="subitem.img_url"
                                    alt=""
                                >
                                <p
                                    v-html="transVal(subitem.name)"
                                    :class="!subitem.time?'bold':''"
                                >
                                </p>
                                <!-- 时间 -->
                                <p
                                    v-if="subitem.time"
                                    class="time-box"
                                >{{subitem.time}}</p>
                            </div>
                        </div>
                    </template>

                </div>
            </div>
        </section>
        <section class="pannel7">
            <div>
                <div class="bg1"></div>
                <div class="bg2"></div>
                <div
                    class="title-box"
                    @click="freeStart"
                >30秒，免费获取白皮书及试用</div>
                <!-- <div class="input-pannel">
                    <div class="input-box">
                        <el-input
                            v-model="tel"
                            placeholder="输入您的手机号"
                        ></el-input>
                        <span
                            class="start-btn"
                            @click="freeStart"
                        >30秒，免费获取白皮书及试用</span>
                    </div>
                </div> -->

            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
import Toast from "../components/toast/index";
export default {
    name: "root",
    components: {},
    head() {
        // return this.$seo(this.title, this.meta, [{}]);
    },
    computed: {
        ...mapState(["deviceSize"])
    },
    methods: {
        freeStart() {
            this.$router.push({
                path: "/download"
            });
            return false;
            if (!this.tel) {
                Toast({
                    text: "请输入您的手机号",
                    duration: 3000,
                    type: ""
                });
                return false;
            }
            let phone_reg =
                /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
            if (phone_reg.test(this.tel)) {
                Api.free_start
                    .post({
                        mobile: this.tel
                    })
                    .then((res) => {
                        // console.log(res);
                        if (res.code == 1) {
                            this.tel = "";
                            Toast({
                                text: "提交成功！",
                                subtext:
                                    "专业咨询顾问稍后给您致电，请注意接听。",
                                type: ""
                            });
                        } else {
                            Toast({
                                text: res.code
                            });
                        }
                    });
            } else {
                Toast({
                    text: "您输入的手机号格式有误",
                    type: ""
                });
            }
        },
        transArr(arr) {
            const newData = arr.reduce((prev, curr, index) => {
                // 下面的2就是一行要显示的数量
                const i = Math.floor(index / 2);
                prev[i] = [...(prev[i] || []), curr];
                return prev;
            }, []);
            return newData;
        },
        transVal(str) {
            return str ? str.replace("<br/>", "&nbsp;&nbsp;") : "";
        },
        foldFn(event) {
            if (
                event.target.parentElement.children[0].className.indexOf(
                    "is-revers"
                ) != -1
            ) {
                event.target.parentElement.children[0].classList.remove(
                    "is-revers"
                );
                event.target.parentElement.nextElementSibling.classList.remove(
                    "h0"
                );
            } else {
                event.target.parentElement.children[0].classList.add(
                    "is-revers"
                );
                event.target.parentElement.nextElementSibling.classList.add(
                    "h0"
                );
            }
        },
        getImg() {
            Api.indexImg.get({ cid: 87 }).then((res) => {
                if (res.code == 1) {
                    this.img_url = res.data.lists[0].image;
                } else {
                }
            });
        },
        mouseOver(key) {
            this.cur_scheme = this.scheme[key];
        },
        computedWidth() {
            const width = document.body.clientWidth;
            if (width > 1920) {
                this.pannel2 = {
                    width: "1616px",
                    height: "857px"
                };
            } else {
                let lastW = width * 0.84;
                let lastH = (lastW * 857) / 1616;
                this.pannel2 = {
                    width: lastW + "px",
                    height: lastH + "px"
                };
            }
        }
    },
    created() {
        this.getImg();
        this.cur_scheme = this.scheme[0];
    },
    mounted() {
        if (this.deviceSize == "large") {
            if (typeof window !== "undefined") {
                window.addEventListener("resize", () => {
                    this.computedWidth();
                });
            }
        }
    },
    data() {
        return {
            tel: "",
            img_url: "",
            pannel2: {
                width: "1616px",
                height: "857px"
            },
            cur_scheme: {},
            scheme: [
                {
                    id: 1,
                    desc: "通过基础IoT架构、宽带及云宽带、网络安全合规等通用解决方案，为商业场景打造高效的IoT网络，让场所的人员、设备、SaaS应用之间实现广泛的互联互通与实时的数据交互，助力场所日常运营和管理的网络化、数字化、智能化。",
                    items: [
                        "云端配置",
                        "连接保障",
                        "主动监控",
                        "远程恢复",
                        "及时上门",
                        "降本增效",
                        "安全防护"
                    ]
                },
                {
                    id: 2,
                    desc: "通过传感器、AI算法、大数据分析等数智化技术的运用，建立一套智能化商业场景感知系统，对场景和事件进行数字化还原，实现线下商业场景的数据可视化，进而助力商业场所的精细化运营和标准化管理，从“云、边、端”的统一管理，为商业数智化转型赋能。",
                    items: [
                        "掌握客流趋势",
                        "分析区域客流",
                        "优化排班计划",
                        "评估活动效果",
                        "收集关键业务数据",
                        "感知关键业务事件",
                        "赋能关键业务对象"
                    ]
                }
            ],
            brands: [
                {
                    img_url: require("~/static/imgs/wanda-logo.png"),
                    width: "163px",
                    widthm: "16vw"
                },
                {
                    img_url: require("~/static/imgs/lining-logo.png"),
                    width: "111px",
                    widthm: "12vw"
                },
                {
                    img_url: require("~/static/imgs/xbk-logo.png"),
                    width: "102px",
                    widthm: "10vw"
                },
                {
                    img_url: require("~/static/imgs/coucou-logo.png"),
                    width: "139px",
                    widthm: "14vw"
                },
                {
                    img_url: require("~/static/imgs/bcla-logo.png"),
                    width: "158px",
                    widthm: "16vw"
                },
                {
                    img_url: require("~/static/imgs/familymart-logo.png"),
                    width: "122px",
                    widthm: "13vw"
                },
                {
                    img_url: require("~/static/imgs/costa-logo.png"),
                    width: "95px",
                    widthm: "9vw"
                },
                {
                    img_url: require("~/static/imgs/tiffany-logo.png"),
                    width: "137px",
                    widthm: "15vw"
                },
                {
                    img_url: require("~/static/imgs/yonghui-logo.png"),
                    width: "147px",
                    widthm: "16vw"
                },
                {
                    img_url: require("~/static/imgs/bgl-logo.png"),
                    width: "157px",
                    widthm: "15"
                },
                {
                    img_url: require("~/static/imgs/hbw-logo.png"),
                    width: "78px",
                    widthm: "8vw"
                },
                {
                    img_url: require("~/static/imgs/ysld-logo.png"),
                    width: "154px",
                    widthm: "16vw"
                }
            ],
            descs: [
                {
                    txt: "通过迈外迪的解决方案，基于客流热力图、顾客游逛轨迹等优化了商场的布局，也为后期店铺招商评估提供数据支持。同时，商场内众多的智能设备也实现了统一管理，大大提升运营效率。",
                    img_url: require("~/static/imgs/wanda_logo.png")
                },
                {
                    txt: "设备全时段运行，95%以上在线率，门店客流统计准确性、真实性、完整性大幅提升；可视化呈现门店设备终端在线状态，分钟级快速定位；用客流数据统计成交率、变化趋势，并根据数据对门店运营情况进行分析与优化。",
                    img_url: require("~/static/imgs/lining_logo.png")
                },
                {
                    txt: "十年以来，迈外迪为星巴克3000+门店提供稳定的网络服务，一方面将顾客上网与品牌营销进行深度融合，提升消费体验；另一方面通过高效的网络连接升级门店的运营效率和服务能力。",
                    img_url: require("~/static/imgs/xingbake_logo.png")
                },
                {
                    txt: "通过迈外迪无线Wi-Fi，首都机场实现了全场所的高效网络覆盖，满足百万级旅客上网需求，极大提升了旅客体验。统一的云端管理平台，也大幅降低了机场网络运维的复杂度和运维成本。",
                    img_url: require("~/static/imgs/bcia_logo.png")
                }
            ],
            txts: [
                "“我终于不用再报修那些我不懂的设备了”",
                "“彻底告别断网的各种尴尬”",
                "“真实的客流数据为我拨开了迷雾”",
                "“云巡店与线下巡店结合是最完美的管理方式”",
                "“稳定高效的网络才是真正的降本增效”",
                "“事情变得简单了”",
                "“靠数据决策，而不是感觉”",
                "“专业的服务才能解决专业的问题”",
                "“你会更了解你的门店”",
                "“数据会说话”",
                "“我可以确定的关掉一家低效能门店，不接受反驳”",
                "“后台掌控一切设备的感觉真好”",
                "“你能管理更多的门店”"
            ],
            rewards: [
                {
                    name: "国家高新技术企业",
                    img_url: require("~/static/imgs/honor1.png"),
                    width: "110.77px",
                    widthm: "16vw"
                },
                {
                    name: "CMMI L3认证",
                    img_url: require("~/static/imgs/honor2.png"),
                    width: "120px",
                    widthm: "16vw"
                },
                {
                    name: "信息安全管理体系认证",
                    img_url: require("~/static/imgs/honor3.png"),
                    width: "120px",
                    widthm: "16vw"
                },
                {
                    name: "质量管理体系认证",
                    img_url: require("~/static/imgs/honor4.png"),
                    width: "120px",
                    widthm: "16vw"
                },
                {
                    name: "欧盟GDPR认证",
                    img_url: require("~/static/imgs/honor5.png"),
                    width: "120px",
                    widthm: "16vw"
                },
                {
                    name: "上海市专精特新中小企业",
                    img_url: require("~/static/imgs/honor11.png"),
                    width: "143px",
                    widthm: "16vw"
                },
                {
                    name: "产品设计奖<br/>Reddot award",
                    time: "2024.04",
                    img_url: require("~/static/imgs/honor12.png"),
                    width: "140px",
                    widthm: "16vw"
                },
                {
                    name: "AI+IoT最佳商用成长奖<br/>中国计算机协会&CCF",
                    time: "2019.07",
                    img_url: require("~/static/imgs/honor6.png"),
                    width: "140px",
                    widthm: "16vw"
                },
                {
                    name: "最佳智慧零售设备供应商奖<br/>中国百货商业协会",
                    time: "2021.04",
                    img_url: require("~/static/imgs/honor7.png"),
                    width: "140px",
                    widthm: "16vw"
                },
                {
                    name: "中国领先消费科技50企业领军企业<br/>马威",
                    time: "2020.08",
                    img_url: require("~/static/imgs/honor8.png"),
                    width: "140px",
                    widthm: "16vw"
                },
                {
                    name: "2019全球零售科技TOP<br/>50亿欧",
                    time: "2019.12",
                    img_url: require("~/static/imgs/honor9.png"),
                    width: "140px",
                    widthm: "16vw"
                },
                {
                    name: "中国零售科技创新企业50强<br/>爱分析",
                    time: "2019.10",
                    img_url: require("~/static/imgs/honor10.png"),
                    width: "140px",
                    widthm: "16vw"
                }
            ],
            rewards_m: [
                [
                    {
                        name: "国家高新技术企业",
                        img_url: require("~/static/imgs/honor1.png"),
                        width: "110.77px",
                        widthm: "16vw"
                    },
                    {
                        name: "产品设计奖<br/>Reddot award",
                        time: "2024.04",
                        img_url: require("~/static/imgs/honor12.png"),
                        width: "140px",
                        widthm: "20vw"
                        
                    }
                ],
                [
                    {
                        name: "CMMI L3认证",
                        img_url: require("~/static/imgs/honor2.png"),
                        width: "120px",
                        widthm: "16vw"
                    },
                    {
                        name: "AI+IoT最佳商用成长奖<br/>中国计算机协会&CCF",
                        time: "2019.07",
                        img_url: require("~/static/imgs/honor6.png"),
                        width: "140px",
                        widthm: "20vw"
                        
                    }
                ],
                [
                    {
                        name: "信息安全管理体系认证",
                        img_url: require("~/static/imgs/honor3.png"),
                        width: "120px",
                        widthm: "16vw"
                    },
                    {
                        name: "最佳智慧零售设备供应商奖<br/>中国百货商业协会",
                        time: "2021.04",
                        img_url: require("~/static/imgs/honor7.png"),
                        width: "140px",
                        widthm: "20vw"
                        
                    }
                ],
                [
                    {
                        name: "质量管理体系认证",
                        img_url: require("~/static/imgs/honor4.png"),
                        width: "120px",
                        widthm: "16vw"
                    },
                    {
                        name: "中国领先消费科技50企业领军企业<br/>马威",
                        time: "2020.08",
                        img_url: require("~/static/imgs/honor8.png"),
                        width: "140px",
                        widthm: "20vw"
                       
                    }
                ],
                [
                    {
                        name: "欧盟GDPR认证",
                        img_url: require("~/static/imgs/honor5.png"),
                        width: "120px",
                        widthm: "16vw"
                    },
                    {
                        name: "2019全球零售科技TOP<br/>50亿欧",
                        time: "2019.12",
                        img_url: require("~/static/imgs/honor9.png"),
                        width: "140px",
                        widthm: "20vw"
                        
                    }
                ],
                [
                    {
                        name: "上海市专精特新中小企业",
                        img_url: require("~/static/imgs/honor11.png"),
                        width: "140px",
                        widthm: "22.5vw"
                    },
                    {
                        name: "中国零售科技创新企业50强<br/>爱分析",
                        time: "2019.10",
                        img_url: require("~/static/imgs/honor10.png"),
                        width: "140px",
                        widthm: "20vw"
                    }
                ]
            ]
        };
    }
};
</script>

<style lang="scss" scope>
.container-home {
    .pannel1 {
        height: 670px;
        width: 100%;
        position: relative;
        // overflow: hidden;
        >div{
             height: 670px;
        }
        .content-box {
            width: 1325px;
            margin: 0 auto;
            height: inherit;
            display: flex;
            position: relative;

            .content-txt {
                position: relative;
                padding-top: 149px;
                padding-left: 130px;
                .title-box {
                    font-family: "SourceHanSansCN-Bold";
                    font-size: 60px;
                    font-weight: bold;
                    color: $font-high-color;
                    // width: 550px;
                    width: 553px;
                }
                .txt-box {
                    width: 406px;
                    font-size: 16px;
                    line-height: 24px;
                    color: $font-high-color;
                    margin: 40px 0;
                }
                .input-box {
                    // width: 450px;
                    width: 240px;
                    height: 48px;
                    border-radius: 48px;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    .el-input {
                        display: inline-block;
                        width: 200px;
                        padding-left: 20px;
                        input {
                            border: none;
                            height: 48px;
                            line-height: 48px;
                        }
                    }
                    .start-btn {
                        float: right;
                        // width: 160px;
                        width: 100%;
                        height: 48px;
                        line-height: 48px;
                        border-radius: 48px;
                        text-align: center;
                        color: #fff;
                        background: $main-color;
                        cursor: pointer;
                    }
                }
                .pattern1 {
                    position: absolute;
                    font-size: 21px;
                    color: $main-color;
                    top: 105px;
                    left: 240px;
                }
                .pattern2 {
                    position: absolute;
                    font-size: 30px;
                    color: $fun-orange;
                    bottom: 48px;
                    left: 120px;
                }
                .pattern3 {
                    position: absolute;
                    font-size: 37.5px;
                    color: $fun-blue;
                    top: 328px;
                    left: 20px;
                }
            }
            .img-box {
                position: relative;
                padding-top: 63px;
                z-index: 3;
                width: 547px;
                // height: 562px;
                width: 745px;
                height: inherit;
                > div {
                    position: relative;
                    width: 100%;
                    height: inherit;
                    overflow: hidden;
                    .bg-box {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 400px;
                        height: 540px;
                        border-radius: 100px 0px 100px 0px;
                        background: $main-color;
                    }
                    img {
                        position: absolute;
                        top: 35px;
                        width: 100%;
                        left: 34px;
                    }
                }
                .pattern4 {
                    position: absolute;
                    font-size: 24px;
                    color: $fun-yellow;
                    top: 217px;
                    left: 10px;
                }
                .pattern5 {
                    position: absolute;
                    font-size: 25.5px;
                    color: $main-color;
                    bottom: 88px;
                    left: 30px;
                }
            }
        }
        .right-circle {
            position: absolute;
            right: 0;
            top: 0;
            width: 998px;
            height: 670px;
            overflow: hidden;
            .circle-box {
                position: absolute;
                // right: -84px;
                right: -4.4%;
                top: -140px;
                z-index: 2;
                width: 745.45px;
                height: 745.47px;
                // width: 38.8%;
                // padding-top: 38.8%;
                border-radius: 50%;
                transform: rotate(180deg);
                opacity: 1;
                background: linear-gradient(
                    271deg,
                    rgba(69, 184, 113, 0.16) 0%,
                    rgba(69, 184, 113, 0) 103%
                );
            }
            .circle-box2 {
                position: absolute;
                right: -65px;
                top: 45px;
                z-index: 1;
                width: 998.28px;
                height: 996.67px;
                // width: 52%;
                // padding-top: 52%;
                border-radius: 35%;
                transform: rotate(180deg);
                opacity: 1;
                background: linear-gradient(
                    271deg,
                    rgba(69, 184, 113, 0.16) 0%,
                    rgba(69, 184, 113, 0) 103%
                );
            }
        }
    }
    .pannel2 {
        width: 100%;
        height: 857px;
        position: relative;
        .bg-box {
            width: 100%;
            height: 582px;
            position: relative;
            background: url("~/static/imgs/index-pc.png") no-repeat center
                center;
            background-size: 105%;
        }
        .bg-img-box {
            // width: 88%;
            // height: 100%;
            width: 1616px;
            height: 857px;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: url("~/static/imgs/index-pc-bg.png") no-repeat center
                center;
            background-size: 100%;
        }
    }
    .pannel3 {
        width: 100%;
        min-height: 426px;
        .content-box {
            // margin: 20px 15.52% 0 20.93%;
            // width: calc(100% - 36.4%);
            width: 1167px;
            margin: 20px auto 0 auto;
            .title-box {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                text-align: center;
                color: $font-high-color;
                margin-bottom: 100px;
            }
            .item-box {
                display: flex;
                .left-box {
                    flex: 2;
                    border-right: 1px solid $border-color;
                    .item-pannel {
                        display: flex;
                        > div {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            .item-txt {
                                font-size: 20px;
                                color: #005542;
                                margin-bottom: 20px;
                                i {
                                    margin-right: 10px;
                                    font-size: 20px;
                                    color: $main-color;
                                }
                            }
                        }
                    }
                }
                .right-box {
                    // flex: 1;
                    width: 42%;
                    padding-left: 75px;
                    .item-pannel {
                        display: flex;
                        flex-direction: column;
                        .item-txt {
                            font-size: 20px;
                            color: #005542;
                            margin-bottom: 20px;
                            i {
                                margin-right: 30px;
                                font-size: 20px;
                                color: $main-color;
                            }
                        }
                    }
                }
                .sub-title {
                    font-size: 20px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    margin-bottom: 30px;
                    color: $font-high-color;
                }
            }
        }
    }
    .pannel4 {
        position: relative;
        width: 100%;
        height: 808px;
        padding-top: 140px;
        overflow: hidden;
        .circle-box {
            position: absolute;
            top: 65px;
            right: -9.19%;
            z-index: 3;
            width: 18.38%;
            padding-top: 18.38%;
            border-radius: 50%;
            transform: rotate(180deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
        .circle-box2 {
            position: absolute;
            top: 152px;
            right: -6.31%;
            z-index: 2;
            width: 24.63%;
            padding-top: 24.63%;
            border-radius: 40%;
            transform: rotate(180deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
        .title-box {
            height: 61px;
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            color: $font-high-color;
            text-align: center;
            margin-bottom: 70px;
        }
        .content-box {
            // width: 100%;
            width: 1000px;
            margin: 0 auto;
            display: flex;
            // padding-left: 20.93%;
            .left-box {
                position: relative;
                // width: 25.62%;
                // padding-top: 24.84%;
                width: 413px;
                height: 413px;
                border-top-right-radius: 20%;
                border-bottom-left-radius: 20%;
                background: url("~/static/imgs/index-line.png") no-repeat center
                    center;
                > div {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: $main-color;
                    opacity: 0.3;
                    border-top-right-radius: 20%;
                    border-bottom-left-radius: 20%;
                }
                > span {
                    width: 130px;
                    height: 55px;
                    line-height: 55px;
                    text-align: center;
                    border-radius: 20px;
                    font-size: 18px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: $font-high-color;
                    background: #fff;
                    position: absolute;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    &.label1 {
                        top: 40px;
                        left: 51px;
                    }
                    &.label2 {
                        top: 40px;
                        right: 25px;
                    }
                    &.label3 {
                        top: 117px;
                        right: -80px;
                    }
                    &.label4 {
                        top: 133px;
                        left: 133px;
                    }
                    &.label5 {
                        top: 250px;
                        left: 72px;
                    }
                    &.label6 {
                        top: 220px;
                        right: -30px;
                    }
                    &.label7 {
                        bottom: 32px;
                        right: 101px;
                    }
                }
                &.aside {
                    > span {
                        padding: 0 20px;
                        width: auto;
                        &.label1 {
                            top: 30px;
                            left: 51px;
                        }
                        &.label2 {
                            top: 43px;
                            right: -25px;
                        }
                        &.label3 {
                            top: 161px;
                            left: -20px;
                            right: inherit;
                        }
                        &.label4 {
                            top: 161px;
                            left: auto;
                            right: 48px;
                        }
                        &.label5 {
                            top: 297px;
                            left: -42px;
                        }
                        &.label6 {
                            top: 288px;
                            right: -30px;
                        }
                        &.label7 {
                            bottom: 21px;
                        }
                    }
                }
            }
            .right-box {
                // width: 21.14%;
                // width: 307px;
                width: 405px;
                // margin-left: 10.41%;
                margin-left: 150px;
                // margin-top: 76px;
                margin-top: 37px;
                .subtitle-box {
                    i {
                        font-size: 22px;
                        color: $main-color;
                        margin-right: 10px;
                    }
                    font-size: 32px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: $font-high-color;
                }
                .txt-box {
                    margin-top: 20px;
                    font-size: 16px;
                    line-height: 24px;
                    color: $font-high-color;
                }
                .more-btn {
                    margin-top: 22px;
                    text-decoration: underline;
                    color: $main-color;
                    font-size: 16px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    a {
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                    }
                }
                .line {
                    margin: 30px 0;
                    border-top: 1px solid $border-color;
                }
            }
        }
    }
    .pannel5 {
        position: relative;
        min-height: 1164px;
        margin-top: 60px;
        .graph1 {
            position: absolute;
            top: 300px;
            width: 22.39%;
            padding-top: 22.39%;
            left: -10%;
            z-index: 1;
            border-radius: 50px;
            transform: rotate(36.42deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
        .graph2 {
            position: absolute;
            top: 360px;
            width: 22.39%;
            padding-top: 22.39%;
            left: -15%;
            z-index: 2;
            border-radius: 50px;
            transform: rotate(-61.18deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
        .content {
            // padding-left: 18.23%;
            padding-left: 334px;
            position: relative;
            width: 1836px;
            left: 50%;
            transform: translateX(-50%);
            .left-box {
                position: relative;
                // width: 63.54%;
                width: 954px;
                height: 550px;
                border-radius: 52px;
                background: $font-high-color;
                .bg1 {
                    float: left;
                    width: 65%;
                    height: 550px;
                    background: url("~/static/imgs/index-left.png") no-repeat -190px
                        center;
                    // padding-top: 30px;
                    .label-box {
                        display: block;
                        font-size: 50px;
                        font-weight: bold;
                        font-family: SourceHanSansCN-Bold;
                        color: #fff;
                        padding-left: 100px;
                        padding-bottom: 30px;
                        padding-top: 30px;
                    }
                    .brand-txt {
                        width: 468px;
                        font-size: 26px;
                        font-weight: normal;
                        line-height: 42px;
                        color: #fff;
                        margin-left: 100px;
                    }
                    .brand-logo {
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 100px;
                        // border: 1px solid #ff0;
                        color: #fff;
                        width: 100px;
                        height: 40px;
                        // img{
                        //     height: 28px;
                        // }
                    }
                    .el-carousel__indicators--horizontal {
                        // bottom: 20%;
                        bottom: 14%;
                        left: 100px;
                        transform: none;
                    }
                    .el-carousel__indicator.is-active button {
                        background-color: $main-color;
                        width: 80px;
                    }
                }
                .bg2 {
                    float: left;
                    width: calc(100% - 65%);
                    height: 550px;
                    background: url("~/static/imgs/index-right.png") no-repeat -198px
                        center;
                }
            }
            .brand-box {
                // width: 42.29%;
                width: 776px;
                position: absolute;
                top: 142px;
                // right: 6%;
                right: 110px;
                display: flex;
                flex-wrap: wrap;
                > div {
                    width: 22%;
                    min-width: 175px;
                    height: 101px;
                    background-color: #fff;
                    border-top-right-radius: 40px;
                    border-bottom-left-radius: 40px;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
                    margin-right: 20px;
                    margin-bottom: 20px;
                    @include displayCenter;
                    overflow: hidden;
                    img {
                        width: 90%;
                    }
                }
            }
        }
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            text-align: center;
            color: $font-high-color;
            margin-top: 100px;
        }
        .starts {
            text-align: center;
            line-height: 40px;
            margin-top: 10px;
            margin-bottom: 60px;
            i {
                font-size: 18px;
                color: $fun-yellow;
                margin-right: 8px;
            }
        }
        .txt-pannel {
            // padding-left: 18%;
            // width: 90%;
            padding-left: 0%;
            width: 1160px;
            margin: 0 auto;
            span {
                height: 60px;
                line-height: 60px;
                border-radius: 10px;
                padding: 0 20px;
                display: inline-block;
                background: $sub-color;
                color: $font-high-color;
                font-size: 20px;
                margin-right: 20px;
                margin-bottom: 20px;
                &:nth-child(odd) {
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                }
                &.ml20 {
                    margin-left: -20px;
                }
                &.ml10 {
                    margin-left: -10px;
                }
            }
        }
    }
    .pannel6 {
        position: relative;
        padding-top: 100px;
        padding-bottom: 120px;
        .title-box {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            margin-bottom: 80px;
        }
        .rewards-box {
            // width: 100%;
            width: 1836px;
            margin: 0 auto;
            overflow: hidden;
            > div {
                width: 110.41%;
                display: flex;
                flex-wrap: wrap;
                margin-left: -5%;
                padding-left: 1%;
                > div {
                    width: 18.5%;
                    width: 14.9%;
                    height: 200px;
                    border-radius: 20px;
                    border: 2px solid #eeeeee;
                    margin: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    &:hover {
                        box-shadow: 15px 25px 60px -10px rgba(0, 0, 0, 0.1);
                    }
                    img {
                        width: 80%;
                    }
                    p {
                        width: 100%;
                        font-size: 14px;
                        line-height: 20px;
                        color: $font-high-color;
                        text-align: center;
                        &.bold {
                            font-family: "SourceHanSansCN-Bold";
                            font-weight: bold;
                            font-size: 18px;
                        }
                        &.time-box {
                            margin-top: 6px;
                        }
                    }
                }
            }
        }
    }
    .pannel7 {
        position: relative;
        > div {
            width: 52%;
            height: 217px;
            margin: 0 auto;
            border-radius: 52px;
            background: $font-high-color;
            position: relative;
            overflow: hidden;
            .bg1 {
                float: left;
                width: 55%;
                height: 217px;
                background: url("~/static/imgs/index-left.png") no-repeat left
                    top;
                background-size: 134%;
            }
            .bg2 {
                float: left;
                width: 45%;
                height: 217px;
                background: url("~/static/imgs/index-right.png") no-repeat left
                    top;
                background-size: 132%;
            }
            .title-box {
                font-size: 28px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                color: #fff;
                position: absolute;
                top: 88px;
                cursor: pointer;
                z-index: 8;
                width: 100%;
                text-align: center;
                // margin-bottom: 30px;
            }
            .input-pannel {
                width: 100%;
                position: absolute;
                top: 122px;
                z-index: 8;
                display: flex;
                align-items: center;
                justify-content: center;
                .input-box {
                    width: 240px;
                    height: 48px;
                    border-radius: 48px;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    .el-input {
                        display: inline-block;
                        width: 200px;
                        padding-left: 20px;
                        input {
                            border: none;
                            height: 48px;
                            line-height: 48px;
                        }
                    }
                    .start-btn {
                        float: right;
                        // width: 160px;
                        width: 100%;
                        height: 48px;
                        line-height: 48px;
                        border-radius: 48px;
                        text-align: center;
                        color: #fff;
                        background: $main-color;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
@include pcMini {
    .container-home {
        .pannel5 {
            .content {
                padding-left: 10%;
                width: 1300px;
                .left-box {
                    width: 70%;
                    .bg1 {
                        .brand-txt {
                            margin-left: 40px;
                        }
                        .brand-logo {
                            left: 40px;
                        }
                        .el-carousel__indicators--horizontal {
                            left: 40px;
                        }
                    }
                }
                .brand-box {
                    width: 50%;
                    right: -2%;
                }
            }
        }
        .pannel6 {
            .rewards-box {
                > div {
                    > div {
                        margin: 15px 10px;
                    }
                }
            }
        }
    }
}
@include notPc {
    .container-home {
        .pannel1 {
            height: vw(1018);
            .circle-box {
                display: none;
            }
            .circle-box2 {
                display: none;
            }
            .content-txt {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                .title-box {
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: $font-high-color;
                    font-size: vw(56);
                    line-height: vw(67.2);
                    text-align: center;
                    padding: vw(70) 0 vw(30) 0;
                }
                .txt-box {
                    width: vw(570);
                    margin: 0 auto;
                    font-size: vw(26);
                    color: $font-high-color;
                    line-height: vw(39);
                }
                .input-box {
                    // width: vw(570);
                    width: vw(450);
                    height: vw(70);
                    border-radius: vw(48);
                    margin: 0 auto;
                    margin-top: vw(30);
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
                    .el-input {
                        display: inline-block;
                        width: vw(390);
                        padding-left: vw(20);
                        input {
                            border: none;
                            height: vw(70);
                            line-height: vw(70);
                        }
                    }
                    .start-btn {
                        float: right;
                        // width: vw(170);
                        width: 100%;
                        height: vw(70);
                        line-height: vw(70);
                        border-radius: vw(48);
                        font-size: vw(26);
                        text-align: center;
                        color: #fff;
                        background: $main-color;
                        cursor: pointer;
                    }
                }
            }
            .pattern1 {
                position: absolute;
                color: $main-color;
                font-size: vw(18);
                top: vw(32);
                left: vw(253);
            }
            .pattern2 {
                position: absolute;
                color: $fun-orange;
                font-size: vw(31);
                top: vw(429);
                bottom: auto;
                left: vw(176);
            }
            .pattern3 {
                position: absolute;
                font-size: vw(37);
                color: $fun-blue;
                top: vw(214);
                left: vw(22);
            }
            .pattern4 {
                position: absolute;
                color: $fun-yellow;
                font-size: vw(24);
                top: vw(121);
                right: vw(82);
                bottom: auto;
                left: auto;
            }
            .pattern5 {
                position: absolute;
                color: $main-color;
                font-size: vw(26);
                top: vw(294);
                right: vw(76);
                bottom: auto;
                left: auto;
            }
            .img-box {
                position: absolute;
                width: vw(580);
                height: vw(595);
                top: vw(450);
                right: vw(86);
                z-index: 3;
                > div {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    padding-right: vw(25);
                    padding-top: vw(33);
                    height: inherit;
                    .bg-box {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: vw(447);
                        height: vw(490);
                        border-radius: vw(100) 0px vw(100) 0px;
                        background: $main-color;
                    }
                    img {
                        width: 100%;
                        position: absolute;
                        top: vw(50);
                        left: vw(26);
                    }
                }
            }
        }
        .pannel2 {
            height: vw(480);
            .bg-box {
                height: vw(341);
                background: url("~/static/imgs/index-m.png") no-repeat center
                    center;
                background-size: 100%;
            }
            .bg-img-box {
                width: vw(758);
                height: vw(582);
                position: absolute;
                top: vw(-60);
                left: 0;
                transform: translateX(0);
                background: url("~/static/imgs/index-pc-bg.png") no-repeat
                    center center;
                background-size: 100%;
            }
        }
        .pannel3 {
            min-height: auto;
            .content-box {
                width: 100%;
                margin: 0;
                .title-box {
                    font-size: vw(42);
                    margin-bottom: 0;
                }
                .item-box-m {
                    padding: vw(60) vw(40);
                    padding-top: vw(20);
                    .head-div {
                        font-size: vw(36);
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: vw(52);
                        color: $font-high-color;
                        padding: vw(40) 0;
                        i {
                            float: right;
                            color: $main-color;
                            font-size: vw(34);
                            position: relative;
                            top: vw(5);
                            transition: transform 0.3s;
                            transform: rotate(0deg);
                            &.is-revers {
                                transition: transform 0.3s;
                                transform: rotate(180deg);
                                right: vw(10);
                            }
                        }
                    }
                    .btborder {
                        border-bottom: 1px solid #d3dcd4;
                    }
                    .item-div {
                        transition: height 0.4s ease-out;
                        &.h132 {
                            height: vw(132);
                        }
                        &.h308 {
                            height: vw(400);
                        }
                        &.h0 {
                            height: 0;
                            overflow: hidden;
                        }
                        .item-txt {
                            font-size: vw(24);
                            color: #005542;
                            i {
                                color: $main-color;
                                font-size: vw(27);
                                margin-right: vw(10);
                            }
                            margin-bottom: vw(20);
                        }
                        .jump-btn {
                            float: right;
                            transform: rotate(180deg);
                            i {
                                color: $main-color;
                                font-size: vw(32);
                            }
                        }
                    }
                }
            }
        }
        .pannel4 {
            position: relative;
            height: auto;
            min-height: vw(1230);
            padding-top: 0;
            .circle-box {
                display: none;
            }
            .circle-box2 {
                display: none;
            }
            .title-box {
                height: vw(60);
                line-height: vw(60);
                font-size: vw(42);
                margin-bottom: vw(60);
            }
            .content-box-m {
                padding: 0 vw(40);
                h3 {
                    font-size: vw(32);
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    color: $font-high-color;
                }
                p {
                    margin: vw(30) 0;
                    font-size: vw(24);
                    color: $font-high-color;
                }
                h6 {
                    a {
                        font-size: vw(24);
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        text-decoration: underline;
                        color: $main-color;
                    }
                }
                .bg-box {
                    margin: vw(27) 0 vw(40) 0;
                    width: 100%;
                    height: vw(477);
                    position: relative;
                    .bg-div {
                        width: vw(492);
                        height: inherit;
                        margin: 0 auto;
                        background: url("~/static/imgs/fulltime-m.png")
                            no-repeat center center;
                        background-size: 100%;
                    }
                    span {
                        position: absolute;
                        min-width: vw(168);
                        height: vw(72);
                        padding: 0 vw(20);
                        border-radius: vw(20);
                        @include displayCenter;
                        font-size: vw(22);
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        color: $font-high-color;
                        background: #fff;
                        &.label1 {
                            top: vw(40);
                            left: vw(173);
                        }
                        &.label2 {
                            top: vw(54);
                            right: vw(113);
                        }
                        &.label3 {
                            top: vw(152);
                            right: vw(13);
                        }
                        &.label4 {
                            top: vw(168);
                            left: vw(137);
                        }
                        &.label5 {
                            top: vw(296);
                            left: vw(46);
                        }
                        &.label6 {
                            top: vw(261);
                            right: vw(139);
                        }
                        &.label7 {
                            bottom: vw(24);
                            right: vw(197);
                        }
                    }
                }
            }
        }
        .pannel5 {
            min-height: auto;
            margin-top: vw(100);
            .graph1 {
                display: none;
            }
            .graph2 {
                display: none;
            }
            .content {
                padding-left: 0;
                padding: vw(70);
                width: 100%;
                // height: vw(738);
                height: vw(802);
                background: $font-high-color url("~/static/imgs/index-left.png")
                    no-repeat center center;
                background-size: 200%;
                .left-box {
                    width: 100%;
                    // height: vw(320);
                    height: vw(410);
                    border-radius: 0;
                    background: transparent;
                    .bg1 {
                        background: transparent;
                        width: 100%;
                        // height: vw(320);
                        height: vw(410);
                        padding-top: 0;
                        .label-box {
                            display: none;
                            font-size: vw(50);
                            padding: vw(30) 0 vw(30) 0;
                        }
                        .brand-txt {
                            width: 100%;
                            font-size: vw(30);
                            line-height: vw(42);
                            margin-left: 0;
                            margin-top: vw(60);
                            padding-bottom: 50px;
                        }
                        .brand-logo {
                            top: 0;
                            left: 0;
                        }
                        .el-carousel__indicators--horizontal {
                            bottom: vw(40);
                            left: 0;
                            transform: none;
                        }
                    }
                    .bg2 {
                        display: none;
                    }
                    .brand-box {
                        width: 100%;
                    }
                }
                .brand-box {
                    width: 100%;
                    position: relative;
                    top: 0;
                    right: 0;
                    > div {
                        width: vw(137);
                        min-width: auto;
                        height: vw(75);
                        border-top-right-radius: vw(20);
                        border-bottom-left-radius: vw(20);
                        margin-right: vw(20);
                        margin-bottom: vw(20);
                        &.mr0 {
                            margin-right: 0;
                        }
                    }
                }
            }
            .title-box {
                margin-top: vw(100);
                font-size: vw(42);
            }
            .starts {
                line-height: vw(20);
                margin-top: vw(30);
                margin-bottom: vw(60);
                i {
                    font-size: vw(18);
                    margin-right: vw(8);
                }
            }
            .txt-pannel {
                padding: 0 vw(30);
                width: 100%;
                white-space: nowrap;
                overflow-x: auto;
                &::-webkit-scrollbar {
                    display: none; /*隐藏滚动条*/
                }
                span {
                    display: inline-block;
                    width: auto;
                    height: vw(66);
                    line-height: vw(66);
                    border-radius: vw(10);
                    padding: 0 vw(20);
                    margin-right: vw(20);
                    margin-bottom: vw(20);
                    font-size: vw(24);
                }
            }
        }
        .pannel6 {
            padding: 0;
            margin-top: vw(100);
            overflow: auto;
            .title-box {
                font-size: vw(42);
                line-height: vw(42);
                margin-bottom: vw(45);
            }
            .rewards-box {
                > div {
                    margin-left: 0;
                    width: 100%;
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: auto;
                    &::-webkit-scrollbar {
                        display: none; /*隐藏滚动条*/
                    }
                    > div {
                        width: vw(240);
                        flex: 0 0 vw(240);
                        height: vw(540);
                        border: none;
                        margin: 0 vw(15);
                        &:hover {
                            box-shadow: none;
                        }
                        > div {
                            width: vw(240);
                            flex: 0 0 vw(240);
                            height: vw(240);
                            border-radius: vw(20);
                            border: vw(2) solid #eeeeee;
                            // margin: vw(15);
                            margin-bottom: vw(30);
                            @include displayCenter;
                            flex-direction: column;
                            p {
                                font-size: vw(16);
                                line-height: vw(20);
                                padding: 0 vw(24);
                                &.bold {
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    font-size: vw(20);
                                }
                                &.time-box {
                                    margin-top: vw(15);
                                }
                            }
                        }
                    }
                }
            }
        }
        .pannel7 {
            margin: vw(70) vw(40) vw(100) vw(40);
            width: calc(100% - vw(80));
            height: vw(232);
            > div {
                width: 100%;
                height: inherit;
                border-radius: vw(52);
                .bg1 {
                    height: inherit;
                }
                .bg2 {
                    height: inherit;
                }
                .title-box {
                    font-size: vw(32);
                    line-height: vw(42);
                    top: vw(95);
                    // margin-bottom: vw(30);
                }
                .input-pannel {
                    top: vw(122);
                    .input-box {
                        // width: vw(486);
                        width: vw(450);
                        height: vw(60);
                        .el-input {
                            width: vw(300);
                            padding-left: vw(20);
                            input {
                                height: vw(60);
                                line-height: vw(60);
                            }
                        }
                        .start-btn {
                            // width: vw(180);
                            width: 100%;
                            height: vw(60);
                            line-height: vw(60);
                            border-radius: vw(48);
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
