<!--
 * @Description: 设备介绍页
 * @FilePath: pages\product\iot\_id.vue
-->
<template>
    <div class="container">
        <client-only>
            <rect-card
                v-if="deviceSize=='large'"
                top="520px"
                left="-6%"
            ></rect-card>
            <section class="pannel1">
                <template v-if="deviceSize=='large'">
                    <!-- 左边介绍 -->
                    <div class="txt-intro">
                        <div class="title-box">产品全景图</div>
                        <!-- <div class="sub-title">{{detail.desc}}</div> -->
                        <div class="txt-box">迈外迪面向智能商业市场，提供全时段业务在线和商业场景感知两大解决方案，该解决方案所涵盖的产品及服务，包括：前端智能硬件、统一SaaS平台、多样化SaaS应用，和贯穿产品全生命周期的专业技术服务。
                        </div>
                    </div>
                    <!-- 右边背景 -->
                    <right-bg>
                        <div class="content">
                            <img
                                src="~/static/imgs/quanjingtu.png"
                                alt=""
                            >
                            <i class="iconfont icon-zhijiao triangle1"></i>
                            <i class="iconfont icon-zhijiao triangle2"></i>
                            <i class="iconfont icon-zhijiao triangle3"></i>
                        </div>
                    </right-bg>
                </template>
                <template v-else>
                    <div class="bg-div">
                        <!-- 背景图 -->
                        <div class="bg-top"></div>
                        <!-- 文案内容 -->
                        <div class="txt-intro">
                            <div class="title-box">产品全景图</div>
                            <!-- <div class="sub-title">{{detail.desc}}</div> -->
                            <div class="txt-box">迈外迪面向智能商业市场，提供全时段业务在线和商业场景感知两大解决方案，该解决方案所涵盖的产品及服务，包括：前端智能硬件、统一SaaS平台、多样化SaaS应用，和贯穿产品全生命周期的专业技术服务。</div>
                        </div>
                        <div class="img-div-box">
                            <img
                                src="~/static/imgs/quanjingtu.png"
                                alt=""
                            >
                        </div>

                        <i class="iconfont icon-zhijiao triangle1"></i>
                        <i class="iconfont icon-zhijiao triangle2"></i>
                        <i class="iconfont icon-zhijiao triangle3"></i>
                    </div>
                </template>

            </section>
            <section class="pannel3">
                <div class="pannel-box h82">
                    <div class="left-box">服务</div>
                    <div class="right-box service-box">
                        <div>
                            <span class="icon-box"><i class="iconfont icon-a-lianji4"></i></span>
                            <span class="txt-box">方案设计</span>
                        </div>
                        <div>
                            <span class="icon-box"><i class="iconfont icon-a-lujing5"></i></span>
                            <span class="txt-box">交付实施</span>
                        </div>
                        <div>
                            <span class="icon-box"><i class="iconfont icon-a-lujing6"></i></span>
                            <span class="txt-box">主动监控</span>
                        </div>
                        <div>
                            <span class="icon-box"><i class="iconfont icon-a-lujing8"></i></span>
                            <span class="txt-box">远程恢复</span>
                        </div>
                        <div>
                            <span class="icon-box"><i class="iconfont icon-a-lujing10"></i></span>
                            <span class="txt-box">现场服务</span>
                        </div>
                    </div>
                </div>
                <div class="pannel-box h291">
                    <div class="left-box">SaaS应用</div>
                    <div class="right-box saas-box">
                        <div class="top-box">
                            <div class="div1">
                                <div class="name-box">生产应用</div>
                                <div class="icons-box">
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lianji21"></i>
                                        </div>
                                        <div class="icon-txt">
                                            智能<br />路由
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing12"></i>
                                        </div>
                                        <div class="icon-txt">
                                            SD-<br />WAN
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-yingyong"></i>
                                        </div>
                                        <div class="icon-txt">
                                            应用<br />控制
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing13"></i>
                                        </div>
                                        <div class="icon-txt">
                                            流量<br />控制
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-Venus"></i>
                                        </div>
                                        <div class="icon-txt">
                                            IPsec<br />VPN
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="div2">
                                <div class="name-box">顾客服务</div>
                                <div class="icons-box">
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lianji9"></i>
                                        </div>
                                        <div class="icon-txt">
                                            网安<br />审计
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-portalDesign1"></i>
                                        </div>
                                        <div class="icon-txt">
                                            Portal<br />认证
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing14"></i>
                                        </div>
                                        <div class="icon-txt">
                                            小程序<br />认证
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing15"></i>
                                        </div>
                                        <div class="icon-txt">
                                            &nbsp;云<br />会员
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="div3">
                                <div class="name-box">运维应用</div>
                                <div class="icons-box">
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing16"></i>
                                        </div>
                                        <div class="icon-txt">
                                            拓扑<br />管理
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing18"></i>
                                        </div>
                                        <div class="icon-txt">
                                            终端<br />管理
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing19"></i>
                                        </div>
                                        <div class="icon-txt">
                                            告警<br />管理
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing20"></i>
                                        </div>
                                        <div class="icon-txt">
                                            业务<br />监测
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing9"></i>
                                        </div>
                                        <div class="icon-txt">
                                            远程<br />恢复
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lujing113"></i>
                                        </div>
                                        <div class="icon-txt">
                                            配置<br />管理
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="top-box mt20 col-box">
                            <div class="div3 flex2">
                                <div class="name-box">客流分析</div>
                                <div class="icons-box">
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-a-lianji47"></i>
                                        </div>
                                        <div class="icon-txt">
                                            客流<br />分析
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-kequnfenxi"></i>
                                        </div>
                                        <div class="icon-txt">
                                            客群<br />分析
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-exchange-two"></i>
                                        </div>
                                        <div class="icon-txt">
                                            业态<br />分析
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-guanlianfenxi"></i>
                                        </div>
                                        <div class="icon-txt">
                                            关联<br />分析
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-requfenxi"></i>
                                        </div>
                                        <div class="icon-txt">
                                            热区<br />分析
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-quyukeliu"></i>
                                        </div>
                                        <div class="icon-txt">
                                            经营<br />分析
                                        </div>
                                    </div>
                                    <!-- <div>
                                    <div class="icon-div">
                                        <i class="iconfont icon-quyukeliu"></i>
                                    </div>
                                    <div class="icon-txt">
                                        区域<br />分析
                                    </div>
                                </div>

                                <div>
                                    <div class="icon-div">
                                        <i class="iconfont icon-a-39daiwoguang"></i>
                                    </div>
                                    <div class="icon-txt">
                                        游逛<br />分析
                                    </div>
                                </div> -->

                                </div>
                            </div>
                            <div class="div3">
                                <div class="name-box">云监控</div>
                                <div class="icons-box">
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-rongqi"></i>
                                        </div>
                                        <div class="icon-txt">
                                            &nbsp;云<br />巡店
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-huanjingganzhi"></i>
                                        </div>
                                        <div class="icon-txt">
                                            事件<br />感知
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon-div">
                                            <i class="iconfont icon-shijianguanli"></i>
                                        </div>
                                        <div class="icon-txt">
                                            事件<br />管理
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pannel-box h96">
                    <div class="left-box">SaaS平台</div>
                    <div class="right-box saas-box">
                        <div class="bottom-box">
                            <div class="plat-name">
                                迈大师平台
                            </div>
                            <div class="plat-content">
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-Commercial-icon7"></i></span>
                                    <span class="txt-box">运营看板</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-changsuo"></i></span>
                                    <span class="txt-box">场所管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-shebei"></i></span>
                                    <span class="txt-box">设备管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-quanxian"></i></span>
                                    <span class="txt-box">权限管理</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-yunshichang_yunshichang"></i></span>
                                    <span class="txt-box">应用市场</span>
                                </div>
                                <div>
                                    <span class="icon-box"><i class="iconfont icon-API"></i></span>
                                    <span class="txt-box">开放API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pannel-box h540">
                    <div class="left-box">硬件</div>
                    <div class="right-box border-r hardware-box">
                        <template v-if="deviceSize=='large'">
                            <div class="title-col">
                                <div>商<br />业<br />I<br />O<br />T</div>
                                <div>商<br />业<br />场<br />景<br />感<br />知</div>
                            </div>
                            <div class="device-pannel">
                                <div class="h280">
                                    <div class="w-col1">
                                        <div class="title-name">无线接入点</div>
                                        <div class="flex-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6B
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wismart3e.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart3E
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-col2">
                                        <div class="title-name">接入交换机</div>
                                        <div class="flex-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/s802p.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P/S2404P
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/s802pf.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P-F/S2402P-F
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/s240424.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S2404
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/s302824.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S3028
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-col3">
                                        <div class="title-name">无线控制器</div>
                                        <div class="flex-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wimastert.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster T
                                                </span>
                                            </div>
                                            <!-- <div class="col-box">
                                            <img
                                                src="~/static/imgs/wimastert3.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T3
                                            </span>
                                        </div> -->
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wimasterx3s.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster X3s
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-col4">
                                        <div class="title-name">智能网关</div>
                                        <div class="flex-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wimasterg5005.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster G5005
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wimasterx3sg.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster X3s-G
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wimagic.png"
                                                    alt=""
                                                >
                                                <span>4G Magic</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-col5">
                                        <div class="title-name">云宽带</div>
                                        <div class="flex-box block-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wirouter.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G mini
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wirouterpro.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G Pro
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/WiRouter_Std.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter STD
                                                </span>
                                            </div>
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/wirouter_5g_lite.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 5G Lite
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h258">
                                    <div>
                                        <div class="title-name">热传感器</div>
                                        <div class="flex-box">
                                            <div class="col-box">
                                                <img
                                                    src="~/static/imgs/xiaore-icon.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMatrix<br />客流计数器
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">客流摄像机</div>
                                        <div class="flex-box">
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/wimini-icon.png"
                                                        alt=""
                                                    >
                                                </span>

                                                <span>
                                                    WiSight 2 Mini<br />标准/精准客流一体机
                                                </span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/wipamini-icon.png"
                                                        alt=""
                                                    >
                                                </span>
                                                <span>
                                                    WiPano Mini<br />全景摄像机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/in400w-icon.png"
                                                        alt=""
                                                    >
                                                </span>
                                                <span>400W定焦/变焦<br />室内精准客流一体机</span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/out400w-icon.png"
                                                        alt=""
                                                    >
                                                </span>
                                                <span>400W筒形<br />室外精准客流一体机</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">巡店监控</div>
                                        <div class="flex-box">
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/hailuo200w-icon.png"
                                                        alt=""
                                                    ></span>
                                                <span>200W海螺机</span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/banqiu400w-icon.png"
                                                        alt=""
                                                    >
                                                </span>

                                                <span>400W半球机</span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/tongxing400w-icon.png"
                                                        alt=""
                                                    >
                                                </span>

                                                <span>400W筒形机</span>
                                            </div>
                                            <div class="flex">
                                                <span>
                                                    <img
                                                        src="~/static/imgs/wangguan-icon.png"
                                                        alt=""
                                                    >
                                                </span>

                                                <span>SensorHub 巡店终端</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </template>
                        <template v-else>
                            <div class="title-div">商业IOT</div>
                            <div class="top-box">
                                <div class="left-box-m">
                                    <div class="name-box">无线接入点</div>
                                    <div class="item-box">
                                        <img
                                            class="w33"
                                            src="~/static/imgs/wismart.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSmart6&nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w33"
                                            src="~/static/imgs/wismart.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSmart6B
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w33"
                                            src="~/static/imgs/wismart3e.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSmart3E
                                        </span>
                                    </div>
                                </div>
                                <div class="right-box-m">
                                    <div class="name-box">接入交换机</div>
                                    <div class="item-box">
                                        <img
                                            class="w77"
                                            src="~/static/imgs/s802p.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSwitch S802P/S2404P
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w77"
                                            src="~/static/imgs/s802pf.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSwitch S802P-F/S2402P-F
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w77"
                                            src="~/static/imgs/s240424.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSwitch S2404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w77"
                                            src="~/static/imgs/s302824.png"
                                            alt=""
                                        >
                                        <span>
                                            WiSwitch S3028&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div class="bottom-box">
                                <div class="right-box-m">
                                    <div class="name-box">无线控制器</div>
                                    <div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimastert.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T
                                            </span>
                                        </div>
                                        <!-- <div class="item-box">
                                        <img
                                            class="w69"
                                            src="~/static/imgs/wimastert3.png"
                                            alt=""
                                        >
                                        <span>
                                            WiMaster T3
                                        </span>
                                    </div> -->
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimasterx3s.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster X3s
                                            </span>
                                        </div>
                                    </div>
                                    <div class="name-box">智能网关</div>
                                    <div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimasterg5005.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster G5005
                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimasterx3sg.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster X3s-G
                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w55"
                                                src="~/static/imgs/wimagic.png"
                                                alt=""
                                            >
                                            <span>
                                                4G Magic
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="left-box-m">
                                    <div class="name-box">云宽带</div>
                                    <div class="item-box">
                                        <img
                                            class="w55"
                                            src="~/static/imgs/wirouter.png"
                                            alt=""
                                        >
                                        <span>
                                            WiRouter 4G mini
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w55"
                                            src="~/static/imgs/wirouterpro.png"
                                            alt=""
                                        >
                                        <span>
                                            WiRouter 4G Pro
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w55"
                                            src="~/static/imgs/WiRouter_Std.png"
                                            alt=""
                                        >
                                        <span>
                                            WiRouter STD
                                        </span>
                                    </div>
                                    <div class="item-box">
                                        <img
                                            class="w69"
                                            src="~/static/imgs/wirouter_5g_lite.png"
                                            alt=""
                                        >
                                        <span>
                                            WiRouter 5G Lite
                                        </span>
                                    </div>

                                </div>

                            </div>
                            <div class="title-div">商业场景感知</div>
                            <div class="top-box">
                                <div class="content-div">
                                    <div class="left">
                                        热传感器
                                    </div>
                                    <div class="right">
                                        <img
                                            class="w69"
                                            src="~/static/imgs/xiaore-m.png"
                                            alt=""
                                        >
                                        <span>
                                            WiMatrix<br />客流计数器
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-box mt20">
                                <div class="content-div-l">
                                    <div class="title-name">客流摄像机</div>
                                    <div class="flex-box">
                                        <div>
                                            <img
                                                src="~/static/imgs/wimini-icon.png"
                                                alt=""
                                            >
                                            <span>
                                                WiSight 2 Mini<br />标准/精准客流一体机
                                            </span>
                                        </div>
                                        <div> <img
                                                src="~/static/imgs/wipamini-icon.png"
                                                alt=""
                                            >
                                            <span>
                                                WiPano Mini<br />全景摄像机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                src="~/static/imgs/in400w-icon.png"
                                                alt=""
                                            >
                                            <span>400W定焦/变焦<br />室内精准客流一体机</span>
                                        </div>
                                        <div>
                                            <img
                                                src="~/static/imgs/out400w-icon.png"
                                                alt=""
                                            >
                                            <span>400W筒形<br />室外精准客流一体机</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-div-r">
                                    <div class="title-name">巡店监控</div>
                                    <div class="flex-box">
                                        <div>
                                            <img
                                                src="~/static/imgs/hailuo200w-icon.png"
                                                alt=""
                                            >
                                            <span>200W海螺机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </div>
                                        <div>
                                            <img
                                                src="~/static/imgs/banqiu400w-icon.png"
                                                alt=""
                                            >
                                            <span>400W半球机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </div>
                                        <div>
                                            <img
                                                src="~/static/imgs/tongxing400w-icon.png"
                                                alt=""
                                            >
                                            <span>400W筒形机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        </div>
                                        <div class="mr24">
                                            <img
                                                src="~/static/imgs/wangguan-icon.png"
                                                alt=""
                                            >
                                            <span>SensorHub 巡店终端</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
                <!-- 半圆 -->
                <div class="half-round"></div>
            </section>
        </client-only>
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
    created() {},
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
        .content {
            display: flex;
            align-items: center;
            // padding-top: 70px;
            position: relative;
            width: 100%;
            height: inherit;
            img {
                // margin: 110px 0 0 95px;
                margin: 110px 0 0 14%;
                max-width: 500px;
            }
            i {
                position: absolute;
                color: $main-color;
                font-size: 40px;
                &.triangle1 {
                    top: 349px;
                    left: 60px;
                    transform: rotate(270deg);
                }
                &.triangle2 {
                    top: 170px;
                    right: 300px;
                    transform: rotate(180deg);
                }
                &.triangle3 {
                    font-size: 72px;
                    bottom: 100px;
                    right: 300px;
                    transform: rotate(180deg);
                }
            }
        }
        .txt-intro {
            padding-left: 18.22%;
            width: 45%;
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
    .pannel3 {
        position: relative;
        width: 1230px;
        max-width: 1920px;
        margin: 0 auto;
        min-height: 500px;
        padding-top: 80px;
        padding-bottom: 278px;
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
            width: 100%;
            display: flex;
            margin-bottom: 20px;
            &.h82 {
                height: 82px;
            }
            &.h96 {
                height: 96px;
            }
            &.h170 {
                height: 170px;
            }
            &.h291 {
                height: 291px;
            }
            &.h540 {
                height: 545px;
            }
            .left-box {
                width: 150px;
                height: inherit;
                @include displayCenter;
                border-radius: 20.77px 0 0 20.77px;
                background-color: $font-high-color;
                color: #fff;
                font-size: 24px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
            }
            .right-box {
                width: calc(100% - 150px);
                height: inherit;
                border: 1px solid #d3dcd4;
                border-radius: 0px 20.77px 20.77px 0px;
                &.service-box {
                    display: flex;
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
                            &.w54 {
                                width: 54px;
                            }
                        }
                    }
                }
                &.saas-box {
                    .top-box {
                        display: flex;
                        padding: 0 15px;
                        &.mt20 {
                            margin-top: 20px;
                        }
                        > div {
                            margin: 0 15px;
                            flex: 1;
                            &.flex2 {
                                flex: 2;
                            }
                            .name-box {
                                width: 100%;
                                height: 34.54px;
                                border-radius: 0px 0px 27.69px 27.69px;
                                @include displayCenter;
                                gap: 6.9px;
                                background: $sub-color;
                                color: $font-high-color;
                                font-size: 20px;
                                font-family: "SourceHanSansCN-Bold";
                                font-weight: bold;
                                margin-bottom: 10px;
                            }
                            .icons-box {
                                display: flex;
                                > div {
                                    flex: 1;
                                    @include displayCenter;
                                    flex-direction: column;
                                    .icon-div {
                                        width: 41.44px;
                                        height: 41.23px;
                                        border-radius: 13.84px;
                                        background-color: $main-color;
                                        @include displayCenter;
                                        i {
                                            font-size: 20px;
                                            color: #fff;
                                        }
                                    }
                                    .icon-txt {
                                        font-size: 15.23px;
                                        font-weight: 300;
                                        color: #545454;
                                        margin-top: 6px;
                                        line-height: 19px;
                                    }
                                }
                            }
                        }
                    }
                    .bottom-box {
                        display: flex;
                        margin-top: 20px;
                        padding-left: 30px;
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
                            color: $font-high-color;
                        }
                        .plat-content {
                            width: calc(100% - 170px);
                            display: flex;
                            padding-right: 10px;
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
                                    margin-left: 18px;
                                    font-size: 18px;
                                    // font-family: "SourceHanSansCN-Bold";
                                    // font-weight: bold;
                                    color: #545454;
                                    width: 40px;
                                }
                            }
                        }
                    }
                }
                &.hardware-box {
                    display: flex;
                    .title-col {
                        width: 44px;
                        height: inherit;
                        display: flex;
                        flex-direction: column;
                        div {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            font-size: 20px;
                            font-weight: bold;
                            height: 269px;
                            background: $sub-color;
                            color: $font-high-color;
                        }
                    }
                    .device-pannel {
                        width: calc(100% - 44px);
                        display: flex;
                        flex-direction: column;
                        .h258 {
                            height: 258px;
                        }
                        .h280 {
                            height: 280px;
                        }
                        > div {
                            width: 100%;
                            // padding: 0 15px;
                            display: flex;
                            > div {
                                // flex: 1;
                                margin-left: 20px;
                                &.w-col1 {
                                    width: 150px;
                                }
                                &.w-col2 {
                                    width: 190px;
                                }
                                &.w-col3 {
                                    width: 180px;
                                }
                                &.w-col4 {
                                    width: 136px;
                                }
                                &.w-col5 {
                                    width: 260px;
                                }
                                .title-name {
                                    width: 100%;
                                    height: 34.54px;
                                    border-radius: 0px 0px 27.69px 27.69px;
                                    background: $sub-color;
                                    font-size: 20px;
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    @include displayCenter;
                                    color: $font-high-color;
                                }
                                .flex-box {
                                    width: inherit;
                                    // height: 235px;
                                    @include displayCenter;
                                    flex-direction: column;
                                    &.row {
                                        flex-direction: row;
                                    }
                                    .box {
                                        flex-direction: column;
                                        padding: 0 10px;
                                        span {
                                            margin-top: 10px;
                                        }
                                    }
                                    .mr24 {
                                        margin-right: 24px;
                                    }
                                    > div {
                                        // height: 78px;
                                        margin-top: 10px;
                                        @include displayCenter;
                                        &.flex {
                                            width: 100%;
                                            justify-content: flex-start;
                                            margin-top: 3px;
                                            > span {
                                                display: inline-block;
                                                // flex: 1;
                                                text-align: left;
                                                padding-left: 0;
                                                &:first-child {
                                                    margin-left: 20px;
                                                    width: 130px !important;
                                                    text-align: center;
                                                }
                                                &:last-child {
                                                    text-align: left;
                                                }
                                            }
                                        }
                                        &.col-box {
                                            flex-direction: column;
                                        }

                                        img {
                                            display: inline-block;
                                            // width: 34px;
                                            &.w65 {
                                                width: 65px;
                                            }
                                        }
                                        span {
                                            display: inline-block;
                                            font-size: 13.84px;
                                            font-weight: 300;
                                            line-height: 20px;
                                            color: $font-high-color;
                                            padding-left: 10px;
                                            padding-top: 5px;
                                        }
                                    }
                                    &.block-box{
                                        display: block;
                                        >div{
                                            display: inline-flex;
                                            width: 49%;
                                            margin-top: 20px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .half-round {
            position: absolute;
            bottom: 0;
            right: -500px;
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
}
@include notPc {
    .container {
        .pannel1 {
            height: auto;
            // height: vw(1035);
            overflow: hidden;

            .bg-div {
                width: 100%;
                height: inherit;
                position: relative;
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
                .txt-intro {
                    padding-left: 0;
                    width: 100%;
                    padding: 0 vw(50);
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    .title-box {
                        font-size: vw(60);
                        line-height: vw(60);
                        padding-top: vw(67);
                    }
                    .sub-title {
                        font-size: vw(26);
                        line-height: vw(39);
                        margin-top: vw(30);
                    }
                    .txt-box {
                        font-size: vw(22);
                        line-height: vw(33);
                        margin-top: vw(30);
                        margin-bottom: vw(30);
                        text-indent: vw(44);
                    }
                    .down-btn {
                        width: vw(288);
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(48);
                        font-size: vw(26);
                        margin: 0 auto;
                        margin-top: vw(30);
                    }
                }
                .img-div-box {
                    position: relative;
                    margin: vw(50) auto vw(50) auto;
                    width: vw(680);
                    height: vw(600);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        max-width: vw(680);
                        // max-height: vw(400);
                    }
                }
                i {
                    position: absolute;
                    z-index: 4;
                    color: $main-color;
                    font-size: vw(40);
                    &.triangle1 {
                        top: vw(708);
                        left: vw(83);
                        transform: rotate(270deg);
                    }
                    &.triangle2 {
                        top: vw(520);
                        right: vw(102);
                        transform: rotate(270deg);
                    }
                    &.triangle3 {
                        font-size: vw(72);
                        top: vw(822);
                        right: vw(102);
                        transform: rotate(180deg);
                    }
                }
            }
        }
        .pannel3 {
            min-height: vw(800);
            padding-top: vw(50);
            padding-bottom: vw(50);
            .title-box {
                font-size: vw(42);
                line-height: vw(58);
                padding: vw(80) vw(132) vw(60) vw(131);
            }
            .pannel-box {
                width: 100%;
                padding: 0 vw(40);
                margin-bottom: vw(20);
                &.h82 {
                    height: vw(117);
                }
                &.h150 {
                    height: vw(150);
                }
                &.h96 {
                    height: vw(145);
                }
                &.h291 {
                    height: vw(630);
                }
                &.h540 {
                    // height: vw(1020);
                    height: vw(1100);
                }
                .left-box {
                    width: vw(150);
                    border-radius: vw(20) 0 0 vw(20);
                    font-size: vw(26);
                }
                .right-box {
                    width: vw(520);
                    &.border-r {
                        border: none;
                        border-right: 1px solid #d3dcd4;
                        border-bottom: 1px solid #d3dcd4;
                    }
                    border-radius: 0px vw(20) vw(20) 0px;
                    overflow: hidden;
                    &.service-box {
                        > div {
                            padding-left: 0;
                            flex-direction: column;
                            justify-content: center;
                            .icon-box {
                                width: vw(40);
                                height: vw(40);
                                border-radius: vw(10);
                                i {
                                    font-size: vw(22);
                                }
                            }
                            .txt-box {
                                width: auto;
                                margin-left: 0;
                                font-size: vw(16);
                                margin-top: vw(10);
                            }
                        }
                    }
                    &.saas-box {
                        .top-box {
                            padding: 0;
                            margin-bottom: 0;
                            flex-wrap: wrap;
                            &.col-box {
                                flex-direction: column;
                            }
                            &.mt20 {
                                margin-top: 0;
                            }
                            > div {
                                margin: 0;
                                .name-box {
                                    border-radius: 0;
                                    font-size: vw(20);
                                    height: vw(35);
                                    margin-bottom: 0;
                                }
                                .icons-box {
                                    padding: vw(18) 0;
                                    > div {
                                        .icon-div {
                                            width: vw(41);
                                            height: vw(41);
                                            border-radius: vw(10);
                                            i {
                                                font-size: vw(22);
                                            }
                                        }
                                        .icon-txt {
                                            font-size: vw(15.23);
                                            line-height: vw(17);
                                        }
                                    }
                                }
                                &.div1 {
                                    width: vw(298);
                                    border-radius: 0;
                                    margin-right: vw(20);
                                    .name-box {
                                        width: vw(298);
                                    }
                                }
                                &.div2 {
                                    width: vw(202);
                                    color: #f00;
                                    border-radius: 0px vw(20) 0px 0px;
                                    .name-box {
                                        border-radius: 0px vw(20) 0px 0px;
                                    }
                                }
                                &.div3 {
                                    width: vw(519);
                                }
                            }
                        }
                        .bottom-box {
                            margin-top: 0;
                            padding-left: 0;
                            flex-direction: column;
                            .plat-name {
                                width: vw(519);
                                height: vw(35);
                                line-height: vw(35);
                                border-radius: 0;
                                font-size: vw(20);
                            }
                            .plat-content {
                                width: vw(519);
                                padding: vw(18) 0;
                                > div {
                                    padding-left: 0;
                                    flex-direction: column;
                                    .icon-box {
                                        width: vw(41);
                                        height: vw(41);
                                        border-radius: vw(10);
                                        i {
                                            font-size: vw(22);
                                        }
                                    }
                                    .txt-box {
                                        font-size: vw(15.23);
                                        margin-left: 0;
                                        width: auto;
                                        margin-top: vw(8);
                                    }
                                }
                            }
                        }
                    }
                    &.hardware-box {
                        flex-direction: column;
                        .title-div {
                            width: 100%;
                            height: 37px;
                            @include displayCenter;
                            background-color: $font-high-color;
                            color: #fff;
                            font-family: "SourceHanSansCN-Bold";
                            margin-bottom: vw(10);
                        }
                        .top-box {
                            display: flex;
                            width: vw(520);
                            .left-box-m {
                                width: vw(210);
                                margin-right: vw(20);
                                padding-bottom: vw(10);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    background: $sub-color;
                                    color: $font-high-color;
                                }
                                .item-box {
                                    @include displayCenter;
                                    margin-top: vw(20);
                                    img {
                                        margin-right: vw(20);
                                        margin-left: vw(50);
                                    }
                                    .w33 {
                                        width: vw(33);
                                    }
                                    .w77 {
                                        width: vw(77);
                                    }
                                    > span {
                                        font-size: vw(13.84);
                                        font-weight: 300;
                                        line-height: vw(16);
                                        color: #545454;
                                    }
                                }
                            }
                            .right-box-m {
                                width: vw(288);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    border-radius: 0px vw(20) 0px 0px;
                                    background: $sub-color;
                                    color: $font-high-color;
                                }
                                .item-box {
                                    @include displayCenter;
                                    margin-top: vw(10);
                                    img {
                                        margin-right: vw(20);
                                        margin-left: vw(30);
                                    }
                                    .w33 {
                                        width: vw(33);
                                    }
                                    .w77 {
                                        width: vw(77);
                                    }
                                    > span {
                                        font-size: vw(13.84);
                                        line-height: vw(16);
                                        font-weight: 300;
                                        color: #545454;
                                    }
                                }
                            }
                            .content-div {
                                margin-top: vw(20);
                                display: flex;
                                .left {
                                    width: vw(250);
                                    height: vw(50);
                                    background: #f1f8f1;
                                    font-size: vw(20);
                                    font-weight: bold;
                                    font-family: "SourceHanSansCN-Bold";
                                    @include displayCenter;
                                    color: $font-high-color;
                                }
                                .right {
                                    display: flex;
                                    align-items: center;
                                    padding-left: vw(20);
                                    .w69 {
                                        width: vw(70);
                                    }
                                    span {
                                        font-size: vw(14);
                                        font-weight: 300;
                                        color: #545454;
                                        margin-left: vw(20);
                                    }
                                }
                            }
                        }
                        .bottom-box {
                            display: flex;
                            width: vw(520);
                            padding-bottom: vw(10);
                            .left-box-m {
                                width: vw(150);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    background: $sub-color;
                                    color: $font-high-color;
                                }
                                .item-box {
                                    @include displayCenter;
                                    flex-direction: column;
                                    margin-top: vw(8);
                                    .w55 {
                                        width: vw(55);
                                    }
                                    .w69 {
                                        width: vw(69);
                                    }
                                    > span {
                                        font-size: vw(13.84);
                                        font-weight: 300;
                                        line-height: vw(16);
                                        padding-top: vw(10);
                                        color: #545454;
                                    }
                                }
                            }
                            .right-box-m {
                                width: vw(348);
                                margin-right: vw(20);
                                &.w100 {
                                    width: 100%;
                                }
                                .w100 {
                                    width: 100%;
                                }
                                .name-box {
                                    display: block;
                                    width: inherit;
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    border-radius: 0;
                                    background: $sub-color;
                                    color: $font-high-color;
                                    &.w100 {
                                        width: 100%;
                                    }
                                }
                                > div {
                                    width: inherit;
                                    display: flex;
                                    .item-box {
                                        flex: 1;
                                        @include displayCenter;
                                        flex-direction: column;
                                        img {
                                            margin-top: vw(10);
                                            margin-bottom: vw(10);
                                        }
                                        .w33 {
                                            width: vw(33);
                                        }
                                        .w55 {
                                            width: vw(55);
                                        }
                                        .w69 {
                                            width: vw(69);
                                        }
                                        > span {
                                            font-size: vw(13.84);
                                            font-weight: 300;
                                            line-height: vw(16);
                                            margin-bottom: vw(20);
                                            color: #545454;
                                        }
                                    }
                                }
                            }
                            &.mt20 {
                                margin-top: vw(20);
                            }
                            .content-div-l {
                                width: vw(267);
                                margin-right: vw(20);
                                .title-name {
                                    width: inherit;
                                    height: vw(37);
                                    font-size: vw(20);
                                    font-weight: bold;
                                    font-family: "SourceHanSansCN-Bold";
                                    @include displayCenter;
                                    color: $font-high-color;
                                    background: #f1f8f1;
                                }
                                .flex-box {
                                    display: flex;
                                    flex-direction: column;
                                    > div {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        margin-top: vw(20);
                                        img {
                                            width: vw(56);
                                        }
                                        span {
                                            font-size: vw(14);
                                            line-height: vw(16);
                                            font-weight: 300;
                                            color: #545454;
                                            margin-left: vw(20);
                                        }
                                    }
                                }
                            }
                            .content-div-r {
                                width: vw(231);
                                .title-name {
                                    width: inherit;
                                    height: vw(37);
                                    font-size: vw(20);
                                    font-weight: bold;
                                    font-family: "SourceHanSansCN-Bold";
                                    @include displayCenter;
                                    color: $font-high-color;
                                    background: #f1f8f1;
                                }
                                .flex-box {
                                    display: flex;
                                    flex-direction: column;
                                    > div {
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        margin-top: vw(20);
                                        img {
                                            width: vw(56);
                                        }
                                        span {
                                            font-size: vw(14);
                                            line-height: vw(16);
                                            font-weight: 300;
                                            color: #545454;
                                            margin-left: vw(20);
                                        }
                                    }
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
    }
}
@include pcMini {
    .container {
        .pannel3 {
            .pannel-box {
                width: 80%;
            }
        }
    }
}
@media screen and (min-width: 1200px) and (max-width: 1730px) {
    .container {
        .pannel3 {
            overflow-y: auto;
            .pannel-box {
                width: 1250px;
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
