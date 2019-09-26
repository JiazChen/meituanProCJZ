<template>
    <div class="wrapper">
        <dl>
            <dt>{{ hotData.title }}:</dt>
            <dd class="city" v-for="item in hotData.list" :key="item.pinying">
                <router-link :to="{name: 'index', params: {position: item.name}}">{{ item.name }}</router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:['hotData']
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/changecity/hot.less';
</style>