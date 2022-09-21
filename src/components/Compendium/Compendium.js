import './Compendium.css';
import usePokemon from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../../components/controls/Select';

export default function Compendium() {
  const [loading, pokemon, types] = usePokemon();

  if (loading) return <div className="loader"></div>;

  return <main>
    <Select options={types} changeHandler={() => {} }/>
    {pokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)}
  </main>;
  
}
