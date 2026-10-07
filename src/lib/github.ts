import { cacheLife } from "next/cache";

const repoPathPattern = /^https:\/\/github\.com\/([^/]+\/[^/#]+)/;

function requestHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  // Build machines share IPs, so unauthenticated calls hit GitHub's 60/hour limit quickly.
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getStarCount(repoUrl: string): Promise<number | null> {
  "use cache";
  cacheLife("hours");

  const repoPath = repoUrl.match(repoPathPattern)?.[1];
  if (!repoPath) return null;

  try {
    const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: requestHeaders(),
    });
    if (!response.ok) return null;
    const repo: { stargazers_count?: number } = await response.json();
    return repo.stargazers_count ?? null;
  } catch {
    return null;
  }
}
