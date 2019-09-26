<template>
  <div class="page-changecity">
    <el-row class="el-row">
      <el-col :span="24">
        <province-box />
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="24">
        <hot-box :hotData="hotData" />
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="24">
        <hot-box :hotData="latelyData" />
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="24">
        <category-box :cityList="cityList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import provinceBox from "@/components/changecity/province.vue"
import hotBox from "@/components/changecity/hot.vue"
import categoryBox from "@/components/changecity/category.vue"
import api from "@/api/api.js"

export default {
  data: function() {
    return {
      hotData: {
        title: '热门城市',
        list: []
      },
      latelyData: {
        title: '最近访问',
        list: []
      },
      cityList: []
    }
  },
  components: {
    provinceBox,
    hotBox,
    categoryBox
  },
  methods: {
    getCityList() {
      
    }
  },
  created() {
    // 获取热门城市
    api.getHotCity().then(res => {
      // console.log(res.data.data);
      this.hotData.list = res.data.data;
    });
    // 最近搜索城市
    api.getRecents().then(res => {
      // console.log(res.data.data);
      this.latelyData.list = res.data.data;
    })
    // 获取城市列表
    api.getProvinceList().then(res => {
      let arr = [];
      let list = res.data.data;
      list.forEach((item, index) => {
        arr = arr.concat(item.cityInfoList);
      })
      // console.log(arr);
      this.cityList = arr;
    })
    // console.log(this.cityList, '666666');
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/changecity/changecity.less";
</style>