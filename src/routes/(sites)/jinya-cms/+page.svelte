<script>
	import { titleStore } from '../stores.js';
	import Article from '../../../partials/article.svelte';

	import '@fontsource/oxygen-mono/400.css';

	titleStore.set('Jinya CMS');
</script>

<Article title="What is the Jinya CMS?">
	The Jinya CMS is made by artists for artists. Every part of Jinya was designed with ease of use in mind. During development everything
	evolves around displaying digital art and putting your artworks in the center of attention for your fans. There are countless other CMS
	out there, but most of them concentrate on text based content. Jinya focuses on images and artworks.
</Article>
<Article title="Get your own installation">
	Installing Jinya is very easy. The documentation website contains more information for you. We officially support Apache, Frankenphp and
	Docker installations. Check <a href="https://cms.jinya.dev/docs/getting-started">the documentation</a> for more information. If you have
	issues installing Jinya feel free to contact us via the contact form or just send us an email to
	<a href="mailto:developers@jinya.de">developers@jinya.de</a>.
</Article>
<Article title="The tech behind it">
	When developing Jinya one of the main goals was to let it run on nearly every server out there. This was achieved by basing it on the
	popular programming language PHP. Installing it and running it is really simple, you only need a server running PHP 8.4 or Docker. The
	backend is written in PHP and JavaScript and runs in any modern browser. The part that gets served to your clients and fans is based
	around a theming system. Jinya is open source, so everyone can check the code and write their own themes. There is also a guide available
	on how to write themes <a href="https://cms.jinya.dev/docs/theme/create">here</a>.
</Article>
