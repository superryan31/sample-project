<template>
      <v-layout>
        <v-flex>
            <template>
                <v-simple-table>
                    <thead>
                    <tr>
                        <th class="text-left">Image</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                        <td>
                            <v-avatar size="70px">
                                <img
                                        src="/v.png"
                                        alt="Vuetify.js"
                                >
                            </v-avatar>

                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </template>
        </v-flex>
      </v-layout>

</template>
<script>
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
      this.getIssueList();
    },
    methods: {
      getIssueList() {
        let githubUrl = localStorage.getItem('githubUrl')
        let githubAuthorizeToken = localStorage.getItem('githubAuthorizeToken')
        let url = 'issues?github_token='+githubAuthorizeToken+'&github_repository='+githubUrl;
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

      }

    }
  }
</script>
