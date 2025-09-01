<!--
 * @Description: 下载中心
 * @FilePath: pages\download\index.vue
-->
<template>
    <div class="container">
        <client-only>
            <section class="pannel1">
                <div class="round1"></div>
                <div class="round2"></div>
                <div class="round3"></div>
                <div class="round4"></div>
                <div class="round5"></div>
                <div class="content-box">
                    <h3>下载中心</h3>
                    <p v-if="deviceSize=='large'">您填写相关信息后，<br />可以选择多个需要下载的资料一并提交，<br /> 即可免费获取 </p>
                    <p v-else>您填写相关信息后，可以选择多个需要下载的资料一并提交， 即可免费获取 </p>
                    <!-- <div>
                    <span>硬件产品技术资料</span>
                    <span>行业实践案例</span>
                    <span>商业IoT/商业场景感知解决方案</span>
                </div> -->
                </div>
            </section>
            <section class="pannel2">
                <el-form
                    ref="ruleForm"
                    label-position="top"
                    label-width="80px"
                    :model="form_obj"
                    :rules="rules"
                    inline
                >
                    <el-form-item
                        label="姓名"
                        inline
                        class="w32"
                    >
                        <el-input
                            v-model="form_obj.name"
                            placeholder="输入您的姓名"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="公司名称"
                        inline
                        class="w32"
                        prop="company"
                    >
                        <el-input
                            v-model="form_obj.company"
                            placeholder="输入您的公司名称"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="微信号"
                        inline
                        class="w32"
                    >
                        <el-input
                            v-model="form_obj.job"
                            placeholder="输入您的微信号"
                        ></el-input>
                    </el-form-item>

                    <el-form-item
                        label="手机号"
                        inline
                        class="w32"
                        prop="tel"
                    >
                        <el-input
                            v-model="form_obj.tel"
                            placeholder="输入您的手机号并获取验证码"
                        ></el-input>

                    </el-form-item>

                    <el-form-item
                        label="图形验证码"
                        inline
                        class="w32"
                        prop="imgcode"
                    >
                        <el-input
                            v-model="form_obj.imgcode"
                            placeholder="请输入图形验证码"
                        ></el-input>
                        <span
                            class="get-code random"
                            @click="getCode()"
                        >
                            <img
                                @click.stop="getImgCode()"
                                :src="'/api/article/createImage?='+randomNum"
                                alt="图形验证码"
                            >
                        </span>
                    </el-form-item>

                    <el-form-item
                        label="验证码"
                        inline
                        class="w32"
                        prop="code"
                    >
                        <el-input
                            v-model="form_obj.code"
                            placeholder="输入您收到的验证码"
                        ></el-input>

                        <el-button
                            @click="getCode()"
                            class="get-code"
                            size="small"
                            type="success"
                        >{{codeTxt}}</el-button>
                    </el-form-item>
                    <el-form-item
                        label="邮件"
                        class="w100"
                        prop="email"
                    >
                        <template slot="label">
                            <span class="label-name">邮件</span>
                            <span class="tip-box">*请您务必填写正确的邮箱地址，我们将通过邮件向您发送资料下载链接</span>
                        </template>
                        <el-input
                            v-model="form_obj.email"
                            placeholder="wiwide@email.com"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label=""
                        class="w100"
                    >
                        <el-tabs
                            v-model="activeName"
                            type="card"
                            stretch
                        >
                            <el-tab-pane
                                :label="item.label"
                                :name="item.name"
                                v-for="(item,idx) in tabs"
                                :key="idx"
                            >
                                <!-- 有一级标题的 -->
                                <template v-if="item.children[0].title">
                                    <div
                                        class="div-box"
                                        :class="subitem.children[0].title?'block':''"
                                        v-for="(subitem,index) in item.children"
                                        :key="''+idx+index"
                                    >
                                        <h5>{{subitem.title}}</h5>
                                        <!-- 有二级标题的 -->
                                        <template v-if="subitem.children[0].title">
                                            <div
                                                class="in-box"
                                                v-for="(subitem2,index2) in subitem.children"
                                                :key="''+idx+index+index2"
                                            >
                                                <h6>{{subitem2.title}}</h6>
                                                <span
                                                    class="span-box"
                                                    v-for="(subitem3,index3) in subitem2.children"
                                                    :key="''+idx+index+index2+index3"
                                                >
                                                    <el-checkbox v-model="subitem3.isCheck"></el-checkbox>
                                                    {{subitem3.name}}
                                                </span>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <span
                                                class="span-box"
                                                v-for="(subitem2,index2) in subitem.children"
                                                :key="''+idx+index+index2"
                                            >
                                                <el-checkbox v-model="subitem2.isCheck"></el-checkbox>
                                                {{subitem2.name}}
                                            </span>
                                        </template>

                                    </div>

                                </template>
                                <!-- 无标题的 -->
                                <template v-else>
                                    <span
                                        class="span-box"
                                        v-for="(subitem,index) in item.children"
                                        :key="''+idx+index"
                                    >
                                        <el-checkbox v-model="subitem.isCheck"></el-checkbox>
                                        {{subitem.name}}
                                    </span>
                                </template>
                            </el-tab-pane>
                        </el-tabs>
                    </el-form-item>

                </el-form>
                <div
                    class="submit-btn"
                    @click="submitFn"
                >{{loading?'提交中...':'提交'}}</div>
            </section>
        </client-only>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Api from "~/plugins/api";
