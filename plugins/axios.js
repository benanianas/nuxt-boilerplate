export default function ({ $axios, env }) {
  $axios.setBaseURL(
    env.dev ? env.baseUrl + '/v1' : `http://${window.location.hostname}:3000/v1`
  )

  $axios.onRequest((config) => {

    const accessToken = localStorage.getItem('accessToken')
    if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  })

  let isAlreadyFetchingAccessToken = false
  let subscribers = []

  $axios.onResponseError((error) => {
    const { config, response } = error
    const originalRequest = config

    if (
      response &&
      response.status === 401 &&
      response.config.url !== '/auth/login'
    ) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true
        $axios.post('/auth/refresh-tokens', {
            refreshToken: localStorage.getItem('refreshToken'),
          }).then((r) => {
          isAlreadyFetchingAccessToken = false

          localStorage.setItem('accessToken' ,r.data.access.token)
          localStorage.setItem('refreshToken' ,r.data.refresh.token)

          subscribers = subscribers.filter(callback => callback(r.data.access.token))
        })
      }
      const retryOriginalRequest = new Promise((resolve) => {
        subscribers.push((accessToken) => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`
          resolve($axios(originalRequest))
        })
      })
      return retryOriginalRequest
    }
    return Promise.reject(error)
  })
}
