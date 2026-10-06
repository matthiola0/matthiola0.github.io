/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  act, cleanup, fireEvent, render,
} from '@testing-library/react';
import ScrollEffects from '../components/Template/scroll-effects';

const originalMatchMedia = window.matchMedia;
const originalIntersectionObserver = window.IntersectionObserver;
const originalViewport = {
  innerWidth: window.innerWidth, innerHeight: window.innerHeight, scrollY: window.scrollY,
};
let frames;
let media;

beforeEach(() => {
  frames = new Map();
  media = new Map();
  let nextFrame = 0;
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    nextFrame += 1;
    frames.set(nextFrame, callback);
    return nextFrame;
  });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => frames.delete(id));
  window.innerWidth = 1000;
  window.innerHeight = 1000;
  window.scrollY = 0;
  jest.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(2500);
  window.matchMedia = jest.fn((query) => {
    const listeners = new Set();
    const result = {
      matches: query.includes('pointer: fine'),
      addEventListener: (event, listener) => listeners.add(listener),
      removeEventListener: (event, listener) => listeners.delete(listener),
      change: (matches) => {
        result.matches = matches;
        listeners.forEach((listener) => listener({ matches }));
      },
      listeners,
    };
    media.set(query, result);
    return result;
  });
});

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  window.matchMedia = originalMatchMedia;
  window.IntersectionObserver = originalIntersectionObserver;
  Object.assign(window, originalViewport);
});

const flushFrame = () => {
  act(() => {
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach((callback) => callback());
  });
};

const openScene = () => {
  const view = render(<div id="wrapper"><ScrollEffects /></div>);
  return { ...view, root: view.container.firstChild };
};

const mockIntersections = () => {
  const observers = [];
  window.IntersectionObserver = jest.fn((callback, options) => {
    const observer = {
      callback, options, observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn(),
    };
    observers.push(observer);
    return observer;
  });
  return observers;
};

it('coalesces scroll events and keeps progress bounded after document size changes', () => {
  const { root } = openScene();
  expect(frames.size).toBe(1);
  flushFrame();
  window.scrollY = 750;
  fireEvent.scroll(window);
  fireEvent.scroll(window);
  fireEvent.resize(window);
  expect(frames.size).toBe(1);
  flushFrame();
  expect(Number(root.style.getPropertyValue('--scroll-progress'))).toBe(0.5);
  expect(root.dataset.scrolled).toBe('true');

  window.scrollY = 9999;
  fireEvent.scroll(window);
  flushFrame();
  expect(Number(root.style.getPropertyValue('--scroll-progress'))).toBe(1);
  window.scrollY = -30;
  fireEvent.scroll(window);
  flushFrame();
  expect(Number(root.style.getPropertyValue('--scroll-progress'))).toBe(0);
});

it('bounds desktop parallax and ignores touch input', () => {
  const { root } = openScene();
  const scene = root.querySelector('.scroll-effects');
  flushFrame();
  fireEvent(window, new MouseEvent('pointermove', { clientX: 1500, clientY: -300 }));
  flushFrame();
  expect(scene.style.getPropertyValue('--pointer-x')).toBe('12px');
  expect(scene.style.getPropertyValue('--pointer-y')).toBe('-12px');
  const touch = new MouseEvent('pointermove', { clientX: 0, clientY: 1000 });
  Object.defineProperty(touch, 'pointerType', { value: 'touch' });
  fireEvent(window, touch);
  expect(frames.size).toBe(0);
  expect(scene.style.getPropertyValue('--pointer-x')).toBe('12px');
});

it('centers the scene when motion preferences or pointer capabilities change', () => {
  const { root } = openScene();
  flushFrame();
  fireEvent(window, new MouseEvent('pointermove', { clientX: 1000, clientY: 1000 }));
  flushFrame();
  window.scrollY = 750;
  fireEvent.scroll(window);
  flushFrame();
  act(() => media.get('(prefers-reduced-motion: reduce)').change(true));
  flushFrame();
  expect(root.dataset.motion).toBe('reduced');
  expect(root.querySelector('.scroll-effects').style.getPropertyValue('--pointer-x')).toBe('0px');
  expect(root.style.getPropertyValue('--scene-shift')).toBe('0px');
  fireEvent(window, new MouseEvent('pointermove', { clientX: 1000, clientY: 0 }));
  expect(frames.size).toBe(0);

  act(() => media.get('(prefers-reduced-motion: reduce)').change(false));
  flushFrame();
  act(() => media.get('(hover: hover) and (pointer: fine)').change(false));
  flushFrame();
  fireEvent(window, new MouseEvent('pointermove', { clientX: 1000, clientY: 0 }));
  expect(frames.size).toBe(0);
});

it('cancels pending updates and removes scene listeners when navigating away', () => {
  const { unmount } = openScene();
  expect(frames.size).toBe(1);
  unmount();
  expect(frames.size).toBe(0);
  media.forEach(({ listeners }) => expect(listeners.size).toBe(0));
  fireEvent.scroll(window);
  fireEvent(window, new MouseEvent('pointermove', { clientX: 1000, clientY: 0 }));
  expect(frames.size).toBe(0);
});

it('reveals content by visibility or focus and changes tones at resume chapters', () => {
  const observers = mockIntersections();
  const { container, unmount } = render(
    <div id="wrapper">
      <ScrollEffects />
      <section id="education" className="education" data-reveal>Education</section>
      <section id="skills" className="skills" data-reveal>
        <button type="button">Skill details</button>
      </section>
    </div>,
  );
  const root = container.firstChild;
  const education = container.querySelector('#education');
  const skillsSection = container.querySelector('#skills');
  const reveal = observers.find(({ options }) => options.threshold === 0.08);
  const tone = observers.find(({ options }) => options.threshold === 0);
  expect(education.classList.contains('scroll-reveal')).toBe(true);
  act(() => reveal.callback([{ target: education, isIntersecting: true }]));
  expect(education.classList.contains('is-revealed')).toBe(true);
  fireEvent.focusIn(skillsSection.querySelector('button'));
  expect(skillsSection.classList.contains('is-revealed')).toBe(true);
  act(() => tone.callback([{ target: education, isIntersecting: true }]));
  expect(root.dataset.tone).toBe('sage');
  act(() => tone.callback([{ target: skillsSection, isIntersecting: true }]));
  expect(root.dataset.tone).toBe('ochre');
  act(() => tone.callback([{ target: skillsSection, isIntersecting: false }]));
  expect(root.dataset.tone).toBe('sage');
  const decoration = root.querySelector('.scroll-effects');
  expect(decoration.getAttribute('aria-hidden')).toBe('true');
  expect(decoration.querySelector('a[href], button, [tabindex]')).toBeNull();
  unmount();
  observers.forEach(({ disconnect }) => expect(disconnect).toHaveBeenCalled());
});

it('removes reveal hiding when reduced motion is enabled with observers available', () => {
  const observers = mockIntersections();
  const { container } = render(
    <div id="wrapper"><ScrollEffects /><section data-reveal>Readable content</section></div>,
  );
  const section = container.querySelector('section');
  expect(section.classList.contains('scroll-reveal')).toBe(true);
  act(() => media.get('(prefers-reduced-motion: reduce)').change(true));
  expect(section.classList.contains('scroll-reveal')).toBe(false);
  expect(observers[0].disconnect).toHaveBeenCalled();
});
