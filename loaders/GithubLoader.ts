interface Props {
  org: string;
  repo: string;
}

// Importing the necessary types
export type GitHubRepoSummary = {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
};

async function fetchGitHu bRepoSummary(
  org: string,
  repo: string,
): Promise<GitHubRepoSummary> {
  const apiUrl = `https://api.github.com/repos/${org}/${repo}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Error fetching repo: ${response.statusText}`);
  }

  const data = await response.json();

  const repoSummary: GitHubRepoSummary = {
    full_name: data.full_name,
    description: data.description,
    html_url: data.html_url,
    stargazers_count: data.stargazers_count,
    watchers_count: data.watchers_count,
    forks_count: data.forks_count,
    open_issues_count: data.open_issues_count,
    language: data.language,
  };

  return repoSummary;
}

export default async function loader(
  { org, repo }: Props,
): Promise<GitHubRepoSummary> {
  return await fetchGitHubRepoSummary(org, repo);
}
