<template>
    <div class="index-life">
        <el-row>
            <ul class="links">
                <li v-for="(item, index) in linksList" :key="item + '' + index">
                    <router-link :class="item.class" to="#">{{ item.title }}</router-link>
                </li>
            </ul>
        </el-row>
        <el-row>
            <el-col :span="14">
                <el-carousel class="slider" width="550px" height="240px">
                    <el-carousel-item v-for="item in sliderList" :key="item">
                        <a href="#">
                            <img :src="item" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col  :span="4">
                <a href="#" class="pic-1-wrapper">
                    <div class="pic-1"></div>
                </a>
            </el-col>
            <el-col :span="6">
                <div class="login-container">
                    <h4>
                        <img :src="$store.state.userName ? 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=627447547,65550060&fm=26&gp=0.jpg' : 'http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg'" alt="">
                    </h4>
                    <p class="login-name">{{ $store.state.userName || 'Hi! 你好' }}</p>
                    <template v-if="!$store.state.userName">
                        <p>
                            <el-button round>
                                <router-link :to="{name: 'register'}">注册</router-link>
                            </el-button>
                        </p>
                        <p>
                            <el-button round>
                                <router-link :to="{name: 'login'}">立即登录</router-link>
                            </el-button>
                        </p>
                    </template>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="pic-2">
                    <a href="#"></a>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="pic-3">
                    <a href="#"></a>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="pic-4">
                    <a href="#"></a>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="download-app">
                    <div class="img-box"> 
                        <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                    </div>
                    <p>美团APP手机版</p>
                    <p class="last-p">
                        <span>1元起</span>
                        <span >吃喝玩乐</span>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            linksList: [
                {
                    title: '美团外卖',
                    class: 'takeout'
                },
                {
                    title: '猫眼电影',
                    class: ''
                },
                {
                    title: '美团酒店',
                    class: ''
                },
                {
                    title: '民宿 / 公寓',
                    class: 'apartment'
                },
                {
                    title: '商家入驻',
                    class: 'business'
                },
                {
                    title: '美团公益',
                    class: ''
                }
            ],
            sliderList: [
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/index/life.less';
</style>
