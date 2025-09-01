<template>
    <div
        class="card-box"
        @click="jumpFn(data_obj)"
    >
        <div class="title-box">{{data_obj.name}}</div>
        <!-- :style="{width:'64px'}" -->
        <div class="img-box">
            <img
                :src="data_obj.img_url"
                alt=""
            >
        </div>

        <!-- <span>
            <i></i><i></i>
        </span> -->
    </div>
</template>
<script>
export default {
    name: "card",
    props: {
        data_obj: {
            type: Object,
            default: {}
        }
    },
    watch: {},
    computed: {},
    methods: {
        jumpFn(data) {
            this.$router.push({
                path: "/product/iot/" + data.id
            });
        }
    },
    mounted() {},
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.card-box {
    position: relative;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #f0f0f0;
    // max-width: 150px;
    width: 150px;
    height: 150px;
    margin-top: 10px;
    cursor: pointer;
    .title-box {
        color: $font-medium-color;
        font-size: 14px;
    }
    &:hover {
        border: 1px solid transparent;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
        .title-box {
            color: $main-color;
        }
    }
    .img-box{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        display: block;
        margin: 0 auto;
        // margin-top: 10px;
        min-width: 64px;
        max-width: 111px;
        max-height: 74px;
    }
    span {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 4px;
        height: 14px;
        display: flex;
        flex-direction: column;
        i {
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: $main-color;
            margin-bottom: 3px;
            &:last-child {
                opacity: 0.3;
            }
        }
    }
}
</style>
