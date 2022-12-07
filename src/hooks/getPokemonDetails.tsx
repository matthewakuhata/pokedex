import { useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";

export const useGetPokemonDetails = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      ).then((res) => res.json());

      setPokemon(data);
      setLoading(false);
    };

    if (name) {
      getData();
    }
  }, [name]);

  return { pokemon, loading };
};
