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
        ],
        //路由元信息
        meta: {
            title: '首页'
        }
    },
    {
        path:'/about',
        component: About,
        meta: { 
            title: '关于'
        },
        //路由独享的守卫
        beforeEnter: (to, from, next) => {
            console.log(to.path,from.path)
            next()
        }
    },
    {
        path:'/user/:userId',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path:'/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

//利用导航守卫修改title。前置钩子
router.beforeEach((to,from,next) =>{
    //从from跳转到to,next函数必须执行一次
    //有嵌套路由的情况，需要使用$route.matched[]访问
    window.document.title = to.matched[0].meta.title
    next()
})

//后置钩子（hook），跳转后回调
router.afterEach((to,from) => {
    console.log(to.path,from.path)
})

// 3.将router对象传入到Vue实例
export default router