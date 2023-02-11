<script>
  import Footer from '../partials/footer.svelte';
  import Article from '../partials/article.svelte';
  import Navigation from '../partials/navigation.svelte';
</script>

<main>
  <header class='jinya-header--startpage'>
    <img class='jinya-header__image' src='/startpage-stingrays.jpg' alt='Header image' aria-hidden='true'>
    <Navigation inverse='true' />
    <div class='jinya-callout'>
      <h1 class='jinya-callout__title'>Jinya CMS</h1>
      <p class='jinya-callout__claim'>The simplest way to manage your portfolio</p>
    </div>
    <span class='jinya-header__copyright'>Picture: Sting rays, by Jenny-Jinya</span>
  </header>
  <Article title='Why choose Jinya'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Sit amet justo donec enim diam vulputate. Faucibus pulvinar elementum integer enim neque volutpat.
    Lorem ipsum dolor sit amet consectetur. Dignissim enim sit amet venenatis. Massa tincidunt nunc pulvinar sapien
    et. Nunc vel risus commodo viverra maecenas accumsan lacus. Bibendum at varius vel pharetra vel turpis nunc eget.
    Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Tristique senectus et netus et malesuada
    fames ac turpis egestas. At varius vel pharetra vel turpis nunc eget lorem.
  </Article>
  <Article title="Who's behind it">
    <div class='jinya-who__row'>
      <div class='jinya-who'>
        <p class='jinya-who__name'>Imanuel Ulbricht</p>
        <p class='jinya-who__job'>Developer and Co-Founder</p>
      </div>
      <div class='jinya-who__description'>
        <a class='jinya-who__link' href='https://imanuel.dev'>Imanuel Ulbricht</a> is a developer and designer based in
        Hildesheim, Germany. He develops websites, desktop applications and mobile applications. Together with Jenny he
        started the development of the Jinya CMS back in October 2017. He has developed several open source projects
        since then and is currently employed at Lineas GmbH in Wolfsburg, Germany.
      </div>
    </div>
    <div class='jinya-who__row jinya-who__row--inverse'>
      <div class='jinya-who'>
        <p class='jinya-who__name'>Jenny Hefczyc</p>
        <p class='jinya-who__job'>Artist and Co-Founder</p>
      </div>
      <div class='jinya-who__description'>
        <a class='jinya-who__link' href='https://jenny-jinya.com'>Jenny Hefczyc</a>, better known as Jenny-Jinya, is the
        artist the Jinya CMS
        was originally developed for. She had her first exhibition at the age of 16 and is currently active as
        self-employed and freelance artist. She is most famously known for her work on the Loving Reaper series. The
        Loving Reaper series features, as of now, two publications and more are planned.
      </div>
    </div>
  </Article>
  <Footer />
</main>

<svelte:head>
  <title>Jinya CMS</title>
</svelte:head>
<style>
  .jinya-header--startpage {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr auto;
  }

  .jinya-header__image {
    grid-column: 1/3;
    grid-row: 1/3;
    height: auto;
    width: 100vw;
    z-index: -1;
  }

  .jinya-callout {
    padding-left: 10vw;
    padding-bottom: 3rem;
    color: var(--menu-item-color-inverse);
    grid-row: 2;
    grid-column: 1;
  }

  .jinya-callout__title {
    font-size: 3rem;
    margin-bottom: 0;
  }

  .jinya-callout__claim {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 300;
  }

  .jinya-header__copyright {
    color: var(--menu-item-color-inverse);
    padding-right: 10vw;
    align-self: end;
    justify-self: end;
    padding-bottom: 2rem;
    font-weight: 300;
    grid-row: 2;
    grid-column: 2;
  }

  .jinya-who__row {
    display: flex;
    flex-flow: row;
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  .jinya-who__row--inverse {
    flex-direction: row-reverse;
  }

  .jinya-who {
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .jinya-who__name {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    text-wrap: none;
    white-space: nowrap;
  }

  .jinya-who__job {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    text-wrap: none;
    white-space: nowrap;
  }

  .jinya-who__description {
    font-size: 1rem;
  }

  .jinya-who__link {
    color: var(--primary-color);
  }
</style>
