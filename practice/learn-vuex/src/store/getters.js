export default{
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
}