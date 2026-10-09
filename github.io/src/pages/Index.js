import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import ChessPiece from '../components/Template/chess-piece';

const chapters = [
  {
    number: '01', title: 'About me', detail: 'A little background.', path: '/about',
  },
  {
    number: '02', title: 'Resume', detail: 'Education, experience & the things I learn.', path: '/resume',
  },
  {
    number: '03', title: 'Projects', detail: 'Some small projects I made.', path: '/projects',
  },
  {
    number: '04', title: 'Contact', detail: 'Feel free to get in touch.', path: '/contact',
  },
];

const Index = () => (
  <Main
    description="Po-Yu Pan's personal website."
    fullPage
  >
    <article className="home" id="index">
      <section className="home-hero" aria-labelledby="welcome-title">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="ink-dot" /> A personal corner of the internet</p>
          <h1 id="welcome-title">Hello there.<br /><em>I&apos;m Po-Yu.</em></h1>
          <p className="hero-intro">You can call me Boy. Welcome to my little space.</p>
          <p className="hero-details">M.S. CS @ NCKU<br />C++ · Python · Networking · AI Agents</p>
          <p className="hero-details">Building <a href="/daybook/">Daybook</a>, an AI-assisted planner for learning, projects, and daily habits.</p>
          <a className="text-link" href="#contents">Take a look around <span aria-hidden="true">↘</span></a>
        </div>

        <div className="hero-art" data-reveal>
          <div className="art-wash" aria-hidden="true" />
          <div className="hero-chessboard" aria-hidden="true" />
          <svg
            className="art-linework"
            viewBox="0 0 440 460"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="art-pencil-line"
              d="M50 112C135 18 340 29 389 140c36 82-22 201-125 197-78-3-13-106 78-39"
            />
            <path d="M44 118c19-12 46-21 65-16M69 372c28 12 67 16 104 7" />
            <path className="art-pencil-hatch" d="m315 84 23-14m-18 24 24-14m-18 24 24-14" />
            <path d="m385 355 14 5m-8-12 3 19" />
          </svg>
          <figure className="portrait-note">
            <div className="portrait-window">
              <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Po-Yu Pan" width="256" height="256" />
            </div>
            <figcaption>Po-Yu Pan <span>— call me Boy</span></figcaption>
          </figure>
          <div className="hero-piece-study" aria-hidden="true">
            <span className="study-index">01 / étude</span>
            <ChessPiece piece="bishop" className="hero-bishop" />
            <span className="study-rule" />
          </div>
          <ChessPiece piece="pawn" className="hero-pawn" />
          <span className="art-annotation" aria-hidden="true">Studies in play.</span>
          <span className="art-caption" aria-hidden="true">A face behind the pages.</span>
        </div>

        <div className="hero-bottom" aria-hidden="true">
          <span>Stay curious. Make your next move.</span>
          <span className="scroll-cue">Scroll to explore <span>↓</span></span>
        </div>
      </section>

      <section className="home-contents" id="contents" aria-labelledby="contents-title">
        <div className="contents-heading" data-reveal>
          <p className="eyebrow">The contents</p>
          <h2 id="contents-title">A few pages to <em>explore.</em></h2>
          <p>Pick a chapter. Make yourself at home.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <Link className="chapter" to={chapter.path} key={chapter.number} data-reveal>
              <span className="chapter-number">{chapter.number}</span>
              <div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.detail}</p></div>
              <span className="chapter-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-contact" aria-labelledby="hello-title" data-reveal>
        <div className="contact-art" aria-hidden="true">
          <span className="contact-arch" />
          <span className="contact-checkers" />
          <ChessPiece piece="queen" className="contact-queen" />
          <ChessPiece piece="rook" className="contact-rook" />
          <svg className="contact-linework" viewBox="0 0 420 420" fill="none" focusable="false">
            <path d="M49 306c-54-70-17-199 107-234 149-43 246 123 166 217-37 44-114 60-165 24" />
            <path d="m328 330 20-9m-16 18 20-9m-16 18 20-9" />
          </svg>
          <span className="contact-art-caption">The art of a next move.</span>
        </div>
        <p className="eyebrow">Keep in touch</p>
        <h2 id="hello-title">It starts with<br /><em>a hello.</em></h2>
        <a className="text-link" href="mailto:hi@matthiola.dev">hi@matthiola.dev <span aria-hidden="true">↗</span></a>
        <ContactIcons />
      </section>

      <footer className="home-footer">
        <span>© Po-Yu Pan</span>
        <Link to="/">matthiola.dev</Link>
        <span>Thanks for stopping by.</span>
      </footer>
    </article>
  </Main>
);

export default Index;
