import theme from "../../styles/theme";

type PokemonType = {
  types: string;
};
export interface IPokemon {
  id: number;
  name: string;
  type: PokemonType;
  image: string;
}
