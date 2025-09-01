<!-- toast.vue -->
<template>
    <div
        class="toast"
        :class="type ? `toast-${type}` : ''"
    >
        <i
            v-if="isClose"
            class="close-btn"
            @click="closeFn"
        >+</i>
        <p class="text">
            <i
                v-if="isIcon"
                class="iconfont icon-jichu01"
            ></i>
            {{ text }}
        </p>
        <p
            class="subtext"
            v-if="subtext"
            v-html="subtext"
        ></p>
        <span
            class="ok-box"
            v-if="isOk"
            @click="closeFn"
        >确认</span>
    </div>
</template>
<script>
export default {
    name: "Main",
    data() {
        return {
            text: "",
            subtext: "",
            duration: 2000,
            type: "",
            isClose: false,
            isIcon: false,
            isOk: false
        };
    },
    methods: {
        closeFn() {
            this.$el.parentNode.removeChild(this.$el);
        }
    },
    mounted() {
        setTimeout(() => {
            // 3s 后通过父级移除子元素的方式来移除该组件
            this.$el.parentNode.removeChild(this.$el);
        }, this.duration);
    }
};
</script>
<style lang="scss" scoped>
/* 全局样式变量 */
@import "~assets/scss/variables.scss";
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    z-index: 9999;
    padding: 12px 22px;
    border-radius: 20px;
    background: rgba(0, 29, 23, 0.9);
    width: 370px;
    .close-btn {
        position: absolute;
        right: 6px;
        top: 2px;
        font-size: 20px;
        transform: rotate(45deg);
        cursor: pointer;
    }
    .text {
        font-size: 18px;
        text-align: center;
    }
    .subtext {
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
    }
    &-error {
        background: rgba(255, 0, 0, 0.5);
    }
    &-success {
        background: rgba(0, 255, 0, 0.5);
    }
    .ok-box {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        width: 108px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
        background: #45B871;
        font-size: 14px;
        margin-bottom: 10px;
        cursor: pointer;
    }
}
/*********************  pad **************************/
@media screen and (min-width: 768px) and (max-width: 1199px) {
    .toast {
        padding: vwPad(60);
        border-radius: vwPad(25);
        white-space: nowrap;
        .text {
            font-size: vwPad(30);
        }
    }
}
@media screen and (max-width: 767px) {
    .toast {
        padding: vw(60);
        border-radius: vw(25);
        white-space: nowrap;
        width: vw(520);
        .text {
            font-size: vw(30);
        }
        .ok-box {
            margin-top: vw(20);
            width: vw(180);
            height: vw(60);
            line-height: vw(60);
            text-align: center;
            border-radius: vw(40);
            font-size: vw(30);
            margin-bottom: 0;
        }
    }
}
</style>
