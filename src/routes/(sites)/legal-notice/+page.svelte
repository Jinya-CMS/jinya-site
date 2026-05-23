<script>
	import { titleStore } from '../stores.js';
	import Article from '../../../partials/article.svelte';

	titleStore.set('Imprint');
</script>

<Article title="Angaben gemäß § 5 TMG">
	<address class="jinya-address">
		Imanuel Ulbricht<br />
		Dingworthstr. 15<br />
		31137 Hildesheim
	</address>
	<h2 class="jinya-header">Kontakt</h2>
	<p>E-Mail: <a href="mailto:imanuel.ulbricht@jinya.de">imanuel.ulbricht@jinya.de</a></p>
	<h2 class="jinya-header">Haftung für Inhalte</h2>
	<p>
		Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
		§§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
		überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
	</p>
	<p>
		Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
		diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
		entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
	</p>
	<h2 class="jinya-header">Urheberrecht</h2>
	<p>
		Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
		Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
		schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
		kommerziellen Gebrauch gestattet.
	</p>
	<p>
		Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
		Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
		entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
	</p>
	<p>Quelle: e-recht24.de</p>
</Article>

<style>
	.jinya-header {
		font-size: 2rem;
		font-weight: 400;
	}

	.jinya-address {
		font-style: normal;
	}
</style>
