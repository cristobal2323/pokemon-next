import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrID: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrID}`, {
    headers: { "Accept-Encoding": "*" },
  });

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
