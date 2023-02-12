<script>
  import Navigation from '../../partials/navigation.svelte';
  import Footer from '../../partials/footer.svelte';
  import { titleStore } from './stores.js';

  let title;

  titleStore.subscribe(value => title = value);

</script>

<main class='jinya-main'>
  <header>
    <Navigation />
    <div class='jinya-banner'>
      <h1 class='jinya-banner__title'>{title}</h1>
    </div>
  </header>
  <div>
    <slot></slot>
  </div>
  <Footer />
</main>

<svelte:head>
  <title>{`Jinya CMS – ${title}`}</title>
</svelte:head>

<style>
  .jinya-main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .jinya-banner {
    background: var(--primary-color);
    padding: 1rem 15vw;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }

  .jinya-banner__title {
    color: var(--white);
    font-size: 3rem;
    font-weight: 700;
  }
</style>
