<script>
	import Footer from '../partials/footer.svelte';
	import Article from '../partials/article.svelte';
	import Navigation from '../partials/navigation.svelte';
	import { titleStore } from './(sites)/stores.js';

	import '@fontsource/albert-sans/300.css';
	import '@fontsource/albert-sans/400.css';

	import '@fontsource/urbanist/200.css';
	import '@fontsource/urbanist/400.css';

	titleStore.set('Jinya CMS');
</script>

<main>
	<header class="jinya-header--startpage">
		<img alt="Header image" aria-hidden="true" class="jinya-header__image" src="/img/startpage.webp" />
		<Navigation inverse="true" />
		<div class="jinya-callout">
			<h1 class="jinya-callout__title">Jinya CMS</h1>
			<p class="jinya-callout__claim">The simplest way to manage your portfolio</p>
		</div>
		<span class="jinya-header__copyright">Picture: Generated with Stable Diffusion, by Imanuel Ulbricht</span>
	</header>
	<Article title="Why choose Jinya">
		The Jinya CMS is made by artists for artists. Every part of Jinya was designed with ease of use in mind. During development everything
		evolves around displaying digital art and putting your artworks in the center of attention for your fans. There are countless other CMS
		out there, but most of them concentrate on text based content. Jinya focuses on images and artworks.
	</Article>
	<Article title="Who's behind it">
		<div class="jinya-who__row">
			<div class="jinya-who">
				<p class="jinya-who__name">Imanuel Ulbricht</p>
				<p class="jinya-who__job">Developer and Co-Founder</p>
			</div>
			<div class="jinya-who__description">
				<a href="https://imanuel.dev">Imanuel Ulbricht</a> is a developer and designer based in Hildesheim, Germany. He develops websites, desktop
				applications and mobile applications. Together with Jenny he started the development of the Jinya CMS back in October 2017. He has developed
				several open source projects since then and is currently employed at GOD mbH in Brunswick, Germany.
			</div>
		</div>
		<div class="jinya-who__row jinya-who__row--inverse">
			<div class="jinya-who">
				<p class="jinya-who__name">Jenny Hefczyc</p>
				<p class="jinya-who__job">Artist and Co-Founder</p>
			</div>
			<div class="jinya-who__description">
				<a href="https://jenny-jinya.com">Jenny Hefczyc</a>, better known as Jenny-Jinya, is the artist the Jinya CMS was originally
				developed for. She had her first exhibition at the age of 16 and is currently active as self-employed and freelance artist. She is
				most famously known for her work on the Loving Reaper series. The Loving Reaper series features, as of now, two publications and
				more are planned.
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

	@media screen and (max-width: 480px) {
		.jinya-header--startpage {
			display: flex;
			flex-flow: row wrap;
		}
	}

	.jinya-header__image {
		grid-column: 1/3;
		grid-row: 1/3;
		height: auto;
		width: 100vw;
	}

	@media screen and (max-width: 1280px) {
		.jinya-header__image {
			display: none;
		}
	}

	.jinya-callout {
		padding-left: 15vw;
		padding-bottom: 3rem;
		color: var(--menu-item-color-inverse);
		grid-row: 2;
		grid-column: 1;
	}

	@media screen and (max-width: 1280px) {
		.jinya-callout {
			display: none;
		}
	}

	.jinya-callout__title {
		font-size: 3rem;
		margin-bottom: 0;
		font-family: Urbanist, sans-serif;
	}

	.jinya-callout__claim {
		margin-top: 0;
		font-size: 1.5rem;
		font-weight: 300;
	}

	.jinya-header__copyright {
		color: var(--menu-item-color-inverse);
		padding-right: 15vw;
		align-self: end;
		justify-self: end;
		padding-bottom: 2rem;
		font-weight: 300;
		grid-row: 2;
		grid-column: 2;
	}

	@media screen and (max-width: 1280px) {
		.jinya-header__copyright {
			display: none;
		}
	}

	.jinya-who__row {
		display: flex;
		flex-flow: row;
		margin-bottom: 4rem;
		margin-top: 4rem;
	}

	@media screen and (min-width: 481px) {
		.jinya-who__row--inverse {
			flex-direction: row-reverse;
		}
	}

	@media screen and (max-width: 480px) {
		.jinya-who__row {
			flex-flow: row wrap;
		}
	}

	.jinya-who {
		display: flex;
		justify-content: center;
		flex-flow: column;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	@media screen and (max-width: 480px) {
		.jinya-who {
			padding: 0 0 2rem;
		}
	}

	.jinya-who__name {
		font-size: 2rem;
		margin: 0;
		padding: 0;
		white-space: nowrap;
	}

	@media screen and (max-width: 480px) {
		.jinya-who__name {
			white-space: normal;
			font-size: 1.5rem;
		}
	}

	.jinya-who__job {
		font-size: 1.5rem;
		margin: 0;
		padding: 0;
		text-wrap: none;
		white-space: nowrap;
	}

	@media screen and (max-width: 480px) {
		.jinya-who__job {
			white-space: normal;
			font-size: 1.15rem;
		}
	}

	.jinya-who__description {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 480px) {
		.jinya-who__description {
			font-size: 1rem;
		}
	}
</style>
