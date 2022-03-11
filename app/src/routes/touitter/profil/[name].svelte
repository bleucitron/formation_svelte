<script context="module">
	import { getProfile } from '../_utils.js';

	export async function load({ params }) {
		const { name } = params;

		const user = await getProfile(name);

		return {
			props: {
				user
			}
		};
	}
</script>

<script>
	const names = ['r_ourson', 'jub0bs', 'TB_Choi12', 'reactjs', 'fipradio'];
	export let user;
</script>

<nav>
	{#each names as name}
		{@const href = '/touitter/profil/' + name}
		<a sveltekit:prefetch {href}>{name}</a>
	{/each}
</nav>

<div>Coucou {user.name}</div>

<style>
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
