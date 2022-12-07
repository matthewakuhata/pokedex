import { createContext, useContext, useEffect, useState } from "react";
import { Pokemon } from "../models/pokemon";

interface FavoritesContextArgs {
  removeFavourite: (pokemon: Pokemon) => void;
  addFavourite: (pokemon: Pokemon) => void;
  favourites: {
    [key: string]: Pokemon;
  };
}

export const FavoritesContext = createContext<FavoritesContextArgs>({
  removeFavourite: (_: Pokemon) => {},
  addFavourite: (_: Pokemon) => {},
  favourites: {},
});

export function useFavorites() {
  const contextValue = useContext(FavoritesContext);

  if (!contextValue) {
    throw new Error(
      "useFavorites must be called from within an FavouritesProvider"
    );
  }

  return contextValue;
}

export const FavouritesProvider = (props: any) => {
  const [favourites, setFavourites] = useState<{ [key: string]: Pokemon }>({});

  const addFavourite = (pokemon: Pokemon) => {
    setFavourites((prev) => {
      const favs = { ...prev, [pokemon.id]: pokemon };

      localStorage.setItem("pokemon-favourites", JSON.stringify(favs));
      return favs;
    });
  };

  const removeFavourite = (pokemon: Pokemon) => {
    setFavourites((prev) => {
      if (!prev[pokemon.id]) return prev;

      const newFavs = { ...prev };
      delete newFavs[pokemon.id];

      localStorage.setItem("pokemon-favourites", JSON.stringify(newFavs));
      return newFavs;
    });
  };

  useEffect(() => {
    const favs = localStorage.getItem("pokemon-favourites");
    console.log(favs);
    setFavourites(JSON.parse(favs || "{}"));
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
      {...props}
    />
  );
};
