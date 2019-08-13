import github_axios from './github_axios'

export const githubService = {
  getContributors,
  getIssues
}

function getContributors(repo_name){
  // console.log(github_axios)
  return github_axios.get('/repos/' + repo_name + '/contributors')
}


function getIssues(repo_name){
  return github_axios.get('/repos/' + repo_name + '/issues')
}
