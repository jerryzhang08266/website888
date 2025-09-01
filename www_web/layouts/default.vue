<template>
    <div class="app">
        <global-header ref="globalHeader"></global-header>
        <Nuxt class="app-main" />
        <global-footer></global-footer>
        <suspension></suspension>
    </div>
</template>

<script>
import GlobalHeader from "./GlobalHeader.vue";
import GlobalFooter from "./GlobalFooter.vue";
import suspension from "./suspension.vue";
export default {
    name: "Layouts",
    components: {
        GlobalHeader,
        GlobalFooter,
        suspension
    },
    created() {},
    mounted() {},
    methods: {},
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('~/static/font/SourceHanSansCN-Regular.otf');
}
@font-face {
    font-family: 'SourceHanSansCN-Bold';
    src: url('~/static/font/SourceHanSansCN-Bold.otf');
}
html {
    font-family: 'SourceHanSansCN-Regular';
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.app {
    height: 100vh;
    flex-direction: column;
    // background: $bg-color;
}

.app-main {
    min-height: calc(100% - #{77+421}px);
}
/*********************  pad **************************/
@media screen and (min-width: 768px) and (max-width: 1199px) {
    .app-main {
        min-height: calc(100% - #{vwPad(52+463)});
    }
}
/*********************  手机 **************************/
@media screen and (max-width: 767px) {
    .app-main {
        min-height: calc(100% - #{vw(52+595)});
    }
}
</style>
