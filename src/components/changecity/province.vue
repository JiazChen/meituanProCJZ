<template>
  <div>
    <span>按省份选择</span>
    <select-box
      :infoObj="provinceData"
      :isShowBody="isShowBody"
      @change_active="changeProvinceActive"
      @change_value="changeProvinceValue"
    />
    <select-box
      :isCityDisabled="isCityDisabled"
      :infoObj="cityData"
      :isShowBody="isShowBody"
      @change_active="changeCityActive"
      @change_value="changeCityValue"
    />
    <span class="search">直接搜索:</span>
    <div class="remote-search" >
      <el-select v-model="searchValue" filterable placeholder="请输入城市中文">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.pinyin"
        >
          
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import selectBox from "@/components/changecity/select.vue";
import api from "@/api/api.js";

export default {
  data: function() {
    return {
      searchValue: "",
      loading: false,
      options: [],
      isShowBody: "",
      isCityDisabled: true,
      provinceData: {
        title1: "省份",
        title2: "省份",
        isCity: false,
        isShowBody: false,
        isValueActive: "province",
        list: []
      },
      cityData: {
        title1: "城市",
        title2: "城市",
        isCity: true,
        isShowBody: false,
        isValueActive: "city",
        list: []
      }
    };
  },
  methods: {
    // 控制省份 body 的出现隐藏
    changeProvinceActive(flag) {
      this.isShowBody = flag;
      // this.provinceData.isShowBody = flag;
      // if (flag) {
      //   this.cityData.isShowBody = false;
      // }
    },
    // 控制城市 body 的出现隐藏
    changeCityActive(flag) {
      this.isShowBody = flag;
      // this.cityData.isShowBody = flag;
      // if (flag) {
      //   this.provinceData.isShowBody = false;
      // }
    },
    // 省份value 的改变 和 样式的 改变 （可以拿到点击的省份的value值）
    changeProvinceValue(value) {
      this.provinceData.title1 = value;
      this.provinceData.isValueActive = value;
      // 选择省份后, 才可解除城市的禁用
      this.isCityDisabled = false;
      // 接着获取城市数据
      this.getCityList(value);
    },
    // 城市value的改变 并且切换position值，跳转到首页
    changeCityValue(value) {
      this.cityData.title1 = value;
      // 修改 position的值 并且跳转到首页
      this.$store.dispatch("setPosition", value);
      this.$router.push("/index");
    },
    // 处理数据 每行最多12个  [{}, {}, {}, {}] ==> [[], [], []]
    dataProcessing(arr) {
      let newArr = [];
      let column = Math.ceil(arr.length / 12);
      for (let i = 0; i < column; i++) {
        let curArr = arr.slice(i * 12, i * 12 + 12);
        newArr.push(curArr);
      }
      return newArr;
    },
    // 选择省份后, 再动态的获取城市数据
    getCityList(value) {
      api.getProvinceList().then(res => {
        // 通过value省份 筛选出对应的城市列表 并处理数据
        let list = res.data.data;
        let cityList = this.filterCityList(list, value);
        this.cityData.list = cityList;
      });
    },
    // 通过value省份 筛选出对应的城市列表
    filterCityList(provinceList, value) {
      // 过滤
      let filterArr = provinceList.filter((item, index) => {
        return item.provinceName == value;
      });
      // 拿到城市列表cityList
      let cityList = filterArr[0].cityInfoList;
      // 处理城市列表, [{}, {}, {}, {}] ==> [[], [], []] 每行最多12个
      cityList = this.dataProcessing(cityList);

      return cityList;
    },
    // 点击 搜索栏 跳转页面
    // goToIndex(city) {
    //   console.log('aaaaaaa')
    //   this.$store.dispatch('setPosition', city);
    //   this.$router.push("/index");
    // }
  },
  components: {
    selectBox
  },
  created() {
    //获取省份列表
    api.getProvinceList().then(res => {
      // console.log(res.data.data);
      let list = res.data.data;
      // 数据处理 一行12个
      // console.log(provinceArr);
      this.provinceData.list = this.dataProcessing(list);
    });

    // 远程搜索 获取城市列表
    api.getCityList().then(res => {
      // console.log(res.data.data);
      let remoteList = res.data.data;
      this.options = remoteList;
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/changecity/province.less";
</style>