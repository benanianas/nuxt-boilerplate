<template>
    <div>
        Main Layout
        <Nuxt />
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
}
</script>

<style></style>
