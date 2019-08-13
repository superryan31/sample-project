<template>
    <v-layout>
        <v-flex>
            <template>
                <v-tabs grow color="primary">
                    <v-tab>
                        1 Month
                    </v-tab>
                    <v-tab>
                        So Far
                    </v-tab>
                    <v-tab-item
                            v-for="n in 2"
                            :key="n"
                            class="pa-3"> <!--  tab details-->
                        <v-row>
                            <v-col md="4"  v-for="n in 5"
                                   :key="n">
                                <v-avatar
                                        tile
                                        size="60"
                                >
                                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">

                                </v-avatar>
                                岩本稜平
                                <v-row>
                                    <v-col v-for="i in 3"
                                           :key="i">
                                        <v-card
                                                class="mx-auto"
                                                outlined>

                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title> スプリント会議の開催 this is long contentスプリント会議の開催 this is long content</v-list-item-title>
                                                </v-list-item-content>
                                                <v-avatar color="primary" class="ml-1 mb-1" size="20">
                                                    <span class="caption">3</span>
                                                </v-avatar>
                                            </v-list-item>

                                            <div class="text-left">
                                                <v-chip x-small color="#d73a4a" class="ma-1">
                                                    bug
                                                </v-chip>
                                                <v-chip x-small>
                                                    duplicate
                                                </v-chip>
                                                <v-chip x-small color="#0075ca" class="ma-1">
                                                    documentation
                                                </v-chip>
<!--                                                <v-chip class="ma-1" x-small color="#008672">-->
<!--                                                    help wanted-->
<!--                                                </v-chip>-->
                                            </div>

                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                    </v-tab-item>
                </v-tabs>
            </template>

        </v-flex>
    </v-layout>

</template>
<script>
  import { githubService } from '../services/GitHubService'

  export default {
    middleware: 'auth',
    data() {
      return {
        issueList: [],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159
          },
          {
            name: 'Ice cream sandwich',
            calories: 237
          }]
      }
    },
    created() {
      this.getIssueList()
    },
    methods: {
      getIssueList() {
        let github_token = this.$store.getters.github_token
        let github_repository = this.$store.getters.github_repository
        let url = 'issues?github_token=' + github_token + '&github_repository=' + github_repository
        this.$axios.get(url).then(
          res => {
            console.log(res);
            if (res.data) {
              this.issueList = res.data;
            }
          })
          .catch(err => {
            console.log(err);
          });

        githubService.getIssues(github_repository)
          .then(response => {
            console.log(response)
          })
      }

    }
  }
</script>
