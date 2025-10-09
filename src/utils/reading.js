export function calculateReadingTime(text) {
  if (!text || text.trim().length === 0) return 0;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function getWordCount(text) {
  if (!text || text.trim().length === 0) return 0;
  return text.trim().split(/\s+/).length;
}

export function generateTOC(htmlContent) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const headings = Array.from(tempDiv.querySelectorAll('h2'));
  return headings.map((heading, index) => ({
    id: `heading-${index}`,
    text: heading.textContent,
    level: 2
  }));
}
