export interface AppTypeInitialState {}

export interface PokemonTypeInitialState {
  allPokemons: undefined | genericPokemonType[]
  randomPokemons: generatedPokemonType[] | undefined
}

export interface genericPokemonType {
  name: string
  url: string
}

export interface generatedPokemonType {
  name: string
  id: number
  image: string
  // types: pokemonTypeInterface[]
}
