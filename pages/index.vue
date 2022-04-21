<template>
  <div>
    <a-button @click="logout">logout</a-button>
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
  methods: {
    ...mapActions('auth', ['logout']),
  },
}
</script>
