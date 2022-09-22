import './Compendium.css';
import usePokemon from '../../hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import Select from '../../components/controls/Select';
import SearchBar from '../SearchBar/SearchBar';
import Audio from '../Audio/Audio';

export default function Compendium() {
  const [loading, pokemon, types, setSelectedType, setSearchQuery] = usePokemon();

  return <main>
    <Audio/>
    <div className='select'><Select options={types} changeHandler={setSelectedType}/>
      <SearchBar searchHandler={setSearchQuery}/></div>
    {
      loading
        ? <div className='loader-container'><span className="loader"></span></div>
        : <div className='pokemon-list'>
          {pokemon.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)}
        </div>
    }
  </main>;

}
