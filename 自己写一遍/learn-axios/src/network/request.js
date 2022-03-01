import axios from 'axios'

/* 第一种封装方法 */
// export function request(config,success,failure){
//     const instance1 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     //发送真正的网络请求
//     instance1(config)
//     .then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }

/* 第二种封装方法，把回调函数统一放到config里面 */
// export function request(config){
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res)
//     })
//     .catch(err => {
//         config.failure(err)
//     })
// }

/* 第三种封装方法：结合Promise */
// export function request(config){
//     return new Promise((resolve,reject) => {
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
//         instance(config)
//         .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

/* 第四种封装方式 */
export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    /* 请求拦截器 */
    instance.interceptors.request.use(config => {
        console.log(config);
        //拦截后需要返回config
        return config
    },err => {
        console.log(err);
    })
    /* 响应拦截 */
    instance.interceptors.response.use(res => {
        // console.log(res);
        // 拦截后需要返回response结果
        return res.data
    }, err => {
        console.log(err);
    })
    // 返回的实例本身就是promise类型，直接return
    return instance(config)
}