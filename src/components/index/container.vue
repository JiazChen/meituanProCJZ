<template>
  <div class="istyle">
    <dl @mouseover="myOver">
      <dt>有格调</dt>
      <dd :class="{active: isActive == 'all'}" data-type="all">全部</dd>
      <dd :class="{active: isActive == 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active: isActive == 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: isActive == 'movie'}" data-type="movie">电影出演</dd>
      <dd :class="{active: isActive == 'travel'}" data-type="travel">品质出游</dd>
    </dl>
    <div class="ibody">
      <ul>
        <li v-for="(item, index) in cardData[isActive]" :key="item + '' + index">
          <div class="el-card">
            <a href="#">
              <img :src="item.image" />
            </a>
            <div class="card-body">
              <p class="title">{{ item.title }}</p>
              <p class="sub-title">{{ item.subTitle }}</p>
              <div class="price-info">
                <div class="cur-price">
                  <span class="price-symbol">￥</span>{{ item.price }}
                </div>
                <!-- <div class="old-price">门市价￥{{ item.priceInfo.oldPrice }}</div> -->
                <div class="address">{{ item.address }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'

export default {
  data: function() {
    return {
      isActive: "all",
      cardData: {
          // 'all': {
          //     cardList: [
          //       {
          //       src:"https://p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@460w_260h_1e_1c",
          //       title: "北京饭店阳光咖啡厅",
          //       subTitle: "特价自助晚餐",
          //       priceInfo: {
          //           curPrice: "238",
          //           oldPrice: "298",
          //           address: "王府井/东单"
          //       }
          //       },
          //       {
          //       src:"https://p1.meituan.net/msmerchant/0777ad08c903247b0a84dc0a4c23ac6a317052.jpg@460w_260h_1e_1c",
          //       title: "发条时光",
          //       subTitle: "蛋糕5选1,约6英寸, 圆",
          //       priceInfo: {
          //           curPrice: "398",
          //           oldPrice: "598",
          //           address: "王府井/东单"
          //       }
          //       },
          //       {
          //       src:"https://p0.meituan.net/msmerchant/0182e1c902ae4c4926b5f49f02eeb5872467078.jpg@460w_260h_1e_1c",
          //       title: "阿里疆椒麻鸡",
          //       subTitle: "新疆炒米粉, 建议1-2人使用",
          //       priceInfo: {
          //           curPrice: "19.9",
          //           oldPrice: "48",
          //           address: "崇文门"
          //       }
          //       },
          //       {
          //       src:"https://p0.meituan.net/msmerchant/ba7de08d8591508b0ac0f98eccd45b03344331.jpg@460w_260h_1e_1c",
          //       title: "大教堂蛋糕 Kathedral（王府中环店）",
          //       subTitle: "众神的狂欢夜蛋糕1个，约6寸，极繁主义",
          //       priceInfo: {
          //           curPrice: "498",
          //           oldPrice: "689",
          //           address: "王府井/东单"
          //       }
          //       },
          //       {
          //       src:"https://p1.meituan.net/bbia/2f94dd8505c13cb5accb79275fcb3d92102474.jpg@460w_260h_1e_1c",
          //       title: "黑松白鹿（崇文门新活馆店）",
          //       subTitle: "尊享通用自助餐二",
          //       priceInfo: {
          //           curPrice: "308",
          //           oldPrice: "328",
          //           address: "崇文门新世界"
          //       }
          //       },
          //       {
          //       src:"https://p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@460w_260h_1e_1c",
          //       title: "天安瑞嘉烤鸭",
          //       subTitle: "北京烤鸭3人套餐",
          //       priceInfo: {
          //           curPrice: "198",
          //           oldPrice: "275",
          //           address: "王府井/东单"
          //       }
          //       }
          // ]
          // },
          // 'yuehui': {
          //     cardList: [
          //       {
          //       src:
          //           "https://p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@460w_260h_1e_1c",
          //       title: "北京饭店阳光咖啡厅",
          //       subTitle: "特价自助晚餐",
          //       priceInfo: {
          //           curPrice: "238",
          //           oldPrice: "298",
          //           address: "王府井/东单"
          //       }
          //   }
          // ]
          // },
          // 'liren': {
          //     cardList: [
          //       {
          //       src:
          //           "https://p1.meituan.net/msmerchant/0777ad08c903247b0a84dc0a4c23ac6a317052.jpg@460w_260h_1e_1c",
          //       title: "发条时光",
          //       subTitle: "蛋糕5选1,约6英寸, 圆",
          //       priceInfo: {
          //           curPrice: "398",
          //           oldPrice: "598",
          //           address: "王府井/东单"
          //       }
          //       }
          // ]
          // },
          // 'movie': {
          //     cardList: [
          //       {
          //       src:
          //           "https://p0.meituan.net/msmerchant/ba7de08d8591508b0ac0f98eccd45b03344331.jpg@460w_260h_1e_1c",
          //       title: "大教堂蛋糕 Kathedral（王府中环店）",
          //       subTitle: "众神的狂欢夜蛋糕1个，约6寸，极繁主义",
          //       priceInfo: {
          //           curPrice: "498",
          //           oldPrice: "689",
          //           address: "王府井/东单"
          //       }
          //       }
          // ]
          // },
          // 'pinzhi': {
          //     cardList: [
          //       {
          //       src:
          //           "https://p1.meituan.net/bbia/2f94dd8505c13cb5accb79275fcb3d92102474.jpg@460w_260h_1e_1c",
          //       title: "黑松白鹿（崇文门新活馆店）",
          //       subTitle: "尊享通用自助餐二",
          //       priceInfo: {
          //           curPrice: "308",
          //           oldPrice: "328",
          //           address: "崇文门新世界"
          //       }
          //       }
          // ]
          // }
      }

    };
  },
  methods: {
    myOver(e) {
        // 找到事件源对象, 并且获取他们的标签名
        let dom = e.target;
        let tagName = dom.tagName.toLowerCase();
        // 筛选出dd
        if (tagName !== "dd") {
            return;
       }
        // 拿到dd上的 type信息 ,然后更新isActive的值,切换active class
        let type = dom.getAttribute("data-type");
        this.isActive = type;

        // console.log(type);
    }
  },
  created() {
    // 首页下方 (有格调内容区数据获取)
    api.getIsStyleData().then(res => {
      // console.log(res.data.data);
      this.cardData = res.data.data;
    })
  }
};
</script>

<style lang="less">
@import "../../assets/css/index/container.less";
</style>