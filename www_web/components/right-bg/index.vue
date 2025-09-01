<!--
 * @Description: 右边背景
-->
<template>
    <div class="right-bg" :style="{width:width,height:height,top:top,right:right,zIndex:zIndex}"> 
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        width: {
            type: String,
            default: '50%'
        },
        height: {
            type: String,
            default: '760px'
        },
        top: {
            type: String,
            default: '-70px'
        },
        right: {
            type: String,
            default: '0%'
        },
        zIndex: {
            type: Number,
            default: 6
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
.right-bg {
    position: absolute;
    background: $sub-color url('~/static/imgs/right-line.png') no-repeat -83px -165px;
    background-size: 211%;
    border-bottom-left-radius: 18%;
}
</style>