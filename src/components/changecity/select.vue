<template>
    <div class="wrapper" @click.stop="showBody(infoObj.isValueActive)" v-document-click="noShowBody">
        <div :class="{'select-box': true, 'isCityDisabled': isCityDisabled}">
            <span class="province">{{ infoObj.title1 }}</span>
            <i class="el-icon-caret-bottom"></i>
            <!-- 省份和城市的 数据结构不同, 所以分开数据渲染 -->
            <div v-if="!infoObj.isCity" :class="{'choose-wrapper': true, 'active': infoObj.isValueActive == isShowBody}">
                <h2 class="">{{ infoObj.title2 }}</h2>
                <div class="choose-content">
                    <div class="column" v-for="(item, index) in infoObj.list" :key="item + '' + index">
                        <span :class="{ 'active': item2.provinceName === infoObj.isValueActive }" v-for="(item2, index2) in item" :key="item2 + '' + index2" @click.stop="changeValue(item2.provinceName)">
                            {{ item2.provinceName }}
                        </span>
                    </div>
                </div>
            </div>

            <div v-else-if="infoObj.isCity" :class="{'choose-wrapper': true, 'active': infoObj.isValueActive == isShowBody}">
                <h2 class="">{{ infoObj.title2 }}</h2>
                <div class="choose-content">
                    <div class="column" v-for="(item, index) in infoObj.list" :key="item + '' + index">
                        <span v-for="(item2, index2) in item" :key="item2 + '' + index2" @click.stop="changeValue(item2.name)">
                            {{ item2.name }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            // isShowBody: false
        }
    },
    props: ['infoObj', 'isShowBody', 'isCityDisabled'],
    methods: {
        showBody(str) {
            this.$emit('change_active', str);
            // this.infoObj.isShowBody = true;
            
        },
        noShowBody() {
            this.$emit('change_active', '');
            // this.infoObj.isShowBody = false;
            
        },
        changeValue(value) {
            this.$emit('change_value', value);
            this.$emit('change_active', false);
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../../assets/css/changecity/select.less';
</style>