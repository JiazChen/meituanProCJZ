<template>
    <div class="page-login">
       <div class="login-header">
           <router-link class="logo" :to="{name: 'index'}"></router-link>
       </div>
       <div class="login-panel">
           <div class="banner">
               <img src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
           </div>
           <div class="form">
                <div v-if="error" class="tips">
                    <i></i>
                    {{ error }}
                </div>
                <p><span>账号登录</span></p>
                <el-input v-model="userName" placeholder="手机号/用户名/邮箱">
                    <i slot="prefix" class="el-input__icon profile"></i>
                </el-input>
                <el-input v-model="password" placeholder="密码" type="password">
                    <i slot="prefix" class="el-input__icon password"></i>
                </el-input>
                <p class="foot">
                    <a href="#">忘记密码?</a>
                </p>
                <el-button class="btn-login" @click="submit">登录</el-button>
                <p class="reg">
                    <span>还没有账号?</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper">
                    <div class="title-wrapper"><span class="title">用合作网站账号登录</span></div>
                    <div class="oauth">
                        <a class="oauth__link oauth__link--qq" href="#"></a>
                        <a class="oauth__link oauth__link--weibo" href="#"></a>
                    </div>
                </div>
           </div>
       </div>
       <footer>
           <ul>
               <li><a href="#">关于美团</a></li>
               <li><a href="#">加入我们</a></li>
               <li><a href="#">商家入驻</a></li>
               <li><a href="#">帮助中心</a></li>
               <li><a href="#">美团手机版</a></li>
           </ul>
           <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
       </footer>
    </div>
</template>

<script>
import api from '@/api/api.js'

export default {
    data() {
        return {
            userName: '',
            password: '',
            error: ''
        }
    },
    methods: {
        submit() {
            // 判断用户是否输入了 账号 密码
            // 虽然后端已经对 账号 密码 进行了数据校验
            // 但是在前端可以 先对 是否填写了 账号 密码 进行 校验
            // 这样减少了 与服务器不必要的请求
            if(!this.userName) {
                if(!this.password) {
                    this.error = '请输入账号和密码'
                    return
                }
                this.error = '请输入账号';
                return
            }else if(!this.password) {
                this.error = '请输入密码';
                return
            }
            // 发送数据
            api.login({
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).then(res => {
                // console.log(res.data);
                const data = res.data;
                // 成功则 保存 用户额基本信息 并且跳转到 首页
                if(data.status === 'success') {
                    this.$store.commit('setUserName', data.data);
                    this.$router.push({name: 'index'});
                // 失败则 打印失败信息
                }else if (data.status === "fail") {
                    this.error = data.msg;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/css/login/login.less';
</style>