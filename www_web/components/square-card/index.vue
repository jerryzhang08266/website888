<!--
 * @Description: 正方形card
-->
<template>
    <div class="square-card" :style="{width:width,height:height,top:top,left:left}">
        <div class="bg1"></div>
        <div class="bg2"></div>
    </div>
</template>
<script>
export default {
    props:{
        width: {
            type: String,
            default: '23%'
        },
        height: {
            type: String,
            default: '23%'
        },
        top: {
            type: String,
            default: '0%'
        },
        left: {
            type: String,
            default: '0%'
        },
    },
    mounted() {},
    methods: {},
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.square-card {
    position: absolute;
    width: 23%;
    padding-top: 23%;
    .bg1 {
        position: absolute;
        top: 13%;
        right: 0;
        width: 65%;
        height: 65%;
        border-radius: 5%;
        background: linear-gradient(
            271deg,
            rgba(69, 184, 113, 0.08) 0%,
            rgba(69, 184, 113, 0) 103%
        );
        transform: rotate(36.42deg);
    }
    .bg2 {
        position: absolute;
        top: 23%;
        right: 18%;
        width: 65%;
        height: 65%;
        border-radius: 5%;
        transform: rotate(-61.18deg);
        background: linear-gradient(
            271deg,
            rgba(69, 184, 113, 0.08) 0%,
            rgba(69, 184, 113, 0) 103%
        );
    }
}
</style>