import GitHub from 'github-api';
const gh = new GitHub();
const user = gh.getUser('OinkIguana');
export const repos = user.listRepos();
