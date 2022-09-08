import theme from "../../styles/theme";

export type PokemonTypes = {
  type: {
    name:
      | "bug"
      | "dark"
      | "dragon"
      | "electric"
      | "fairy"
      | "fighting"
      | "fire"
      | "flying"
      | "ghost"
      | "grass"
      | "ground"
      | "ice"
      | "normal"
      | "poison"
      | "psychic"
      | "rock"
      | "steel"
      | "water";
  };
};

export interface IPokemon {
  id: number;
  name: string;
  types: PokemonTypes[];
  image_id?: number;
}
