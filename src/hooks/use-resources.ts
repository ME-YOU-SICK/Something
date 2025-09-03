"use client";

import { useState, useEffect } from 'react';
import { ResourceMetadata, fetchMultipleResources } from '@/lib/metadata-fetcher';

export function useResources() {
  const [resources, setResources] = useState<ResourceMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadResources() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch the URLs from the txt file
        const response = await fetch('/resources-urls.txt');
        const text = await response.text();
        
        // Parse URLs from the text file
        const urls = text
          .split('\n')
          .map(line => line.trim())
          .filter(line => line && line.startsWith('http'));
        
        // Fetch metadata for all URLs
        const resourcesData = await fetchMultipleResources(urls);
        
        setResources(resourcesData);
      } catch (err) {
        console.error('Error loading resources:', err);
        setError('Failed to load resources');
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

  return { resources, loading, error };
}
