<template>
  <div>
    <h2>我是user</h2>
    <p>我是用户</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>

export default {
  name: 'User',
  computed:{
      userId: function(){
          //this.$route：当前活跃的路由对象
          //this.$router：访问路由器，注意区分两者
          return this.$route.params.userId;
      }
  }
}
</script>

<style>

</style>
