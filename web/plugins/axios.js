export default function({$axios, store}, context){
  $axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:3000';
  $axios.onRequest( config => {
    // added authorization header to subsequence http requests
    if (store.state.token) {
      config.headers.common['Authorization'] = `${store.state.token}`
    }
  })
}
