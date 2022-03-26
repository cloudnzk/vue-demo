export default {
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
}