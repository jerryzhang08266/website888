<template>
    <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        :modal="false"
        :show-close="false"
        :wrapperClosable="false"
        size="80%"
        custom-class="menu-drawer"
    >
        <el-menu
            default-active="0"
            text-color="#595959"
            active-text-color="#595959"
            :popper-append-to-body="true"
        >
            <template v-for="(item,idx) in navs">
                <!-- 一级 -->
                <el-menu-item
                    :key="idx"
                    :index="idx+''"
                    v-if="!item.children || item.children.length==0"
                    @click.native="JumpItem(item)"
                >
                    {{item.name}}
                </el-menu-item>
                <el-submenu
                    v-else
                    :key="idx"
                    :index="idx+''"
                >
                    <template slot="title">
                        {{item.name}}
                    </template>
                    <template v-for="(subitem, index) in item.children">
                        <!-- 二级 -->
                        <el-menu-item
                            :key="idx +''+index"
                            :index="idx +''+index"
                            v-if="!subitem.children || subitem.children.length==0"
                            @click.native="JumpItem(subitem)"
                        >
                            {{ subitem.name }}
                        </el-menu-item>
                        <el-submenu
                            v-else
                            :key="idx +''+index"
                            :index="idx +''+index"
                        >
                            <template slot="title">
                                {{subitem.name}}
                            </template>
                            <template v-for="(subitem3, index3) in subitem.children">
                                <!-- 三级 -->
                                <el-menu-item
                                    :key="idx +''+index+index3"
                                    :index="idx +''+index+index3"
                                    v-if="!subitem3.children || subitem3.children.length==0"
                                    @click.native="JumpItem(subitem3)"
                                >
                                    {{ subitem3.name }}
                                </el-menu-item>
                                <el-submenu
                                    v-else
                                    :key="idx +''+index+index3"
                                    :index="idx +''+index+index3"
                                >
                                    <template slot="title">
                                        {{subitem3.name}}
                                    </template>
                                    <!-- 四级 -->
                                    <template v-for="(subitem4, index4) in subitem3.children">
                                        <el-menu-item
                                            :key="idx +''+index+index3+index4"
                                            :index="idx +''+index+index3+index4"
                                            v-if="!subitem4.children || subitem4.children.length==0"
                                            @click.native="JumpItem(subitem4)"
                                        >
                                            {{ subitem4.name }}
                                        </el-menu-item>
                                        <el-submenu
                                            v-else
                                            :key="idx +''+index+index3+index4"
                                            :index="idx +''+index+index3+index4"
                                        >
                                            <template slot="title">
                                                {{subitem4.name}}
                                            </template>
                                            <!-- 五级 -->
                                            <template v-for="(subitem5, index5) in subitem4.children">
                                                <el-menu-item
                                                    :key="idx +''+index+index3+index4+index5"
                                                    :index="idx +''+index+index3+index4+index5"
                                                    v-if="!subitem5.children || subitem5.children.length==0"
                                                    @click.native="JumpItem(subitem5)"
                                                >
                                                    {{ subitem5.name }}
                                                </el-menu-item>
                                            </template>
                                        </el-submenu>

                                    </template>
                                </el-submenu>
                            </template>
                        </el-submenu>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </el-drawer>
</template>
<script>
export default {
    name: "MbMenu",
    components: {},
    props: {
        drawer: {
            type: Boolean,
            default: false
        },
        navs: {
            type: Array,
            default: []
        }
    },
    watch: {},
    computed: {},
    methods: {
        JumpItem(item) {
            console.log(item)
            if (item.path) {
                // 如果有的页面需要带参数，从item里面取即可
                this.$router.push(item.path);
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
.el-drawer__wrapper {
    top: 90px;
}
</style>
<style lang="scss">
.menu-drawer {
    box-shadow: none;
    .el-drawer__header {
        display: none;
    }
    .el-menu-item,
    .el-submenu__title {
        height: 50px;
        line-height: 50px;
        font-size: vw(32);
        border-bottom: 1px solid #dedede;
        color:$font-high-color!important;
    }
    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-submenu__title:hover {
        background-color: #fff;
    }
    .el-submenu.is-active .el-submenu__title {
        border-bottom: 1px solid #dedede;
    }
}
</style>
