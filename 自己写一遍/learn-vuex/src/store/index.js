import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './module/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        student: [
            {id: 111, name: 'a', age: 18},
            {id: 112, name: 'b', age: 19},
            {id: 113, name: 'c', age: 20},
            {id: 114, name: 'd', age: 22},
        ],
        info:{id: 111, name: 'a', age: 18},
    },
    mutations,
    actions,
    getters,
    modules:{
        a: moduleA
    }
})

// 3.导出store对象
export default store