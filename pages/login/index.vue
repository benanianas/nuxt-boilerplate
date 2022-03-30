<template>
    <div>
        login
        <b-button @click="log">login</b-button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'IndexPage',
    layout: 'auth',
    methods: {
        ...mapActions('auth', ['login']),
        async log() {
            await this.login({
                email: 'fake@example.com',
                password: 'password1',
            })
        },
    },
}
</script>
