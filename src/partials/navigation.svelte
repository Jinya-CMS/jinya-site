<script>
	import { titleStore } from '../routes/(sites)/stores.js';
	import Logo from '../Logo.svg?component';
	import Github from '../Github.svg?component';

	export let inverse = false;
	let navToggled = false;
	let mobileTitle;
	titleStore.subscribe((value) => (mobileTitle = value));

	function toggleNavigation() {
		navToggled = !navToggled;
	}

	function hideNav() {
		navToggled = false;
	}
</script>

<nav class="jinya-nav jinya-nav--desktop" class:jinya-nav--inverse={inverse}>
	<div class="jinya-nav__left">
		<a class="jinya-nav__brand" class:jinya-nav__brand--inverse={inverse} href="/">
			<Logo height="1em" width="1em" />
			Jinya CMS
		</a>
	</div>
	<div class="jinya-nav__right">
		<a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/about">About</a>
		<a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/stories">Stories</a>
		<a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/get-jinya"
			>Get Jinya</a
		>
		<a class="jinya-nav__link" class:jinya-nav__link--inverse={inverse} href="/contact">Contact</a>
		<a
			class="jinya-nav__link"
			class:jinya-nav__link--inverse={inverse}
			href="https://github.com/Jinya-CMS/jinya-cms"
			target="_blank"
		>
			<Github />
		</a>
	</div>
</nav>
<div class="jinya-nav__bar--mobile">
	<span class="jinya-nav__brand jinya-nav__brand--inverse">
		<Logo height="1em" width="1em" />
		{mobileTitle}
	</span>
	<button class="jinya-hamburger" on:click={toggleNavigation}></button>
</div>
<nav class="jinya-nav--mobile" class:jinya-nav--mobile-open={navToggled}>
	<a class="jinya-nav__link jinya-nav__link--inverse" href="/" on:click={hideNav}>Startpage</a>
	<a class="jinya-nav__link jinya-nav__link--inverse" href="/about" on:click={hideNav}>About</a>
	<a class="jinya-nav__link jinya-nav__link--inverse" href="/stories" on:click={hideNav}>Stories</a>
	<a class="jinya-nav__link jinya-nav__link--inverse" href="/get-jinya" on:click={hideNav}
		>Get Jinya</a
	>
	<a class="jinya-nav__link jinya-nav__link--inverse" href="/contact" on:click={hideNav}>Contact</a>
	<a
		class="jinya-nav__link jinya-nav__link--inverse"
		href="https://github.com/Jinya-CMS/jinya-cms"
		on:click={hideNav}
		target="_blank"
		>Github
	</a>
</nav>

<style>
	.jinya-nav__bar--mobile {
		background: var(--primary-color);
		width: 100vw;
		padding: 1rem 2rem;
		justify-content: space-between;
		box-sizing: border-box;
		display: none;
	}

	.jinya-nav--mobile {
		display: none;
	}

	.jinya-hamburger {
		position: relative;
		appearance: none;
		background: none;
		border: none;
		cursor: pointer;
		width: 3.5rem;
		height: auto;
	}

	.jinya-hamburger::before,
	.jinya-hamburger::after {
		content: '';
		position: absolute;
	}

	.jinya-hamburger::after {
		background: var(--white);
		height: 4px;
		width: 3rem;
		right: 0;
		top: 8px;
	}

	.jinya-hamburger::before {
		background: var(--white);
		height: 4px;
		width: 3rem;
		right: 0;
		bottom: 8px;
	}

	.jinya-nav {
		width: 100vw;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		padding: 2.25rem 15vw;
		box-sizing: border-box;
		grid-column: 1/3;
		grid-row: 1;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
		align-self: flex-start;
		font-family: Urbanist, sans-serif;
	}

	.jinya-nav--mobile {
		display: none;
	}

	.jinya-nav--mobile-open {
		display: flex;
		position: absolute;
		top: 4rem;
		background: var(--primary-color);
		flex-flow: column;
		width: 100vw;
		padding: 1rem 2rem;
		gap: 1rem;
		box-sizing: border-box;
	}

	@media screen and (min-width: 481px) and (max-width: 1280px) {
		.jinya-nav__bar--mobile {
			padding-left: 15vw;
			padding-right: 15vw;
		}
	}

	@media screen and (max-width: 1280px) {
		.jinya-nav--desktop {
			display: none;
		}

		.jinya-nav__bar--mobile {
			display: flex;
		}
	}

	@media screen and (min-width: 1281px) {
		.jinya-nav--inverse {
			background: none;
			box-shadow: none;
		}
	}

	.jinya-nav__brand {
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--menu-item-color);
		font-weight: 700;
		display: flex;
		align-items: center;
	}

	.jinya-nav__brand--inverse {
		--menu-item-color: var(--menu-item-color-inverse);
		box-shadow: none;
	}

	@media screen and (min-width: 1281px) {
		.jinya-nav__brand--inverse {
			color: var(--menu-item-color);
			box-shadow: none;
		}
	}

	.jinya-nav__right {
		display: flex;
		gap: 3rem;
	}

	.jinya-nav__link {
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--menu-item-color);
	}

	.jinya-nav__link--inverse {
		color: var(--menu-item-color-inverse);
		fill: var(--menu-item-color-inverse);
		stroke: var(--menu-item-color-inverse);
	}
</style>
