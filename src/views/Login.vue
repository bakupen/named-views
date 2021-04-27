<template>
  <div>
    <Header />
    <div class="container">
      <b-card class="login-area">

        <b-form-group
          class="text-success"
          label="ログインID"
          label-size="sm"
          label-align="left"
        >
          <b-form-input
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="text-success"
          label="パスワード"
          label-size="sm"
          label-align="left"
        >
          <b-form-input
            type="password"
          ></b-form-input>
        </b-form-group>

        <div class="text-center">
          <b-button variant="success" class="w-50" @click="login">ログイン</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  methods: {
    login() {
      this.$router.push({name: 'dog'})
    }
  }
}
</script>

<style scoped>
.login-area {
  background: #f1f1f1;
  width: 400px;
  border: none;
  margin: 40px auto auto auto;
}
</style>
