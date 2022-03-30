<template>
  <div>home
    <br />
    {{res}}
    <br />
    <b-button @click="logout">logout</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'main',
  data(){
    return {
      res: null,
    }
  },
  async created(){
    const res = await this.$axios.get('users')
    this.res = res.data.results[0];
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>
