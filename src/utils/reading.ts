import type { TOCItem } from '../types';

export function calculateReadingTime(wordCount: number): number {
  if (!wordCount || wordCount === 0) return 0;
  return Math.ceil(wordCount / 200);
}

export function getWordCount(text: string): number {
  if (!text || text.trim().length === 0) return 0;
  return text.trim().split(/\s+/).length;
}

export function generateTOC(htmlContent: string): TOCItem[] {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const headings = Array.from(tempDiv.querySelectorAll('h2'));

  return headings.map(
    (heading, index): TOCItem => ({
      id: `heading-${index}`,
      text: heading.textContent || '',
      level: 2,
    })
  );
}
