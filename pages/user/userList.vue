<template>
  <div>
    <ul>
      <li v-for="(user, index) of userList" :key="index">
        <b>姓名: </b> <span>{{user.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getUserList } from '../../api/user'

  export default {
    name: 'userList',
    components: {},
    data () {
      return {
        userList: []
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.userList = []
        getUserList().then(res => {
          this.userList = res.data.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
