<template>
    <div>
        <div class="wrapper">
            <div class="logo">
                <router-link :to="{name: 'index'}">
                    <img src="http://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
                </router-link>
            </div>
            <div class="search-box">
                <div class="search-bar">
                    <el-input class="input" v-model="searchWord" @focus="myFocus" @blur="myBlur" @input="getSearchList" placeholder="搜索商家或地点"></el-input>
                    <el-button class="searchBtn" type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotWord" v-if="isHotWord">
                        <dt class="title">热门搜索</dt>
                        <dd class="text" v-for="(item,index) in hotWordDate" :key="item + '' + index">
                            <router-link :to="{ name: 'goodslist', params: {name: item} }">{{ item }}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item,index) in searchListData" :key="item + '' + index">
                            <router-link class="text" :to="{ name: 'goodslist', params: {name: item} }">{{ item }}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link class="text" :to="{ name: 'goodslist', params: {name: item} }" v-for="(item,index) in suggesData" :key="item + '' + index">{{ item }}</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'

export default {
    data: () => {
        return {
            searchWord: '',
            isFocus: false,
            hotWordDate: [],
            searchListData: ['啊', '啊啊', '啊啊啊', '啊啊啊啊', '啊啊啊啊啊'],
            suggesData: []
        }
    },
    computed: {
        isHotWord: function () {
            return this.isFocus && !this.searchWord;
        },
        isSearchList: function () {
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        myFocus() {
            this.isFocus = true;
        },
        myBlur() {
            let self = this;
            setTimeout(function () {
                self.isFocus = false;
            }, 200);
            
        },
        getSearchList() {
        // 搜索框列表数据获取
        api.getSearchList().then(res => {
            console.log(res.data.data.list);
            let value = this.searchWord;
            let list = res.data.data.list;
            
            this.searchListData = list.filter((e, i) => {
                return e.indexOf(value) > -1;
            })
        });
        }
    },
    created() {
        // 查询最近热门搜索
        api.getSearchHotWords().then(res => {
            // console.log(res.data.data);
            this.hotWordDate = res.data.data.slice(0, 5);
            this.suggesData = res.data.data;
        });
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/public/header/searchBar.less';
</style>