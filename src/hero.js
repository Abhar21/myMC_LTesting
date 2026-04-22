/**
 * myMOOMENT — Hero Section JS
 * Handles: service word rotation, mouse parallax, resize optimisations
 */

'use strict';

/* ─── Service word rotation ─────────────────────────────── */
const SERVICES = [
  'Wedding',
  'Birthday',
  'Anniversary',
  'Baby Shower',
  'Engagement',
  'Corporate Event',
  'Reception',
  'Celebration',
];

let serviceIndex = 0;
let isSwapping = false;

function swapServiceWord() {
  if (isSwapping) return;
  isSwapping = true;

  const wordEl = document.getElementById('service-word');
  if (!wordEl) return;

  // EXIT animation
  wordEl.classList.add('exiting');

  wordEl.addEventListener('animationend', function onExit() {
    wordEl.removeEventListener('animationend', onExit);
    wordEl.classList.remove('exiting');

    // Update text
    serviceIndex = (serviceIndex + 1) % SERVICES.length;
    wordEl.textContent = SERVICES[serviceIndex];

    // ENTER animation
    wordEl.classList.add('entering');

    wordEl.addEventListener('animationend', function onEnter() {
      wordEl.removeEventListener('animationend', onEnter);
      wordEl.classList.remove('entering');
      isSwapping = false;
    }, { once: true });

  }, { once: true });
}

/* Start cycling after content has appeared (~4 s) */
setTimeout(() => {
  const interval = setInterval(swapServiceWord, 1350);
  // Store reference in case we ever need to clear
  window._momentWordInterval = interval;
}, 4200);


/* ─── Subtle mouse-driven parallax ──────────────────────── */
const PARALLAX_STRENGTH_BG  = 0.018;   // very subtle
const PARALLAX_STRENGTH_ORB = 0.012;

let rafId = null;
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function updateParallax() {
  currentX = lerp(currentX, targetX, 0.04);
  currentY = lerp(currentY, targetY, 0.04);

  const bgEl = document.querySelector('.hero__bg');
  if (bgEl) {
    bgEl.style.transform = `translate(${currentX * PARALLAX_STRENGTH_BG}px, ${currentY * PARALLAX_STRENGTH_BG}px)`;
  }

  // Orbs drift slightly more
  document.querySelectorAll('.orb').forEach((orb, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    const factor = PARALLAX_STRENGTH_ORB * (0.8 + i * 0.1);
    orb.style.transform = `translate(${currentX * factor * dir}px, ${currentY * factor}px)`;
  });

  rafId = requestAnimationFrame(updateParallax);
}

function onMouseMove(e) {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  targetX = e.clientX - cx;
  targetY = e.clientY - cy;
}

/* Only enable parallax on non-touch devices */
function initParallax() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) return;

  document.addEventListener('mousemove', onMouseMove, { passive: true });
  rafId = requestAnimationFrame(updateParallax);
}

/* ─── Gyro tilt for mobile ──────────────────────────────── */
function initGyro() {
  if (typeof DeviceOrientationEvent === 'undefined') return;

  const isTouch = window.matchMedia('(hover: none)').matches;
  if (!isTouch) return;

  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma === null || e.beta === null) return;
    // gamma = left-right tilt, beta = front-back tilt
    targetX = Math.max(-40, Math.min(40, e.gamma)) * 4;
    targetY = Math.max(-20, Math.min(20, e.beta - 30)) * 4;
  }, { passive: true });

  rafId = requestAnimationFrame(updateParallax);
}

/* ─── Boot ───────────────────────────────────────────────── */
function init() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    initParallax();
    initGyro();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
