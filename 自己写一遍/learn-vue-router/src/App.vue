<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- v-bind动态绑定用户ID -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:'18'}}">档案</router-link>
    <router-view></router-view>
    <!-- 渲染成button，不记录history -->
    <!--
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    -->
    <!-- 通过代码跳转路由 -->
    <!--
    <button @click="linkHome">首页</button>
    <button @click="linkAbout">关于</button>
    -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'silentlight'
    }
  },
  /*
  methods: {
    linkHome: function(){
      this.$router.replace('/home');
    },
    linkAbout: function(){
      this.$router.replace('/about');
    },
    profileClick: function(){
      this.$router.push({
        path: '/profile',
        query:{
          name: 'why',
          age: 18
        }
      });
    }
  */
}
</script>

<style>
  .active{
    color: red;
  }
</style>
