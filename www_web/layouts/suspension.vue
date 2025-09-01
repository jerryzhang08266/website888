<template>
    <div
        class="suspension-box"
        v-show="isVisable"
    >
        <!-- 客服 -->
        <a
            target="_blank"
            href="https://tb.53kf.com/code/client/10183367/1"
        >
            <span class="sidebar-i">
                <i class="iconfont icon-msg"></i>
            </span>
        </a>
        <!-- 电话 -->
        <span
            class="sidebar-i"
            @click="scrollBottom"
        >
            <i class="iconfont icon-phone"></i>
        </span>
        <!-- 返回顶部 -->
        <span
            class="sidebar-i"
            @click="scrollTop"
        >
            <i class="iconfont icon-top-arrow"></i>
        </span>

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "suspension",
    components: {},
    computed: {
        ...mapState(["deviceSize"])
    },
    mounted() {
        window.addEventListener("scroll", this.windowScrollListener);
    },
    methods: {
        scrollBottom() {
            document.documentElement.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });
        },
        scrollTop() {
            document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
        },
        windowScrollListener() {
            //获取操作元素最顶端到页面顶端的垂直距离
            var scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(document.documentElement.scrollHeight,scrollTop);
            let val = 100; //大于val时显示元素
            if (scrollTop >= val) {
                this.isVisable = true;
            } else {
                this.isVisable = false;
            }
        }
    },
    data() {
        return {
            isVisable: false
        };
    }
};
</script>
<style lang="scss" scoped>
.suspension-box {
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    position: fixed;
    z-index: 9999;
    .sidebar-i {
        height: 50px;
        width: 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        position: relative;
        box-shadow: -3px 5px 20px 0px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        margin-bottom: 20px;
        i {
            font-size: 26px;
            color: $font-high-color;
        }
    }
}
@include notPc {
    .suspension-box {
        right: vw(20);
        .sidebar-i {
            height: vw(50);
            width: vw(50);
            border-radius: vw(25);
            margin-bottom: vw(20);
            i {
                font-size: vw(26);
            }
        }
    }
}
</style>