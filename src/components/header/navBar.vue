<template>
  <div>
    <div class="nav">
      <div class="nav-left">
        <div class="city-box">
          <div class="city">
            <i class="el-icon-location"></i>
            <span class="city-text">{{$store.state.position}}</span>
          </div>
          <div class="toggle-city">
            <router-link class="change" :to="{name: 'changecity'}">切换城市</router-link>
          </div>
          <div class="near-citys">
            [
            <router-link class="city-guess"  to="#" v-for="city in $store.state.nearCity" :key="city.id">
              {{ city.name }}
            </router-link>
            ]
          </div>
        </div>

        <div class="login-and-register">
          <router-link class="login"  :to="{name: 'login'}">{{ $store.state.userName || '立即登录'}}</router-link>
          <router-link class="register"  :to="{name: 'register'}">注册</router-link>
        </div>
      </div>
      <div class="nav-right">
        <ul>

        <li class="list site no-a">
            {{ myNav.title }}
            <div class="subContainer">
              <dl :class="item.class" v-for="(item, index) in myNav.list" :key="item + '' + index">
                <dt>{{ item.subTitle }}</dt>
                <dd v-for="(item2, index2) in item.subList" :key="item2 + '' + index2">
                  <a href="#">{{ item2 }}</a>
                </dd>
              </dl>
              <dl :class="myNav.img.class">
                <dt>{{ myNav.img.subTitle }}</dt>
                <dd>
                  <a href="#" v-for="(item3, index3) in myNav.img.subList" :key="item3 + '' + index3">
                    <img class="appicon" :src="item3">
                  </a>
                </dd>
              </dl>
            </div>
        </li>

        <li class="list rule no-a">
            {{ myRule.title }}
            <dl>
              <dd v-for="item in myRule.list" :key="item">
                <a href="#">{{ item }}</a>
              </dd>
            </dl>
        </li>

        <li class="list bd no-a">
            {{ myCenter.title }}
            <dl>
              <dd v-for="item in myCenter.list" :key="item">
                <a href="#">{{ item }}</a>
              </dd>
            </dl>
        </li>

        <li>
            <a href="#">手机APP</a>
        </li>

        <li class="list my">
            <a href="#">{{ myMeituan.title }}</a>
            <dl>
              <dd v-for="item in myMeituan.list" :key="item">
                <a href="#">{{ item }}</a>
              </dd>
            </dl>
        </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js"

export default {
  data() {
    return {
      myMeituan: {
        title: '我的美团',
        list: ['我的订单', '我的收藏', '抵用券', '账户设置']
      },
      myCenter: {
        title: '商家中心',
        list: ['登录商家中心', '美团智能收银', '我想合作', '手机免费开店', '餐饮代理商招募', '商家申请开票', '免费合作美团排队']
      },
      myRule: {
        title: '美团规则',
        list: ['规则中心', '规则目录', '规则评议院']
      },
      myNav: {
        title: '网站导航',
        list: [
          {
            subTitle: '酒店旅游',
            class: 'hotel',
            subList: ['国际机票', '火车票', '榛果名宿', '经济型酒店', '主题酒店', '商务酒店', '公寓', '豪华酒店', '客栈', '青年旅舍', '度假酒店', '别墅']
          },
          {
            subTitle: '吃美食',
            class: 'food',
            subList: ['烤鱼', '特色小吃', '烧烤', '自助餐', '火锅', '代金券']
          },
          {
            subTitle: '看电影',
            class: 'movie',
            subList: ['热门电影', '热门影院', '热映电影口碑榜', '国内票房榜', '北美票房榜', '电影排行榜']
          } 
        ],
        img: {
            subTitle: '手机应用',
            class: 'app',
            subList: [
              'http://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png',
              'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
              'http://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
              'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
              'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png'
              ]
          }
      }
    }
  },
  created() {
    // 自动 获取当前位置信息
    api.getposition().then(res => {
      console.log(res.data.data);
      let data = res.data.data;
      // 修改position nearCity
      this.$store.dispatch('setPosition', data.name);
      this.$store.dispatch('setNearCity', data.nearCity);
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/public/header/navBar.less";
</style>