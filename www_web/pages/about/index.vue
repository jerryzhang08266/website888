<!--
 * @Description: 关于我们
 * @FilePath: pages\about\index.vue
-->
<template>
    <div class="container">
        <client-only>
            <round-card
                v-if="deviceSize=='large'"
                top="2800px"
                right="-14%"
            ></round-card>
            <!-- 右边背景 -->
            <right-bg v-if="deviceSize=='large'"></right-bg>
            <section class="pannel1">
                <div>
                    <!-- 左边介绍 -->
                    <div class="txt-intro">
                        <div class="title-box">关于迈外迪</div>
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
                            src="~/static/imgs/about-us-bg.png"
                            alt=""
                        >
                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </div>
            </section>
            <!-- PC端 -->
            <section
                v-if="deviceSize=='large'"
                class="pannel22"
            >
                <square-card
                    width="400px"
                    height="400px"
                    top="-250px"
                    left="-45%"
                ></square-card>
            </section>
            <section
                v-if="deviceSize!='large'"
                class="pannel22"
            >
                <div class="wiwide-old"></div>
                <div class="wiwide-now"></div>
            </section>
            <!-- 移动端 -->
            <section
                class="pannel2"
                v-if="deviceSize!='large'"
            >
                <h3>公司介绍</h3>
                <div>
                    <div class="box"></div>
                </div>
                <div class="right-box">
                    <h3>公司介绍</h3>
                    <p>
                        迈外迪是中国领先的智能商业解决方案提供商。商业扩张，科技驱动——迈外迪致力于通过物联网、人工智能、大数据、云计算、信息安全等数智化技术在线下商业场景的应用，推动中国线下商业场景变革，成为客户数字化转型、规模化扩张的最可信赖的合作伙伴。<br /><br />
                        迈外迪是中国商用IoT网络服务的开创者，自2007年开始在中国开展商用Wi-Fi网络综合服务，以智能硬件、应用服务、智能云平台等创新技术和产品开创了中国商用Wi-Fi市场。<br /><br />
                        以此为起点，迈外迪将商用IoT网络方案全面升级为全时段业务在线解决方案，为商业客户打造连锁门店数字化底座，赋能门店全面数字化应用；同时，基于多传感器和AIoT技术，为购物中心、连锁门店等线下商业客户提供商业场景感知解决方案，帮助客户实现门店运营管理和营销决策的数字化、智能化、精准化，为客户降本增效、服务创新、业务扩张等提供助力，并最终提升整个行业的效率，推动中国商业的数字化发展。
                    </p>
                </div>
            </section>
            <!-- 移动端 -->
            <section
                class="pannel3"
                v-if="deviceSize!='large'"
            >
                <div class="pannel-box">
                    <div class="left-box">
                        坚持基础技术研发，并将先进技术应用于线下商业场景是迈外迪领先于行业的独特优势。迈外迪的技术研发已涵盖“硬件+SaaS平台及应用+服务”全链条，拥有智能硬件、AI算法、大数据、物联网、信息安全五大技术研究院，并在北京、上海、成都、长沙设立了研发中心。<br /><br />
                        凭借领先的智能商业技术，以及深厚的行业经验与覆盖全国的服务能力，迈外迪已服务超过40万家商业场所，3000+大型购物中心、1000+知名连锁品牌、30+高吞吐量机场，以及200+国内大型三甲医院。<br /><br />
                        做中国商业场景技术变革有力的推动者——这是迈外迪公司的美好愿景，未来10年，迈外迪将致力于参与中国1000家连锁品牌的成长，为100万家商业场所提供领先的智能商业产品、解决方案及服务。
                    </div>
                    <div class="right-box"></div>
                </div>
            </section>
            <!-- PC端 -->
            <section
                class="pannel3"
                v-if="deviceSize=='large'"
            >
                <div class="pannel-box-top">
                    <div class="left-box"></div>
                    <div class="right-box">
                        <h3>公司介绍</h3>
                        <p>
                            迈外迪是中国领先的智能商业解决方案提供商。商业扩张，科技驱动——迈外迪致力于通过物联网、人工智能、大数据、云计算、信息安全等数智化技术在线下商业场景的应用，推动中国线下商业场景变革，成为客户数字化转型、规模化扩张的最可信赖的合作伙伴。<br /><br />
                            迈外迪是中国商用IoT网络服务的开创者，自2007年开始在中国开展商用Wi-Fi网络综合服务，以智能硬件、应用服务、智能云平台等创新技术和产品开创了中国商用Wi-Fi市场。<br /><br />
                            以此为起点，迈外迪将商用IoT网络方案全面升级为全时段业务在线解决方案，为商业客户打造连锁门店数字化底座，赋能门店全面数字化应用；同时，基于多传感器和AIoT技术，为购物中心、连锁门店等线下商业客户提供商业场景感知解决方案，帮助客户实现门店运营管理和营销决策的数字化、智能化、精准化，为客户降本增效、服务创新、业务扩张等提供助力，并最终提升整个行业的效率，推动中国商业的数字化发展。
                        </p>
                    </div>
                </div>
                <div class="pannel-box">
                    <div class="left-box">
                        坚持基础技术研发，并将先进技术应用于线下商业场景是迈外迪领先于行业的独特优势。迈外迪的技术研发已涵盖“硬件+SaaS平台及应用+服务”全链条，拥有智能硬件、AI算法、大数据、物联网、信息安全五大技术研究院，并在北京、上海、成都、长沙设立了研发中心。<br /><br />
                        凭借领先的智能商业技术，以及深厚的行业经验与覆盖全国的服务能力，迈外迪已服务超过40万家商业场所，3000+大型购物中心、1000+知名连锁品牌、30+高吞吐量机场，以及200+国内大型三甲医院。<br /><br />
                        做中国商业场景技术变革有力的推动者——这是迈外迪公司的美好愿景，未来10年，迈外迪将致力于参与中国1000家连锁品牌的成长，为100万家商业场所提供领先的智能商业产品、解决方案及服务。
                    </div>
                    <div class="right-box">
                    </div>
                </div>
            </section>
            <section class="pannel4">
                <template v-if="deviceSize=='large'">
                    <div>
                        400+
                        <span>覆盖城市</span>
                    </div>
                    <div>
                        40万+
                        <span>覆盖连锁门店数</span>
                    </div>
                    <!-- <div>
                        50万+
                        <span>在线设备</span>
                    </div> -->
                    <div style="text-align: center;">
                        1000万+
                        <span>每日连接及管理的生产设备数量</span>
                    </div>
                    <div style="text-align: center;">
                        30+
                        <span>高吞吐量机场</span>
                    </div>
                    <div>
                        1000+
                        <span>知名连锁品牌</span>
                    </div>
                    <div>
                        3000+
                        <span>大型购物中心</span>
                    </div>
                    <div style="text-align: center;">
                        200+
                        <span>国内大型三甲医院</span>
                    </div>
                </template>
                <template v-else>
                    <div class="bg-box mb40">
                        <div>
                            400+
                            <span>覆盖城市</span>
                        </div>
                        <div>
                            40万+
                            <span>覆盖连锁门店数</span>
                        </div>
                        <!-- <div>
                            50万+
                            <span>在线设备</span>
                        </div> -->
                        <div>
                            1000万+
                            <span>每日连接及管理的<br />生产设备数量</span>
                        </div>
                    </div>
                    <div class="bg-box">
                        <div>
                            30+
                            <span>高吞吐量机场</span>
                        </div>
                        <div>
                            1000+
                            <span>知名连锁品牌</span>
                        </div>
                        <div>
                            3000+
                            <span>大型购物中心</span>
                        </div>
                        <div>
                            200+
                            <span>国内大型三甲医院</span>
                        </div>
                    </div>
                </template>

            </section>
            <section class="pannel5">
                <h3>企业文化</h3>
                <div>
                    <div class="  tr">
                        <h4>我们的口号</h4>
                        <p>商业扩张 科技驱动</p>
                    </div>
                    <div class="bl tl">
                        <h4>我们的使命</h4>
                        <p>让商业增长更简单</p>
                    </div>
                    <div class="bt  tr">
                        <h4>我们的价值观</h4>
                        <p>客户第一、结果导向<br />正直诚信、看清自己<br /> 坚持进步</p>
                    </div>
                    <div class="bt bl tl">
                        <h4>我们的愿景</h4>
                        <p>做中国商业场景技术变革有力的推<br /> 动者，到2030年，参与中国1000<br /> 个连锁品牌的成长，为100万家商<br /> 业场所提供领先的智能商业产品、<br /> 解决方案、服务。</p>
                    </div>
                </div>
                <template v-if="deviceSize!='large'">
                    <span class="user1"></span>
                    <span class="user2"></span>
                    <span class="user3"></span>
                    <span class="user4"></span>
                    <span class="user5"></span>
                    <span class="user6"></span>
                    <span class="dot1"></span>
                    <span class="dot2"></span>
                </template>
            </section>
            <section class="pannel6">
                <h3>公司创始人</h3>
                <div class="pannel-box">
                    <div>
                        <div class="bg-c"></div>
                        <img
                            class="ceo"
                            src="~/static/imgs/ceo.png"
                            alt="CEO"
                        >
                        <div class="card-box">
                            <h4>张程 Jerry Zhang</h4>
                            <p>迈外迪CEO / 联合创始人</p>
                        </div>
                    </div>
                    <div>
                        <div class="bg-c"></div>
                        <img
                            src="~/static/imgs/cto.png"
                            alt="CTO"
                            class="cto"
                        >
                        <div class="card-box">
                            <h4>杨勇 Brave Yang</h4>
                            <p>迈外迪CTO / 联合创始人</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pannel7">
                <h3>公司投资人</h3>
                <p>现在，迈外迪已经吸引了包括腾讯科技、小米科技、万达集团等众多知名战略投资人的投资。</p>
                <div class="pannel-box">
                    <div class="partner1">
                        <i class="iconfont icon-a-lianji6 fs60"></i>
                    </div>
                    <div class="partner2">
                        <i class="iconfont icon-a-lianji41 fs30"></i>
                    </div>
                    <div class="partner3">
                        <i class="iconfont icon-a-lianji51 "></i>
                    </div>
                    <div class="partner4">
                        <i class="iconfont icon-a-lianji3 fs30"></i>
                    </div>
                    <div class="partner5">
                        <img
                            src="~/static/imgs/jinglin.png"
                            alt=""
                        >
                    </div>
                </div>
            </section>
            <section class="pannel8">
                <el-steps direction="vertical">

                    <el-step
                        v-for="(item,idx) in milestones"
                        :key="idx"
                        @click.native="()=>{active=idx;cur_item=item;}"
                        :class="active==idx?'active':''"
                    >
                        <template slot="title">
                            <div>
                                <p>{{item.title.time}}</p>
                                <p>{{item.title.val}}</p>
                            </div>
                        </template>
                        <!-- <template slot="description">
                        
                    </template> -->
                    </el-step>
                </el-steps>
                <div class="desc-box">
                    <div
                        v-for="(desc,index) in cur_item.desc"
                        :key="index"
                    >
                        <p class="time">{{desc.time}}</p>
                        <p>{{desc.val}}</p>
                    </div>
                </div>
                <div class="title-div">
                    <h1>发展历程</h1>
                    <p>{{cur_item.title.time}}</p>
                    <p>{{cur_item.title.val}}</p>
                </div>
            </section>
            <section class="pannel9">
                <h3>迈外迪品牌设备售后政策</h3>
                <div>
                    <span class="left">产品保修期限</span>
                    <span class="right">自买方签收产品之日起1年</span>
                </div>
                <div class="pannel-box">
                    <div>
                        <i class="iconfont icon-a-lujing101"></i>
                        <div>
                            <h3>产品保修条款</h3>
                            <p>迈外迪设备售出后在质保期内，发生非人为损坏性能故障，由买方邮寄返厂。如买方与迈外迪另有约定的，依照双方约定执行。 迈外迪收到买方邮寄返还的故障设备后，经由迈外迪售后服务中心检测确认，设备故障确属迈外迪保修范围的，将为买方办理免费维修业务，30天内无法修理好的，应给买方更换同型号设备。 若经迈外迪售后服务中心检测确认后，属于非保修范围的，买方同意迈外迪的维修收费报价的，迈外迪收到买方支付的维修费后，为买方提供有偿维修服务。</p>
                        </div>
                    </div>
                    <div class="medium">
                        <i class="iconfont icon-a-lujing111"></i>
                        <div>
                            <h3>非保修范围</h3>
                            <p>
                                1、超过质保期限；<br />
                                2、无购货凭证或与发票信息不符；<br />
                                3、人为原因造成的损坏；<br />
                                4、不可抗拒因素造成的损坏；<br />
                                5、超出正常使用条件，强行使用本产品造成的故障或损伤；<br />
                                6、未经迈外迪授权的人员私自拆动或修理；<br />
                                7、其他非产品本身设计、制造、质量等问题而导致的故障和损坏。
                            </p>
                        </div>
                    </div>
                    <div>
                        <i class="iconfont icon-a-lujing121"></i>
                        <div>
                            <h3>返修地址及物流费用</h3>
                            <p>
                                联系人：迈外迪库房<br />
                                联系电话：4006500311<br />
                                售后地址：北京市朝阳区竞园8A <br />
                                返修物流费：买方与迈外迪各自承担自己一方的设备发寄费用。
                            </p>
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
    async asyncData({ params }) {},
    created() {
        this.cur_item = this.milestones[0];
    },
    mounted() {
        this.atuoPlay();
    },
    methods: {
        atuoPlay() {
            setInterval(() => {
                if (this.active < this.milestones.length - 1) {
                    this.active++;
                } else {
                    this.active = 0;
                }
                this.cur_item = this.milestones[this.active];
            }, 50000);
        }
    },
    data() {
        return {
            active: 0,
            cur_item: {
                title: {},
                desc: []
            },
            milestones: [
                {
                    title: {
                        time: "2020-2024",
                        val: "领跑中国智能商业"
                    },
                    desc: [
                        {
                            time: "2020.06",
                            val: "迈外迪发布商业场景感知产品系列，“商业IoT+商业场景感知”两大智能商业产品体系建成",
                            opacity: 0.3
                        },
                        {
                            time: "2021.03",
                            val: "迈外迪正式提出全新品牌愿景和使命，成为中国领先的智能商业产品和服务提供商",
                            opacity: 0.3
                        },
                        {
                            time: "2022.05",
                            val: "迈外迪推出专为购物中心、连锁门店等打造的高性能智能网关G5005",
                            opacity: 0.3
                        },
                        {
                            time: "2023.03",
                            val: "迈外迪发布新品边缘管理网关，低成本实现门店设备统一云管",
                            opacity: 0.3
                        },
                        {
                            time: "2023.07",
                            val: "迈外迪全时段业务在线解决方案正式发布，打造门店数字化底座",
                            opacity: 0.3
                        },
                        {
                            time: "2024.4",
                            val: "迈小热产品荣获reddot设计奖",
                            opacity: 0.3
                        },
                        {
                            time: "2024.12",
                            val: "迈外迪发布新品WiCore3系列、4G智能插座和5G SE产品",
                            opacity: 0.3
                        }
                    ]
                },
                {
                    title: {
                        time: "2017-2019",
                        val: "开启智能商业版图"
                    },
                    desc: [
                        {
                            time: "2017.04",
                            val: "GMIC全球移动互联网大会，CEO张程首次提出“数字切片”概念",
                            opacity: 0.3
                        },
                        {
                            time: "2017.05",
                            val: "完成万达网络科技集团D轮融资",
                            opacity: 0.3
                        },
                        {
                            time: "2017.11",
                            val: "迈外迪召开“数胜之道DATA TALKS”新品发布会。自此，迈外迪向智能商业领域跨出坚实的一步",
                            opacity: 0.3
                        },
                        {
                            time: "2018.11",
                            val: "迈外迪被认定为2018年度上海市第一批高新技术企业",
                            opacity: 0.3
                        },
                        {
                            time: "2019.06",
                            val: "迈外迪全新一代视觉智能硬件产品WiPro Multi、WiPro Mini正式发布",
                            opacity: 0.3
                        }
                    ]
                },
                {
                    title: {
                        time: "2014-2016",
                        val: "行业内展露头角"
                    },
                    desc: [
                        {
                            time: "2014.06",
                            val: "2014.06第一次接入医疗领域",
                            opacity: 0.3
                        },
                        {
                            time: "2014.08",
                            val: "迈外迪完成腾讯、大众点评C轮融资",
                            opacity: 0.3
                        },
                        {
                            time: "2015.09",
                            val: "迈外迪覆盖商业场所100，000+",
                            opacity: 0.3
                        },
                        {
                            time: "2015.12",
                            val: "为罗振宇《时间的朋友》水立方跨年演讲提供全场无线网络覆盖",
                            opacity: 0.3
                        },
                        {
                            time: "2016.10",
                            val: "深度开展购物中心项目的铺设 商业布局更加全面",
                            opacity: 0.3
                        }
                    ]
                },
                {
                    title: {
                        time: "2011-2013",
                        val: "深耕中国IoT市场"
                    },
                    desc: [
                        {
                            time: "2011.03",
                            val: "全球最大的咖啡连锁品牌星巴克选择迈外迪为其提供全国门店的Wi-Fi网络服务",
                            opacity: 0.3
                        },
                        {
                            time: "2012.03",
                            val: "张程获得《第一财经周刊》中国商业创新50人",
                            opacity: 0.3
                        },
                        {
                            time: "2012.08",
                            val: "迈外迪完成景林资产A轮融资",
                            opacity: 0.3
                        },
                        {
                            time: "2013.09",
                            val: "完成小米科技B轮融资",
                            opacity: 0.3
                        }
                    ]
                },
                {
                    title: {
                        time: "2008-2009",
                        val: "开创商业Wi-Fi市场"
                    },
                    desc: [
                        {
                            time: "2008.01",
                            val: "第一台迈外迪自主研发的路由器成功安装上线",
                            opacity: 0.3
                        },
                        {
                            time: "2008.03",
                            val: "迈外迪与BMW MINI COOPER汽车发布了全球第一支商业Wi-Fi广告，开创了商业Wi-Fi领域崭新的商业模式和一种全新的广告投放形式",
                            opacity: 0.3
                        },
                        {
                            time: "2008.09",
                            val: "迈外迪获得了首个商用Wi-Fi专利",
                            opacity: 0.3
                        },
                        {
                            time: "2009.05",
                            val: "第二代自主知识产权商业智能无线路由器发布",
                            opacity: 0.3
                        }
                    ]
                },
                {
                    title: {
                        time: "2007",
                        val: "逐梦的起点"
                    },
                    desc: [
                        {
                            time: "2007.05",
                            val: "张程在曼谷Parrot Café诞生了“让全世界都有免费Wi-Fi”的理想",
                            opacity: 0.3
                        },
                        {
                            time: "2007.09",
                            val: "张程和杨勇联合创办了迈外迪网络科技，开始了商业Wi-Fi的伟大征程",
                            opacity: 0.3
                        },
                        {
                            time: "2007.10",
                            val: "WiDash智能云平台第一次上线",
                            opacity: 0.3
                        },
                        {
                            time: "2007.12",
                            val: "天津外滩风尚咖啡馆成为第一家选择迈外迪商业Wi-Fi的客户",
                            opacity: 0.3
                        }
                    ]
                }
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
            height: 690px;
            .box {
                // width: 26.45vw;
                // padding-top: 32.6vw;
                width: 488px;
                height: 602px;
                border-radius: 0px 100px 0px 100px;
                overflow: hidden;
                background: url("~/static/imgs/about-us-bg.png") no-repeat 43%
                    16%;
                background-size: 185%;
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
    .pannel22 {
        position: relative;
        width: 1220px;
        margin: 80px auto;
        height: 600px;
        background: url("~/static/imgs/wiwide-info.png") no-repeat center center;
        background-size: 100%;
    }
    .pannel2 {
        // width: 63.54%;
        margin: 0 auto;
        width: 1167px;
        margin-top: 50px;
        display: flex;
        position: relative;
        > div {
            flex: 1;
            .box {
                // width: 85.24%;
                // padding-top: 76.72%;
                width: 497px;
                height: 447px;
                background: url("~/static/imgs/about-w.png") no-repeat center
                    center;
                background-size: 100%;
            }
            &.right-box {
                // padding-left: 50px;
                h3 {
                    margin-top: 20px;
                    font-size: 42px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 42px;
                    color: $font-high-color;
                }
                p {
                    margin-top: 40px;
                    width: 100%;
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 26px;
                    color: $font-high-color;
                }
            }
        }
    }
    .pannel3 {
        position: relative;
        width: 100%;
        // height: 440px;
        height: 1012px;
        background: $font-high-color;
        margin-top: 90px;
        .pannel-box-top {
            width: 1167px;
            height: 572px;
            margin: 0 auto;
            display: flex;
            .left-box {
                flex: 1;
                padding-right: 50px;
                background: url("~/static/imgs/wiwide-left.png") no-repeat
                    center center;
                background-size: 100%;
                background-position-y: 60px;
            }
            .right-box {
                flex: 1;
                padding-top: 50px;
                h3 {
                    margin-top: 20px;
                    font-size: 42px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 42px;
                    color: #fff;
                }
                p {
                    margin-top: 40px;
                    width: 100%;
                    font-size: 16px;
                    font-weight: normal;
                    line-height: 26px;
                    color: #fff;
                }
            }
        }
        .pannel-box {
            width: 1167px;
            height: 440px;
            margin: 0 auto;
            display: flex;
            .left-box {
                flex: 1;
                height: inherit;
                padding-right: 50px;
                @include displayCenter;
                font-size: 16px;
                font-weight: normal;
                line-height: 26px;
                color: #fff;
            }
            .right-box {
                flex: 1;
                background: url("~/static/imgs/about-r.png") no-repeat center
                    center;
                background-size: 100%;
                background-position-x: -60px;
                // background-position-y: 67px;
            }
        }
    }
    .pannel4 {
        margin: 0 auto;
        margin-top: 80px;
        // width: 75.31%;
        width: 77%;
        height: 198px;
        display: flex;
        background: url("~/static/imgs/about-ti.png") no-repeat center center;
        background-size: 100%;
        padding: 0 7.6%;
        > div {
            // font-size: 42px;
            font-size: 1.9vw;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: right;
            // margin-right: 3%;
            margin-right: 5%;
            color: $font-high-color;
            &:last-child {
                margin-right: 0;
            }
            span {
                display: block;
                // text-align: right;
                text-align: center;
                font-size: 14px;
                color: $font-main-color;
                // margin-top: 5px;
                margin-top: 15px;
                line-height: 25px;
            }
        }
    }
    .pannel5 {
        // width: 100%;
        width: 1920px;
        margin: 0 auto;
        // padding-top: 52%;
        height: 954px;
        background: url("~/static/imgs/about-cur.png") no-repeat center center;
        background-size: 100%;
        position: relative;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
            position: absolute;
            width: 100%;
            top: 20%;
            left: 0;
        }
        > div {
            width: 38%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            // padding: 12.87% 6.3% 9.58% 10.95%;
            padding-top: 8%;
            display: flex;
            flex-wrap: wrap;
            > div {
                width: 50%;
                // height: 50%;
                padding-top: 30px;
                h4 {
                    font-size: 20px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 20px;
                    color: $main-color;
                    margin-bottom: 20px;
                }
                p {
                    margin-bottom: 30px;
                    font-size: 18px;
                    font-weight: normal;
                    line-height: 24px;
                    color: $font-main-color;
                }
                &.bt {
                    border-top: 1px dashed #d3dcd4;
                }
                &.bl {
                    border-left: 1px dashed #d3dcd4;
                }
                &.tr {
                    text-align: right;
                    padding-right: 30px;
                }
                &.tl {
                    text-align: left;
                    padding-left: 30px;
                }
            }
        }
    }
    .pannel6 {
        margin-top: -50px;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
        }
        .pannel-box {
            // width: 56%;
            width: 1029px;
            height: 520px;
            margin: 0 auto;
            display: flex;
            > div {
                flex: 1;
                position: relative;
                .bg-c {
                    width: 85.5%;
                    padding-top: 82.35%;
                    background-color: $sub-color;
                    border-radius: 100px 0px 100px 0px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
                img {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    border-radius: 100px 0px 100px 0px;
                }
                &:first-child {
                    img {
                        // width: 94%;
                        width: 93%;
                        right: -20px;
                        top: 52px;
                    }
                }
                &:last-child {
                    margin-left: 50px;
                    img {
                        // width: 89%;
                        width: 86.7%;
                        right: -40px;
                        top: 60px;
                    }
                }
                .card-box {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 353px;
                    height: 92px;
                    border-radius: 30px 0px 30px 0px;
                    background-color: $main-color;
                    padding-left: 60px;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    h4 {
                        font-size: 26px;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        line-height: 32px;
                        color: #fff;
                    }
                    p {
                        font-size: 18px;
                        font-weight: normal;
                        color: #fff;
                    }
                }
            }
        }
    }
    .pannel7 {
        margin-top: 130px;
        > h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            color: $font-high-color;
        }
        > p {
            font-size: 16px;
            font-weight: normal;
            line-height: 18px;
            text-align: center;
            margin-top: 30px;
            color: $font-high-color;
        }
        .pannel-box {
            width: 63.54%;
            min-width: 1200px;
            overflow-y: hidden;
            overflow-x: auto;
            margin: 0 auto;
            display: flex;
            margin-top: 50px;
            > div {
                flex: 1;
                i {
                    font-size: 22px;
                    color: $font-main-color;
                    position: relative;
                    top: 15px;
                    &.fs30 {
                        font-size: 30px;
                    }
                    &.fs60 {
                        font-size: 60px;
                    }
                }
            }
        }
    }
    .pannel8 {
        width: 100%;
        height: 520px;
        background: $font-high-color url("~/static/imgs/fazhan.png") no-repeat
            center center;
        background-size: 100%;
        padding: 50px;
        position: relative;
        margin-top: 160px;
        /deep/ {
            .el-steps {
                width: 30px;
                position: relative;
                left: 50%;
                transform: translate(-50%);

                .el-step__icon {
                    cursor: pointer;
                    width: 16px;
                    height: 16px;
                    border: none;
                    left: 4px;
                    top: -4px;
                }
                .el-step__icon-inner {
                    display: none !important;
                }
                .el-step__title {
                    width: 190px;
                    position: absolute;
                    left: -210px;
                    top: -12px;
                    text-align: right;
                    font-size: 16px;
                    color: #fff;
                    &.is-process {
                        color: #fff;
                    }
                    &.is-finish {
                        font-size: 20px;
                        color: $main-color;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                    }
                }
                .active {
                    .el-step__title {
                        font-size: 20px;
                        color: $main-color;
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                    }
                    .el-step__icon {
                        border-color: $main-color;
                        background-color: $main-color;
                    }
                }
                .el-step__description {
                    position: absolute;
                    width: 48vw;
                    top: 0;
                }
            }
        }
        .desc-box {
            position: absolute;
            width: 50%;
            height: 520px;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-left: 50px;
            padding-right: 50px;
            color: #fff;
            font-size: 18px;
            line-height: 22px;
            > div {
                margin-bottom: 24px;
            }
        }
        .title-div {
            width: 239px;
            height: 213px;
            border-radius: 50px 0px 60px 0px;
            position: absolute;
            left: 18%;
            top: -50px;
            background: $main-color;
            padding-top: 60px;
            padding-left: 30px;
            color: #fff;
            h1 {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                margin-bottom: 10px;
            }
            p {
                font-size: 20px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
            }
        }
    }
    .pannel9 {
        margin-top: 80px;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            text-align: center;
            margin-bottom: 30px;
        }
        > div {
            text-align: center;
            margin-bottom: 50px;
            span {
                display: inline-block;
            }
            .left {
                width: 166.98px;
                height: 52px;
                line-height: 52px;
                text-align: left;
                text-indent: 18px;
                font-size: 20px;
                color: #fff;
                background: url("~/static/imgs/arrow-r.png") no-repeat center
                    center;
                background-size: 100%;
                position: relative;
                z-index: 8;
            }
            .right {
                width: 298px;
                height: 52px;
                line-height: 52px;
                text-align: center;
                font-size: 20px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                color: $font-high-color;
                background: $sub-color;
                margin-left: -15px;
            }
        }
        .pannel-box {
            width: 63.53%;
            height: 240px;
            margin: 0 auto;
            display: flex;
            > div {
                flex: 1;
                padding: 30px;
                height: inherit;
                border: 1px solid #d3dcd4;
                text-align: left;
                border-radius: 20px;
                &.medium {
                    margin: 0 25px;
                }
                i {
                    font-size: 24px;
                    color: $main-color;
                }
                h3 {
                    font-size: 20px;
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: 20px;
                    text-align: left;
                    color: $font-high-color;
                    margin: 20px 0;
                }
                > div {
                    height: 146px;
                    overflow-y: auto;
                    &::-webkit-scrollbar-thumb {
                        box-shadow: 100vw 0 0 #65816d inset;
                    }
                    p {
                        font-size: 16px;
                        color: $font-main-color;
                        line-height: 20px;
                    }
                }
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(820);
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
                    top: vw(243);
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
                        top: vw(551);
                        left: vw(94);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(313);
                        right: vw(99);
                        transform: rotate(180deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(675);
                        right: vw(93);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel22 {
            width: 100%;
            margin: vw(40) auto;
            height: auto;
            .wiwide-old {
                width: inherit;
                height: vw(508);
                background: url("~/static/imgs/wiwide-old.png") no-repeat center
                    center;
                background-size: 100%;
            }
            .wiwide-now {
                width: inherit;
                height: vw(614);
                background: url("~/static/imgs/wiwide-now.png") no-repeat center
                    center;
                background-size: 100%;
            }
        }
        .pannel2 {
            margin-top: vw(80);
            width: 100%;
            padding: 0;
            flex-direction: column;
            > h3 {
                font-size: vw(42);
                line-height: vw(42);
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                color: $font-high-color;
                text-align: center;
                margin-bottom: vw(40);
            }
            > div {
                .box {
                    width: vw(536);
                    height: vw(476);
                    margin: 0 auto;
                }
                &.right-box {
                    h3 {
                        display: none;
                    }
                    p {
                        margin-top: vw(40);
                        width: 100%;
                        font-size: vw(24);
                        font-weight: normal;
                        line-height: vw(38);
                        background: $sub-color;
                        padding: vw(40);
                    }
                }
            }
        }
        .pannel3 {
            height: vw(1165);
            margin-top: 0;
            background-color: #fff;
            .pannel-box {
                position: relative;
                width: 100%;
                flex-direction: column;
                .left-box {
                    height: vw(975);
                    background: $font-high-color;
                    position: absolute;
                    top: vw(190);
                    left: 0;
                    padding: 0 vw(40);
                    padding-top: vw(320);
                    font-size: vw(24);
                    line-height: vw(38);
                }
                .right-box {
                    position: absolute;
                    top: vw(60);
                    left: vw(40);
                    width: vw(670);
                    height: vw(440);
                    border-radius: vw(20);
                    background-size: 110%;
                    background-position-x: 0;
                }
            }
        }
        .pannel4 {
            width: 100%;
            height: vw(544);
            margin: 0;
            padding: vw(80) vw(10);
            flex-direction: column;
            background: none;
            .bg-box {
                width: 100%;
                height: vw(172);
                background: url("~/static/imgs/about-ti.png") no-repeat center
                    center;
                background-size: 100%;
                display: flex;
                &.mb40 {
                    margin-bottom: vw(40);
                }
                > div {
                    font-size: vw(44);
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    line-height: vw(24);
                    flex: 1;
                    margin: 0;
                    text-align: center;
                    padding-top: vw(20);
                    span {
                        text-align: center;
                        font-size: vw(18);
                        margin-top: vw(18);
                        line-height: vw(24);
                    }
                }
            }
        }
        .pannel5 {
            height: vw(936);
            padding: 0;
            width: 100%;
            background: linear-gradient(
                180deg,
                rgba(241, 248, 241, 0) 0%,
                rgba(241, 248, 241, 0.53) 14%,
                #f1f8f1 45%,
                rgba(241, 248, 241, 0.43) 84%,
                rgba(241, 248, 241, 0) 100%
            );
            h3 {
                font-size: vw(42);
                line-height: vw(42);
                top: vw(20);
            }
            > div {
                width: vw(624);
                height: vw(607);
                background: url("~/static/imgs/qiyewenhua.png") no-repeat center
                    center;
                background-size: 125%;
                top: vw(210);
                left: vw(63);
                transform: translate(0, 0);
                padding: 0;
                z-index: 3;
                > div {
                    display: none;
                }
            }
            > span {
                display: inline-block;
                position: absolute;
                z-index: 4;
                &.user1 {
                    width: vw(104);
                    height: vw(119);
                    background: url("~/static/imgs/user1.png") no-repeat center
                        center;
                    background-size: 100%;
                    top: vw(156);
                    left: vw(63);
                }
                &.user2 {
                    width: vw(71);
                    height: vw(83);
                    background: url("~/static/imgs/user2.png") no-repeat center
                        center;
                    background-size: 100%;
                    top: vw(164);
                    right: vw(154);
                }
                &.user3 {
                    width: vw(68);
                    height: vw(79);
                    background: url("~/static/imgs/user3.png") no-repeat center
                        center;
                    background-size: 100%;
                    top: vw(441);
                    left: vw(12);
                }
                &.user4 {
                    width: vw(71);
                    height: vw(83);
                    background: url("~/static/imgs/user4.png") no-repeat center
                        center;
                    background-size: 100%;
                    bottom: vw(130);
                    right: vw(20);
                }
                &.user5 {
                    width: vw(80);
                    height: vw(93);
                    background: url("~/static/imgs/user5.png") no-repeat center
                        center;
                    background-size: 100%;
                    bottom: vw(79);
                    left: vw(40);
                }
                &.user6 {
                    width: vw(94);
                    height: vw(100);
                    background: url("~/static/imgs/user6.png") no-repeat center
                        center;
                    background-size: 100%;
                    top: vw(295);
                    right: vw(16);
                }
                &.dot1 {
                    width: vw(378);
                    height: vw(171);
                    background: url("~/static/imgs/dot.png") no-repeat center
                        center;
                    background-size: 100%;
                    top: vw(152);
                    right: vw(26);
                    z-index: 2;
                }
                &.dot2 {
                    width: vw(378);
                    height: vw(171);
                    background: url("~/static/imgs/dot.png") no-repeat center
                        center;
                    background-size: 100%;
                    left: vw(-112);
                    bottom: vw(65);
                    z-index: 2;
                }
            }
        }
        .pannel6 {
            height: vw(1104);
            margin-top: 0;
            padding-top: vw(80);
            h3 {
                font-size: vw(42);
                line-height: vw(42);
                padding-left: vw(308);
                text-align: left;
            }
            .pannel-box {
                width: 100%;
                height: vw(982);
                flex-direction: column;
                > div {
                    height: vw(446);
                    .bg-c {
                        width: vw(520);
                        height: vw(378);
                        padding: 0;
                        border-radius: vw(100) 0px vw(100) 0px;
                        right: vw(93);
                    }
                    img {
                        border-radius: vw(100) 0px vw(100) 0px;
                    }
                    &:first-child {
                        margin-bottom: vw(80);

                        img {
                            &.ceo {
                                width: vw(407);
                                right: vw(75);
                                top: auto;
                                bottom: 0;
                            }
                        }
                    }
                    &:last-child {
                        margin-left: 0;
                        img {
                            &.cto {
                                width: vw(372);
                                right: vw(60);
                                top: auto;
                                bottom: 0;
                            }
                        }
                    }
                    .card-box {
                        width: vw(380);
                        height: vw(100);
                        padding-left: vw(60);
                        border-radius: vw(30) 0px vw(30) 0px;
                        left: vw(94);
                        h4 {
                            font-size: vw(28);
                            line-height: vw(32);
                        }
                        p {
                            font-size: vw(24);
                        }
                    }
                }
            }
        }
        .pannel7 {
            margin: 0;
            padding-top: vw(80);
            height: vw(514);
            > h3 {
                font-size: vw(42);
                line-height: vw(42);
            }
            > p {
                font-size: vw(22);
                line-height: vw(33);
                margin-top: vw(30);
                padding: 0 vw(140);
            }
            .pannel-box {
                width: 100%;
                height: vw(296);
                padding: 0 vw(73);
                position: relative;
                margin-top: 0;
                > div {
                    position: absolute;
                    i {
                        top: 0;
                        &.fs30 {
                            font-size: vw(30);
                        }
                        &.fs60 {
                            font-size: vw(66);
                        }
                    }
                    &.partner1 {
                        top: vw(60);
                        left: vw(150);
                        i {
                            font-size: vw(66);
                        }
                    }
                    &.partner2 {
                        top: vw(71);
                        right: vw(150);
                        i {
                            font-size: vw(25);
                        }
                    }
                    &.partner3 {
                        top: vw(160);
                        left: vw(73);
                        i {
                            font-size: vw(22);
                        }
                    }
                    &.partner4 {
                        top: vw(158);
                        left: vw(294);
                        i {
                            font-size: vw(34);
                        }
                    }
                    &.partner5 {
                        top: vw(160);
                        right: vw(73);
                        img {
                            width: vw(142);
                            font-size: vw(20);
                        }
                    }
                }
            }
        }
        .pannel8 {
            width: 100%;
            height: vw(823);
            padding: 0;
            margin-top: vw(80);
            .title-div {
                width: vw(246);
                height: vw(211);
                border-radius: vw(50) 0px vw(50) 0px;
                left: vw(40);
                top: vw(-80);
                padding: 0;
                @include displayCenter;
                flex-direction: column;
                h1 {
                    font-size: vw(42);
                    line-height: vw(42);
                }
                p {
                    font-size: vw(24);
                }
            }
            .desc-box {
                width: vw(443);
                height: vw(573);
                top: vw(200);
                padding-left: 0;
                padding-right: vw(20);
                font-size: vw(24);
                line-height: vw(30);
                &.time {
                    font-size: vw(22);
                }
                > div {
                    margin-bottom: vw(40);
                }
            }
            /deep/ {
                .el-steps {
                    width: vw(30);
                    height: vw(573);
                    left: vw(240);
                    top: vw(200);
                    transform: translate(0);
                    .el-step__icon {
                        cursor: pointer;
                        width: vw(16);
                        height: vw(16);
                        border: none;
                        left: vw(14);
                        top: vw(-22);
                    }
                    .el-step__title {
                        width: vw(190);
                        left: vw(-210);
                        top: vw(-12);
                        font-size: vw(22);
                        line-height: vw(30);
                        &.is-finish {
                            font-size: vw(24);
                        }
                    }
                    .active {
                        .el-step__title {
                            font-size: vw(24);
                        }
                    }
                    .el-step__description {
                        position: absolute;
                        width: vw(443);
                        height: vw(573);
                        top: 0;
                    }
                }
            }
        }
        .pannel9 {
            height: vw(1153);
            margin-top: 0;
            padding-top: vw(80);
            margin-bottom: vw(50);
            h3 {
                font-size: vw(42);
                line-height: vw(42);
                margin-bottom: vw(30);
            }
            > div {
                margin-bottom: vw(50);
                .left {
                    width: vw(166.98);
                    height: vw(52);
                    line-height: vw(52);
                    font-size: vw(20);
                    text-indent: 0;
                    text-align: center;
                }
                .right {
                    width: vw(298);
                    height: vw(52);
                    line-height: vw(52);
                    font-size: vw(20);
                    margin-left: vw(-18);
                }
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(40);
                height: vw(899);
                flex-direction: column;
                > div {
                    width: vw(670);
                    // height: vw(266);
                    padding: vw(30);
                    margin-bottom: vw(20);
                    position: relative;
                    &.medium {
                        margin: 0;
                        margin-bottom: vw(20);
                    }
                    i {
                        font-size: vw(24);
                        position: absolute;
                        top: vw(25);
                        left: vw(30);
                    }
                    > div {
                        height: auto;
                        overflow: hidden;
                        h3 {
                            font-size: vw(26);
                            line-height: vw(26);
                            margin: 0;
                            height: vw(26);
                            text-indent: vw(40);
                        }
                        p {
                            height: vw(156);
                            overflow-y: auto;
                            font-size: vw(24);
                            line-height: vw(38);
                            margin-top: vw(25);
                            &::-webkit-scrollbar-thumb {
                                box-shadow: 100vw 0 0 #65816d inset;
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