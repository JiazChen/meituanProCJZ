<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号?</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <form action="#">
          <div class="userName item">
              <label for="us">用户名</label>
              <el-input v-model="userName" class="item-input" id="us" @blur="userCheck"></el-input>
              <span v-if="userShow">
                  <i :class="{'active': !userError}"></i>
                  <span v-if="userError">{{ userError }}</span>
              </span>
          </div>
          <div class="password item">
              <label for="pw">创建密码</label>
              <el-input v-model="password" class="item-input" id="pw" type="password" @blur="pwCheck" @input="strengthChange"></el-input>
              <span v-if="pwShow">
                  <i :class="{'active': !pwError}"></i>
                  <span v-if="pwError">{{ pwError }}</span>
              </span>
          </div>
          <div class="pw-strength">
              <div class="bar" :class="strength"></div>
              <div class="strength">
                  <span>弱</span>
                  <span>中</span>
                  <span>强</span>
              </div>
          </div>
          <div class="rePassword item">
              <label for="pw2">确认密码</label>
              <el-input v-model="password2" class="item-input" id="pw2" type="password" @blur="pwCheck2"></el-input>
              <span v-if="pwShow2">
                  <i :class="{'active': !pwError2}"></i>
                  <span v-if="pwError2">{{ pwError2 }}</span>
              </span>
          </div>
          <el-button class="btn-register" @click="submit">同意下方协议并注册</el-button>
          <p><a href="#">《美团网用户协议》</a></p>
      </form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from '@/api/api.js'

export default {
    data() {
        return {
            userName: '',
            userError: '',
            userShow: false,

            password: '',
            pwError: '',
            pwShow: false,

            password2: '',
            pwError2: '',
            pwShow2: false,

            strength: ''
        }
    },
    methods: {
        userCheck() {
            // blur后 让 userError 显示
            this.userShow = true;
            // 数据校验
            // 匹配 数字字母下划线之外的字符
            let reg = /[\W]+/g;
            // 获取 userName 长度
            let len = this.userName.length;
            // 转换成布尔值
            let flag1 = !!this.userName.match(reg)
            // 是否 为 4-16位数
            let flag2 = len > 3 && len <17;
            
            // console.log( 'aaaaaa',this.userName.length);
            // 当 匹配到 数字字母下划线之外的字符 或者 不是 4-16位 
            if(flag1 || !flag2) {
                this.userError = '用户名必须为4-16位的字母数字下划线组成'
            // 没有错误时，清空userError
            }else {
                this.userError = '';
            }
        },
        pwCheck() {
            this.pwShow = true;
            let reg = /[\W]+/g;
            let len = this.password.length;

            let flag1 = !!this.password.match(reg)
            // 是否 为 6-16位数
            let flag2 = len > 5 && len <17;

            if(flag1 || !flag2) {
                this.pwError = '密码必须为6-16位的字母数字下划线组成'
            }else {
                this.pwError = '';
            }
        },
        pwCheck2() {
            this.pwShow2 = true;
            if(this.password2 !== this.password) {
                this.pwError2 = '两次输入的密码不一致';
            }else if (!this.password2) {
                this.pwError2 = '请再次输入密码';
            }else {
                this.pwError2 = '';
            }
        },
        strengthChange() {
            let pw = this.password;
            let reg1 = /[0-9]+/g;
            let reg2 = /[A-z]+/g;
            let reg3 = /[_]+/g;
            let flag1 = !!pw.match(reg1);
            let flag2 = !!pw.match(reg2);
            let flag3 = !!pw.match(reg3);

            if( (flag1 && !flag2 && !flag3) || (!flag1 && flag2 && !flag3) || (!flag1 && !flag2 && flag3) ) {
                this.strength = 'weak'
            }else if ( (!flag1 && flag2 && flag3) || (flag1 && !flag2 && flag3) || (flag1 && flag2 && !flag3) ) {
                this.strength = 'normal'
            }else if (flag1 && flag2 && flag3) {
                this.strength = 'strong'
            }
        },
        submit() {
            // 当所有的数据都 校验正确 并且 填了值的时候 发送请求
            if(!this.userError && !this.pwError && !this.pwError2 && this.userName && this.password && this.password2) {
                api.register({
                    params: {
                        userName: this.userName,
                        password: this.password,
                        rePassword: this.password2
                    }
                }).then(res => {
                    console.log(res.data);
                    let data = res.data;
                    // 成功时 存储用户名 并且弹框提示 跳转到 登陆页
                    if(data.status === 'success') {
                        this.$store.commit('setUserName', data.data);
                        alert('注册成功');
                        this.$router.push({name: 'login'});
                    // 失败时 弹框提示
                    }else if (data.status === 'fail') {
                        alert(data.msg);
                    }
                })
            }else {
                alert('请填写完用户名、密码后再注册')
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../assets/css/register/register.less';
</style>