export default function({$axios,$auth, redirect,store}){
  $axios.onRequest( config => {
    console.log('making request to '+ config.url);
    if (store.state.token) {
      config.headers.common['Authorization'] = `Bearer ${store.state.token}`

    }
  })

  $axios.onResponse(response => {
    if(response.headers.authorization) {
      const token = response.headers.authorization.split('Bearer ');
      store.state.token=response.headers.authorization;
    }
    console.log($auth)
  })
  $axios.onError(error=>{
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
