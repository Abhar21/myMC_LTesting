import { useEffect, useRef, useCallback } from 'react';

interface ParallaxOptions {
  bgStrength?: number;
  orbStrength?: number;
  lerpFactor?: number;
}

/**
 * useParallax
 * Attaches a smooth mouse-driven (or gyroscope-driven) parallax effect
 * to the background and orb elements inside the hero section.
 */
export function useParallax(
  heroRef: React.RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) {
  const { bgStrength = 0.018, orbStrength = 0.012, lerpFactor = 0.04 } = options;

  const rafRef      = useRef<number>(0);
  const targetRef   = useRef({ x: 0, y: 0 });
  const currentRef  = useRef({ x: 0, y: 0 });

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = useCallback(() => {
    const cur    = currentRef.current;
    const target = targetRef.current;

    cur.x = lerp(cur.x, target.x, lerpFactor);
    cur.y = lerp(cur.y, target.y, lerpFactor);

    const hero = heroRef.current;
    if (!hero) { rafRef.current = requestAnimationFrame(tick); return; }

    const bg = hero.querySelector<HTMLElement>('.hero__bg');
    if (bg) {
      bg.style.transform = `translate(${cur.x * bgStrength}px, ${cur.y * bgStrength}px)`;
    }

    hero.querySelectorAll<HTMLElement>('.orb').forEach((orb, i) => {
      const dir    = i % 2 === 0 ? 1 : -1;
      const factor = orbStrength * (0.8 + i * 0.1);
      orb.style.transform = `translate(${cur.x * factor * dir}px, ${cur.y * factor}px)`;
    });

    rafRef.current = requestAnimationFrame(tick);
  }, [heroRef, bgStrength, orbStrength, lerpFactor]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isTouch = window.matchMedia('(hover: none)').matches;

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX - window.innerWidth  / 2;
      targetRef.current.y = e.clientY - window.innerHeight / 2;
    };

    const onDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      targetRef.current.x = Math.max(-40, Math.min(40, e.gamma)) * 4;
      targetRef.current.y = Math.max(-20, Math.min(20, e.beta - 30)) * 4;
    };

    if (!isTouch) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    } else {
      window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('deviceorientation', onDeviceOrientation);
    };
  }, [tick]);
}
