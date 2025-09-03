// GitHub API utility functions
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
  private: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

// Mock GitHub token - in production, this would come from environment variables
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

// Fetch user's public repositories
export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  if (!username.trim()) {
    return [];
  }

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add token if available (for higher rate limits)
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
      { headers }
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      if (response.status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out private repos and return top 5 by stars
    return repos
      .filter(repo => !repo.private)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

// Fetch user information
export async function fetchUserInfo(username: string): Promise<GitHubUser> {
  if (!username.trim()) {
    throw new Error('Username is required');
  }

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`,
      { headers }
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found');
      }
      if (response.status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user info:', error);
    throw error;
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Get language color (simplified version)
export function getLanguageColor(language: string | null): string {
  if (!language) return '#6b7280';
  
  const colors: Record<string, string> = {
    'JavaScript': '#f7df1e',
    'TypeScript': '#3178c6',
    'Python': '#3776ab',
    'Java': '#ed8b00',
    'C++': '#00599c',
    'C#': '#239120',
    'Go': '#00add8',
    'Rust': '#000000',
    'PHP': '#777bb4',
    'Ruby': '#cc342d',
    'Swift': '#fa7343',
    'Kotlin': '#7f52ff',
    'HTML': '#e34f26',
    'CSS': '#1572b6',
    'Vue': '#4fc08d',
    'React': '#61dafb',
    'Angular': '#dd0031',
    'Node.js': '#339933',
    'Docker': '#2496ed',
    'Shell': '#89e051',
    'PowerShell': '#012456',
    'R': '#276dc3',
    'Scala': '#dc322f',
    'Clojure': '#5881d8',
    'Haskell': '#5d4f85',
    'Elixir': '#4b275f',
    'Erlang': '#a90533',
    'Lua': '#000080',
    'Perl': '#39457e',
    'MATLAB': '#e16737',
    'Assembly': '#6e4c13',
    'C': '#a8b9cc',
    'Objective-C': '#438eff',
    'Dart': '#0175c2',
    'Julia': '#9558b2',
    'F#': '#378baa',
    'OCaml': '#3be133',
    'Pascal': '#e3f171',
    'Fortran': '#4d41b1',
    'COBOL': '#ff6d01',
    'Ada': '#02f88c',
    'Lisp': '#3fb68b',
    'Prolog': '#74283c',
    'Smalltalk': '#596706',
    'Tcl': '#e4cc98',
    'Vim script': '#199f4b',
    'Emacs Lisp': '#c065db',
    'TeX': '#3d6117',
    'Makefile': '#427819',
    'CMake': '#064f8c',
    'YAML': '#cb171e',
    'JSON': '#000000',
    'XML': '#005f9f',
    'Markdown': '#083fa1',
    'TOML': '#9c4221',
    'INI': '#080808',
    'Diff': '#000000',
    'Dockerfile': '#384d54',
    'Git Config': '#f14c28',
    'SVG': '#ff9900',
    'WebAssembly': '#654ff0',
    'Solidity': '#363636',
    'GraphQL': '#e10098',
    'Gherkin': '#5b2063',
    'Jupyter Notebook': '#da5b0b',
    'Rich Text Format': '#7b5bfa',
    'PostScript': '#da291c',
    'Assembly': '#6e4c13',
    'Batchfile': '#c1f12e',
    'CoffeeScript': '#244776',
    'Crystal': '#000100',
    'D': '#ba595e',
    'Elm': '#60b5cc',
    'F#': '#378baa',
    'Groovy': '#4298b8',
    'Hack': '#878787',
    'Handlebars': '#f7931e',
    'Haxe': '#df7900',
    'Jinja': '#a52a22',
    'Less': '#1d365d',
    'Nim': '#ffc200',
    'Nix': '#7e7eff',
    'Nu': '#c9df40',
    'Objective-C++': '#6866fb',
    'Pascal': '#e3f171',
    'Pug': '#a86454',
    'PureScript': '#1d222d',
    'Roff': '#ecdebe',
    'Sass': '#cf649a',
    'Stylus': '#ff6347',
    'Twig': '#c1d026',
    'Vue': '#4fc08d',
    'WebIDL': '#8b9dc3',
    'XSLT': '#eb8ceb',
    'Zig': '#f7a41d'
  };

  return colors[language] || '#6b7280';
}
