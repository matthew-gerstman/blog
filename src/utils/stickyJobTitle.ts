export interface StickyJobData {
  title: string;
  color: string;
  visible: boolean;
}

const STICKY_JOB_EVENT = 'stickyJobTitle';

/**
 * Emit a sticky job title event that the Header can listen to
 */
export function emitStickyJobTitle(data: StickyJobData): void {
  const event = new CustomEvent<StickyJobData>(STICKY_JOB_EVENT, {
    detail: data,
  });
  window.dispatchEvent(event);
}

/**
 * Listen for sticky job title events
 * Returns cleanup function to remove the listener
 */
export function onStickyJobTitle(
  callback: (data: StickyJobData) => void
): () => void {
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<StickyJobData>;
    callback(customEvent.detail);
  };

  window.addEventListener(STICKY_JOB_EVENT, handler);

  return () => {
    window.removeEventListener(STICKY_JOB_EVENT, handler);
  };
}

/**
 * Clear the sticky job title
 */
export function clearStickyJobTitle(): void {
  emitStickyJobTitle({
    title: '',
    color: '',
    visible: false,
  });
}
