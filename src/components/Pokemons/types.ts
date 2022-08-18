import theme from "../../styles/theme";

export type PokemonTypes = "fire" | "grass" | "water" | "eletric";

export interface IPokemon {
  id: number;
  name: string;
  type: PokemonTypes;
  image: string;
}
