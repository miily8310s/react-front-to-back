import { githubClient } from "./GitHubClient";

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const data = await githubClient.get(`/search/users?${params}`);
  return data.items;
};

export const getUserAndRepos = async (login: string) => {
  const [user, repos] = await Promise.all([
    githubClient.get(`/users/${login}`),
    githubClient.get(`/users/${login}/repos`),
  ]);

  return { user, repos };
};
