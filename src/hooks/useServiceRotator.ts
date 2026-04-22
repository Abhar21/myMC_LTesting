import { useState, useEffect, useRef } from 'react';

const SERVICES = [
  'Wedding',
  'Birthday',
  'Anniversary',
  'Baby Shower',
  'Engagement',
  'Corporate Event',
  'Reception',
  'Celebration',
] as const;

export type ServiceWord = (typeof SERVICES)[number];

interface UseServiceRotatorReturn {
  word: ServiceWord;
  phase: 'idle' | 'exiting' | 'entering';
}

/**
 * useServiceRotator
 * Cycles through service words with enter/exit animation phases.
 * @param intervalMs   How long each word is shown (default 1350 ms)
 * @param startDelayMs How long to wait before first cycle (default 4200 ms)
 */
export function useServiceRotator(
  intervalMs = 1350,
  startDelayMs = 4200,
): UseServiceRotatorReturn {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const swappingRef = useRef(false);
  const startedRef  = useRef(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      startedRef.current = true;

      const cycle = () => {
        if (swappingRef.current) return;
        swappingRef.current = true;

        // 1. Exit phase
        setPhase('exiting');

        // 2. After exit animation (~350 ms), flip word + enter phase
        setTimeout(() => {
          setIndex(prev => (prev + 1) % SERVICES.length);
          setPhase('entering');

          // 3. After enter animation (~450 ms), go idle
          setTimeout(() => {
            setPhase('idle');
            swappingRef.current = false;
          }, 480);
        }, 370);
      };

      const intervalId = setInterval(cycle, intervalMs);
      return () => clearInterval(intervalId);
    }, startDelayMs);

    return () => clearTimeout(startTimer);
  }, [intervalMs, startDelayMs]);

  return { word: SERVICES[index], phase };
}
