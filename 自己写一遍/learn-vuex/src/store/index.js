import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA ={
    state:{
        name: '张三'
    },
    mutations:{
        updateName(state, payload){
            state.name = payload
        }
    },
    getters:{
        fullName(state){
            return state.name + '2333'
        }
    },
    actions:{

    }
}
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
    mutations:{
        //方法
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        
        incrementCount(state,count){
            state.counter += count
        },
        //另外一种提交风格
        // incrementCount(state,payload){
        //     state.counter += payload.count
        // },
        addStudent(state,stu){
            state.student.push(stu)
        },
        updateInfo(state){
            state.info.name = 'coderwhy'
        }
    },
    actions:{
        aUpdateInfo(context, payload){
            /* 异步操作通常用Promise写 */
            return new Promise((resolve) => {
                setTimeout(() => {
                    //这个updateInfo是上面mutation的
                    context.commit('updateInfo')
                    console.log(payload)
                    resolve('11111')
                },1000)
            })
        }
    },
    getters:{
        powerCouter(state){
            return state.counter * 100
        },
        more20stu(state){
            return state.student.filter(s => s.age >= 20)
        },
        //可以传递getters作为参数
        more20stuLength(state,getters){
            return getters.more20stu.length;
        },
        //getters默认是不能传递参数的，如果希望传递参数，那么只能让getters本身返回一个函数
        moreAgeStu(state){
            return age => {
                return state.student.filter(s => s.age >= age)
            }
        }
    },
    modules:{
        a: moduleA
    }
})

// 3.导出store对象
export default store