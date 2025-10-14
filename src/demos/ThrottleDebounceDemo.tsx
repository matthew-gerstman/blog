import { useState, useCallback } from 'react';
import { throttle, debounce } from './throttle-debounce';
import styles from './ThrottleDebounceDemo.module.css';

const TIMEOUT = 250;

export function BasicDemo() {
  const [numSpells, setNumSpells] = useState(0);
  const castSpell = useCallback(() => setNumSpells((n) => n + 1), []);

  return (
    <div className={styles.demo}>
      <div className={styles.counter}>{numSpells} Spells Cast!</div>
      <button onClick={castSpell} className={styles.button}>
        Cast Spell!
      </button>
    </div>
  );
}

export function ThrottleDemo() {
  const [numSpells, setNumSpells] = useState(0);
  const castSpell = useCallback(() => setNumSpells((n) => n + 1), []);
  const castSpellThrottled = useCallback(throttle(castSpell, TIMEOUT), [
    castSpell,
  ]);

  return (
    <div className={styles.demo}>
      <div className={styles.counter}>{numSpells} Spells Cast!</div>
      <div className={styles.buttons}>
        <button onClick={castSpell} className={styles.button}>
          Cast Spell!
        </button>
        <button onClick={castSpellThrottled} className={styles.buttonThrottled}>
          Cast Spell Throttled!
        </button>
      </div>
    </div>
  );
}

export function DebounceDemo() {
  const [numSpells, setNumSpells] = useState(0);
  const castSpell = useCallback(() => setNumSpells((n) => n + 1), []);
  const castSpellDebounced = useCallback(debounce(castSpell, TIMEOUT), [
    castSpell,
  ]);

  return (
    <div className={styles.demo}>
      <div className={styles.counter}>{numSpells} Spells Cast!</div>
      <div className={styles.buttons}>
        <button onClick={castSpell} className={styles.button}>
          Cast Spell!
        </button>
        <button onClick={castSpellDebounced} className={styles.buttonDebounced}>
          Cast Spell Debounced!
        </button>
      </div>
    </div>
  );
}
