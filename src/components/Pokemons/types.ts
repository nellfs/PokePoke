import theme from "../../styles/theme";

export type PokemonTypes =
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

export interface IPokemon {
  id: number;
  name: string;
  type: PokemonTypes;
  image: string;
}
