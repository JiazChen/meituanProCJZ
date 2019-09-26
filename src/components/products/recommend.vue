<template>
    <div class="recommend-wrapper">
        <p>猜你喜欢</p>
        <ul>
            <li v-for="(item, index) in recommendList" :key="item + '' + index">
                <card :cardData="item" :imgUrl="imgList[index]" />
            </li>
        </ul>
    </div>
</template>

<script>
import card from '@/components/products/card.vue'
import api from '@/api/api.js'

export default {
    data() {
        return {
            recommendList: [],
            imgList: [
                'https://p0.meituan.net/deal/__26218156__8593562.jpg@237w_132h_1e_1c',
                'https://p1.meituan.net/bbia/596ea86d5bf3c1fd33b4898821d7eb7564978.jpg@275w_156h_1e_1c',
                'https://p1.meituan.net/msmerchant/91374426377209ba6254bc270ee9bb0c27489.jpg@237w_132h_1e_1c',
                'https://p0.meituan.net/deal/__23524696__2888877.jpg@275w_156h_1e_1c',
                'https://p1.meituan.net/deal/__37518694__5357548.jpg@275w_156h_1e_1c',
                'https://p0.meituan.net/msmerchant/852b316e6b627d6f2ce44d0f3e4c40b0264399.jpg@275w_156h_1e_1c',
                'https://p0.meituan.net/msmerchant/2f907faad089dcb3da8080b8229766c1139345.jpg@275w_156h_1e_1c',
                'https://p1.meituan.net/deal/429dec75f32d3fc87e3ce255888aa56f135021.jpg@275w_156h_1e_1c',
                'https://p1.meituan.net/msmerchant/1a91cf50452b3eafbabdbf4fb853ea3e44500.jpg@275w_156h_1e_1c',
                'https://p0.meituan.net/msmerchant/8e9d07bac32473da09c402203cc5288c138748.jpg@237w_132h_1e_1c'
            ]
        }
    },
    components: {
        card
    },
    created() {
        api.getRecommend().then(res => {
            console.log(res.data.data)
            this.recommendList = res.data.data;
        })
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/products/recommend.less';
</style>