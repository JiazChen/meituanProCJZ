<template>
    <el-container class="wrapper">
        <el-header height="">
            <header-box class="headerBox" />
        </el-header>
        <div class="mainBox">
            <router-view/>
        </div>
        <el-footer height="">
            <footer-box class="footerBox"/> 
        </el-footer>
    </el-container>
</template>

<script>
import headerBox from '@/components/header/headerBox.vue'
import footerBox from '@/components/footer.vue'

export default {
    name: 'defaultPage',
    components: {
        headerBox,
        footerBox
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/css/public/default.less';
</style>