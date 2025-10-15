import { useState } from 'react';
import styles from './CodeBlock.module.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const lines = code.split('\n');
  const showLineNumbers = lines.length > 3;
  
  return (
    <div className={styles.wrapper}>
      <button 
        className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      
      <pre className={styles.pre}>
        <code className={`${styles.code} ${language ? `language-${language}` : ''}`}>
          {showLineNumbers ? (
            <div className={styles.lineNumbersWrapper}>
              <div className={styles.lineNumbers}>
                {lines.map((_, i) => (
                  <div key={i} className={styles.lineNumber}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className={styles.codeContent}>
                {lines.map((line, i) => (
                  <div key={i} className={styles.line}>
                    {line || '\n'}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            code
          )}
        </code>
      </pre>
    </div>
  );
}
