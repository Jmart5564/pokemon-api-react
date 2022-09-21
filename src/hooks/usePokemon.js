import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };
    loadData();
  }, []);

  return [loading, pokemon];
}
