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
                <h4 >{{ item2.name }}</h4>
                <span v-for="(t, i) in item2.detailList" :key="t + '' + i">{{ t }}</span>
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
                {
                    name: '美食',
                    url: '#',
                    type: 'food',
                    items: [
                        {
                            name: '美食',
                            detailList: ['代金券', '甜点饮品', '火锅', '自助餐']
                        }
                    ]
                },
                {
                    name: '外卖',
                    url: '#',
                    type: 'takeout',
                    items: [
                        {
                            name: '外卖',
                            detailList: ['美团外卖']
                        }
                    ]
                },
                {
                    name: '酒店',
                    url: '#',
                    type: 'hotel',
                    items: [
                        {
                            name: '酒店型机',
                            detailList: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                        }
                    ]
                },
                {
                    name: '榛果民宿',
                    url: '#',
                    type: 'homestay',
                    items: [
                        {
                            name: '1热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '猫眼电影',
                    url: '#',
                    type: 'movie',
                    items: [
                        {
                            name: '2热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '机票 / 火车票',
                    url: '#',
                    type: 'airport',
                    items: [
                        {
                            name: '3热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '休闲娱乐 / KTV',
                    url: '#',
                    type: 'ktv',
                    items: [
                        {
                            name: '4热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '生活服务',
                    url: '#',
                    type: 'life',
                    items: [
                        {
                            name: '5热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '丽人 / 美发 / 医学美容',
                    url: '#',
                    type: 'hair',
                    items: [
                        {
                            name: '6热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '结婚 / 婚纱摄影 / 婚宴',
                    url: '#',
                    type: 'marry',
                    items: [
                        {
                            name: '7热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '亲子 / 儿童乐园 / 幼教',
                    url: '#',
                    type: 'offspring',
                    items: [
                        {
                            name: '8热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '运动健身 / 健身中心',
                    url: '#',
                    type: 'sport',
                    items: [
                        {
                            name: '9热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '家装 / 建材 / 家居',
                    url: '#',
                    type: 'furniture',
                    items: [
                        {
                            name: '10热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '学习培训 / 音乐培训',
                    url: '#',
                    type: 'study',
                    items: [
                        {
                            name: '11热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '医疗健康 / 宠物 / 爱车',
                    url: '#',
                    type: 'health',
                    items: [
                        {
                            name: '12热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                },
                {
                    name: '酒吧 / 密室逃脱',
                    url: '#',
                    type: 'bar',
                    items: [
                        {
                            name: '13热门城市',
                            detailList: ['上海', '北京', '成都', '重庆']
                        },
                        {
                            name: '热门房源',
                            detailList: ['复式Loft', '别墅']
                        }
                    ]
                }
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
        // api.getNavData().then(res => {
        //     // console.log(res.data.data)
        //     this.menuList = res.data.data;
        // })
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/index/menu.less';
</style>