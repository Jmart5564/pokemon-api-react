export async function fetchPokemon(selectedType, searchQuery) {
  const params = new URLSearchParams();
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  if (searchQuery && searchQuery !== '') {
    params.set('pokemon', searchQuery);
  }

  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await res.json();

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}
