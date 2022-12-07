import React from "react";
import { useGetPaginatedPokemon } from "../hooks/getPaginatedPokemon";
import LoadingBar from "./LoadingBar/LoadingBar";

import "./PokemonList.css";
interface PokemonListProps {
  onClickItemHandler: (name: string) => void;
}
const PokemonList: React.FC<PokemonListProps> = ({ onClickItemHandler }) => {
  const { data, loading, pagination, setSearchString } =
    useGetPaginatedPokemon();

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div className="pokemon-list">
      <input
        type="text"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        placeholder="Search for a pokemon"
      />
      <ul className="pokemon-list__container">
        {data.map((pok) => (
          <li onClick={() => onClickItemHandler(pok.name)} key={pok.name}>
            {pok.name}
          </li>
        ))}
      </ul>
      <div className="pokemon-list__pagination">
        <button
          disabled={!pagination.hasPrev}
          onClick={() => pagination.previousPage()}
        >
          Previous Page
        </button>
        <button
          disabled={!pagination.hasNext}
          onClick={() => pagination.nextPage()}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
