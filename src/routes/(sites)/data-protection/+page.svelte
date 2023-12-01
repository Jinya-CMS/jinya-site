<script>
  import { titleStore } from "../stores.js";
  import Article from "../../../partials/article.svelte";

  titleStore.set('Privacy Policy');
</script>

<Article title="Privacy Policy for jinya.de">
	<p>
		At Jinya CMS, accessible from jinya.de, one of our main priorities is the privacy of our
		visitors. This Privacy Policy document contains types of information that is collected and
		recorded by Jinya CMS and how we use it.
	</p>

	<p>
		If you have additional questions or require more information about our Privacy Policy, do not
		hesitate to contact us. Our Privacy Policy was generated with the help of <a
			href="https://www.gdprprivacypolicy.net/">GDPR Privacy Policy Generator</a
		>
	</p>

	<h2 class="jinya-header">General Data Protection Regulation (GDPR)</h2>
	<p>We are a Data Controller of your information.</p>

	<p>
		Imanuel Ulbricht legal basis for collecting and using the personal information described in this
		Privacy Policy depends on the Personal Information we collect and the specific context in which
		we collect the information:
	</p>
	<ul>
		<li>Imanuel Ulbricht needs to perform a contract with you</li>
		<li>You have given Imanuel Ulbricht permission to do so</li>
		<li>Processing your personal information is in Imanuel Ulbricht legitimate interests</li>
		<li>Imanuel Ulbricht needs to comply with the law</li>
	</ul>

	<p>
		Imanuel Ulbricht will retain your personal information only for as long as is necessary for the
		purposes set out in this Privacy Policy. We will retain and use your information to the extent
		necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
	</p>

	<p>
		If you are a resident of the European Economic Area (EEA), you have certain data protection
		rights. If you wish to be informed what Personal Information we hold about you and if you want
		it to be removed from our systems, please contact us.
	</p>

	<p>In certain circumstances, you have the following data protection rights:</p>
	<ul>
		<li>The right to access, update or to delete the information we have on you.</li>
		<li>The right of rectification.</li>
		<li>The right to object.</li>
		<li>The right of restriction.</li>
		<li>The right to data portability</li>
		<li>The right to withdraw consent</li>
	</ul>

	<h2 class="jinya-header">Log Files</h2>

	<p>Jinya CMS does not create log files and has no plans to do so.</p>

	<h2 class="jinya-header">Partner Privacy Policies</h2>

	<p>Jinya CMS does not include any external scripts or images.</p>

	<h2 class="jinya-header">Contacting us</h2>
	<p>
		When you contact us only the data you included in the form are sent to us, no more data are
		acquired.
	</p>

	<h2 class="jinya-header">Consent</h2>

	<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
</Article>

<style>
	.jinya-header {
		font-size: 2rem;
		font-weight: 400;
	}
</style>
