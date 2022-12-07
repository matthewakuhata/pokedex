import { useState, useEffect } from "react";
import { Specie } from "../models/pokemon";

const LIMIT_POKE = 2000;

export const useGetPaginatedPokemon = () => {
  const [species, setSpecies] = useState<Specie[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);

      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT_POKE}`
      ).then((res) => res.json());

      setSpecies(data.results);
      setLoading(false);
    };

    getPokemon();
  }, []);

  const data = searchString
    ? species.filter((specie) => specie.name.includes(searchString))
    : species.slice(offset, offset + 20);

  const hasNext = offset <= species.length - 21;
  const hasPrev = offset > 0;

  const nextPage = () => {
    setOffset((prev) => prev + 20);
  };

  const previousPage = () => {
    setOffset((prev) => prev - 20);
  };

  const pagination = {
    hasNext,
    hasPrev,
    nextPage,
    previousPage,
  };

  return { data, loading, pagination, setSearchString };
};
