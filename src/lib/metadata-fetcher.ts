export interface ResourceMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  domain: string;
}

// Function to extract domain from URL
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

// Function to get favicon URL
export function getFaviconUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.hostname}/favicon.ico`;
  } catch {
    return '/default-favicon.png';
  }
}

// Function to decode HTML entities
function decodeHtmlEntities(text: string): string {
  // Create a temporary DOM element to decode HTML entities
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// Function to clean and normalize text
function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\n\s*\n/g, ' ') // Replace multiple newlines with single space
    .trim();
}

// Function to fetch metadata from a URL
export async function fetchResourceMetadata(url: string): Promise<ResourceMetadata> {
  try {
    // Try multiple CORS proxies for better reliability
    const proxies = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      `https://cors-anywhere.herokuapp.com/${url}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];
    
    let html = '';
    let success = false;
    
    for (const proxyUrl of proxies) {
      try {
        const response = await fetch(proxyUrl, {
          headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        
        if (response.ok) {
          html = await response.text();
          success = true;
          break;
        }
      } catch (proxyError) {
        console.warn(`Proxy failed for ${url}:`, proxyError);
        continue;
      }
    }
    
    if (!success) {
      throw new Error('All proxies failed');
    }
    
    // Parse HTML to extract metadata
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descriptionMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                           html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
    const imageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i);
    
    // Decode HTML entities and clean text
    const rawTitle = titleMatch ? titleMatch[1].trim() : extractDomain(url);
    const rawDescription = descriptionMatch ? descriptionMatch[1].trim() : 'Visit this resource to learn more';
    
    const title = cleanText(decodeHtmlEntities(rawTitle)).substring(0, 100);
    const description = cleanText(decodeHtmlEntities(rawDescription)).substring(0, 200);
    const image = imageMatch ? imageMatch[1] : getFaviconUrl(url);
    
    return {
      title,
      description,
      image,
      url,
      domain: extractDomain(url)
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${url}:`, error);
    
    // Return fallback metadata with better defaults
    const domain = extractDomain(url);
    const fallbackDescriptions: { [key: string]: string } = {
      'react.dev': 'Official React documentation and guides',
      'javascript.info': 'Modern JavaScript tutorial and reference',
      'developer.mozilla.org': 'MDN Web Docs - Web development resources',
      'github.com': 'GitHub - Code hosting and collaboration platform',
      'stackoverflow.com': 'Stack Overflow - Developer Q&A community',
      'freecodecamp.org': 'FreeCodeCamp - Learn to code for free',
      'codecademy.com': 'Codecademy - Interactive coding lessons',
      'udemy.com': 'Udemy - Online learning platform',
      'coursera.org': 'Coursera - Online courses from top universities',
      'figma.com': 'Figma - Collaborative design tool',
      'aws.amazon.com': 'Amazon Web Services - Cloud computing platform',
      'docker.com': 'Docker - Containerization platform',
      'kubernetes.io': 'Kubernetes - Container orchestration platform'
    };
    
    return {
      title: domain,
      description: fallbackDescriptions[domain] || 'Visit this resource to learn more',
      image: getFaviconUrl(url),
      url,
      domain
    };
  }
}

// Function to fetch multiple resources
export async function fetchMultipleResources(urls: string[]): Promise<ResourceMetadata[]> {
  const promises = urls.map(url => fetchResourceMetadata(url));
  const results = await Promise.allSettled(promises);
  
  return results
    .filter((result): result is PromiseFulfilledResult<ResourceMetadata> => result.status === 'fulfilled')
    .map(result => result.value);
}