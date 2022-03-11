<script context="module">
	export async function load({ error, status }) {
		return {
			props: {
				title: `${error.message} ${status}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<h1>Error Touitter</h1>
<div>{title}</div>
