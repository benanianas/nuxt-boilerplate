<template>
  <div>
    auth
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
}
</script>

<style></style>
