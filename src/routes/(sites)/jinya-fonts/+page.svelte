<script>
  import { titleStore } from '../stores.js';
  import Article from '../../../partials/article.svelte';

  import '@fontsource/oxygen-mono/400.css';

  titleStore.set('Jinya Fonts');
</script>

<Article title="What is Jinya Fonts?">
  Jinya Fonts is a privacy focused font hosting service. It has all fonts available on Google Fonts, but does not track
  your users or write any access logs.
</Article>
<Article title="How to use it?">
  Using Jinya Fonts is easy. Head over to <a href="https://fonts.jinya.de">Jinya Fonts</a> and select the fonts you want
  to use. You can then copy the CSS code and paste it into your website.
</Article>
