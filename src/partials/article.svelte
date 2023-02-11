<script>
  export let title;
  export let content;
</script>

<article class='jinya-article'>
  <h2 class='jinya-article__title'>{title}</h2>
  <p class='jinya-article__content'>
    <slot></slot>
  </p>
</article>

<style>
  .jinya-article {
    background: var(--article-background);
    border-radius: 0.75rem;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    margin: 5vh 10vw;
    box-shadow: 0 0 4px 2px var(--article-shadow-color);
  }

  .jinya-article__title {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    font-weight: 400;
    color: var(--primary-color);
  }

  .jinya-article__content {
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }
</style>
