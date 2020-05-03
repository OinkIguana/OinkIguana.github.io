import GitHub from 'github-api';
const gh = new GitHub();
const user = gh.getUser('foxfriends');
export const repos = user.listRepos().then(_ => _.data);
