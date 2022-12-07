export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
}

export interface Specie {
  name: string;
  url: string;
}

export interface Other {
  dream_world: {
    front_default: string | null;
    front_female: string | null;
  };
  "official-artwork": {
    front_default: string;
  };
}

export interface PokemonSpriteGenerationI {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface PokemonSpriteGenerationIIToIII {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface PokemonSpriteGenerationIV {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface PokemonSpriteGenerationV {
  animated: PokemonSpriteGenerationIV;
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface PokemonSpriteGenerationVIAndVIII {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface Icons {
  front_default: string | null;
  front_female: string | null;
}

export interface Versions {
  "generation-i": {
    "red-blue": PokemonSpriteGenerationI;
    yellow: PokemonSpriteGenerationI;
  };
  "generation-ii": {
    crystal: PokemonSpriteGenerationIIToIII;
    gold: PokemonSpriteGenerationIIToIII;
    silver: PokemonSpriteGenerationIIToIII;
  };
  "generation-iii": {
    emerald: PokemonSpriteGenerationIIToIII;
    "firered-leafgreen": PokemonSpriteGenerationIIToIII;
    "ruby-sapphire": PokemonSpriteGenerationIIToIII;
  };
  "generation-iv": {
    "diamond-pearl": PokemonSpriteGenerationIV;
    "heartgold-soulsilver": PokemonSpriteGenerationIV;
    platinum: PokemonSpriteGenerationIV;
  };
  "generation-v": {
    "black-white": PokemonSpriteGenerationV;
  };
  "generation-vi": {
    "omegaruby-alphasapphire": PokemonSpriteGenerationVIAndVIII;
    "x-y": PokemonSpriteGenerationVIAndVIII;
  };
  "generation-vii": {
    icons: Icons;
    "ultra-sun-ultra-moon": PokemonSpriteGenerationVIAndVIII;
  };
  "generation-viii": {
    icons: Icons;
  };
}

export interface Sprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other[];
  versions: Versions;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Specie[];
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number;
}
