<script context="module">
	export async function load({ error, status }) {
		return {
			props: {
				title: `${error} ${status}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>Error Classique</h1>
<div>{title}</div>
