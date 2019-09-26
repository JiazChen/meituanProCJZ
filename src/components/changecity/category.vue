<template>
  <div class="wrapper">
    <div class="alphabet">
      <h3>按拼音字母选择:</h3>
      <span class="letter" v-for="(item, index) in alphabetList" :key="item + '' + index">
        <a :href="'#city-' + item">{{ item }}</a>
      </span>
    </div>
    <dl :id="'city-' + index2" class="category-wrapper" v-for="(item2, index2) in category" :key="item2 + '' + index2">
      <dt>{{ index2 }}</dt>
      <dd >
          <router-link :to="{name: 'index', params: { position: city.name }}" v-for="(city, index3) in item2" :key="city + '&' + index3">
            {{ city.name }}
          </router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      alphabetList: "ABCDEFJHJKLMNPQRSTWXYZ".split(""),
      category: null
    };
  },
  props: ["cityList"],
  methods: {
    // 数据处理： 将各个首字母一样的集中到一起 {a:[], b:[], c:[]}
    handleData() {
      let obj = {};
      let data = this.cityList;
      
      // 判断
      // if(!data[0]) {
      //   return;
      // }else {
      //   clearTimeout(this.timer);
      // }

      // console.log(data)
      // 数据处理： 将各个首字母一样的集中到一起
      data.forEach((item, index) => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item);
      });
      this.resetObj(obj);
    },
    resetObj(obj) {
        let lastObj = {};
        let alphabet = this.alphabetList;
        // 排序
        alphabet.forEach(letter => {
            lastObj[letter] = obj[letter];
        });
        this.category = lastObj;
    }
        
  },
  watch: {
    cityList: function () {
      this.handleData()
    }
  }
  // created() {
  //   //对cityList数据进行处理
  //   this.timer = setInterval(() => {
  //     this.handleData();
  //     console.log('666');
  //   }, 200);
  // }
};

/* 
  之前 有时候能够渲染到，data有值， 有时候不能渲染完成，data为空 的问题 :
  原因在于 向后端请求数据是异步的， 
  如果请求过慢，changecity组件还没有拿到数据，
  这个时候传给 category组件的数据就是空数组[]，
  然后 数据的处理 最后的赋值 给category，
  是由 生命周期函数created触发，
  而 created 只会执行一次，
  所以下一次 即使changecity组件 获取到了数据
  并且传过来 ，但是也不会再 执行 handleData() 处理数据并 更新给category数据值了

  解决办法: 
  1. 侦听器
  监听 cityList 的变化， 数据变化时， 调用 handleData() 方法 处理数据 更新category数据值

  2. 定时器监听
  生命周期函数created里开启一个定时器, 不断 调用 handleData() 方法
  在 handleData() 方法中，代码执行前 进行判断 :
  如果传来的数据有值 关闭定时器，执行代码 处理数据并且 更新category数据值
  如果数据为空 直接return 继续监听， 直到传来的数据有值 关闭定时器
*/
</script>

<style lang="less" scoped>
@import "../../assets/css/changecity/category.less";
</style>