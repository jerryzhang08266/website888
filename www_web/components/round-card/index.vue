<!--
 * @Description: 圆形card
-->
<template>
    <div
        class="round-card"
        :style="{width:width,height:height,top:top,right:right,zIndex:zIndex}"
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
            default: "29%"
        },
        height: {
            type: String,
            default: "29%"
        },
        top: {
            type: String,
            default: "0%"
        },
        right: {
            type: String,
            default: "0%"
        },
        zIndex: {
            type: [String,Number],
            default: 1
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
.round-card {
    position: absolute;
    width: 29%;
    padding-top: 29%;
    > div {
        width: 100%;
        padding-top: 100%;
        position: relative;
        .bg1 {
            position: absolute;
            top: 0;
            right: 0;
            width: 63%;
            height: 63%;
            border-radius: 50%;
            transform: rotate(180deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
        .bg2 {
            position: absolute;
            top: 87px;
            left: 0;
            width: 84%;
            height: 84%;
            border-radius: 44%;
            transform: rotate(180deg);
            background: linear-gradient(
                271deg,
                rgba(69, 184, 113, 0.08) 0%,
                rgba(69, 184, 113, 0) 103%
            );
        }
    }
}
</style>