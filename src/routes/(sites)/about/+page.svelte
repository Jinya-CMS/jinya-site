<script>
	import { titleStore } from '../stores.js';
	import Article from '../../../partials/article.svelte';

	titleStore.set('About');
</script>

<Article title="The reason behind it">
	<p>
		Back in October 2017, Jenny-Jinya approached Imanuel Ulbricht for a new portfolio website. That was the moment the idea behind the Jinya
		CMS was born. We wanted to build a new way to manage a digital art portfolio. After looking around content management systems we decided
		on building something new. Most popular content management systems are focused on text containing images. Our goal was to create a CMS
		that focuses on text but at the same time works great for pages only containing images.
	</p>
	<p>
		We achieved that by providing two different ways of managing text and artworks. Texts work with the standard editor you know from other
		CMS. The artwork part on the other hand is based on a designer where you can order your artworks in the order you want. This order is
		then reflected in the page your users and fans see.<br />
		In September 2021 Christina Ruebsam, wanted to start an art and crafts blog. She liked the idea behind Jinya. It was lacking support for blogging
		though. So we integrated a blogging system. As of today Jinya contains a way to arrange artworks, create simple text pages, forms and the
		new blogging system.
	</p>
</Article>

<Article title="The tech behind it">
	When developing Jinya one of the main goals was to let it run on nearly every server out there. This was achieved by basing it on the
	popular programming language PHP. Installing it and running it is really simple, you only need a server running PHP 8.1 or Docker. The
	backend is written in PHP and JavaScript and runs in any modern browser. The part that gets served to your clients and fans is based
	around a theming system. Jinya is open source, so everyone can check the code and write their own themes. There is also a guide available
	on how to write themes
	<a href="https://cms.jinya.dev/guide/theme/index.html">here</a>.
</Article>
