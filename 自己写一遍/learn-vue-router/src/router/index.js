//配置路由和组件之间的映射关系
//导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由组件
import Home from '../components/Home'
import About from '../components/About'

//1.通过Vue.use()，安装插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes = [
    //一个映射关系就是一个对象
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
]

const router = new VueRouter({
    routes
})

// 3.将router对象传入到Vue实例
export default router