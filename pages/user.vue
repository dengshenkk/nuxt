<template>
  <div>
    <nuxt-link to="/"><h5>返回首页</h5></nuxt-link>
    <nuxt-link to="/user/userList"><h6>用户列表</h6></nuxt-link>
    <nuxt-link to="/user/addUser"><h6>添加用户</h6></nuxt-link>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  export default {
    name: 'user'
  }
</script>

<style scoped>

</style>
