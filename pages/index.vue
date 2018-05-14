<template>
  <section class="container">
    <div>
      <nuxt-link to="/"><h5>返回首页</h5></nuxt-link>
      <nuxt-link to="/user/userList"><h6>用户列表</h6></nuxt-link>
      <nuxt-link to="/user/addUser"><h6>添加用户</h6></nuxt-link>
      <h1 v-if="userList.length === 0">正在获取数据...</h1>
      <ul>
        <li v-for="(user, index) of userList" :key="index">
          <b>姓名: </b> <span>{{user.name}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import { getUserList } from '../api/user'

  export default {
    components: {
      AppLogo
    },
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

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
