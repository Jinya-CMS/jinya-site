<script>
  import { titleStore } from "../routes/(sites)/stores.js";

  export let inverse = false;
  let navToggled = false;
  let mobileTitle;
  titleStore.subscribe(value => mobileTitle = value);

  function toggleNavigation() {
    navToggled = !navToggled;
  }

  function hideNav() {
    navToggled = false;
  }
</script>

<nav class="jinya-nav jinya-nav--desktop" class:jinya-nav--inverse={inverse}>
  <div class="jinya-nav__left">
    <a class="jinya-nav__brand" class:jinya-nav__brand--inverse={inverse} href="/">Jinya CMS</a>
  </div>
  <div class="jinya-nav__right">
    <a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/about">About</a>
    <a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/stories">Stories</a>
    <a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/get-jinya">Get Jinya</a>
    <a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/contact">Contact</a>
    <a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="https://github.com/Jinya-CMS/jinya-cms"
       target="_blank">
      <svg viewBox="0 0 32.58 31.77" width="32px" xmlns="http://www.w3.org/2000/svg">
        <path class="jinya-nav__link--github" class:jinya-nav__link--inverse={inverse}
              d="M128.45,112.16a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.3,4.3,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.41,3.41,0,0,1,2.5,1.68,3.46,3.46,0,0,0,4.74,1.35,3.54,3.54,0,0,1,1-2.18c-3.61-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.68-4.37,5.82,5.82,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67a5.82,5.82,0,0,1,.16,4.31,6.26,6.26,0,0,1,1.68,4.37c0,6.26-3.81,7.64-7.44,8a3.91,3.91,0,0,1,1.11,3c0,2.17,0,3.93,0,4.46s.29.95,1.12.79a16.3,16.3,0,0,0-5.16-31.75Z"
              transform="translate(-112.16 -112.16)" />
      </svg>
    </a>
  </div>
</nav>
<div class="jinya-nav__bar--mobile">
  <span class="jinya-nav__brand jinya-nav__brand--inverse">{mobileTitle}</span>
  <button class="jinya-hamburger" on:click={toggleNavigation}></button>
</div>
<nav class="jinya-nav--mobile" class:jinya-nav--mobile-open={navToggled}>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="/" on:click={hideNav}>Startpage</a>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="/about" on:click={hideNav}>About</a>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="/stories" on:click={hideNav}>Stories</a>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="/get-jinya" on:click={hideNav}>Get Jinya</a>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="/contact" on:click={hideNav}>Contact</a>
  <a class="jinya-nav__link jinya-nav__link--inverse" href="https://github.com/Jinya-CMS/jinya-cms" on:click={hideNav}
     target="_blank">Github </a>
</nav>

<style>
  .jinya-nav__bar--mobile {
    background: var(--primary-color);
    width: 100vw;
    padding: 1rem 2rem;
    justify-content: space-between;
    box-sizing: border-box;
    display: none;
  }

  .jinya-nav--mobile {
    display: none;
  }

  .jinya-hamburger {
    position: relative;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 3.5rem;
    height: auto;
  }

  .jinya-hamburger::before,
  .jinya-hamburger::after {
    content: '';
    position: absolute;
  }

  .jinya-hamburger::after {
    background: var(--white);
    height: 4px;
    width: 3rem;
    right: 0;
    top: 8px
  }

  .jinya-hamburger::before {
    background: var(--white);
    height: 4px;
    width: 3rem;
    right: 0;
    bottom: 8px
  }

  .jinya-nav {
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 2.25rem 15vw;
    box-sizing: border-box;
    grid-column: 1/3;
    grid-row: 1;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .jinya-nav--mobile {
    display: none;
  }

  .jinya-nav--mobile-open {
    display: flex;
    position: absolute;
    top: 4rem;
    background: var(--primary-color);
    flex-flow: column;
    width: 100vw;
    padding: 1rem 2rem;
    gap: 1rem;
    box-sizing: border-box;
  }

  @media screen and (min-width: 481px) and (max-width: 1280px) {
    .jinya-nav__bar--mobile {
      padding-left: 15vw;
      padding-right: 15vw;
    }
  }

  @media screen and (max-width: 1280px) {
    .jinya-nav--desktop {
      display: none;
    }

    .jinya-nav__bar--mobile {
      display: flex;
    }
  }

  @media screen and (min-width: 1281px) {
    .jinya-nav--inverse {
      background: none;
      box-shadow: none;
    }
  }

  .jinya-nav__brand {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--menu-item-color);
    font-weight: 700;
  }

  .jinya-nav__brand--inverse {
    color: var(--menu-item-color-inverse);
    box-shadow: none;
  }

  @media screen and (min-width: 1281px) {
    .jinya-nav__brand--inverse {
      color: var(--menu-item-color-inverse);
      box-shadow: none;
    }
  }

  .jinya-nav__right {
    display: flex;
    gap: 3rem;
  }

  .jinya-nav__link {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--menu-item-color);
  }

  .jinya-nav__link--github {
    fill: var(--menu-item-color);
    stroke: var(--menu-item-color);
  }

  .jinya-nav__link--inverse {
    color: var(--menu-item-color-inverse);
    fill: var(--menu-item-color-inverse);
    stroke: var(--menu-item-color-inverse);
  }
</style>
