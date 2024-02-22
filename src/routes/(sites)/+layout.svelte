<script>
	import Navigation from '../../partials/navigation.svelte';
	import Footer from '../../partials/footer.svelte';
	import { titleStore } from './stores.js';

  import '@fontsource/albert-sans/300.css';
  import '@fontsource/albert-sans/400.css';

  import '@fontsource/urbanist/200.css';
  import '@fontsource/urbanist/300.css';
  import '@fontsource/urbanist/400.css';

	let title;

	titleStore.subscribe((value) => (title = value));
</script>

<main class="jinya-main">
	<header>
		<Navigation />
		<div class="jinya-banner">
			<h1 class="jinya-banner__title">{title}</h1>
		</div>
	</header>
	<div>
		<slot />
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

	@media screen and (max-width: 480px) {
		.jinya-banner {
			display: none;
		}
	}

	.jinya-banner__title {
		color: var(--text-color-white);
		font-size: 3rem;
    font-family: Urbanist, sans-serif;
    font-weight: 400;
	}

	@media screen and (max-width: 480px) {
		.jinya-banner__title {
			font-size: 2rem;
			padding: 0;
			margin: 0;
		}
	}
</style>
