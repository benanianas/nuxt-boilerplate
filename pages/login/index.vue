<template>
  <div>login

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'auth',

  async created() {
    const res = await this.$axios.post('/auth/login',{
    email: "fake@example.com",
    password: "password1"
  });
    console.log(res.data.tokens);
    localStorage.setItem('accessToken', res.data.tokens.access.token);
    localStorage.setItem('refreshToken', res.data.tokens.refresh.token);
  }
}
</script>
