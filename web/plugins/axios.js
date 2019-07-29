export default function({$axios,$auth, redirect,store}){
  $axios.onRequest( config => {
    console.log('making request to '+ config.url);
    if (store.state.token) {
      config.headers.common['Authorization'] = `${store.state.token}`
    }
  })

  $axios.onResponse(response => {
    if(response.headers.authorization) {
      let token = response.headers.authorization;
      console.log($axios)
      $axios.setToken(token);
    }
    console.log($auth)
  })

}
