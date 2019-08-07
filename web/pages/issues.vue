<template>
      <v-layout>
        <v-flex>

<!--          <blockquote class="blockquote">-->
<!--            &#8220;First, solve the problem. Then, write the code.&#8221;-->
<!--            <footer>-->
<!--              <small>-->
<!--                <em>&mdash;John Johnson</em>-->
<!--              </small>-->
<!--            </footer>-->
<!--          </blockquote>-->
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
        this.$axios.get('issues').then(
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
