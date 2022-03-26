<template>
  <div>
    <ul>
        <li>新闻1</li>
        <li>新闻2</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeNews',
  //组件内部守卫
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
}
}
</script>

<style>

</style>
