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
                            <v-col md="4"  v-for="(assignee, index) in assignees" :key="index">
                                <v-avatar
                                        tile
                                        size="60">

                                    <img :src="assignee.avatar_url" alt="avatar">

                                </v-avatar>
                                {{assignee.login}}
                                <v-row>
                                    <v-col v-for="(issue, index) in assignee.issueList"
                                           :key="index">
                                        <v-card
                                                class="mx-auto"
                                                outlined>

                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title> {{issue.title}}</v-list-item-title>
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
    middleware: 'local_and_github_auth',
    data() {
      return {
        issueList: [],
        assignees: [],
        github_token: this.$store.getters.github_token,
        github_repository: this.$store.getters.github_repository
      }
    },
    created() {
      // this.getIssueList()
      this.getAllAssignee()
    },
    methods: {
      getIssueList() {
        githubService.getIssues(this.github_repository)
          .then(response => {
            let issueList = response.data;
            for(let assign in this.assignees){
              let issueListForEachAssignee = [];
              for(let issue in issueList){
                for(let innerAssignee in issue.assignees){
                  console.log('here')
                  if(assign.login == innerAssignee.login){
                    issueListForEachAssignee.push(issue);
                    assign.issueList = issueListForEachAssignee;
                    break;
                  }
                }
              }
            }
            console.log(this.assignees)
          })
      },
      getAllAssignee() {
        githubService.getAssignees(this.github_repository)
          .then(response => {
            this.assignees = response.data
            this.getIssueList();
          })
      }

    }
  }
</script>
