import { useEffect } from "react"
import Wrapper from "../sections/Wrapper"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData"

function Search() {
  const dispatch = useAppDispatch()
  const { allPokemons } = useAppSelector(({ pokemon }) => pokemon)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemons && allPokemons.length > 0) {
      const randomPokemonsId = [...allPokemons]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20)
      console.log(randomPokemonsId)
    }
  }, [allPokemons])

  return <div>Search</div>
}

export default Wrapper(Search)
