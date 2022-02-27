//配置路由和组件之间的映射关系
//导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由组件
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//路由懒加载，使用ES6的语法动态地加载模块
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1.通过Vue.use()，安装插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes = [
    //一个映射关系就是一个对象
    //配置默认路由
    {
        path: '',
        //重定向，默认显示首页
        redirect: '/home'
    },
    {
        path:'/home',
        component: Home,
        //嵌套路由
        children:[
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/user/:userId',
        component: User
    },
    {
        path:'/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router