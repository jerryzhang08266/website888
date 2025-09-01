<!--
 * @Description: 商业IOT介绍页
 * @FilePath: pages\introduce\iot.vue
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
                        <div class="title-box">商业IoT</div>
                        <!-- <div class="sub-title">极速体验，最新一代Wi-Fi6 双频无线路由器</div> -->
                        <div class="txt-box">通过全时段业务在线、宽带及云宽带、网络安全合规等通用解决方案，为商业场景打造高效的IoT网络，让场所的人员、设备、SaaS应用之间实现广泛的互联互通与实时的数据交互，助力场所日常运营和管理的网络化、数字化、智能化。
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
                        <img
                            src="~/static/imgs/iot.png"
                            alt=""
                        >
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
                <template v-if="cur_nav_id==1">
                    <div class="title-box">解决方案全景</div>
                    <div class="pannel-box h82">
                        <div class="left-box">服务</div>
                        <div class="right-box service-box">
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lianji4"></i></span>
                                <span class="txt-box">咨询设计</span>
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
                                <span class="txt-box">上门运维</span>
                            </div>
                        </div>
                    </div>
                    <div class="pannel-box h170">
                        <div class="left-box">SaaS应用</div>
                        <div class="right-box saas-box">
                            <div class="top-box">
                                <div class="div1">
                                    <div class="name-box"> 面向门店生产业务</div>
                                    <div class="icons-box">
                                        <div>
                                            <div class="icon-div">
                                                <i class="iconfont icon-a-lujing91"></i>
                                            </div>
                                            <div class="icon-txt">
                                                智能<br />选路
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
                                                <i class="iconfont icon-a-lujing11"></i>
                                            </div>
                                            <div class="icon-txt">
                                                流量<br />管家
                                            </div>
                                        </div>
                                        <div>
                                            <div class="icon-div">
                                                <i class="iconfont icon-a-lujing13"></i>
                                            </div>
                                            <div class="icon-txt">
                                                行为<br />控制
                                            </div>
                                        </div>
                                        <div>
                                            <div class="icon-div">
                                                <i class="iconfont icon-a-lianji10"></i>
                                            </div>
                                            <div class="icon-txt">
                                                防火<br />墙
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
                                    <div class="name-box"> 面向门店客用业务</div>
                                    <div class="icons-box">
                                        <div>
                                            <div class="icon-div">
                                                <i class="iconfont icon-a-lianji9"></i>
                                            </div>
                                            <div class="icon-txt">
                                                网监<br />审计
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
                                    <div class="name-box"> 面向门店运维管理</div>
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
                                                故障<br />告警
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
                                                <i class="iconfont icon-a-lujing221"></i>
                                            </div>
                                            <div class="icon-txt">
                                                云端<br />配置
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
                    </div>
                    <div class="pannel-box h270">
                        <div class="left-box">硬件</div>
                        <div class="right-box hardware-box">
                            <template v-if="deviceSize=='large'">
                                <div class="left-content">
                                    <div>
                                        <div class="title-name">无线接入点</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6<br />双频无线路由器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6B<br />双频无线路由器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wismart3e.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart3E<br />双频无线路由器
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">接入交换机</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/s802p.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P/S2404P
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s802pf.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P-F/S2402P-F
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s240424.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S2404
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s302824.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S3028
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">无线控制器</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/wimastert.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster T&nbsp;&nbsp;&nbsp;&nbsp;<br />无线控制器
                                                </span>
                                            </div>
                                            <div v-if="0"> <img
                                                    src="~/static/imgs/wimastert3.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster T3<br />无线控制器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wimasterx3s.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster X3s<br />无线控制器
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-content">
                                    <div class="top-div">
                                        <div class="name-btn">智能网关</div>
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wimasterg5005.png"
                                                alt=""
                                            >
                                            <div class="name-txt">WiMaster G5005<br />中小型智能网关</div>
                                        </div>
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wimasterx3sg.png"
                                                alt=""
                                            >
                                            <div class="name-txt">WiMaster X3s-G<br />大型智能网关</div>
                                        </div>
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wimagic.png"
                                                alt=""
                                            >
                                            <div class="name-txt">4G Magic 边缘管理网关</div>
                                        </div>
                                    </div>
                                    <div class="bottom-div">
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wirouter.png"
                                                alt=""
                                            >
                                            <div class="name-txt">WiRouter 4G<br />mini</div>
                                        </div>
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wirouterpro.png"
                                                alt=""
                                            >
                                            <div class="name-txt">WiRouter 4G Pro<br />（双卡）专业版</div>
                                        </div>
                                        <div class="box">
                                            <img
                                                src="~/static/imgs/wirouter_5g_lite.png"
                                                alt=""
                                            >
                                            <div class="name-txt">WiRouter 5G<br />Lite</div>
                                        </div>

                                        <div class="name-btn">
                                            云宽带
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
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
                                                WiSmart6
                                                双频无线路由器
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
                                                双频无线路由器
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
                                                双频无线路由器
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
                                                WiSwitch S2404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w77"
                                                src="~/static/imgs/s302824.png"
                                                alt=""
                                            >
                                            <span>
                                                WiSwitch S3028&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div class="bottom-box">
                                    <div class="left-box-m">
                                        <div class="name-box">无线控制器</div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimastert.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T
                                                无线控制器

                                            </span>
                                        </div>
                                        <div
                                            class="item-box"
                                            v-if="0"
                                        >
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimastert3.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T3
                                                无线控制器

                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimasterx3s.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T
                                                无线控制器

                                            </span>
                                        </div>

                                    </div>
                                    <div class="right-box-m">
                                        <div class="name-box">智能网关</div>
                                        <div>
                                            <div class="item-box">
                                                <img
                                                    class="w69"
                                                    src="~/static/imgs/wimasterg5005.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster G5005<br />中小型智能网关
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w69"
                                                    src="~/static/imgs/wimasterx3sg.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster X3s-G<br />大型智能网关
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wimagic.png"
                                                    alt=""
                                                >
                                                <span>
                                                    4G Magic 边缘管理网关
                                                </span>
                                            </div>
                                        </div>
                                        <div class="name-box">云宽带</div>
                                        <div>
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wirouter.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G<br />mini
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wirouterpro.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G Pro<br />（双卡）专业版
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w69"
                                                    src="~/static/imgs/wirouter_5g_lite.png"
                                                    alt=""
                                                >
                                                <span>
                                                   WiRouter 5G<br />Lite
                                                </span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </template>

                        </div>
                    </div>
                </template>
                <template v-if="cur_nav_id==2">
                    <div class="title-box">解决方案全景</div>
                    <div class="pannel-box h82">
                        <div class="left-box">服务</div>
                        <div class="right-box service-box">
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lianji4"></i></span>
                                <span class="txt-box w54">统一开通报修</span>
                            </div>
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lujing5"></i></span>
                                <span class="txt-box w54">统一对账结算</span>
                            </div>
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lujing6"></i></span>
                                <span class="txt-box">主动监控</span>
                            </div>
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lujing5"></i></span>
                                <span class="txt-box">交付实施</span>
                            </div>
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lujing10"></i></span>
                                <span class="txt-box">上门运维</span>
                            </div>
                        </div>
                    </div>
                    <div class="pannel-box h170 h170-mb">
                        <div class="left-box">SaaS应用</div>
                        <div class="right-box saas-box">
                            <div class="top-box">

                                <div class="div2">
                                    <div class="name-box"> 面向门店运维管理</div>
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
                                                故障<br />告警
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
                                                <i class="iconfont icon-a-lujing221"></i>
                                            </div>
                                            <div class="icon-txt">
                                                云端<br />配置
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

                    </div>
                    <div class="pannel-box h150">
                        <div class="left-box">硬件</div>
                        <div class="right-box hardware-box">
                            <template v-if="deviceSize=='large'">
                                <div class="left-content w100">
                                    <div>
                                        <div class="title-name">云宽带</div>
                                        <div class="flex-box row">
                                            <div class="box">
                                                <img
                                                    src="~/static/imgs/wirouter.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G<br />mini
                                                </span>
                                            </div>
                                            <div class="box"> <img
                                                    src="~/static/imgs/wirouterpro.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G Pro<br />（双卡）专业版
                                                </span>
                                            </div>
                                            <div class="box"> <img
                                                    src="~/static/imgs/wirouter_5g_lite.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 5G<br />Lite
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">智能网关</div>
                                        <div class="flex-box row">
                                            <div class="box"> <img
                                                    src="~/static/imgs/wimagic.png"
                                                    alt=""
                                                >
                                                <span>
                                                    4G Magic 边缘管理网关
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div class="bottom-box">
                                    <div class="right-box-m w100">
                                        <div class="name-box w100">云宽带</div>
                                        <div class="w100">
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wirouter.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G<br />mini
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wirouterpro.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 4G Pro<br />（双卡）专业版
                                                </span>
                                            </div>
                                            <div class="item-box">
                                                <img
                                                    class="w69"
                                                    src="~/static/imgs/wirouter_5g_lite.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiRouter 5G<br />Lite
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-box-m w100" style="width: 51%">
                                        <div class="name-box w100">智能网关</div>
                                        <div class="w100">
                                            <div class="item-box">
                                                <img
                                                    class="w55"
                                                    src="~/static/imgs/wimagic.png"
                                                    alt=""
                                                >
                                                <span>
                                                    4G Magic 边缘管理网关
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>

                        </div>
                    </div>
                </template>
                <template v-if="cur_nav_id==3">
                    <div class="title-box">解决方案全景</div>
                    <div class="pannel-box h82">
                        <div class="left-box">服务</div>
                        <div class="right-box service-box">
                            <div>
                                <span class="icon-box"><i class="iconfont icon-a-lianji4"></i></span>
                                <span class="txt-box">咨询设计</span>
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
                                <span class="txt-box">上门运维</span>
                            </div>
                        </div>
                    </div>
                    <div class="pannel-box h170 h170-mb">
                        <div class="left-box">SaaS应用</div>
                        <div class="right-box saas-box">
                            <div class="top-box">

                                <div class="div2">
                                    <div class="name-box"> 面向门店客用业务</div>
                                    <div class="icons-box">
                                        <div>
                                            <div class="icon-div">
                                                <i class="iconfont icon-a-lianji9"></i>
                                            </div>
                                            <div class="icon-txt">
                                                网监<br />审计
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
                    </div>
                    <div class="pannel-box h270 h270-mb">
                        <div class="left-box">硬件</div>
                        <div class="right-box hardware-box">
                            <template v-if="deviceSize=='large'">
                                <div class="left-content w100">
                                    <div>
                                        <div class="title-name">无线接入点</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6<br />双频无线路由器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wismart.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart6B<br />双频无线路由器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wismart3e.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSmart3E<br />双频无线路由器
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">接入交换机</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/s802p.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P/S2404P
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s802pf.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiSwitch S802P-F/S2402P-F
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s240424.png"
                                                    alt=""
                                                >&nbsp;
                                                <span>
                                                    WiSwitch S2404&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/s302824.png"
                                                    alt=""
                                                >&nbsp;
                                                <span>
                                                    WiSwitch S3028&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">无线控制器</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/wimastert.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster T&nbsp;&nbsp;&nbsp;&nbsp;<br />无线控制器
                                                </span>
                                            </div>
                                            <div v-if="0"> <img
                                                    src="~/static/imgs/wimastert3.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster T3<br />无线控制器
                                                </span>
                                            </div>
                                            <div> <img
                                                    src="~/static/imgs/wimasterx3s.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster X3s<br />无线控制器
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title-name">智能网关</div>
                                        <div class="flex-box">
                                            <div>
                                                <img
                                                    src="~/static/imgs/wimasterg5005.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster G5005<br />中小型智能网关
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
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
                                                WiSmart6
                                                双频无线路由器
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
                                                双频无线路由器
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
                                                双频无线路由器
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
                                                WiSwitch S2404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w77"
                                                src="~/static/imgs/s302824.png"
                                                alt=""
                                            >
                                            <span>
                                                WiSwitch S3028&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div class="bottom-box">
                                    <div class="left-box-m">
                                        <div class="name-box">无线控制器</div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimastert.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T<br />无线控制器
                                            </span>
                                        </div>
                                        <div
                                            class="item-box"
                                            v-if="0"
                                        >
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimastert3.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster T3<br />无线控制器
                                            </span>
                                        </div>
                                        <div class="item-box">
                                            <img
                                                class="w69"
                                                src="~/static/imgs/wimasterx3s.png"
                                                alt=""
                                            >
                                            <span>
                                                WiMaster X3s<br />无线控制器
                                            </span>
                                        </div>

                                    </div>
                                    <div class="right-box-m">
                                        <div class="name-box">智能网关</div>
                                        <div>
                                            <div class="item-box">
                                                <img
                                                    class="w69"
                                                    src="~/static/imgs/wimasterg5005.png"
                                                    alt=""
                                                >
                                                <span>
                                                    WiMaster G5005<br />中小型智能网关
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>

                        </div>
                    </div>
                </template>

                <!-- 半圆 -->
                <div class="half-round"></div>
            </section>
            <section
                class="pannel4"
                v-if="cur_nav_id==1"
            >
                <div>
                    <!-- @tab-click="handleClick" -->
                    <el-tabs
                        v-if="deviceSize=='large'"
                        tab-position="left"
                        v-model="activeName"
                        stretch
                    >
                        <el-tab-pane
                            v-for="(item,idx) in items"
                            :key="idx"
                            :label="item.label"
                            :name="item.name"
                        >
                            <div><span class="name-btn">方案描述</span></div>
                            <div class="desc-txt">
                                {{item.desc}}
                            </div>
                            <div><span class="name-btn">场景和痛点</span></div>
                            <div class="desc-card">
                                <el-row :gutter="35">
                                    <el-col
                                        :span="8"
                                        v-for="(scene,scene_idx) in item.scenes"
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
                            <div><span class="name-btn">优势和价值</span></div>
                            <div class="desc-card">
                                <el-row :gutter="35">
                                    <el-col
                                        :span="8"
                                        v-for="(advantage,advantage_idx) in item.advantages"
                                        :key="advantage_idx"
                                    >
                                        <div class="grid-desc-card">
                                            <div class="bg-icon">
                                                <i
                                                    class="iconfont"
                                                    :class="advantage.iconfont"
                                                ></i>
                                            </div>
                                            <div class="bg-white">
                                                <div class="txt-name">{{advantage.title}}</div>
                                                <div class="desc-txt-box">{{advantage.desc}}</div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <div
                        class="tab-box"
                        v-else
                    >
                        <span
                            :class="activeName==item.name?'active':''"
                            v-for="(item,idx) in items"
                            :key="idx"
                            @click="()=>{cur_item= item;activeName=item.name;}"
                        >{{item.label}}</span>
                    </div>
                    <div
                        v-if="deviceSize!='large'"
                        class="item-content"
                    >
                        <div><span class="name-btn">方案描述</span></div>
                        <div class="desc-txt">
                            {{cur_item.desc}}
                        </div>
                        <div><span class="name-btn">场景和痛点</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in cur_item.scenes"
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
                        <div><span class="name-btn">优势和价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in cur_item.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{advantage.title}}</div>
                                            <div class="desc-txt-box">{{advantage.desc}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="pannel4"
                v-if="cur_nav_id==2"
            >
                <div>
                    <div v-if="deviceSize=='large'">
                        <div><span class="name-btn">场景和痛点</span></div>
                        <div class="desc-card">
                            <el-row :gutter="35">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in broadband.scenes"
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
                        <div><span class="name-btn">优势和价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="35">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in broadband.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{advantage.title}}</div>
                                            <div class="desc-txt-box">{{advantage.desc}}</div>
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
                        <div><span class="name-btn">场景和痛点</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in broadband.scenes"
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
                        <div><span class="name-btn">优势和价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in broadband.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{advantage.title}}</div>
                                            <div class="desc-txt-box">{{advantage.desc}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="pannel4"
                v-if="cur_nav_id==3"
            >
                <div>
                    <div v-if="deviceSize=='large'">
                        <div><span class="name-btn">场景和痛点</span></div>
                        <div class="desc-card">
                            <el-row :gutter="35">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in network.scenes"
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
                        <div><span class="name-btn">优势和价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="35">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in network.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{advantage.title}}</div>
                                            <div class="desc-txt-box">{{advantage.desc}}</div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div
                        class="item-content"
                        v-else
                    >
                        <div><span class="name-btn">场景和痛点</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(scene,scene_idx) in network.scenes"
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
                        <div><span class="name-btn">优势和价值</span></div>
                        <div class="desc-card">
                            <el-row :gutter="deviceSize=='large'?35:25">
                                <el-col
                                    :span="8"
                                    v-for="(advantage,advantage_idx) in network.advantages"
                                    :key="advantage_idx"
                                >
                                    <div class="grid-desc-card">
                                        <div class="bg-icon">
                                            <i
                                                class="iconfont"
                                                :class="advantage.iconfont"
                                            ></i>
                                        </div>
                                        <div class="bg-white">
                                            <div class="txt-name">{{advantage.title}}</div>
                                            <div class="desc-txt-box">{{advantage.desc}}</div>
                                        </div>
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
import Api from "~/plugins/api";
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
                // console.log(this.$route.query);
                if (this.$route.query.active && this.$route.query.active < 4) {
                    this.cur_nav = this.nav_data[this.$route.query.active - 1];
                    this.cur_nav_id = this.cur_nav.id;
                } else {
                    this.cur_nav = this.nav_data[0];
                    this.cur_nav_id = this.cur_nav.id;
                }
            }
        }
    },
    async asyncData({ params }) {},
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
                    name: "全时段业务在线解决方案",
                    title: "整体方案描述",
                    desc: "随着连锁企业数字化转型不断深化，以提供连接能力为主的传统商用IoT网络，已经无法全面支撑门店的数字化应用，迫切需要打造门店数字化底座，满足门店的全时段业务在线需求。"
                },
                {
                    id: 2,
                    name: "宽带及云宽带解决方案",
                    title: "整体方案描述",
                    desc: "通过提供宽带与云宽带接入服务，搭建门店到总部、门店到SaaS平台、门店到互联网的通信桥梁，提供统一开通运维、统一对账结算、统一流量管控。"
                },
                // {
                //     id: 3,
                //     name: "网络安全合规解决方案",
                //     title: "整体方案描述",
                //     desc: "为商场、连锁、机场等公共无线上网场所，配备网监审计设备，开通网监服务，完成网监备案，满足‘公安82号令’要求。"
                // }
            ],
            items: [
                {
                    label: "连接保障",
                    name: "1",
                    desc: "出于成本考虑，门店一般安装单条宽带、单台网关，使得单点故障成为门店业务中断的重要原因，连接保障方案重点解决这些问题。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "网关单点故障",
                            desc: "出于成本考虑，门店配置单台出口网关，一旦设备故障，造成门店网络中断，业务停摆。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "宽带单点故障",
                            desc: "一般门店仅安装单条宽带，一旦宽带断线或拥塞，造成门店业务不可用或体验变差。"
                        },
                        {
                            iconfont: "icon-a-lianji25",
                            title: "4G备线不靠谱",
                            desc: "通常4G设备安装在机柜内，信号接收不好，网速慢、延时大，无法真正起到宽带备份作用。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "备份网关",
                            desc: "4G云宽带设备兼作备份网关，在不额外增加设备的情况下形成双出口网关，消除单点故障。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "可靠的备线",
                            desc: "4G云宽带支持PoE供电，可以拉到信号更好的门厅位置，同时，内置e-SIM应急备份卡，多一重保障。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "更高可靠性",
                            desc: "门店网络在故障时可以秒级切换，连接可靠性达到99.99%。"
                        }
                    ]
                },
                {
                    label: "主动监控",
                    name: "2",
                    desc: "门店的数字化业务终端众多，但是苦于没有统一的监控系统和很好的监控手段，企业IT部门只能被动式等待门店报修，主动监控方案能够让IT人员实时感知门店运行态势，实现主动式运维。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "被动式运维",
                            desc: "IT人员没有好的手段，对宽带、网络和业务终端进行监控，只能等待门店来“投诉”。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "多厂商设备",
                            desc: "门店设备存在供应商多、型号杂的问题，无统一、高效的监控手段。"
                        },
                        {
                            iconfont: "icon-a-lianji25",
                            title: "故障排查难",
                            desc: "店员不具备IT知识，无法准确描述故障现象，导致故障排查时间长。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "终端监控",
                            desc: "不但能监控门店网络，而且能监控门店终端的在线状态。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "跨厂商监控",
                            desc: "不但能监控迈外迪设备，而且能监控第三方设备。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "业务测试",
                            desc: "能够对业务连通性和质量进行测试，快速发现故障节点，将业务恢复时间缩短到半小时内。"
                        }
                    ]
                },
                {
                    label: "远程恢复",
                    name: "3",
                    desc: "当门店发生故障时，必须第一时间恢复业务，然而，当前的远程恢复手段较少，对门店业务的影响较大。远程恢复方案有效解决这些问题，让门店业务恢复时间缩短到半小时内。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "电源重启难",
                            desc: "无法远程对电源进行开关，而指导店长重启电源很困难。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "多系统切换",
                            desc: "当门店存在多厂商设备时，需要分别登录不同的系统进行远程重启。"
                        },
                        {
                            iconfont: "icon-a-lianji25",
                            title: "无法远程登录",
                            desc: "当门店宽带中断或网络拥塞时，无法登录到设备进行重启操作。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "远控电源",
                            desc: "对于设备死机等故障情况，可以远程开关电源，不必上门重启。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "一键登录",
                            desc: "即使针对第三方设备，也能一键登录，进行软件升级或重启来恢复业务。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "带外管理",
                            desc: "在门店网络中断的极端情况下，还可以通过4G通道登录到设备，进行远程重启和恢复。"
                        }
                    ]
                },
                {
                    label: "有效上门",
                    name: "4",
                    desc: "及时而有效的上门服务，能够快速解决门店的故障问题，最小化现场运维费用。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "派单时间长",
                            desc: "派单前，IT人员需要进行故障分析来识别派单给哪个服务商，而由于手段匮乏，分析判断时间较长。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "二次上门多",
                            desc: "服务商接单时，很难知晓故障原因，无法提前准备备件，经常造成二次上门更换备件。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "故障排查快",
                            desc: "通过平台监控和业务测试，可以快速发现故障节点，判断故障原因，缩短派单时间。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "准备充足",
                            desc: "在给服务商派单时，可以根据故障分析，让服务商提前准备好备件，避免二次上门。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "上门费用降",
                            desc: "缩短了因故障造成的业务影响时间，减少二次上门次数，上门运维费用可下降20%。"
                        }
                    ]
                },
                {
                    label: "云端配置",
                    name: "5",
                    desc: "云端统一配置管理，能够有效减少现场操作的频次，让门店设备配置管理更简单。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "不支持云端配置",
                            desc: "部分设备或设备的部分功能不支持云端配置，需要开启远程桌面或VPN连接进行配置，甚至到门店操作。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "多系统切换",
                            desc: "对于存在多厂商设备的门店，需要切换不同厂商的系统以完成云端配置，操作麻烦，效率较低。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "云端一键登录",
                            desc: "通过云管平台一键登录到门店设备进行配置，不需要VPN或远程桌面连接。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "统一配置",
                            desc: "通过一个平台完成多厂商设备的登录配置，不需要切换多个系统，操作简单。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "效率提升",
                            desc: "门店安装和运维效率均得到提升，不用事事跑到现场。"
                        }
                    ]
                },
                {
                    label: "安全防护",
                    name: "6",
                    desc: "门店的终端设备众多，而大量终端得不到及时的安全更新，使得门店成为网络安全的薄弱点，因此，需要为门店提供必要的安全防护。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "安全的数据传输",
                            desc: "对于供应链管理等内部应用数据的传输，需要通过加密来保护数据不泄漏。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "安全的网络隔离",
                            desc: "门店一套物理网络，需要满足生产、监控、客用等多个业务需求，多网融合，需要有效隔离，防范安全隐患。"
                        },
                        {
                            iconfont: "icon-a-lianji25",
                            title: "网安审计合规",
                            desc: "对于提供顾客上网服务的门店，需要满足82号令网监审计合规要求。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "IPsec VPN",
                            desc: "在总部和门店直接建立IPsec VPN加密传输通道，避免数据泄漏。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "端到端隔离",
                            desc: "从终端接入到门店网络出口，提供顾客、生产、监控多个业务之间的安全隔离。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "网关防护",
                            desc: "出口网关内嵌防火墙、流控、网安审计等功能，有效保护门店网络安全。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "e-SIM应急备份",
                            desc: "4G云宽带设备内置e-SIM应急备份卡，在主卡故障时仍可利用应急卡工作，保障门店不断网。"
                        }
                    ]
                },
                {
                    label: "降本增效",
                    name: "7",
                    desc: "降本增效是门店数字化过程中必须考虑的问题，降低门店整体运维费用，缩短故障处理和业务影响时间，提高整体运维效率。",
                    scenes: [
                        {
                            iconfont: "icon-a-lianji23",
                            title: "上门次数多、运维费用高",
                            desc: "远程恢复手段少，很多故障需要上门处理；对故障原因很难提前分析判断，产生二次上门；每年花在门店上门运维方面的费用高昂。"
                        },
                        {
                            iconfont: "icon-a-lianji24",
                            title: "运维效率低、业务影响大",
                            desc: "由于主动监控手段较少，很多问题需要派人上门、配合处理，导致效率较低，相应的对业务影响的时间拉长。"
                        }
                    ],
                    advantages: [
                        {
                            iconfont: "icon-a-lujing17",
                            title: "减少上门服务",
                            desc: "对于原来需要上门处理的情况，通过远程恢复手段尽量远程解决；精准定位、准备充分，避免二次上门服务。"
                        },
                        {
                            iconfont: "icon-a-lianji221",
                            title: "降低运维费用",
                            desc: "通过主动监控、远程恢复，降低上门次数，使得运维费用下降20%以上。"
                        },
                        {
                            iconfont: "icon-wendingxing",
                            title: "提高运维效率",
                            desc: "通过业务质量检测，快速定位问题，大大缩短业务恢复和故障解决时间。"
                        }
                    ]
                }
            ],
            cur_item: {
                label: "连接保障",
                name: "1",
                desc: "出于成本考虑，门店一般安装单条宽带、单台网关，使得单点故障成为门店业务中断的重要原因，连接保障方案重点解决这些问题。",
                scenes: [
                    {
                        iconfont: "icon-a-lianji23",
                        title: "网关单点故障",
                        desc: "出于成本考虑，门店配置单台出口网关，一旦设备故障，造成门店网络中断，业务停摆。"
                    },
                    {
                        iconfont: "icon-a-lianji24",
                        title: "宽带单点故障",
                        desc: "一般门店仅安装单条宽带，一旦宽带断线或拥塞，造成门店业务不可用或体验变差。"
                    },
                    {
                        iconfont: "icon-a-lianji25",
                        title: "4G备线不靠谱",
                        desc: "通常4G设备安装在机柜内，信号接收不好，网速慢、延时大，无法真正起到宽带备份作用。"
                    }
                ],
                advantages: [
                    {
                        iconfont: "icon-a-lujing17",
                        title: "备份网关",
                        desc: "4G云宽带设备兼作备份网关，在不额外增加设备的情况下形成双出口网关，消除单点故障。"
                    },
                    {
                        iconfont: "icon-a-lianji221",
                        title: "可靠的备线",
                        desc: "4G云宽带支持PoE供电，可以拉到信号更好的门厅位置，同时，内置e-SIM应急备份卡，多一重保障。"
                    },
                    {
                        iconfont: "icon-wendingxing",
                        title: "更高可靠性",
                        desc: "门店网络在故障时可以秒级切换，连接可靠性达到99.99%。"
                    }
                ]
            },
            broadband: {
                scenes: [
                    {
                        iconfont: "icon-a-lianji23",
                        title: "开通和运维复杂",
                        desc: "由于各地运营商资源情况参差不齐，且分地域管理，因此，需要跟各地一二级运营商多头沟通，开通和报修时间都很长。"
                    },
                    {
                        iconfont: "icon-a-lianji24",
                        title: "对账和结算繁琐",
                        desc: "需要根据每条宽带和每张流量卡的使用情况单独对账、开票、交费，流程繁琐，消耗IT部和店长大量的精力。"
                    },
                    {
                        iconfont: "icon-a-lianji25",
                        title: "流量费用不可控",
                        desc: "蹭网、看视频等易造成流量费用激增，每个门店每月的流量消耗差异很大，需要对流量使用进行有效管控。"
                    }
                ],
                advantages: [
                    {
                        iconfont: "icon-a-lujing17",
                        title: "统一开通运维",
                        desc: "具备ISP资质，提供一站式开通和维护服务，开通和维修时间有保障。"
                    },
                    {
                        iconfont: "icon-a-lianji221",
                        title: "统一对账结算",
                        desc: "拥有一对一服务团队，提供一站式对账和结算，减轻IT部门工作量。"
                    },
                    {
                        iconfont: "icon-wendingxing",
                        title: "统一流量池",
                        desc: "融合三大运营商资源的统一流量池，所有门店共享，月底不清零，每月有详细流量账单，可以对流量进行灵活管理。"
                    },
                    {
                        iconfont: "icon-wendingxing",
                        title: "流量可管控",
                        desc: "可对每个门店的流量配额、网速和应用类型进行控制，让流量管理更简单，不必担心流量费用过高的问题。"
                    }
                ]
            },
            network: {
                scenes: [
                    {
                        iconfont: "icon-a-lianji23",
                        title: "网监不合规影响开业",
                        desc: "如果未通过网监审计合规备案，可能因为网络安全问题造成无法按期开业经营，或者停业整顿。"
                    },
                    {
                        iconfont: "icon-a-lianji24",
                        title: "网监服务地域化",
                        desc: "某些服务商仅能提供本地域的网监合规服务，跟不上连锁企业全国扩张的步伐，导致连锁企业需要对接多个本地服务商。"
                    },
                    {
                        iconfont: "icon-a-lianji25",
                        title: "难以保障在线率",
                        desc: "某些服务商仅提供网监备案服务，但是，缺乏对门店网络的主动监控手段和服务，导致网监服务在线率难以保障。"
                    }
                ],
                advantages: [
                    {
                        iconfont: "icon-a-lujing17",
                        title: "全国网监合规",
                        desc: "迈外迪已经实现跟全国300+城市的网监审计平台对接，可以提供全国的网监合规服务。"
                    },
                    {
                        iconfont: "icon-a-lianji221",
                        title: "接管第三方网络",
                        desc: "采用迈外迪网关设备，可以接管第三方Wi-Fi网络，实现网监审计合规。"
                    },
                    {
                        iconfont: "icon-wendingxing",
                        title: "主动监控服务",
                        desc: "可以提供门店网络的统一云端监控服务，一旦出现故障自动报修，全面提高在线率。"
                    }
                ]
            },
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
                background: url("~/static/imgs/iot.png") no-repeat center center;
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
                    width: 73%;
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
        position: relative;
        width: 100%;
        min-height: 500px;
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
            width: 63.53%;
            margin: 0 auto;
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
            &.h310 {
                height: 250px;
            }
            &.h446 {
                height: 242px;
            }
            &.h270 {
                height: 270px;
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
                        > div {
                            margin: 0 15px;
                            flex: 1;
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
                                margin-bottom: 24px;
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
                &.hardware-box {
                    display: flex;
                    .left-content {
                        width: 69.15%;
                        display: flex;
                        padding: 0 15px;
                        &.w100 {
                            width: 100%;
                        }
                        > div {
                            flex: 1;
                            padding: 0 15px;
                            .title-name {
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
                                height: 235px;
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
                                > div {
                                    // height: 78px;
                                    margin-top: 15px;
                                    @include displayCenter;

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
                                    }
                                }
                            }
                        }
                    }
                    .right-content {
                        width: calc(100% - 69.15%);
                        padding-right: 18px;
                        .top-div,
                        .bottom-div {
                            display: flex;
                            .box {
                                @include displayCenter;
                                flex-direction: column;
                                padding: 0 11px;
                            }
                            .name-btn {
                                width: 40px;
                                height: 134px;
                                padding: 0 5px;
                                border-radius: 0px 0px 27.69px 27.69px;
                                font-size: 20px;
                                font-family: "SourceHanSansCN-Bold";
                                font-weight: bold;
                                @include displayCenter;
                                color: $font-high-color;
                                background: $sub-color;
                                text-align: center;
                            }
                            .name-txt {
                                font-size: 13.84px;
                                font-weight: 300;
                                line-height: 20px;
                                color: $font-high-color;
                                margin-top: 10px;
                            }
                        }
                        .bottom-div {
                            .name-btn {
                                border-radius: 27.69px 27.69px 0px 0px;
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
        margin-top: 150px;
        min-height: 870px;
        background-color: $sub-color;
        > div {
            width: 63.53%;
            margin: 0 auto;
            padding: 99px 0;
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
            }
            .name-btn {
                display: inline-block;
                height: 45px;
                line-height: 45px;
                border-radius: 30px;
                background: $font-high-color;
                color: #fff;
                font-size: 22px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                padding: 0 20px;
            }
            .desc-txt {
                padding: 30px 0 40px 0;
                font-size: 20px;
                font-weight: normal;
                line-height: 32px;
                color: $font-main-color;
                width: 95%;
            }
            .desc-card {
                padding: 10px 0 40px 0;
                .grid-desc-card {
                    width: 304px;
                    height: 150px;
                    position: relative;
                    background: $sub-color;
                    border-radius: 20px 0 20px 20px;
                    margin-top: 20px;
                    .bg-icon {
                        position: absolute;
                        top: 0;
                        right: 0;
                        z-index: 6;
                        width: 65px;
                        height: 65px;
                        border-radius: 50%;
                        background-color: $main-color;
                        @include displayCenter;
                        i {
                            font-size: 32px;
                            color: #fff;
                        }
                    }
                    .bg-white {
                        position: relative;
                        width: inherit;
                        height: inherit;
                        background: url("~/static/imgs/bg-white.png") no-repeat
                            center center;
                        background-position-y: -80px;
                        padding: 20px 54px 20px 20px;
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
                        }
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
                width: 80%;
            }
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(1080);
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
                    height: vw(600);
                    position: relative;
                    z-index: 4;
                    left: 50%;
                    top: vw(425);
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
            min-height: vw(800);
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
                &.h170-mb {
                    height: vw(170);
                }
                &.h310 {
                    height: vw(310);
                }
                &.h446 {
                    height: vw(446);
                }
                &.h270 {
                    height: vw(532);
                }
                &.h270-mb {
                    height: vw(410);
                }
                .left-box {
                    width: vw(150);
                    border-radius: vw(20) 0 0 vw(20);
                    font-size: vw(26);
                }
                .right-box {
                    width: vw(520);
                    border-radius: 0px vw(20) vw(20) 0px;
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
                        .top-box {
                            display: flex;
                            width: vw(520);
                            .left-box-m {
                                width: vw(210);
                                margin-right: vw(36);
                                padding-bottom: vw(10);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    background: $sub-color;
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
                                    }
                                }
                            }
                            .right-box-m {
                                width: vw(270);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    border-radius: 0px vw(20) 0px 0px;
                                    background: $sub-color;
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
                                    }
                                }
                            }
                        }
                        .bottom-box {
                            display: flex;
                            width: vw(520);
                            .left-box-m {
                                width: vw(210);
                                margin-right: vw(36);
                                .name-box {
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    background: $sub-color;
                                }
                                .item-box {
                                    @include displayCenter;
                                    margin-top: vw(20);
                                    img {
                                        margin-right: vw(20);
                                        margin-left: vw(50);
                                    }
                                    .w69 {
                                        width: vw(69);
                                    }
                                    > span {
                                        font-size: vw(13.84);
                                        font-weight: 300;
                                        line-height: vw(16);
                                    }
                                }
                            }
                            .right-box-m {
                                width: vw(270);
                                &.w100 {
                                    width: 100%;
                                }
                                .w100 {
                                    width: 100%;
                                }
                                .name-box {
                                    display: block;
                                    width: vw(270);
                                    height: vw(34.54);
                                    line-height: vw(34.54);
                                    font-size: vw(20);
                                    font-family: "SourceHanSansCN-Bold";
                                    font-weight: bold;
                                    text-align: center;
                                    border-radius: 0;
                                    background: $sub-color;
                                    &.w100 {
                                        width: 100%;
                                    }
                                }
                                > div {
                                    width: vw(270);
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
        .pannel4 {
            margin-top: vw(100);
            min-height: vw(1290);
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
                    padding: vw(20) vw(40);
                    width: 100%;
                    .name-btn {
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: 0px vw(30) vw(30) 0px;
                        padding: 0 vw(40);
                        font-size: vw(26);
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        color: #fff;
                        margin-top: vw(40);
                    }
                    .desc-txt {
                        margin-top: vw(30);
                        width: vw(670);
                        font-size: vw(26);
                        line-height: vw(46);
                        padding: 0;
                    }
                    .desc-card {
                        padding: 0;
                        margin-top: vw(30);
                        .grid-desc-card {
                            width: vw(180);
                            min-height: vw(322);
                            height: auto;
                            border-radius: 0;
                            text-align: center;
                            .bg-icon {
                                position: relative;
                                left: 50%;
                                transform: translateX(-50%);
                                width: vw(65);
                                height: vw(65);
                                i {
                                    font-size: vw(32);
                                }
                            }
                            .bg-white {
                                margin-top: vw(20);
                                background: transparent;
                                padding: 0;
                                .txt-name {
                                    font-size: vw(22);
                                    line-height: vw(32);
                                    margin-bottom: vw(10);
                                }
                                .desc-txt-box {
                                    // height: vw(200);
                                    // overflow-y: auto;
                                    // overflow-x: hidden;
                                    font-size: vw(22);
                                    line-height: vw(30);
                                }
                            }
                        }
                    }
                }
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
        .pannel4 {
            overflow-y: auto;
            > div {
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