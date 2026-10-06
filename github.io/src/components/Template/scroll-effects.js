import React, { useEffect, useRef } from 'react';

const revealSelector = [
  '[data-reveal]', '.post > header', '.post > p', '.markdown > div > *',
  '.cell-container', '.degree-container', '.job', '.skills', '.courses',
  '#sidebar > section',
].join(', ');

const sceneTones = [
  ['.home-hero', 'clay'], ['#contents', 'sage'], ['.home-contact', 'clay'],
  ['.education', 'sage'], ['.experience', 'clay'], ['.skills', 'ochre'], ['.courses', 'sage'],
];

const ScrollEffects = () => {
  const layer = useRef(null);

  useEffect(() => {
    const scene = layer.current;
    const root = scene.parentElement;
    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia?.('(hover: hover) and (pointer: fine)');
    const observed = new Set();
    let frame = 0;
    let observer;
    let toneObserver;
    let pointerX = 0;
    let pointerY = 0;

    const update = () => {
      frame = 0;
      if (!scene.isConnected) return;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      root.style.setProperty('--scroll-progress', progress);
      if (!motion?.matches) {
        root.style.setProperty('--scroll-offset', `${Math.min(window.scrollY, 1200) * 0.08}px`);
        root.style.setProperty('--scroll-angle', `${progress * 130}deg`);
        root.style.setProperty('--scene-shift', `${progress * 180}px`);
      }
      scene.style.setProperty('--pointer-x', `${pointerX}px`);
      scene.style.setProperty('--pointer-y', `${pointerY}px`);
      const scrolled = String(window.scrollY > 180);
      if (root.dataset.scrolled !== scrolled) root.dataset.scrolled = scrolled;
    };

    const schedule = () => {
      if (scene.isConnected && !frame) frame = window.requestAnimationFrame(update);
    };

    const movePaper = (event) => {
      if (motion?.matches || !pointer?.matches || event.pointerType === 'touch') return;
      pointerX = Math.max(-12, Math.min(12, (event.clientX / window.innerWidth - 0.5) * 24));
      pointerY = Math.max(-12, Math.min(12, (event.clientY / window.innerHeight - 0.5) * 24));
      schedule();
    };

    const centerPaper = () => {
      pointerX = 0;
      pointerY = 0;
      schedule();
    };

    const observeContent = () => {
      if (!observer) return;
      root.querySelectorAll(revealSelector).forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add('scroll-reveal');
        observer.observe(element);
      });
    };

    const configureMotion = () => {
      observer?.disconnect();
      observed.forEach((element) => element.classList.remove('scroll-reveal', 'is-revealed'));
      observed.clear();
      observer = null;
      root.dataset.motion = motion?.matches ? 'reduced' : 'full';
      if (motion?.matches) {
        root.style.setProperty('--scroll-offset', '0px');
        root.style.setProperty('--scroll-angle', '0deg');
        root.style.setProperty('--scene-shift', '0px');
      }
      centerPaper();
      if (!motion?.matches && window.IntersectionObserver) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
              target.classList.add('is-revealed');
              observer.unobserve(target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
        observeContent();
      }
    };

    // Keyboard navigation should reveal a section immediately, too.
    const revealFocused = ({ target }) => {
      let element = target;
      while (element && element !== root) {
        if (element.classList.contains('scroll-reveal')) {
          element.classList.add('is-revealed');
          observer?.unobserve(element);
        }
        element = element.parentElement;
      }
    };

    configureMotion();
    schedule();
    if (window.IntersectionObserver) {
      const tones = new Map(sceneTones.flatMap(([selector, tone]) => {
        const target = root.querySelector(selector);
        return target ? [[target, tone]] : [];
      }));
      const visibleTones = new Set();
      toneObserver = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) visibleTones.add(target);
          else visibleTones.delete(target);
        });
        const active = [...tones.keys()].filter((target) => visibleTones.has(target)).pop();
        if (active) root.dataset.tone = tones.get(active);
      }, { rootMargin: '0px 0px -160px 0px', threshold: 0 });
      tones.forEach((tone, target) => toneObserver.observe(target));
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pointermove', movePaper, { passive: true });
    document.documentElement.addEventListener('pointerleave', centerPaper);
    pointer?.addEventListener('change', centerPaper);
    root.addEventListener('focusin', revealFocused);
    motion?.addEventListener('change', configureMotion);

    // About content arrives asynchronously; observe it when it is inserted.
    const contentObserver = new MutationObserver(() => {
      observeContent();
      schedule();
    });
    contentObserver.observe(root, { childList: true, subtree: true });
    const resizeObserver = window.ResizeObserver ? new ResizeObserver(schedule) : null;
    resizeObserver?.observe(root);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pointermove', movePaper);
      document.documentElement.removeEventListener('pointerleave', centerPaper);
      pointer?.removeEventListener('change', centerPaper);
      root.removeEventListener('focusin', revealFocused);
      motion?.removeEventListener('change', configureMotion);
      observer?.disconnect();
      toneObserver?.disconnect();
      contentObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, []);

  const backToTop = () => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <>
      <div ref={layer} className="scroll-effects" aria-hidden="true">
        <div className="ambient-wash ambient-wash-clay" />
        <div className="ambient-wash ambient-wash-sage" />
        <div className="ambient-wash ambient-wash-ochre" />
        <div className="ambient-print-arch" />
        <svg
          className="ambient-contours"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
          fill="none"
          focusable="false"
        >
          <g>
            <path d="M750-40c-175 147 254 246 91 421S1060 684 1270 560" />
            <path d="M781-40c-175 147 256 248 88 426S1060 715 1270 590" />
            <path d="M812-40c-175 147 258 250 85 431S1060 746 1270 620" />
            <path d="M843-40c-175 147 260 252 82 436S1060 777 1270 650" />
            <path d="M874-40c-175 147 262 254 79 441S1060 808 1270 680" />
          </g>
          <path
            className="ambient-pencil"
            pathLength="1"
            d="M-100 780c169-277 195 99 442-12S699 536 600 928"
          />
          <path
            className="ambient-pencil"
            pathLength="1"
            d="M-100 808c169-277 195 99 442-12S727 536 628 928"
          />
        </svg>
        <div className="ambient-board"><i /></div>
        <div className="ambient-registration"><i /><i /><i /></div>
      </div>
      <div className="reading-progress" aria-hidden="true" />
      <button type="button" className="back-to-top" onClick={backToTop} aria-label="Back to top">
        <span aria-hidden="true">↑</span>
      </button>
    </>
  );
};

export default ScrollEffects;
