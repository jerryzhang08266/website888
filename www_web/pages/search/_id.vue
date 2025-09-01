<!--
 * @Description: 搜索页面
 * @FilePath: pages\search\index.vue
-->
<template>
    <div class="container">
        <section class="pannel1">
            <h3>搜索结果</h3>
            <div class="input-box">
                <el-input
                    v-model="keyword"
                    placeholder="请输入关键字"
                ></el-input>
                <span
                    class="start-btn"
                    @click="getData(1)"
                >
                    <i class="iconfont icon-search"></i>
                </span>
            </div>
        </section>
        <section class="pannel2">
            <template v-if="list.length">
                <div
                    class="item-box"
                    :class="(idx+1)%3==2?'medium':''"
                    v-for="(item,idx) in list"
                    :key="idx"
                    @click="jumpFn(item)"
                >
                    <h4>
                        {{item.title}}
                    </h4>
                    <p>{{item.create_time}}</p>
                </div>
            </template>
            <p v-else>暂无内容</p>
        </section>

        <!--   -->
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
        // console.log("params77", params);
        return {
            keyword: params.id
        };
    },
    created() {
        this.getData();
    },
    mounted() {},
    methods: {
        getData(reset) {
            if (reset) {
                this.page = 1;
            }
            Api.keyword
                .get({
                    page_no: this.page,
                    page_size: this.pageSize,
                    keyword: this.keyword,
                    sort: "search"
                })
                .then((res) => {
                    // console.log(res);
                    if (res.code == 1) {
                        this.list = res.data.lists;
                        this.total = res.data.count * 1;
                    } else {
                        Toast({
                            text: res.code
                        });
                    }
                });
        },
        handleCurrentChange(val) {
            this.page = val;
            this.getData();
        },
        jumpFn(item) {
            // window.location.href = item.author;
            window.open(item.author, "_blank");
        }
    },
    data() {
        return {
            keyword: "",
            list: [],
            page: 1,
            pageSize: 15,
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
        height: 370px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        background: url("~/static/imgs/search-bg.png") no-repeat center center;
        h3 {
            font-size: 42px;
            font-family: "SourceHanSansCN-Bold";
            font-weight: bold;
            line-height: 42px;
            color: $main-color;
            padding: 130px 0 40px 0;
            display: block;
            text-align: center;
        }
        .input-box {
            display: block;
            margin: 0 auto;
            width: 450px;
            height: 48px;
            border-radius: 48px;
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            /deep/ {
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
            }
            .start-btn {
                float: right;
                width: 100px;
                height: 48px;
                line-height: 48px;
                border-radius: 48px;
                text-align: center;
                color: #fff;
                background: $main-color;
                cursor: pointer;
                i {
                    font-size: 25px;
                    color: #fff;
                }
            }
        }
    }
    .pannel2 {
        width: 63.54%;
        margin: 0 auto;
        padding-top: 100px;
        .item-box {
            float: left;
            display: inline-block;
            width: 31.9%;
            height: 124px;
            border-radius: 10px;
            border: 1px solid #d3dcd4;
            margin-bottom: 2%;
            padding: 20px 30px;
            cursor: pointer;
            &.medium {
                margin-left: 2%;
                margin-right: 2%;
            }
            h4 {
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
            p {
                font-size: 14px;
                font-weight: normal;
                line-height: 28px;
                color: #595959;
                text-align: left;
            }
        }
        p {
            line-height: 50px;
            text-align: center;
            font-size: 20px;
            color: $font-high-color;
        }
    }
    .page-box {
        text-align: center;
        margin-top: 10px;
        clear: both;
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
            height: vw(370);
            overflow: hidden;
            background-size: 250%;
            h3 {
                font-size: vw(42);
                line-height: vw(42);
                padding: vw(130) 0 vw(40) 0;
            }
            .input-box {
                display: block;
                margin: 0 auto;
                width: vw(450);
                height: vw(60);
                border-radius: vw(60);
                box-shadow: 0px 0px vw(20) 0px rgba(0, 0, 0, 0.1);
                background-color: #fff;
                /deep/ {
                    .el-input {
                        display: inline-block;
                        width: vw(200);
                        padding-left: vw(20);
                        input {
                            border: none;
                            height: vw(60);
                            line-height: vw(60);
                        }
                    }
                }
                .start-btn {
                    float: right;
                    width: vw(100);
                    height: vw(60);
                    line-height: vw(60);
                    border-radius: vw(60);
                    text-align: center;
                    color: #fff;
                    background: $main-color;
                    cursor: pointer;
                    i {
                        font-size: vw(25);
                        color: #fff;
                    }
                }
            }
        }
        .pannel2 {
            width: 100%;
            padding: vw(40) vw(40);
            .item-box {
                width: 100%;
                min-height: vw(80);
                height: auto;
                padding: vw(20) vw(30);
                border-radius: vw(10);
                &.medium {
                    margin-left: 0;
                    margin-right: 0;
                }
                h4 {
                    font-size: vw(24);
                    line-height: vw(30);
                }
                p {
                    font-size: vw(20);
                    line-height: vw(26);
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