import './Compendium.css';
import usePokemon from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../../components/controls/Select';

export default function Compendium() {
  const [loading, pokemon, types, setSelectedType] = usePokemon();

  if (loading) return <div className="loader"></div>;

  return <main>
    <div className='select'><Select options={types} changeHandler={setSelectedType}/></div>
    <div className='pokemon-list'>{pokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)}</div>
  </main>;
  
}
