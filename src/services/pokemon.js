export async function fetchPokemon() {
  const params = new URLSearchParams();
  params.set('perPage', 25);

  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await res.json();

  return data.results;
}
