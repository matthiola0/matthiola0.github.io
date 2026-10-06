/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {
  act, cleanup, fireEvent, render, screen, waitFor, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import EmailLink from '../components/Contact/EmailLink';
import { skills, categories } from '../data/resume/skills';
import projects from '../data/projects';

const pages = [
  ['/', 'Po-Yu Pan', /Hello there/],
  ['/about', 'About | Po-Yu Pan', 'About Me'],
  ['/resume', 'Resume | Po-Yu Pan', 'Resume'],
  ['/projects', 'Projects | Po-Yu Pan', 'Projects'],
  ['/contact', 'Contact | Po-Yu Pan', 'Contact'],
  ['/missing-page', '404 Not Found', 'Page Not Found'],
];

let user;
let mediaListeners;
const originalMatchMedia = window.matchMedia;

beforeAll(() => {
  // jsdom does not implement the native dialog's top-layer methods.
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function close() {
    this.removeAttribute('open');
  };
});

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  window.scrollTo = jest.fn();
  document.body.style.overflow = '';
  mediaListeners = new Map();
  window.matchMedia = jest.fn((query) => ({
    matches: false,
    media: query,
    addEventListener: (event, listener) => mediaListeners.set(query, listener),
    removeEventListener: (event, listener) => {
      if (mediaListeners.get(query) === listener) mediaListeners.delete(query);
    },
  }));
  global.fetch = jest.fn(() => Promise.resolve({
    text: () => Promise.resolve('# Intro\n\nAbout content loaded.'),
    json: () => Promise.resolve({}),
  }));
  user = userEvent.setup();
});

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
  delete HTMLDialogElement.prototype.showModal;
  delete HTMLDialogElement.prototype.close;
});

const openPage = async (path = '/') => {
  window.history.replaceState(null, '', path);
  let view;
  await act(async () => { view = render(<App />); });
  return view;
};

describe('pages and navigation', () => {
  it.each(pages)('loads %s directly', async (path, title, heading) => {
    await openPage(path);
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    await waitFor(() => expect(document.title).toBe(title));
  });

  it.each(pages.slice(1, 5))('navigates to %s from the header', async (path, title) => {
    const { container } = await openPage();
    const header = within(container.querySelector('#header'));
    await user.click(header.getByRole('link', { name: title.split(' |')[0] }));
    expect(window.location.pathname).toBe(path);
    expect(document.title).toBe(title);
    expect(window.scrollTo).toHaveBeenLastCalledWith(0, 0);
  });

  it('loads the asynchronous About text', async () => {
    await openPage('/about');
    expect(await screen.findByText('About content loaded.')).toBeInTheDocument();
  });

  it('keeps the Resume heading on /resume', async () => {
    const { container } = await openPage('/resume');
    const heading = within(container.querySelector('#resume > header'));
    await user.click(heading.getByRole('link', { name: 'Resume' }));
    expect(window.location.pathname).toBe('/resume');
    expect(document.title).toBe('Resume | Po-Yu Pan');
  });

  it('returns home from the 404 page', async () => {
    await openPage('/missing-page');
    await user.click(screen.getByRole('link', { name: 'home' }));
    expect(window.location.pathname).toBe('/');
    expect(screen.getByRole('heading', { name: /Hello there/ })).toBeInTheDocument();
  });

  it('links every home chapter to its page and the scroll cue to the contents', async () => {
    const { container } = await openPage();
    expect([...container.querySelectorAll('.chapter')].map((link) => link.getAttribute('href')))
      .toEqual(['/about', '/resume', '/projects', '/contact']);
    expect(screen.getByRole('link', { name: 'Take a look around' }))
      .toHaveAttribute('href', '#contents');
  });

  it('renders every project with its optional image, description and destination', async () => {
    const { container } = await openPage('/projects');
    const cards = [...container.querySelectorAll('.cell-container')];
    expect(cards).toHaveLength(projects.length);
    cards.forEach((card, index) => {
      if (projects[index].image) {
        expect(within(card).getByRole('img', { name: projects[index].title }))
          .toHaveAttribute('src', projects[index].image);
      } else {
        expect(within(card).queryByRole('img')).toBeNull();
      }
      expect(within(card).getByText(projects[index].desc)).toBeInTheDocument();
      expect(within(card).getByRole('heading').querySelector('a'))
        .toHaveAttribute('href', projects[index].link);
    });
  });

  it('provides all resume section anchors without a PDF link', async () => {
    const { container } = await openPage('/resume');
    const header = within(container.querySelector('#resume > header'));
    ['education', 'experience', 'skills', 'courses'].forEach((section) => {
      expect(header.getByRole('link', { name: new RegExp(section, 'i') }))
        .toHaveAttribute('href', `#${section}`);
      expect(container.querySelector(`#${section}`)).toBeInTheDocument();
    });
    expect(header.queryByRole('link', { name: 'download-pdf' })).toBeNull();
  });

  it('keeps contact destinations usable', async () => {
    const { container } = await openPage('/contact');
    const contact = within(container.querySelector('#contact'));
    expect(contact.getByRole('link', { name: 'Github' }))
      .toHaveAttribute('href', 'https://github.com/matthiola0');
    expect(contact.getByRole('link', { name: 'LinkedIn' }))
      .toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(contact.getByRole('link', { name: 'Email' }))
      .toHaveAttribute('href', 'mailto:hi@matthiola.dev');
  });
});

