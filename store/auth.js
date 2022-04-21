const state = () => ({
    isLoggedIn: JSON.parse(localStorage.getItem('LoggedIn')) || false,
})

const getters = {}

const actions = {
    async login({ commit }, payload) {
        localStorage.setItem('LoggedIn', true)
        localStorage.setItem('accessToken', 'access')
        localStorage.setItem('refreshToken', 'refresh')
        this.$router.go('/')
        // try {
        //     const response = await this.$axios.post('/auth/login', payload)
        //     commit('LOGIN', response.data)
        //     this.$router.push('/')
        // } catch (error) {
        //     console.log(error)
        // }
    },
    logout({ commit }) {
        commit('LOGOUT')
        this.$router.go('/login')
    },
}

const mutations = {
    LOGIN(state, payload) {
        state.isLoggedIn = true
        localStorage.setItem('LoggedIn', true)
        localStorage.setItem('accessToken', payload.tokens.access.token)
        localStorage.setItem('refreshToken', payload.tokens.refresh.token)
    },
    LOGOUT(state) {
        state.isLoggedIn = false
        localStorage.setItem('LoggedIn', false)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    },
}

export { state, getters, actions, mutations }
