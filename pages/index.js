import React from 'react';

const Home = () => {
  return (
    <main className="jinya-home">
      <section className="jinya-section jinya-section--header">
        <header className="jinya-header">
          <h1 className="jinya-header__brand">Jinya Gallery CMS</h1>
          <span className="jinya-header__teaser">
          A content management system<br />
          For artists made by artists
        </span>
        </header>
        <a className="jinya-header__arrow" onClick={() => {
          const vh = Math.max(window.document.documentElement.clientHeight, window.innerHeight || 0);
          window.scrollBy({
            behavior: 'smooth',
            top: vh,
          });
        }} />
      </section>
      <section className="jinya-section jinya-section--about">
        <div className="jinya-about">
          <img className="jinya-about__logo" src="/android-chrome-512x512.png" alt="" />
          <div>
            <div>
              <h2 className="jinya-about__heading">About <i>Jinya</i></h2>
              <p className="jinya-about__content">
                The Jinya Gallery CMS, short <i>Jinya</i>, is a content management system developed by Imanuel Ulbricht
                and Jenny Hefczyc, also known als Jenny Jinya. The idea behind <i>Jinya</i> is to create a place for
                artists where they want to manage their portfolio.
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
              <img className="jinya-sites__image jinya-sites__image--left" src="/jenny-jinya.com.png" alt="" />
              <div className="jinya-sites__content jinya-sites__content--right">
                <h3 className="jinya-sites__site-header">jenny-jinya.com</h3>
                <p className="jinya-sites__site-content">
                  Jenny Jinya is a freelance illustrator based in Germany, she studies Digital Media and had a number
                  of exhibitions since she is 16, her new portfolio got an incredible amount of positive feedback.
                </p>
                <a className="jinya-sites__site-link" href="https://jenny-jinya.com">Go to jenny-jinya.com</a>
              </div>
            </div>
            <div className="jinya-sites__list-item jinya-sites__list-item--right">
              <div className="jinya-sites__content jinya-sites__content--left">
                <h3 className="jinya-sites__site-header">Jintoonz</h3>
                <p className="jinya-sites__site-content">
                  Jintoonz is the website of the artist Jenny-Jinya. She is the creator of the famous loving reaper
                  comic series. She trusts <i>Jinya</i> to give people the perfect view on her comics.
                </p>
                <a className="jinya-sites__site-link" href="https://comics.jenny-jinya.com">Go to Jintoonz</a>
              </div>
              <img className="jinya-sites__image jinya-sites__image--right" src="/jintoonz.png" alt="" />
            </div>
            <div className="jinya-sites__list-item jinya-sites__list-item--left">
              <img className="jinya-sites__image jinya-sites__image--left" src="/imanuel.ulbricht.design.png" alt="" />
              <div className="jinya-sites__content jinya-sites__content--right">
                <h3 className="jinya-sites__site-header">Imanuel Ulbricht Design</h3>
                <p className="jinya-sites__site-content">
                  Imanuel Ulbricht is a professional web developer, web designer and app designer. The portfolio was
                  created with the default theme of <i>Jinya</i> and is the perfect showcase.
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
            Jinya Developers has the advantage, that you get a theme created by the creators of <i>Jinya</i>. Please
            reach out to us at <a className="jinya-get__mail-us"
                                  href="mailto:developers@jinya.de">developers@jinya.de</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
