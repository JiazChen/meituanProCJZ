<template>
    <div>
        <nav-bar class="navBar"></nav-bar>
        <search-bar class="searchBar"></search-bar>
    </div>
</template>

<script>
import navBar from './navBar.vue';
import searchBar from './searchBar.vue';

export default {
    name: 'headerBox',
    components: {
        navBar,
        searchBar
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/public/header/headerBox.less';
</style>