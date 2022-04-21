<template>
  <div>
    Auth Layout
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
}
</script>

<style></style>