import Toast from "~/components/toast/index";
export default {
    components: {},
    computed: {
        ...mapState(["deviceSize"])
    },
    async asyncData({ params }) {
        // console.log("params", params);
    },
    mounted() {
        this.getImgCode();
    },
    beforeDestroy() {
        console.log("销毁");
        if (document.getElementsByClassName("toast").length) {
            document.body.removeChild(
                document.getElementsByClassName("toast")[0]
            );
        }
    },
    methods: {
        postData(param) {
            if (this.loading) {
                return false;
            }
            this.loading = true;
            Api.download.post(param).then((res) => {
                this.loading = false;
                this.getImgCode();
                // console.log(res);
                if (res.code == 1) {
                    Toast({
                        text: "提交成功！",
                        subtext:
                            "请稍后登录您填写的邮箱，<br/>通过邮件中的链接下载相关资料。",
                        duration: 500000,
                        isClose: false,
                        isIcon: true,
                        isOk: true
                    });
                } else {
                    Toast({
                        text: res.msg
                    });
                }
            });
        },
        getCode() {
            if (this.timer) {
                return false;
            }
            this.$refs["ruleForm"].validateField("tel", (valid) => {
                if (!valid) {
                    this.$refs["ruleForm"].validateField("imgcode", (valid) => {
                        if (!valid) {
                            this.timer = true;
                            Api.getverify
                                .post({
                                    tel: this.form_obj.tel,
                                    captcha: this.form_obj.imgcode
                                })
                                .then((res) => {
                                    // console.log(res);
                                    this.getImgCode();
                                    if (res.code == 1) {
                                        let num = 60;
                                        this.timer = setInterval(() => {
                                            --num;
                                            if (num > 0) {
                                                this.codeTxt = num + "S";
                                            } else {
                                                clearInterval(this.timer);
                                                this.timer = false;
                                                this.codeTxt = "发送验证码";
                                            }
                                        }, 1000);
                                    } else {
                                        this.timer = false;
                                        
                                        Toast({
                                            text: res.msg
                                        });
                                    }
                                });
                        }
                    });
                }
            });
        },
        submitFn() {
            let iot = [],
                aiot = [],
                iotsolution = [],
                aiotsolution = [],
                industry = [];
            let forFn = (data, type) => {
                for (let j = 0; j < data.length; j++) {
                    const item = data[j];
                    if (item.hasOwnProperty("isCheck") && item.isCheck) {
                        switch (type) {
                            case "iot":
                                iot.push(item.name);
                                break;
                            case "aiot":
                                aiot.push(item.name);
                                break;
                            case "iotsolution":
                                iotsolution.push(item.name);
                                break;
                            case "aiotsolution":
                                aiotsolution.push(item.name);
                                break;
                            case "industry":
                                industry.push(item.name);
                                break;
                            default:
                                break;
                        }
                    }
                    if (item.children) {
                        forFn(item.children, type);
                    }
                }
            };
            this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    for (let i = 0; i < this.tabs.length; i++) {
                        const element = this.tabs[i];
                        forFn(element.children, element.type);
                    }
                    if (
                        !iot.length &&
                        !aiot.length &&
                        !iotsolution.length &&
                        !aiotsolution.length &&
                        !industry.length
                    ) {
                        Toast({
                            text: "请选择需要下载的选项！"
                        });
                        return false;
                    }
                    let params = {
                        name: this.form_obj.name,
                        tel: this.form_obj.tel,
                        verify: this.form_obj.code,
                        company: this.form_obj.company,
                        job: this.form_obj.job,
                        email: this.form_obj.email,
                        info: {
                            iot,
                            aiot,
                            iotsolution,
                            aiotsolution,
                            industry
                        }
                    };
                    // console.log(params);
                    this.postData(params);
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        getImgCode() {
            this.randomNum = Math.random();
            // Api.getImgverify.get().then((res) => {
            //     this.imgCode = res.all.data;
            // });
        }
    },
    data() {
        return {
            loading: false,
            codeTxt: "发送验证码",
            randomNum: 666,
            imgCode: "",
            form_obj: {
                name: "",
                company: "",
                job: "",
                imgcode: "",
                tel: "",
                code: "",
                email: ""
            },
            rules: {
                company: [
                    {
                        required: true,
                        message: "请输入您的公司名称",
                        trigger: "blur"
                    }
                ],

                tel: [
                    {
                        required: true,
                        message: "请输入您的手机号",
                        trigger: "blur"
                    },
                    {
                        pattern: /^1[3456789]\d{9}$/,
                        message: "请输入正确的手机号格式",
                        trigger: "blur"
                    }
                ],
                code: [
                    {
                        required: true,
                        message: "请输入您收到的验证码",
                        trigger: "blur"
                    }
                ],
                imgcode: [
                    {
                        required: true,
                        message: "请您输入图形验证码，然后去发送验证码",
                        trigger: "blur"
                    }
                ],

                email: [
                    {
                        required: true,
                        message: "请输入您的邮箱地址",
                        trigger: "blur"
                    },
                    {
                        pattern:
                            /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/,
                        message: "请输入正确的邮箱格式",
                        trigger: "blur"
                    }
                ]
            },
            activeName: "third",
            tabs: [
                // {
                //     name: "first",
                //     label: "商业IoT硬件产品",
                //     type: "iot",
                //     children: [
                //         {
                //             title: "无线覆盖",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "WiSmart 6",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "WiSmart 3e",
                //                     id: ""
                //                 }
                //             ]
                //         },
                //         {
                //             title: "云宽带",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "WiRouter Mini",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "WiRouter Pro",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "边缘管理网关",
                //                     id: ""
                //                 }
                //             ]
                //         },
                //         {
                //             title: "智能网关",
                //             children: [
                //                 {
                //                     title: "T系列",
                //                     children: [
                //                         {
                //                             isCheck: false,
                //                             name: "WiMaster T",
                //                             id: ""
                //                         },
                //                         {
                //                             isCheck: false,
                //                             name: "WiMaster T3",
                //                             id: ""
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     title: "G系列",
                //                     children: [
                //                         {
                //                             isCheck: false,
                //                             name: "WiMaster G5005",
                //                             id: ""
                //                         }
                //                     ]
                //                 },
                //                 {
                //                     title: "X系列",
                //                     children: [
                //                         {
                //                             isCheck: false,
                //                             name: "WiMaster X3s",
                //                             id: ""
                //                         },
                //                         {
                //                             isCheck: false,
                //                             name: "WiMaster X3s-G",
                //                             id: ""
                //                         }
                //                     ]
                //                 }
                //             ]
                //         },
                //         {
                //             title: "智能交换机",
                //             children: [
                //                 // {
                //                 //     title: "全光网管",
                //                 //     children: [
                //                 //         {
                //                 //             isCheck: false,
                //                 //             name: "WiSwitch 7062",
                //                 //             id: ""
                //                 //         }
                //                 //     ]
                //                 // },
                //                 {
                //                     title: "千兆网管",
                //                     children: [
                //                         // {
                //                         //     isCheck: false,
                //                         //     name: "WiSwitch S3028",
                //                         //     id: ""
                //                         // },
                //                         {
                //                             isCheck: false,
                //                             name: "WiSwitch S2404P",
                //                             id: ""
                //                         },
                //                         {
                //                             isCheck: false,
                //                             name: "WiSwitch S802P",
                //                             id: ""
                //                         },
                //                         // {
                //                         //     isCheck: false,
                //                         //     name: "WiSwitch S2400",
                //                         //     id: ""
                //                         // }
                //                     ]
                //                 },
                //                 // {
                //                 //     title: "百兆非网管",
                //                 //     children: [
                //                 //         {
                //                 //             isCheck: false,
                //                 //             name: "WiSwitch S2402P-F",
                //                 //             id: ""
                //                 //         },
                //                 //         {
                //                 //             isCheck: false,
                //                 //             name: "WiSwitch S802P-F",
                //                 //             id: ""
                //                 //         }
                //                 //     ]
                //                 // }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     name: "second",
                //     label: "商业场景感知硬件产品",
                //     type: "aiot",
                //     children: [
                //         {
                //             title: "客流传感器",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "WiMatrix",
                //                     id: ""
                //                 }
                //             ]
                //         },
                //         {
                //             title: "客流摄像机",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "WiSight 2 Mini客流一体机",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "WiPano Mini全景客流一体机",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "筒形客流一体机",
                //                     id: ""
                //                 }
                //             ]
                //         },
                //         {
                //             title: "巡店摄像机",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "WiSight海螺摄像机",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "WiSight半球摄像机",
                //                     id: ""
                //                 },
                //                 {
                //                     isCheck: false,
                //                     name: "WiSight筒形摄像机",
                //                     id: ""
                //                 }
                //             ]
                //         },
                //         {
                //             title: "视频网关",
                //             children: [
                //                 {
                //                     isCheck: false,
                //                     name: "SensorHub",
                //                     id: ""
                //                 }
                //             ]
                //         }
                //     ]
                // },
                {
                    name: "third",
                    label: "商业IoT解决方案",
                    type: "iotsolution",
                    children: [
                        {
                            isCheck: false,
                            name: "全时段业务在线 ",
                            id: ""
                        },
                        {
                            isCheck: false,
                            name: "宽带及云宽带 ",
                            id: ""
                        },
                        {
                            isCheck: false,
                            name: "网络安全合规",
                            id: ""
                        }
                    ]
                },
                {
                    name: "fourth",
                    label: "商业场景感知解决方案",
                    type: "aiotsolution",
                    children: [
                        {
                            isCheck: false,
                            name: "购物中心客流 ",
                            id: ""
                        },
                        {
                            isCheck: false,
                            name: "连锁门店客流 ",
                            id: ""
                        },
                        {
                            isCheck: false,
                            name: "连锁门店云监控",
                            id: ""
                        }
                    ]
                }
                // {
                //     name: "fifth",
                //     label: "行业实践案例",
                //     type: "industry",
                //     children: [
                //         {
                //             isCheck: false,
                //             name: "购物中心",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "智慧商超",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "智慧药店",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "珠宝行业",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "鞋服行业",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "茶饮行业",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "餐饮行业",
                //             id: ""
                //         },
                //         {
                //             isCheck: false,
                //             name: "金融行业",
                //             id: ""
                //         }
                //     ]
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
        height: 558px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        .round1 {
            width: 28.22%;
            padding-top: 28.22%;
            border-radius: 50%;
            transform: rotate(45deg);
            background: linear-gradient(
                163deg,
                rgba(114, 220, 96, 0.35) 9%,
                rgba(114, 220, 96, 0) 45%
            );
            position: absolute;
            left: 0;
            bottom: -55%;
            z-index: 1;
        }
        .round2 {
            width: 5.6%;
            padding-top: 5.6%;
            border-radius: 50%;
            background: linear-gradient(207deg, #9bf763 -2%, #26ab5b 83%);
            opacity: 0.7;
            position: absolute;
            bottom: 95px;
            left: 20%;
        }
        .round3 {
            width: 39%;
            padding-top: 39%;
            border-radius: 50%;
            transform: rotate(128.23deg);
            opacity: 0.7;
            background: linear-gradient(
                180deg,
                rgba(114, 220, 96, 0.25) 0%,
                rgba(114, 220, 96, 0) 70%
            );
            position: absolute;
            left: 35%;
            top: -70%;
            z-index: 3;
            backdrop-filter: blur(24px);
        }
        .round4 {
            width: 12%;
            padding-top: 12%;
            border-radius: 50%;
            background: linear-gradient(207deg, #9bf763 0%, #26ab5b 83%);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 22%;
            z-index: 2;
            opacity: 0.7;
        }
        .round5 {
            width: 28%;
            padding-top: 28%;
            border-radius: 50%;
            background: linear-gradient(
                134deg,
                rgba(114, 220, 96, 0.35) 15%,
                rgba(114, 220, 96, 0) 81%
            );
            position: absolute;
            top: 215px;
            right: 70px;
            z-index: 3;
            backdrop-filter: blur(24px);
        }
        .content-box {
            position: absolute;
            z-index: 9;
            width: 100%;
            height: inherit;
            @include displayCenter;
            justify-content: normal;
            flex-direction: column;
            text-align: center;
            padding-top: 130px;
            h3 {
                font-size: 42px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                line-height: 42px;
                color: $main-color;
            }
            p {
                padding: 30px 0 40px 0;
                font-size: 24px;
                font-weight: normal;
                line-height: 32px;
                color: $font-high-color;
            }
            > div {
                text-align: center;
                span {
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border-radius: 10px;
                    font-size: 14px;
                    color: $font-high-color;
                    background: $sub-color;
                    padding: 0 20px;
                    margin-right: 10px;
                }
            }
        }
    }
    .pannel2 {
        width: 63.54%;
        margin: 0 auto;
        padding-top: 90px;
        /deep/ {
            .el-form--label-top .el-form-item__label,
            .el-form-item__label .label-name {
                font-size: 16px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                color: $font-high-color;
                .tip-box {
                    color: #ec4339;
                    padding-left: 10px;
                    font-weight: normal;
                }
            }
            .el-input.is-active .el-input__inner,
            .el-input__inner:focus {
                border-color: $main-color;
            }
            .el-form--inline .el-form-item {
                width: 32%;
                &.w32 {
                    width: 32%;
                }
                &.w48 {
                    width: 48%;
                }
                &.w100 {
                    width: calc(96% + 16px);
                }
                .el-input__inner {
                    height: 60px;
                    line-height: 60px;
                    border-radius: 6px;
                }
            }
            .get-code {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                cursor: pointer;
                &.el-button--success {
                    background-color: $main-color;
                }
            }
            .el-tabs {
                .el-tabs__content {
                    padding-top: 25px;
                }
                .el-tabs__item:focus.is-active.is-focus:not(:active) {
                    box-shadow: none !important;
                }
                .el-tabs__item {
                    height: 60px;
                    line-height: 60px;
                    color: $font-main-color;
                    font-size: 16px;
                    &:hover {
                        color: $font-high-color;
                    }
                    &.is-active {
                        font-family: "SourceHanSansCN-Bold";
                        font-weight: bold;
                        color: $font-high-color;
                        border-bottom: 1px solid #e4e7ed !important;
                    }
                }
                .div-box {
                    display: inline-block;
                    &.block {
                        display: block;
                    }
                    h5 {
                        font-size: 16px;
                        color: $font-high-color;
                    }
                    .in-box {
                        display: inline-block;
                        h6 {
                            font-size: 15px;
                            color: $font-main-color;
                        }
                    }
                }
                .span-box {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 20px;
                    background: $sub-color;
                    height: 50px;
                    border-radius: 6px;
                    font-size: 14px;
                    margin-right: 20px;
                    color: $font-main-color;
                    .el-checkbox {
                        margin-right: 10px;
                        .el-checkbox__inner {
                            border-color: $main-color;
                        }
                        .el-checkbox__input.is-checked .el-checkbox__inner {
                            background-color: $main-color;
                        }
                    }
                }
            }
        }
        .submit-btn {
            margin-top: 90px;
            height: 79px;
            line-height: 79px;
            border-radius: 6px;
            text-align: center;
            font-size: 16px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            color: #fff;
            background: $main-color;
            cursor: pointer;
        }
    }
}
@include notPc {
    .container {
        .pannel1 {
            height: vw(400);
            overflow: hidden;
            .round1 {
                bottom: vw(-150);
                z-index: 99;
            }
            .round2 {
                z-index: 99;
                bottom: vw(20);
            }
            .round3 {
                top: vw(-120);
            }
            .round4 {
                top: vw(140);
            }
            .round5 {
                width: 38%;
                padding-top: 38%;
                top: vw(150);
                right: vw(-20);
            }
            .content-box {
                padding-top: vw(80);
                h3 {
                    font-size: vw(42);
                    line-height: vw(42);
                }
                p {
                    margin: vw(30) 0 vw(40) 0;
                    font-size: vw(26);
                    font-weight: normal;
                    line-height: vw(36);
                    padding: 0 vw(100);
                }
                > div {
                    span {
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(10);
                        font-size: vw(20);
                        padding: 0 vw(20);
                        margin-right: vw(10);
                        margin-bottom: vw(20);
                    }
                }
            }
        }
        .pannel2 {
            width: 100%;
            padding: vw(50);
            /deep/ {
                .el-form--label-top .el-form-item__label,
                .el-form-item__label .label-name {
                    font-size: vw(24);
                    padding: 0;
                    margin-bottom: vw(10);
                    line-height: vw(28);
                    .tip-box {
                        padding-left: vw(10);
                        line-height: vw(28);
                    }
                }
                .el-form--inline .el-form-item {
                    width: vw(300);
                    margin-right: vw(20);
                    margin-bottom: vw(20);
                    &.is-error {
                        margin-bottom: vw(40);
                    }
                    &.w32 {
                        width: 100%;
                    }
                    &.w48 {
                        width: 100%;
                    }
                    &.w100 {
                        width: 100%;
                    }
                    .el-input__inner {
                        height: vw(60);
                        line-height: vw(60);
                        border-radius: vw(6);
                    }
                    .get-code {
                        // top: vw(12);
                        top: 50%;
                        transform: translateY(-50%);
                        right: vw(6);
                        height: vw(50);
                        max-height: 40px;
                        line-height: vw(50);
                        line-height: 40px;
                        border-radius: vw(6);
                        padding: 0 vw(10);
                        &.random {
                            img {
                                height: vw(50);
                                max-height: 40px;
                            }
                        }
                    }
                }
                .el-tabs {
                    .el-tabs__header .el-tabs__nav {
                        transform: translateX(0);
                        width: 100%;
                        white-space: nowrap;
                        overflow-x: auto;
                        &::-webkit-scrollbar {
                            display: none;
                        }
                    }
                    .el-tabs__nav-next,
                    .el-tabs__nav-prev {
                        line-height: vw(60);
                        font-size: vw(20);
                        display: none;
                    }
                    .el-tabs__content {
                        padding-top: vw(25);
                    }
                    .el-tabs__item:focus.is-active.is-focus:not(:active) {
                        box-shadow: none !important;
                    }
                    .el-tabs__item {
                        height: vw(60);
                        line-height: vw(60);
                        font-size: vw(24);
                    }
                    .div-box {
                        h5 {
                            font-size: vw(22);
                        }
                        .in-box {
                            h6 {
                                font-size: vw(20);
                            }
                        }
                    }
                    .span-box {
                        padding: 0 vw(20);
                        background: $sub-color;
                        height: vw(60);
                        border-radius: vw(10);
                        font-size: 14px;
                        margin-right: vw(20);
                        margin-bottom: vw(15);
                        color: $font-main-color;
                        .el-checkbox {
                            margin-right: vw(10);
                            .el-checkbox__inner {
                                border-color: $main-color;
                            }
                            .el-checkbox__input.is-checked .el-checkbox__inner {
                                background-color: $main-color;
                            }
                        }
                    }
                }
            }
            .submit-btn {
                margin-top: vw(80);
                height: vw(80);
                line-height: vw(80);
                border-radius: vw(10);
                font-size: vw(28);
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