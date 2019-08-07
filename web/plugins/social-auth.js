import Vue from 'vue'
import VueAuthenticate from 'vue-authenticate'

Vue.use(VueAuthenticate, {
    providers: {
    github: {
      clientId: process.env.githubClientId,
      redirectUri: process.env.githubCallbackUrl // Your client app URL
    }
  }
})
