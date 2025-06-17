import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Po Yu Pan</h2>
        <p>
          <a href="mailto:abc35100762@gmail.com">abc35100762@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Po Yu, and you can call me Boy.<br />
        I got my bachelor&apos;s from{' '}
        <a href="https://scidm.site.nthu.edu.tw/app/home.php">NTHU IPS</a>{' '}
        and am now pursuing a master&apos;s in{' '}
        <a href="https://www.csie.ncku.edu.tw/zh-hant/">NCKU CSIE</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Po Yu Pan <Link to="/">matthiola0.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
