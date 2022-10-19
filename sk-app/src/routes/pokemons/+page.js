import { fetchAll } from '$lib/utils';

export async function load({ fetch }) {
  const pokemons = await fetchAll(fetch);

  return { pokemons };
}
