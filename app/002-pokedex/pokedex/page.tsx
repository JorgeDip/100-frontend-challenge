"use client"
import { useEffect, useState } from "react"
import { api } from "../api/api"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { useRouter, useSearchParams } from "next/navigation"
import PokedexBack from "../components/pokedexBack"
import Loading from "../components/loading"

export default function PokedexPage() {
	const router = useRouter()
	const params = useSearchParams()
	const pokedexOffset: any = Number(params.get("pokedex_offset"))

	const [pokemonList, setPokemonList]: any = useState([])
	const [offset, setOffset] = useState(pokedexOffset % 25 ? 0 : pokedexOffset)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (offset < 0 || offset > 1000) return

		router.push(`?pokedex_offset=${offset}`)
		setLoading(true)
		api.getPokemons(offset)
			.then((data) => {
				setPokemonList(data)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [offset])

	function formatNumber(num: number) {
		return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num
	}

	return (
		<div className='bg-gray-200 w-full h-full p-6 relative overflow-auto lg:w-full lg:flex lg:flex-col lg:justify-center lg:rounded-r-xl lg:overflow-hidden'>
			<PokedexBack href='/002-pokedex' />
			<div className='lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center lg:gap-x-6'>
				<div className='flex items-center justify-around mb-12 lg:mb-0 lg:absolute lg:w-full lg:flex lg:justify-between lg:px-4'>
					<button className='group' onClick={() => setOffset(offset - 25)} disabled={offset === 0 || loading}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='size-12 text-gray-400 hover:text-gray-600 transition group-disabled:text-gray-100 group-disabled:cursor-not-allowed'>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.03-13.53a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					<button
						className='group'
						onClick={() => setOffset(offset + 25)}
						disabled={offset === 1000 || loading}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='size-12 text-gray-400 hover:text-gray-600 transition group-disabled:text-gray-100 group-disabled:cursor-not-allowed'>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.97 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 0-1.06'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<div className='flex flex-col lg:w-full lg:h-full lg:flex-row lg:px-12'>
					{loading ? (
						<Loading />
					) : (
						<div className='w-full h-full grid gap-6 grid-cols-2 lg:grid-cols-5'>
							{pokemonList.map((pokemon: Pokemon) => (
								<Link
									href={`/002-pokedex/pokedex/${pokemon?.name}`}
									key={pokemon?.name}
									className='pokedex-box bg-gray-100 hover:bg-gray-300 border border-gray-200 rounded-lg shadow-lg p-2 group flex flex-col justify-center items-center xl:w-full xl:h-full'>
									<Image
										src={pokemon?.sprites?.other?.["official-artwork"].front_default}
										alt={pokemon?.name}
										width={100}
										height={100}
										loading='lazy'
										className='lg:w-[50px] lg:h-[50px] xl:w-[100px] xl:h-[100px]'
									/>
									<div className='text-gray-700 text-center z-10'>
										#{formatNumber(pokemon?.id)} <span className='capitalize'>{pokemon?.name}</span>
									</div>
								</Link>
							))}
						</div>
					)}
					<div className='hidden lg:absolute lg:-bottom-0 lg:left-[47%] lg:text-white'>{offset} - 1025</div>
				</div>
			</div>
		</div>
	)
}
