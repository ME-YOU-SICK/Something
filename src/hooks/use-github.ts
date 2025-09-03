import { useState, useEffect, useCallback } from 'react';
import { fetchUserRepos, fetchUserInfo, GitHubRepo, GitHubUser } from '@/lib/github-api';

interface UseGitHubReturn {
  repos: GitHubRepo[];
  userInfo: GitHubUser | null;
  loading: boolean;
  error: string | null;
  fetchRepos: (username: string) => Promise<void>;
  fetchUser: (username: string) => Promise<void>;
  clearError: () => void;
}

export function useGitHub(): UseGitHubReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [userInfo, setUserInfo] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async (username: string) => {
    if (!username.trim()) {
      setRepos([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userRepos = await fetchUserRepos(username);
      setRepos(userRepos);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch repositories';
      setError(errorMessage);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUser = useCallback(async (username: string) => {
    if (!username.trim()) {
      setUserInfo(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = await fetchUserInfo(username);
      setUserInfo(user);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch user info';
      setError(errorMessage);
      setUserInfo(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    repos,
    userInfo,
    loading,
    error,
    fetchRepos,
    fetchUser,
    clearError,
  };
}
