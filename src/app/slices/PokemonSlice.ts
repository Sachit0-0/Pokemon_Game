import { createSlice } from "@reduxjs/toolkit"
import { PokemonTypeInitialState } from "../../utils/Types"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"

const initialState: PokemonTypeInitialState = {
  allPokemons: undefined,
  randomPokemons: undefined,
}

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemons = action.payload
    })
  },
})

export const {} = PokemonSlice.actions
