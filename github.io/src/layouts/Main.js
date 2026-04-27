import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Po Yu Pan"
      defaultTitle="Po Yu Pan"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title ? `${props.title} | Po Yu Pan` : 'Po Yu Pan'} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content="https://matthiola.dev/images/og.png" />
      <meta property="og:url" content="https://matthiola.dev/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{props.children}</div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Po Yu Pan's personal website.",
};

export default Main;
