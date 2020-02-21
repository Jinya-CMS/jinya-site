import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import '../scss/jinya.scss';

export default class JinyaApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="jinya-container">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/jmo2xoh.css" />
          <meta name="apple-mobile-web-app-title" content="Jinya Gallery CMS" />
          <meta name="application-name" content="Jinya Gallery CMS" />
          <meta name="msapplication-TileColor" content="#504a56" />
          <meta name="theme-color" content="#504a56" />
          <title>Jinya Gallery CMS</title>
        </Head>
        <Component {...pageProps} />
        <footer className="jinya-footer">
          <span className="jinya-footer__claim">Made with <span className="jinya-footer__heart">♥</span> in Hildesheim by <a
            className="jinya-footer__link"
            href="https://imanuel.ulbricht.codes">Imanuel Ulbricht</a></span>
          <a className="jinya-footer__link jinya-footer__link--imprint" href="/imprint">Imprint</a>
        </footer>
      </div>
    );
  }
}
