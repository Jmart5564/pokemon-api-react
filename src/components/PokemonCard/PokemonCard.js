import './PokemonCard.css';

export default function PokemonCard({ pokemon, type_1, type_2, url_image, generation_id }) {
  return (
    <div className="pokemon">
      <img src={url_image}/>
      <span>{pokemon}</span>
      <span>{type_1}</span>
      <span>{type_2}</span>
      <span>{generation_id}</span>
    </div>
  );
}