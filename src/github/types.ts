export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  language: string;
}

export interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
}

export interface GitHubLanguages {
  [key: string]: number;
}

export interface ProjectStats {
  repo: GitHubRepo | null;
  commits: GitHubCommit[];
  languages: GitHubLanguages | null;
  status: 'ACTIVE' | 'EVOLVING' | 'LEGACY' | 'UNKNOWN';
  commitCount: number;
}