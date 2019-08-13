<template>
    <v-layout align-center justify-center class="mt-5">

        <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
                <v-card-text>
                    <span class="red--text" v-if="responseError">{{responseError}}</span>
                    <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-model="projectStartDate"
                                    label="プロジェクト開始日"
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="projectStartDate"></v-date-picker>
                    </v-menu>

                    <v-text-field
                            name="githubAuthorizeToken"
                            label="GitHub Authorize Token"
                            id="githubAuthorizeToken"
                            type="githubAuthorizeToken"
                            v-model="githubAuthorizeToken">
                    </v-text-field>
                    <v-btn small tile outlined @click="getGitHubToken()">
                        <v-icon left>mdi-github-circle</v-icon> Get GitHub Token
                    </v-btn>
                    <v-text-field
                            name="githubUrl"
                            label="対象Github URL"
                            id="githubUrl"
                            type="githubUrl"
                            v-model="githubUrl">
                    </v-text-field>

                </v-card-text>
                <v-card-actions>
                    <v-btn block type="submit" color="primary" :loading="loading" :disabled="!valid">
                       Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import { RegisterationRules } from '../helpers/validation-rules'
  import { OAuth } from 'oauthio-web'

  export default {
    middleware: 'auth',
    name: 'setting',
    data: () => ({
      loading: false,
      responseError: '',
      projectStartDate: new Date().toISOString().substr(0, 10),
      menu: false,
      githubUrl: '',
      githubAuthorizeToken: '',
      valid: true,
      rules: new RegisterationRules()
    }),
    created() {
      OAuth.initialize(process.env.outhPublicKey);
    },
    methods: {
      getGitHubToken() {
        OAuth.popup('github')
          .done(res => {
            console.log(res.access_token);
            console.log(res);
          })
          .fail(err => {
            //todo when the OAuth flow failed
          });
      }

    }
  }
</script>

