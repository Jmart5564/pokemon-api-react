import './PokemonCard.css';

export default function PokemonCard({ pokemon, type_1, type_2, url_image, generation_id }) {
  return (
    <div className="pokemon">
      <img src={url_image}/>
      <span>Name: {pokemon}</span>
      <span>{type_2 !== 'NA' ? `Types: ${type_1} | ${type_2}` : `Type: ${type_1}`}</span>
      <span>Generation: {generation_id}</span>
    </div>
  );
}
