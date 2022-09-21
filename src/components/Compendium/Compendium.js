import './Compendium.css';
import usePokemon from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Compendium() {
  const [loading, pokemon] = usePokemon();

  if (loading) return <div className="loader"></div>;

  return <main>
    {pokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)}
  </main>;
  
}
