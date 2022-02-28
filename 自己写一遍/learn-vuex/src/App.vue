<template>
  <div>
    <h2>我是APP组件</h2>
    <!-- 通过this.$store.state.属性的方式来访问状态 -->
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStudent">添加学生</button>
    <button @click="updateInfo">修改信息</button>

    <h2>--------APP内容，获取getters----------</h2>
    <h2>{{$store.getters.powerCouter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>
    
    <h2>--------modules内容----------</h2>
    <!-- 模块的属性也被放到state中了 -->
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <button @click="updateName">修改名字</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  methods: {
    add(){
      /* 通过this.$store.commit(mutation中方法)来修改状态
         为什么要通过mutation的方式提交，而非直接改变state的属性？因为Vuex可以更明确地追踪状态的变化
      */
      this.$store.commit('increment');
    },
    sub(){
      this.$store.commit('decrement');
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
      //另外一种提交风格
      // this.$store.commit({
      //   type: 'incrementCount',
      //   //但这里传过去的是一个对象
      //   count
      // })
    },
    addStudent(){
      const stu = {id: 115, name: 'alan', age: 24}
      //payload，可以更新时携带参数
      this.$store.commit('addStudent',stu)
    },
    updateInfo(){
      //Action 通过 store.dispatch 方法触发：
      this.$store.
      dispatch('aUpdateInfo','我是携带的信息')
      /* 处理被触发的 action 的处理函数返回的 Promise */
      .then(res =>{
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updateName(){
      //如果在mutations找不到就到模块中的找
      this.$store.commit('updateName','李四')
    }
  },
}
</script>

<style>
</style>
