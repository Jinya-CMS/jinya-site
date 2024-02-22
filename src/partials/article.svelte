<script>
	export let title;
</script>

<div class="jinya-article">
	<h2 class="jinya-article__title">{title}</h2>
	<p class="jinya-article__content">
		<slot />
	</p>
</div>

<style>
	.jinya-article {
		background: var(--article-background);
		border-radius: 0.75rem;
		padding: 2rem 1.5rem;
		box-sizing: border-box;
		margin: 2rem 15vw;
		box-shadow: 0 0 4px 2px var(--article-shadow-color);
	}

	@media screen and (max-width: 480px) {
		.jinya-article {
			padding: 1rem 0.5rem;
			margin: 2rem 1.5rem;
		}
	}

	.jinya-article__title {
		margin: 0;
		padding: 0;
		font-size: 3rem;
		font-weight: 200;
    font-family: Urbanist, sans-serif;
		color: var(--primary-color);
	}

	@media (prefers-color-scheme: dark) {
		.jinya-article__title {
			color: var(--text-color);
		}
	}

	@media screen and (max-width: 1280px) {
		.jinya-article__title {
			font-size: 2rem;
		}
	}

	.jinya-article__content {
		margin: 0;
		padding: 0;
		color: var(--text-color);
		font-size: 1.25rem;
	}

	@media screen and (max-width: 1280px) {
		.jinya-article__content {
			font-size: 1rem;
		}
	}
</style>
