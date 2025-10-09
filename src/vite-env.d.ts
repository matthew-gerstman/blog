/// <reference types="vite/client" />

interface Window {
  hljs?: {
    highlightElement: (element: Element) => void;
  };
}
