<template>
  <div>
    <h4>添加用户</h4>
    <div><input type="text" v-model="user.userName"></div>
    <div><input type="text" v-model="user.address"></div>
    <div><input type="text" v-model="user.sex"></div>
    <div><input type="text" v-model="user.age"></div>
    <div><button>提交</button></div>
  </div>
</template>

<script>
  export default {
    name: 'addUser',
    data () {
      return {
        user: {}
      }
    }
  }
</script>

<style scoped>

</style>