describe('mobile drawer', () => {
  it('opens from the keyboard, locks scrolling, closes and restores focus', async () => {
    await openPage();
    const trigger = screen.getByRole('button', { name: 'Open menu' });
    trigger.focus();
    await user.keyboard('[Enter]');
    const menu = screen.getByRole('dialog', { name: 'Navigation menu' });
    expect(menu.parentElement).toBe(document.body);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(document.body.style.overflow).toBe('hidden');
    expect(within(menu).getByRole('button', { name: 'Close menu' })).toHaveFocus();
    await user.click(within(menu).getByRole('button', { name: 'Close menu' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('can reopen after native Escape/cancel and after a backdrop click', async () => {
    await openPage();
    const trigger = screen.getByRole('button', { name: 'Open menu' });
    await user.click(trigger);
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { cancelable: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(trigger);
    const menu = screen.getByRole('dialog');
    jest.spyOn(menu, 'getBoundingClientRect').mockReturnValue({ left: 100, right: 390 });
    fireEvent.click(menu, { clientX: 200 });
    expect(menu).toBeInTheDocument();
    fireEvent.click(menu, { clientX: 50 });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('keeps forward and backward Tab navigation within the drawer', async () => {
    await openPage();
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = within(screen.getByRole('dialog'));
    const close = menu.getByRole('button', { name: 'Close menu' });
    const email = menu.getByRole('link', { name: 'hi@matthiola.dev' });
    await user.tab({ shift: true });
    expect(email).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
  });

  it.each([
    ['Home', '/'], ['About', '/about'], ['Resume', '/resume'],
    ['Projects', '/projects'], ['Contact', '/contact'],
  ])('navigates through %s and closes the drawer', async (label, path) => {
    await openPage();
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = within(screen.getByRole('dialog'));
    await user.click(menu.getByRole('link', { name: label, exact: true }));
    expect(window.location.pathname).toBe(path);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('closes when switching to desktop width', async () => {
    await openPage();
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    act(() => mediaListeners.get('(min-width: 981px)')({ matches: true }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('restores the previous scroll setting when unmounted while open', async () => {
    const view = await openPage();
    document.body.style.overflow = 'auto';
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    view.unmount();
    expect(document.body.style.overflow).toBe('auto');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('skills and scrolling', () => {
  it.each(categories.map(({ name }) => [name]))('filters the %s category', async (category) => {
    const { container } = await openPage('/resume');
    await user.click(screen.getByRole('button', { name: category, exact: true }));
    const titles = [...container.querySelectorAll('.skillbar-title')]
      .map((element) => element.textContent);
    const expected = skills.filter((skill) => skill.category.includes(category))
      .map((skill) => skill.title);
    expect(titles.sort()).toEqual(expected.sort());
    expect(screen.getByRole('button', { name: category, exact: true }))
      .toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'All', exact: true }))
      .toHaveAttribute('aria-pressed', 'false');
  });

  it('starts with All selected and toggles a category back to all skills', async () => {
    const { container } = await openPage('/resume');
    expect(screen.getByRole('button', { name: 'All', exact: true }))
      .toHaveAttribute('aria-pressed', 'true');
    const button = screen.getByRole('button', { name: 'Languages', exact: true });
    await user.click(button);
    await user.click(button);
    expect(container.querySelectorAll('.skillbar')).toHaveLength(skills.length);
    expect(screen.getByRole('button', { name: 'All', exact: true }))
      .toHaveAttribute('aria-pressed', 'true');
  });

  it('scrolls back to the top', async () => {
    await openPage();
    await user.click(screen.getByRole('button', { name: 'Back to top' }));
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('resets a selected category with the All button', async () => {
    const { container } = await openPage('/resume');
    await user.click(screen.getByRole('button', { name: 'Languages', exact: true }));
    await user.click(screen.getByRole('button', { name: 'All', exact: true }));
    expect(container.querySelectorAll('.skillbar')).toHaveLength(skills.length);
    expect(screen.getByRole('button', { name: 'All', exact: true }))
      .toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Languages', exact: true }))
      .toHaveAttribute('aria-pressed', 'false');
  });

  it('uses immediate scrolling when reduced motion is requested', async () => {
    window.matchMedia.mockImplementation(() => ({
      matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn(),
    }));
    const { container } = await openPage();
    await user.click(screen.getByRole('button', { name: 'Back to top' }));
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' });
    expect(container.querySelectorAll('.scroll-reveal')).toHaveLength(0);
  });
});

describe('animated contact address', () => {
  it('keeps the email target stable and pauses its text animation on hover', () => {
    jest.useFakeTimers();
    const { container } = render(<EmailLink />);
    const link = container.querySelector('a');
    act(() => { jest.advanceTimersByTime(200); });
    expect(link).toHaveAttribute('href', 'mailto:hi@matthiola.dev');
    const text = link.textContent;
    fireEvent.mouseEnter(container.querySelector('.inline-container'));
    act(() => { jest.advanceTimersByTime(4000); });
    expect(link.textContent).toBe(text);
    fireEvent.mouseLeave(container.querySelector('.inline-container'));
    act(() => { jest.advanceTimersByTime(3000); });
    expect(link.textContent).not.toBe(text);
    expect(link).toHaveAttribute('href', 'mailto:hi@matthiola.dev');
    cleanup();
    jest.useRealTimers();
  });
});
