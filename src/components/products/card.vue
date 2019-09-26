<template>
    <div class="card-box">
        <img :src="imgUrl">
        <p class="title">{{ cardData.title }}</p>
        <div class="score-box">
            <el-rate
                class="score"
                v-model="cardData.score"
                disabled
                text-color="#ff9900"
                score-template="{value}">
             </el-rate>
             <span class="comment">{{ cardData.commentNum }}个评价</span>
        </div>
        <p class="address">{{ cardData.areaName }}</p>
        <p class="price">
            <span class="yuan">￥</span>
            <span class="number">{{ cardData.lowPrice }}</span>
            <span class="desc">起</span>
        </p>

    </div>
</template>

<script>
export default {
    props: ['cardData', 'imgUrl']
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/products/card.less';
</style>