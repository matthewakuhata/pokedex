import { useState } from "react";
import { PokemonCard } from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";

import "./App.css";
import FavoritesList from "./components/FavoritesList";
import { FavouritesProvider } from "./contexts/favourites-context";

function App() {
  const [pokemonName, setPokemonName] = useState<string>("");

  return (
    <FavouritesProvider>
      <div className="pokemon-search">
        <PokemonList onClickItemHandler={(name) => setPokemonName(name)} />
        <PokemonCard name={pokemonName} />
        <FavoritesList />
      </div>
    </FavouritesProvider>
  );
}

export default App;
