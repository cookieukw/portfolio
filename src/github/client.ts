import { GitHubRepo, GitHubCommit, GitHubLanguages } from './types';

const CACHE_PREFIX = 'gh_cache_';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour

async function fetchWithCache<T>(key: string, url: string): Promise<T | null> {
  try {
    const cachedItem = localStorage.getItem(CACHE_PREFIX + key);
    if (cachedItem) {
      const { data, timestamp } = JSON.parse(cachedItem);
      if (Date.now() - timestamp < CACHE_EXPIRY) {
        return data as T;
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 403 || response.status === 404) {
        return null;
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem(
      CACHE_PREFIX + key,
      JSON.stringify({ data, timestamp: Date.now() })
    );

    return data;
  } catch (err) {
    console.error('Error fetching GitHub data:', err);
    return null;
  }
}

export async function getRepo(repo: string): Promise<GitHubRepo | null> {
  return fetchWithCache<GitHubRepo>(`repo_${repo}`, `https://api.github.com/repos/${repo}`);
}

export async function getCommits(repo: string): Promise<GitHubCommit[]> {
  const commits = await fetchWithCache<GitHubCommit[]>(`commits_${repo}`, `https://api.github.com/repos/${repo}/commits?per_page=100`);
  return commits || [];
}

export async function getLanguages(repo: string): Promise<GitHubLanguages | null> {
  return fetchWithCache<GitHubLanguages>(`langs_${repo}`, `https://api.github.com/repos/${repo}/languages`);
}
