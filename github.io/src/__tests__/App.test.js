/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders the app', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Po Yu Pan');
  });

  it('can navigate to /about', async () => {
    expect.assertions(7);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      await aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /resume', async () => {
    expect.assertions(3);
    const resumeLink = screen.getByRole('link', { name: 'Resume' });
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      await resumeLink.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    expect.assertions(3);
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(projectsLink).toBeInTheDocument();
    await act(async () => {
      await projectsLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /contact', async () => {
    expect.assertions(3);
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      await contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
