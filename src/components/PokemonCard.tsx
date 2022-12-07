import { useFavorites } from "../contexts/favourites-context";
import { useGetPokemonDetails } from "../hooks/getPokemonDetails";
import LoadingBar from "./LoadingBar/LoadingBar";

import "./PokemonCard.css";

interface PokemonCardProps {
  name: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const { loading, pokemon } = useGetPokemonDetails(name);
  const { favourites, addFavourite, removeFavourite } = useFavorites();
  const isFavorite = pokemon && !!favourites[pokemon.id];

  if (loading) {
    return <LoadingBar />;
  }

  const onClickHandler = () => {
    if (!pokemon) return;

    if (isFavorite) {
      removeFavourite(pokemon);
    } else {
      addFavourite(pokemon);
    }
  };

  return pokemon ? (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default || ""} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <button onClick={onClickHandler}>
        {isFavorite ? "Unfavourite" : "Favourite Me!"}
      </button>
    </div>
  ) : (
    <h2>Select a Pokemon Above...</h2>
  );
};
