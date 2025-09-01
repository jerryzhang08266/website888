<template>
    <div class="menu-box">
        <template v-if="sub_menu_layout=='vertical'">
            <div class="left-box">
                <div
                    v-for="(item,idx) in data_obj"
                    :key="idx"
                >
                    <div
                        class="item-title"
                        :class="[item.path?'cpoint':'',item.type=='horizontal'?'cpoint2':'']"
                        @click="jumpFn(item.path)"
                        @mouseover="oneLevel(item)"
                    >{{item.name}}</div>
                    <template v-if="item.type!='horizontal'">
                        <div
                            class="sub-item"
                            :class="cur_index ==  ''+idx+index?'active':''"
                            v-for="(subitem,index) in item.children"
                            :key="''+idx+index"
                            @click="selectItem(subitem,''+idx+index)"
                            @mouseover="()=>{cur_menu=subitem.children}"
                        >
                            {{subitem.name}}
                        </div>
                    </template>

                </div>
            </div>
            <div class="right-box">
                <div
                    :class="item.children.length>5?'flex2':'flex1'"
                    :key="idx"
                    v-for="(item,idx) in cur_menu"
                >
                    <div class="item-title">
                        <template v-if="item.path">
                            <nuxt-link
                                :to="item.path"
                                :class="item.path.indexOf('service')!=-1?'nobold':''"
                            >{{item.name}}</nuxt-link>
                        </template>
                        <template v-else>{{item.name}}</template>
                    </div>
                    <div
                        class="item-box"
                        :class="item.children.length>5?'flexwarp':''"
                    >
                        <template v-for="(subitem,index) in item.children">
                            <card-component
                                v-if="subitem.img_url"
                                :key="index"
                                :data_obj="subitem"
                                @click="jumpItem(subitem)"
                            ></card-component>
                            <div
                                v-else
                                class="item-txt"
                                :key="index"
                            >
                                <i
                                    v-if="subitem.iconfont"
                                    class="iconfont icon-i"
                                    :class="subitem.iconfont"
                                ></i>
                                <nuxt-link :to="subitem.path">{{subitem.name}}</nuxt-link>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="menu-items">
                <div
                    v-for="(item,idx) in data_obj"
                    :key="idx"
                >
                    <template v-if="item.children">
                        <div class="title-box">
                            <nuxt-link :to="item.path"> {{item.name}}</nuxt-link>
                        </div>
                        <div
                            v-for="(sunitem,index) in item.children"
                            :key="index"
                        >
                            <nuxt-link :to="sunitem.path"> {{sunitem.name}}</nuxt-link>
                        </div>
                    </template>
                    <template v-else>
                        <nuxt-link :to="item.path"> {{item.name}}</nuxt-link>
                    </template>
                </div>
            </div>
        </template>

    </div>
</template>
<script>
import cardComponent from "./card";
export default {
    name: "topMenu",
    components: { cardComponent },
    props: {
        data_obj: {
            type: Array,
            default: []
        },
        sub_menu_layout: {
            type: String,
            default: "horizontal"
        }
    },
    watch: {
        data_obj: {
            handler(newVal) {
                if (this.sub_menu_layout == "horizontal") {
                    this.cur_menu = newVal;
                } else {
                    // console.log(newVal)
                    if (
                        newVal.length &&
                        newVal[1].children &&
                        newVal[1].children.length
                    ) {
                        this.cur_menu = newVal.length
                            ? newVal[1].children[0].children
                            : [];
                        this.cur_index = "10";
                    } else {
                        this.cur_menu = [];
                        this.cur_index = "00";
                    }
                }

                // console.log(this.data_obj);
            },
            deep: true
        }
    },
    computed: {},
    methods: {
        selectItem(item, idx) {
            this.cur_menu = item.children;
            if (item.children && item.children.length) {
                this.cur_index = idx;
            }
            if (item.path) {
                this.$router.push(item.path);
            }
        },
        jumpItem(item) {
            this.$router.push(item.path);
        },
        jumpFn(path) {
            if (path) {
                this.$router.push(path);
            }
        },
        oneLevel(item) {
            if (item.type == "horizontal") {
                this.cur_menu = item.children;
            }
        }
    },
    mounted() {},
    data() {
        return {
            cur_menu: [],
            cur_index: "00"
        };
    }
};
</script>
<style lang="scss" scoped>
.menu-box {
    display: flex;
    background-color: #fff;
    .left-box {
        display: flex;
        width: 180px;
        flex-direction: column;
        padding-top: 10px;
        padding-right: 0;
        border-right: 1px solid #f0f0f0;
        > div {
            display: flex;
            min-width: 180px;
            flex-direction: column;
            > div {
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                padding: 0 20px;
            }
            .item-title {
                color: $font-high-color;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                &.cpoint {
                    cursor: pointer;
                    &:hover {
                        background-color: $sub-color;
                        color: $main-color;
                    }
                }
                &.cpoint2 {
                    &:hover {
                        background-color: $sub-color;
                        color: $main-color;
                    }
                }
            }
            .sub-item {
                color: $font-medium-color;
                cursor: pointer;
                &:hover {
                    background-color: $sub-color;
                    color: $main-color;
                }
            }
        }
    }
    .right-box {
        display: flex;
        width: calc(100% - 180px);
        height: 710px;
        overflow: auto;
        padding-bottom: 20px;
        > div {
            display: flex;
            flex-direction: column;
            padding-top: 10px;
            padding-left: 50px;
            .item-title {
                padding: 20px 0;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                font-size: 14px;
                color: $font-medium-color;
                a {
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                    &.nobold {
                        font-weight: normal;
                        font-family: "";
                        color: $font-medium-color;
                    }
                }
            }
            .item-box {
                display: flex;
                flex-direction: column;
                &.flexwarp {
                    flex-wrap: wrap;
                    flex-direction: row;
                    width: 350px;
                }
                .item-txt {
                    font-size: 14px;
                    font-weight: 500;
                    color: $font-main-color;
                    line-height: 26px;
                    .icon-i {
                        font-size: 14px;
                        margin-right: 5px;
                    }
                }
            }
          
        }
        .flex1 {
            flex: 1;
        }
        .flex2 {
            flex: 2;
            .card-box:nth-child(odd) {
                margin-right: 50px;
            }
        }
    }
    .menu-items {
        padding: 20px;
        height: auto;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        > div {
            width: 33.33%;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: $font-main-color;
            margin-bottom: 10px;
            .title-box {
                font-size: 16px;
                font-family: "SourceHanSansCN-Bold";
                font-weight: bold;
                color: $font-high-color;
                a {
                    font-family: "SourceHanSansCN-Bold";
                    font-weight: bold;
                }
            }
            > div {
                margin-bottom: 10px;
            }
        }
    }
}
@include pcMini {
    .menu-box{
        .right-box {
            height: 610px;
            padding-right: 20px;
        }
    }
}
@media (max-height: 1080px) {
  /* 在高度小于等于600px时应用的样式 */
  .menu-box{
        .right-box {
            height: 610px;
        }
    }
}
</style>

