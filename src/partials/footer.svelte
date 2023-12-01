<footer class="jinya-footer">
	<span class="jinya-footer__entry">© Jinya Developers</span>
	<span class="jinya-footer__entry"
		>Made with <span class="jinya-heart">♥</span> in Hildesheim</span
	>
	<div class="jinya-footer__links">
		<a class="jinya-footer__entry jinya-footer__entry--link" href="/data-protection"
			>Data Protection</a
		>
		<a class="jinya-footer__entry jinya-footer__entry--link" href="/imprint">Imprint</a>
	</div>
</footer>

<style>
	.jinya-footer {
		background: var(--primary-color);
		display: flex;
		justify-content: space-between;
		padding: 1.5rem 15vw;
		bottom: 0;
		width: 100vw;
		box-sizing: border-box;
	}

	@media screen and (max-width: 1280px) {
		.jinya-footer {
			flex-flow: column;
			gap: 0.5rem;
		}
	}

	.jinya-heart {
		color: var(--red);
	}

	.jinya-footer__entry {
		color: var(--white);
	}

	.jinya-footer__entry--link {
		text-decoration: none;
	}

	.jinya-footer__links {
		display: flex;
		gap: 2rem;
	}
</style>
