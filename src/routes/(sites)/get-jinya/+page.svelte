<script>
	import { titleStore } from '../stores.js';
	import Article from '../../../partials/article.svelte';

  import '@fontsource/oxygen-mono/400.css'

	titleStore.set('Get Jinya');
</script>

<Article title="Install Jinya on your server">
	Installing Jinya is very easy. You only need to grab the most recent build from <a
		href="https://releases.jinya.de/cms">here</a
	>, extract it in a directory on your server and then simple point your domain to the created
	directory. You also need to make sure to create a MySQL database you can use. If you have issues
	installing Jinya feel free to contact us via the contact form or just send us an email to
	<a href="mailto:developers@jinya.de">developers@jinya.de</a>.
</Article>
<Article title="Install Jinya using Docker">
	Installing Jinya using Docker is documented <a href="https://hub.docker.com/r/jinyacms/jinya-cms"
		>here</a
	>. You can also use the following docker-compose.yaml to run your installation.
	<pre class="jinya-install--docker">
version: '3.7'

services:
  jinya-mysql-database:
    image: library/mariadb:latest
    environment:
      MYSQL_DATABASE: jinya
      MYSQL_PASSWORD: jinya
      MYSQL_ROOT_PASSWORD: jinya
      MYSQL_USER: jinya
    ports:
      - 3306:3306
  jinya-cms:
    image: jinyacms/jinya-cms:latest
    ports:
      - 8080:80
    links:
      - jinya-mysql-database</pre>
</Article>

<svelte:head>
	<link
		href="https://fonts.jinya.de/css2?family=Source Code Pro"
		rel="stylesheet"
		type="text/css"
	/>
</svelte:head>

<style>
	.jinya-install--docker {
		font-family: 'Oxygen Mono', monospace;
		border: 1px solid var(--primary-color);
		padding: 2rem 0.5rem 0.25rem;
		position: relative;
		border-radius: 12px;
		overflow: hidden;
	}

	.jinya-install--docker::before {
		content: 'Code sample';
		background: var(--primary-color);
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.25rem 0.5rem;
		color: var(--text-color-white);
		border-bottom-right-radius: 12px;
	}
</style>
