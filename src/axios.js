import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params,
        appkey: 'cjz869179735_1553850400997'
    }
    return config;
  });

  export default axios;