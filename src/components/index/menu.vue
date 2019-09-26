<template>
    <div class="index-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="item + '' + index" @mouseenter="enterTitle(item.items)" @mouseleave="leaveTitle">
                <i :class="item.type"></i>
                <a href="#">{{ item.name }}</a>
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="detailData" @mouseenter="enterDetail" @mouseleave="leaveDetail">
            <div v-for="(item2, index2) in detailData" :key="item2 + '' + index2">
                <h4 >{{ item2.title }}</h4>
                <span v-for="(t, i) in item2.items" :key="t + '' + i">{{ t }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/api.js'

export default {
    data: function () {
        return {
            detailData: null,
            menuList: [
                // {
                //     title: '美食',
                //     url: '#',
                //     icon: 'food',
                //     children: [
                //         {
                //             title: '美食',
                //             detailList: ['代金券', '甜点饮品', '火锅', '自助餐']
                //         }
                //     ]
                // },
                // {
                //     title: '外卖',
                //     url: '#',
                //     icon: 'takeout',
                //     children: [
                //         {
                //             title: '外卖',
                //             detailList: ['美团外卖']
                //         }
                //     ]
                // },
                // {
                //     title: '酒店',
                //     url: '#',
                //     icon: 'hotel',
                //     children: [
                //         {
                //             title: '酒店型机',
                //             detailList: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                //         }
                //     ]
                // },
                // {
                //     title: '榛果民宿',
                //     url: '#',
                //     icon: 'homestay',
                //     children: [
                //         {
                //             title: '1热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '猫眼电影',
                //     url: '#',
                //     icon: 'movie',
                //     children: [
                //         {
                //             title: '2热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '机票 / 火车票',
                //     url: '#',
                //     icon: 'airport',
                //     children: [
                //         {
                //             title: '3热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '休闲娱乐 / KTV',
                //     url: '#',
                //     icon: 'ktv',
                //     children: [
                //         {
                //             title: '4热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '生活服务',
                //     url: '#',
                //     icon: 'life',
                //     children: [
                //         {
                //             title: '5热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '丽人 / 美发 / 医学美容',
                //     url: '#',
                //     icon: 'hair',
                //     children: [
                //         {
                //             title: '6热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '结婚 / 婚纱摄影 / 婚宴',
                //     url: '#',
                //     icon: 'marry',
                //     children: [
                //         {
                //             title: '7热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '亲子 / 儿童乐园 / 幼教',
                //     url: '#',
                //     icon: 'offspring',
                //     children: [
                //         {
                //             title: '8热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '运动健身 / 健身中心',
                //     url: '#',
                //     icon: 'sport',
                //     children: [
                //         {
                //             title: '9热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '家装 / 建材 / 家居',
                //     url: '#',
                //     icon: 'furniture',
                //     children: [
                //         {
                //             title: '10热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '学习培训 / 音乐培训',
                //     url: '#',
                //     icon: 'study',
                //     children: [
                //         {
                //             title: '11热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '医疗健康 / 宠物 / 爱车',
                //     url: '#',
                //     icon: 'health',
                //     children: [
                //         {
                //             title: '12热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // },
                // {
                //     title: '酒吧 / 密室逃脱',
                //     url: '#',
                //     icon: 'bar',
                //     children: [
                //         {
                //             title: '13热门城市',
                //             detailList: ['上海', '北京', '成都', '重庆']
                //         },
                //         {
                //             title: '热门房源',
                //             detailList: ['复式Loft', '别墅']
                //         }
                //     ]
                // }
            ]
        }
    },
    methods: {
        enterTitle(data) {
            clearTimeout(this.timer);
            this.detailData = data;
        },
        leaveTitle() {
            let self = this;
            this.timer = setTimeout(function () {
                self.detailData = null;
            }, 200) 
        },
        enterDetail() {
            clearTimeout(this.timer);
        },
        leaveDetail() {
            this.detailData = null;
        }
    },
    created() {
        // 首页左侧导航条 导航数据
        api.getNavData().then(res => {
            // console.log(res.data.data)
            this.menuList = res.data.data;
        })
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/index/menu.less';
</style>