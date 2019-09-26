<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <m-container />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import menu from '@/components/index/menu.vue'
import life from '@/components/index/life.vue'
import container from '@/components/index/container.vue'

export default {
    components: {
        mMenu: menu,
        mLife: life,
        mContainer: container
    },
    created() {
        // 改变position 跳转到index 两种方式
        // 1. this.$store.dispatch("setPosition", value);
        //    this.$router.push("/index");
        // 2. <router-link :to="{name: 'index', params: { position: '城市名' }}">

        // 方式2 value有值 才修改
        console.log(this.$route)
        let value = this.$route.params.position;
        if(value) {
            this.$store.dispatch("setPosition", value);
            this.$store.dispatch('setNearCity', '');
        }

        // 滚动条置顶
        window.scrollTo(0,0);
        
    }
}
</script>

<style lang="less">
    .page-index {
        width: 1190px;
        margin: 0 auto;
    }
</style>