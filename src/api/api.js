import axios from '@/axios.js'

const api = {
    // 用户登录接口
    login(params) {
        return axios.get('/api/meituan/login', params);
    },
    // 用户注册接口
    register(params) {
        return axios.get('/api/meituan/register', params);
    },
    // 查询最近热门搜索
    getSearchHotWords() {
        return axios.get('/api/meituan/header/searchHotWords.json');
    },
    // 搜索框列表数据获取
    getSearchList() {
        return axios.get('/api/meituan/header/search.json');
    },
    // 首页左侧导航条 导航数据
    getNavData() {
        return axios.get('/api/meituan/index/nav.json');
    },
    // 首页下方 (有格调内容区数据获取)
    getIsStyleData() {
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    //获取省份列表
    getProvinceList() {
        return axios.get('/api/meituan/city/province.json');
    },
    // 获取城市列表接口
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    // 获取热门城市
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    // 最近搜索城市
    getRecents() {
        return axios.get('/api/meituan/city/recents.json');
    },
    // 获取分类列表
    getClassify() {
        return axios.get('/api/meituan/list/classify.json');
    },
    // 获取区域列表
    getAreaList() {
        return axios.get('/api/meituan/list/areaList.json');
    },
    // 产品展示列表数据获取
    getGoodsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    // 推荐产品列表
    getRecommend() {
        return axios.get('/api/meituan/list/recommend.json');
    },
    //获取当前位置信息
    getposition() {
        return axios.get('/api/meituan/city/getPosition.json');
    }
}

export default api;