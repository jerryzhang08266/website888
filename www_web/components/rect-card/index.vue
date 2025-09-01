<!--
 * @Description: 圆形card
-->
<template>
    <div
        class="rect-card"
        :style="{width:width,height:height,top:top,left:left}"
    >
        <div>
            <div class="bg1"></div>
            <div class="bg2"></div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        width: {
            type: String,
            default: "302px"
        },
        height: {
            type: String,
            default: "560px"
        },
        top: {
            type: String,
            default: "0%"
        },
        left: {
            type: String,
            default: "0%"
        }
    },
    mounted() {},
    methods: {},
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.rect-card {
    position: absolute;
    width: 302px;
    height: 560px;
    > div {
        width: 100%;
        height: 100%;
        position: relative;
        .bg1 {
            position: absolute;
            top: 0;
            right: 0;
            width: 229px;
            height: 463.06px;
            z-index: 1;
            background: url('~/static/imgs/rect1.png') no-repeat center center;
        }
        .bg2 {
            position: absolute;
            top: 97px;
            right: 74px;
            z-index: 2;
            width: 229px;
            height: 463.06px;
            background: url('~/static/imgs/rect2.png') no-repeat center center;
        }
    }
}
</style>