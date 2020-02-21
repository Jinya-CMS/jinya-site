import '../scss/jinya.scss';
import Head from 'next/head';
import React from 'react';

const Home = () => (
  <div className="container">
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
    <main>
      <section className="jinya-section jinya-section--header">
        <header className="jinya-header">
          <h1 className="jinya-header__brand">Jinya Gallery CMS</h1>
          <span className="jinya-header__teaser">
          A content management system<br />
          From artists made by artists
        </span>
        </header>
      </section>
      <section className="jinya-section jinya-section--about">
        <div className="jinya-about">
          <img className="jinya-about__logo" src="/android-chrome-512x512.png" alt="" />
          <div>
            <div>
              <h2 className="jinya-about__heading">About <i>Jinya</i></h2>
              <p className="jinya-about__content">
                The Jinya Gallery CMS, short <i>Jinya</i>, is a content management system developed by Imanuel Ulbricht
                and
                Jenny Hefczyc, also known als Jenny Jinya. The idea behind <i>Jinya</i> is to create a place for artists
                where
                they want to manage their portfolio.
              </p>
            </div>
            <div className="jinya-blocks">
              <div className="jinya-blocks__block">
                <h3 className="jinya-blocks__header">Creators</h3>
                <p className="jinya-blocks__content">
                  <i>Jinya</i> is developed by Jenny Hefcyzc and Imanuel Ulbricht. We are both artists and have both
                  experience in design. We believe in the concept of dog fooding, both our portfolios are created
                  with <i>Jinya</i>.
                </p>
              </div>
              <div className="jinya-blocks__block">
                <h3 className="jinya-blocks__header">Reasons</h3>
                <p className="jinya-blocks__content">
                  In 2017 we talked about a new portfolio website for Jenny, this is the point where <i>Jinya</i> was
                  born. Together we worked hard on creating the best possible way to manage and show your portfolio.
                </p>
              </div>
              <div className="jinya-blocks__block">
                <h3 className="jinya-blocks__header">Technology</h3>
                <p className="jinya-blocks__content">
                  For every software you use there is the question what it is based on. <i>Jinya</i> is based on modern
                  web technologies and can be hosted on nearly every webhoster out there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jinya-section jinya-section--sites">
        <div className="jinya-sites">
          <h2 className="jinya-sites__heading">Sites made with <i>Jinya</i></h2>
          <div className="jinya-sites__list">
            <div className="jinya-sites__list-item jinya-sites__list-item--left">
              <img className="jinya-sites__image jinya-sites__image--left" src="/startpage-touch.jpg" alt="" />
              <div className="jinya-sites__content jinya-sites__content--right">
                <h3 className="jinya-sites__site-header">jenny-jinya.com</h3>
                <p className="jinya-sites__site-content">
                  Jenny Jinya is a freelance illustrator based in Germany, she studies Digital Media and had a number
                  of exhibitions since she is 16, her new portfolio got an incredible amount of positive feedback over
                  time.
                </p>
                <a className="jinya-sites__site-link" href="https://jenny-jinya.com">Go to jenny-jinya.com</a>
              </div>
            </div>
            <div className="jinya-sites__list-item jinya-sites__list-item--right">
              <div className="jinya-sites__content jinya-sites__content--left">
                <h3 className="jinya-sites__site-header">Jintoonz</h3>
                <p className="jinya-sites__site-content">
                  Jenny Jinya is a freelance illustrator based in Germany, she studies Digital Media and had a number
                  of exhibitions since she is 16, her new portfolio got an incredible amount of positive feedback over
                  time.
                </p>
                <a className="jinya-sites__site-link" href="https://comics.jenny-jinya.com">Go to Jintoonz</a>
              </div>
              <img className="jinya-sites__image jinya-sites__image--right" src="/startpage-touch.jpg" alt="" />
            </div>
            <div className="jinya-sites__list-item jinya-sites__list-item--left">
              <img className="jinya-sites__image jinya-sites__image--left" src="/startpage-touch.jpg" alt="" />
              <div className="jinya-sites__content jinya-sites__content--right">
                <h3 className="jinya-sites__site-header">Imanuel Ulbricht Design</h3>
                <p className="jinya-sites__site-content">
                  Jenny Jinya is a freelance illustrator based in Germany, she studies Digital Media and had a number
                  of exhibitions since she is 16, her new portfolio got an incredible amount of positive feedback over
                  time.
                </p>
                <a className="jinya-sites__site-link" href="https://jenny-jinya.com">Go to Imanuel Ulbricht Design</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jinya-section jinya-section--get">
        <div className="jinya-get">
          <h2 className="jinya-get__heading">Get <i>Jinya</i></h2>
          <p>
            If you are an artist and you are tired of WordPress, Drupal or Contao, <i>Jinya</i> might just be the right
            tool for you. The main focus of <i>Jinya</i> is art not text. If we have your interest please contact us, we
            will help you get your portfolio up and running with a new system made for artists.
          </p>
          <h3 className="jinya-get__heading jinya-get__heading--theming">Theming</h3>
          <p>
            <i>Jinya</i> itself is open source, so anyone can create a theme for it. But getting a theme created by the
            Jinya Developers has the advantage, that you get a theme created by the creators of <i>Jinya</i>. Please reach
            out to us at <a className="jinya-get__mail-us" href="mailto:developers@jinya.de">developers@jinya.de</a>.
          </p>
        </div>
      </section>
      <footer className="jinya-footer">
          <span>Made with <span className="jinya-footer__heart">♥</span> in Hildesheim by <a
            className="jinya-footer__link"
            href="https://imanuel.ulbricht.codes">Imanuel Ulbricht</a></span>
      </footer>
    </main>
  </div>
);

export default Home;
