import { PokemonCard } from "./PokemonCard";
import { useFavorites } from "../contexts/favourites-context";

import "./FavoritesList.css";

const FavoritesList = () => {
  const { favourites } = useFavorites();
  return (
    <div className="favourites-list">
      <h2> My Favourites</h2>
      <div className="favourites-list__cards">
        {Object.values(favourites).map((fav) => (
          <PokemonCard key={`favourtied-${fav.name}`} name={fav.name} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
