<template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save()">
        <v-layout align-center justify-center>

            <v-flex xs12 sm8 md6 lg4>
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
                                        v-model="setting.project_start_date"
                                        label="プロジェクト開始日"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="setting.project_start_date"></v-date-picker>
                        </v-menu>

                        <v-text-field
                                name="githubAuthorizeToken"
                                label="GitHub Authorize Token"
                                id="githubAuthorizeToken"
                                type="githubAuthorizeToken"
                                v-model="setting.github_token" readonly
                                :rules="rules.githubAuthorizeTokenRules">
                        </v-text-field>
                        <v-btn small tile outlined @click="getGitHubToken()">
                            <v-icon left>mdi-github-circle</v-icon>
                            Get GitHub Token
                        </v-btn>
                        <v-text-field
                                name="githubUrl"
                                label="対象Github URL"
                                id="githubUrl"
                                type="githubUrl"
                                v-model="setting.github_repository"
                                :rules="rules.githubUrlRules">
                        </v-text-field>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn align="right" type="submit" color="primary" :disabled="!valid">
                            登録
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
  import { RegisterationRules, SettingRules } from '../helpers/validation-rules'
  import { OAuth } from 'oauthio-web'

  export default {
    middleware: 'auth',
    name: 'setting',
    data: () => ({
      loading: false,
      responseError: '',
      setting: {
        github_token: '',
        github_repository: '',
        project_start_date: new Date().toISOString().substr(0, 10)
      },
      menu: false,
      valid: true,
      rules: new SettingRules()
    }),
    created() {
      OAuth.initialize(process.env.outhPublicKey)
      this.getExistingSetting()
    },
    methods: {
      getGitHubToken() {
        OAuth.popup('github')
          .done(res => {
            console.log(res.access_token)
            this.setting.github_token = res.access_token
          })
          .fail(err => {
            //todo when the OAuth flow failed
          })
      },
      getExistingSetting(){
        this.$axios.get('user-project-setting').then(
          res => {
            console.log(res);
            if (res.data) {
              this.setting = res.data;
            }
          })
          .catch(err => {
            console.log(err);
          });

      },
      async save() {
        if (!this.$refs.form.validate()) {
          return
        }
        this.loading = true
        this.$store.dispatch('saveSetting', this.setting)
          .then(() => this.$router.push('/'))
          .catch(err => {
            if (err.response.data.error) {
              this.responseError = err.response.data.error
            } else {
              this.responseError = err.response.data.errors
            }
          })
          .finally(() => this.loading = false)

      }

    }
  }
</script>

