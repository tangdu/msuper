<template>
  <div id="app">
      这是用户页面
      {{user.userInfo.loginname}}
      <Button type="primary" @click="loadUser($event)">加载用户信息</Button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed:{
    ...mapState([
      'user'
    ])
  },
  methods:{
    ...mapMutations([
      'FETCH_USER_SUC'
    ]),
    ...mapActions([
      'fetchUserAction'
    ]),
    loadUser(){
      this.fetchUserAction();
    }
  }
}
</script>

