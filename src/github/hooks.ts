import { useState, useEffect } from 'react';
import { getRepo, getCommits, getLanguages } from './client';
import { ProjectStats } from './types';

export function useProjectStats(repoPath?: string) {
  const [stats, setStats] = useState<ProjectStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!repoPath) {
      setLoading(false);
      return;
    }

    // Extract repo string from full URL if needed
    let repo = repoPath;
    if (repo.includes('github.com/')) {
      repo = repo.split('github.com/')[1];
    }

    async function load() {
      setLoading(true);
      try {
        const [repoData, commitsData, languagesData] = await Promise.all([
          getRepo(repo),
          getCommits(repo),
          getLanguages(repo),
        ]);

        let status: ProjectStats['status'] = 'UNKNOWN';
        if (commitsData && commitsData.length > 0) {
          const lastCommitDate = new Date(commitsData[0].commit.author.date).getTime();
          const daysSinceLastCommit = (Date.now() - lastCommitDate) / (1000 * 60 * 60 * 24);
          
          if (daysSinceLastCommit < 30) {
            status = 'ACTIVE';
          } else if (daysSinceLastCommit < 180) {
            status = 'EVOLVING';
          } else {
            status = 'LEGACY';
          }
        }

        setStats({
          repo: repoData,
          commits: commitsData || [],
          languages: languagesData,
          status,
          commitCount: commitsData ? commitsData.length : 0,
        });
      } catch (err) {
        console.error('Failed to load project stats', err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [repoPath]);

  return { stats, loading };
}