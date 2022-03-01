import Vue from 'vue'
import App from './App.vue'

// import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   // method: 'get',
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type: 'pop',
//     page: 1
//   }
// })
// .then(res => {
//   console.log(res)
// })

// /* axios全局配置 */
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// /* 处理多个并发请求 */
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params:{
//       type: 'sell',
//       page: 5
//     }
//   })
// ])
// //并发请求都完成后，统一在这里处理
// //返回的结果是一个数组，使用spread方法解构
// .then(axios.spread((res1,res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

/* 创建对应的axios实例 */
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/data',
//   params:{
//     type: 'sell',
//     page: 5
//   }
// })
// .then(result => {
//   console.log(result);
// })

/* 封装request模块 */
/*
* @params {config}，axios的config
* @params {success}，成功的回调函数
* @params {failure}，失败的回调函数
*/

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function(res){
//     console.log(res);
//   },
//   failure: function(err){
//     console.log(err);
//   }
// })

request({
  url: '/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err)
})