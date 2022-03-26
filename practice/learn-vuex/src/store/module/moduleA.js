export default{
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