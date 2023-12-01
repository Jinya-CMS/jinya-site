<script>
  import { titleStore } from "../stores.js";
  import Article from "../../../partials/article.svelte";

  titleStore.set('Contact us');

	export let form;
</script>

<Article title="Contact form">
	{#if form?.success}
		<div class="jinya-message--success">
			Your message was sent, we will send you a reply as fast as we can
		</div>
	{:else if form?.success === false}
		<div class="jinya-message--failure">
			Your message could not be sent, please send your concern to <a
				href="mailto:developers@jinya.de">developers@jinya.de</a
			>
		</div>
	{/if}
	<form class="jinya-form" method="post">
		<label class="jinya-label" for="name">Your name <small>(required)</small></label>
		<input class="jinya-input" id="name" name="name" required type="text" />
		<label class="jinya-label" for="email">Your email <small>(required)</small></label>
		<input class="jinya-input" id="email" name="email" required type="email" />
		<label class="jinya-label" for="concern">Your concern <small>(required)</small></label>
		<input class="jinya-input" id="concern" name="concern" required type="text" />
		<label class="jinya-label" for="message">Your message <small>(required)</small></label>
		<textarea class="jinya-textarea" id="message" name="message" required rows="15"></textarea>
		<div>
			<input class="jinya-checkbox" id="accept" required type="checkbox" />
			<label for="accept"
				>I have read the <a href="/data-protection" target="_blank">data protection page</a>
				<small>(required)</small></label
			>
		</div>
		<button class="jinya-button" type="submit">Send your message</button>
	</form>
</Article>

<style>
	.jinya-checkbox {
		visibility: hidden;
	}

	.jinya-checkbox + label {
		position: relative;
		margin-left: 0.25rem;
	}

	.jinya-checkbox + label::before {
		content: '';
		left: -2rem;
		position: absolute;
		background: var(--form-item-background);
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 4px;
	}

	.jinya-checkbox:checked + label::after {
		content: '';
		position: absolute;
		left: -1.5rem;
		top: 0.25rem;
		height: 0.75rem;
		width: 0.25rem;
		border-left: 2px solid var(--article-background);
		border-top: 2px solid var(--article-background);
		transform: rotate(220deg);
	}

	.jinya-checkbox:checked + label::before {
		background: var(--primary-color);
	}

	.jinya-checkbox:invalid + label::before {
		background: var(--error-color);
	}

	@media screen and (max-width: 480px) {
		.jinya-checkbox + label::before {
			width: 1.25rem;
			height: 1.25rem;
			left: -1.75rem;
		}

		.jinya-checkbox:checked + label::after {
			left: -1.35rem;
			top: 0.15rem;
			height: 0.75rem;
			width: 0.25rem;
			border-left: 2px solid var(--article-background);
			border-top: 2px solid var(--article-background);
			transform: rotate(220deg);
		}
	}

	.jinya-form {
		display: grid;
		grid-auto-rows: auto;
	}

	.jinya-label {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 480px) {
		.jinya-label {
			font-size: 1rem;
		}
	}

	.jinya-input,
	.jinya-textarea {
		border-radius: 12px;
		background: var(--form-item-background);
		margin-bottom: 1rem;
		font-size: 1.5rem;
		padding: 0.5rem 1rem;
		border: 2px solid var(--form-item-background);
		box-sizing: border-box;
	}

	@media screen and (max-width: 480px) {
		.jinya-input,
		.jinya-textarea {
			font-size: 1rem;
		}
	}

	.jinya-input:invalid,
	.jinya-textarea:invalid {
		border: 2px solid var(--error-color);
	}

	.jinya-input:focus,
	.jinya-textarea:focus {
		border: 2px solid var(--primary-color);
		box-shadow: none;
		outline: none;
		box-sizing: border-box;
	}

	.jinya-button {
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--text-color-white);
		background: var(--primary-color);
		padding: 0.5rem 1rem;
		border-radius: 12px;
		transition:
			0.3s color,
			0.3s background;
		box-sizing: border-box;
		border: 2px solid var(--primary-color);
		align-self: end;
		justify-self: end;
		cursor: pointer;
	}

	.jinya-button:hover {
		background: var(--text-color-white);
		color: var(--primary-color);
	}

	@media screen and (max-width: 480px) {
		.jinya-button {
			font-size: 1rem;
		}
	}

	.jinya-message--success {
		background: var(--success-background-color);
		color: var(--success-color);
		border-radius: 12px;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		margin-top: 1rem;
		box-sizing: border-box;
	}

	@media screen and (max-width: 480px) {
		.jinya-message--success {
			font-size: 1rem;
		}
	}

	.jinya-message--failure {
		background: var(--error-background-color);
		color: var(--error-color);
		border-radius: 12px;
		padding: 1rem 2rem;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		margin-top: 1rem;
		box-sizing: border-box;
	}

	@media screen and (max-width: 480px) {
		.jinya-message--failure {
			font-size: 1rem;
		}
	}

	.jinya-message--failure a {
		color: var(--error-color);
	}
</style>
