<script>
  import { titleStore } from "../stores.js";

  titleStore.set("Stories");
</script>

<div class="jinya-story">
  <div class="jinya-story__info">
    <h2 class="jinya-story__who">Jenny-Jinya</h2>
    <p class="jinya-story__content">
      Jenny-Jinya is a freelance illustrator based in Germany, she studies Digital Media and had a number of exhibitions
      since she is 16, her new portfolio got an incredible amount of positive feedback.
    </p>
    <a class="jinya-story__visit" href="https://jenny-jinya.com">Visit jenny-jinya.com</a>
  </div>
  <img alt="Startpage of jenny-jinya.com" class="jinya-story__preview" src="/img/jenny-jinya.com.webp">
</div>
<div class="jinya-story jinya-story--inverse">
  <div class="jinya-story__info">
    <h2 class="jinya-story__who">Jenny-Jinya Comics</h2>
    <p class="jinya-story__content">
      Jenny Jinya comics is the comic website of the artist Jenny-Jinya. She is the creator of the famous Loving Reaper
      comic series. She trusts Jinya to give people the perfect view on her comics.
    </p>
    <a class="jinya-story__visit" href="https://lovingreaper.com">Visit lovingreaper.com</a>
  </div>
  <img alt="Startpage of lovingreaper.com" class="jinya-story__preview jinya-story__preview--inverse"
       src="/img/lovingreaper.com.webp">
</div>
<div class="jinya-story">
  <div class="jinya-story__info">
    <h2 class="jinya-story__who">Imanuel Ulbricht Design</h2>
    <p class="jinya-story__content">
      Imanuel Ulbricht is a professional web and app developer. The portfolio was created with the default theme of
      Jinya and is the perfect showcase.
    </p>
    <a class="jinya-story__visit" href="https://design.imanuel.dev/">Visit design.imanuel.dev</a>
  </div>
  <img alt="Startpage of design.imanuel.dev" class="jinya-story__preview" src="/img/design.imanuel.dev.webp">
</div>
<div class="jinya-story jinya-story--inverse">
  <div class="jinya-story__info">
    <h2 class="jinya-story__who">Creastina</h2>
    <p class="jinya-story__content">
      Creastina is the private crafting blog of Christina. Together with Christina we developed a blog platform that
      perfectly integrates into the Jinya CMS.
    </p>
    <a class="jinya-story__visit" href="https://creastina.art">Visit creastina.art</a>
  </div>
  <img alt="Startpage of creastina.art" class="jinya-story__preview jinya-story__preview--inverse"
       src="/img/creastina.art.webp">
</div>

<style>
  .jinya-story {
    background: var(--article-background);
    border-radius: 0.75rem;
    box-sizing: border-box;
    margin: 2rem 15vw;
    box-shadow: 0 0 4px 2px var(--article-shadow-color);
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story {
      flex-flow: column-reverse;
      margin: 2rem 1.5rem;
    }
  }

  .jinya-story--inverse {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story--inverse {
      flex-direction: column-reverse;
    }
  }

  .jinya-story__who {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    font-weight: 400;
    color: var(--primary-color);
    flex: 0 0 50%;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story__who {
      width: 100%;
      flex-basis: 100%;
      font-size: 2rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    .jinya-story__who {
      color: var(--text-color);
    }
  }

  .jinya-story__preview {
    border-radius: 0 0.75rem 0.75rem 0;
    height: auto;
    flex: 0 0 50%;
    width: 50%;
    object-fit: cover;
    object-position: 0 0;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story__preview {
      width: 100%;
      flex-basis: 100%;
      border-radius: 0.75rem 0.75rem 0 0;
    }
  }

  .jinya-story__preview--inverse {
    border-radius: 0.75rem 0 0 0.75rem;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story__preview--inverse {
      border-radius: 0.75rem 0.75rem 0 0;
    }
  }

  .jinya-story__info {
    padding: 2rem 1.5rem;
  }

  .jinya-story__content {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 1280px) {
    .jinya-story__content {
      font-size: 1rem;
    }
  }

  .jinya-story__visit {
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--text-color-white);
    background: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    transition: 0.3s color, 0.3s background;
    box-sizing: border-box;
    border: 2px solid var(--primary-color);
    cursor: pointer;
  }

  .jinya-story__visit:hover {
    background: var(--text-color-white);
    color: var(--primary-color);
  }

  @media screen and (max-width: 1280px) {
    .jinya-story__visit {
      font-size: 1rem;
    }
  }
</style>
