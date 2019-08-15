import github_axios from './github_axios'

export const githubService = {
  getAssignees,
  getIssues
}

function getAssignees(repo_name){
  return github_axios.get('/repos/' + repo_name + '/assignees')
}


function getIssues(repo_name){
  return github_axios.get('/repos/' + repo_name + '/issues')
}
