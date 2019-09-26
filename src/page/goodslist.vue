<template>
    <div class="page-product">
        
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category class=".el-breadcrumb" />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <recommend />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue'
import category from '@/components/products/category.vue'
import list from '@/components/products/list.vue'
import recommend from '@/components/products/recommend.vue'

export default {
    components: {
        crumbs,
        category,
        list,
        recommend
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/css/products/goodslist.less';
</style>