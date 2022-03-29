<template>
  <div>home
    <br />
    {{res}}
  </div>
</template>

<script>
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
  }
}
</script>
