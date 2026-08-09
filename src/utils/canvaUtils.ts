/**
 * Canva Integration Utility Functions
 * Sanitizes Canva design URLs and handles embedding logic safely.
 */

/**
 * Extracts the unique Canva Design ID or Short Code from various Canva URL formats.
 * Example 1: https://www.canva.com/design/DAGfX2a1b0c/view -> "DAGfX2a1b0c"
 * Example 2: https://www.canva.com/d/NYMcUDjkcRI0dod -> "NYMcUDjkcRI0dod"
 */
export function extractDesignId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/(design|d)\/([A-Za-z0-9_-]+)/);
  return match ? match[2] : null;
}

/**
 * Normalizes and cleans a Canva URL for embedding.
 * Supports standard /design/ links and /d/ short links.
 */
export function cleanCanvaUrl(url: string): string {
  if (!url) return '';
  
  if (url.includes('/d/')) {
    const code = url.match(/\/d\/([A-Za-z0-9_-]+)/)?.[1];
    if (code) {
      return `https://www.canva.com/d/${code}?embed`;
    }
  }

  const designId = extractDesignId(url);
  if (designId) {
    return `https://www.canva.com/design/${designId}/view?embed`;
  }

  // Fallback cleanup if design ID match fails
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete('utm_content');
    parsed.searchParams.delete('utm_medium');
    parsed.searchParams.delete('utm_campaign');
    parsed.searchParams.delete('utm_source');
    parsed.searchParams.delete('share_button_id');
    
    if (!parsed.searchParams.has('embed')) {
      parsed.searchParams.append('embed', '');
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

/**
 * Validates whether a URL is a valid public Canva design URL that can be embedded.
 */
export function isCanvaEmbeddable(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const isCanvaDomain = url.includes('canva.com') || url.includes('canva.me');
  const hasPath = url.includes('/d/') || Boolean(extractDesignId(url));
  return isCanvaDomain && hasPath;
}

/**
 * Normalizes direct viewing URL for Canva (strips tracking, ensures canonical view link)
 */
export function cleanCanvaViewUrl(url: string): string {
  if (!url) return '';
  if (url.includes('/d/')) {
    const code = url.match(/\/d\/([A-Za-z0-9_-]+)/)?.[1];
    if (code) {
      return `https://www.canva.com/d/${code}`;
    }
  }
  const designId = extractDesignId(url);
  if (designId) {
    return `https://www.canva.com/design/${designId}/view`;
  }
  return url;
}
