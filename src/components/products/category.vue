<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classifyList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue"
import api from "@/api/api.js"

export default {
  data() {
    return {
      classifyList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "南岗区",
          subList: [
            {
              name: "中央大街",
              id: 123
            },
            {
              name: "西客站",
              id: 11
            },
            {
              name: "花园街",
              id: 222
            },
            {
              name: "通乡街/果园街",
              id: 21
            },
            {
              name: "爱建社区",
              id: 1
            },
            {
              name: "学府路",
              id: 34
            }
          ]
        }
      ]
    };
  },
  components: {
    MSelect
  },
  created() {
    // 获取分类列表
    api.getClassify().then(res => {
      // console.log(res.data.data);
      this.classifyList = res.data.data;
    });

    // 获取区域列表
    // api.getAreaList().then(res => {
    //   console.log(res.data);
      // JSON.parse(res.data)
      // this.latelyData.list = res.data.data;
    // });
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/products/category.less";
</style>