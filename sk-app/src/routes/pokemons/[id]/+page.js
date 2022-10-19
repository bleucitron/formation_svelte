import { fetchPokemon } from '$lib/utils';

export async function load({ fetch, params }) {
  const pokemon = await fetchPokemon(params.id, fetch);
  console.log(pokemon);

  return pokemon;
}
