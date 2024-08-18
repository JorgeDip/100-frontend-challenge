"use client"
import { Suspense, useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams, useRouter } from "next/navigation"
import PokemonDetails from "./pokemonDetails"
import PokedexBack from "../../components/pokedexBack"

export default function PokemonPage() {
  const router = useRouter()
  const params = useParams<{ pokemon: string }>()
  const [pokemon, setPokemon]: any = useState()
  const [error, setError]: any = useState()
  useEffect(() => {
    if (params.pokemon === "gible")
      api
        .fetchPokemon("443")
        .then(({ data }) => setPokemon(data))
        .catch((error) => setError(true))
    api
      .fetchPokemon(params.pokemon)
      .then(({ data }) => setPokemon(data))
      .catch((error) => setError(true))
  }, [])
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className='w-full relative'>
        <PokedexBack href='' onClick={() => router.back()} black />
        <PokemonDetails props={pokemon} />
        {error && <div>Error</div>}
      </div>
    </Suspense>
  )
}
