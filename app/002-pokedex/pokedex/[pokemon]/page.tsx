"use client"
import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { useParams, useRouter } from "next/navigation"
import PokemonDetails from "./pokemonDetails"
import PokedexBack from "../../components/pokedexBack"
import Loading from "../../components/loading"

export default function PokemonPage() {
	const router = useRouter()
	const params = useParams<{ pokemon: string }>()
	const [pokemon, setPokemon]: any = useState()
	const [error, setError]: any = useState()
	useEffect(() => {
		if (params.pokemon === "gible")
			api.fetchPokemon("443")
				.then(({ data }) => setPokemon(data))
				.catch((error) => setError(true))
		api.fetchPokemon(params.pokemon)
			.then(({ data }) => setPokemon(data))
			.catch((error) => setError(true))
	}, [])

	return (
		<div className='w-screen md:w-full h-full relative'>
			<PokedexBack href='' onClick={() => router.back()} black />
			{pokemon ? <PokemonDetails props={pokemon} /> : <Loading />}
			{error && <div>Error</div>}
		</div>
	)
}
