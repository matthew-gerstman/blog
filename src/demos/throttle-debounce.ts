export function throttle<T extends (...args: any[]) => any>(
  func: T,
  timeout: number
): (...args: Parameters<T>) => void {
  let ready: boolean = true;
  return (...args: Parameters<T>) => {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  timeout: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
