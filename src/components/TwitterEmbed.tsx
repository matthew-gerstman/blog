import { useEffect } from 'react';

// Load Twitter embed script
export function TwitterEmbed() {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('twitter-wjs')) {
      // Script exists, just process widgets
      if ((window as any).twttr?.widgets) {
        (window as any).twttr.widgets.load();
      }
      return;
    }

    // Add Twitter embed script
    const script = document.createElement('script');
    script.id = 'twitter-wjs';
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup is handled by Twitter script
    };
  }, []);

  return null;
}
