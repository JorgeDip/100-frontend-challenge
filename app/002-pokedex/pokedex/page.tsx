"use client"
import { Suspense, useEffect, useState } from "react"
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

  useEffect(() => {
    if (offset < 0 || offset > 1000) return

    router.push(`?pokedex_offset=${offset}`)

    api.getPokemons(offset).then((data) => {
      setPokemonList(data)
    })
  }, [offset])

  function formatNumber(num: number) {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num
  }

  return (
    <div className='w-screen h-full md:w-full p-6 md:flex md:flex-col md:justify-center relative overflow-auto md:overflow-hidden'>
      <PokedexBack href='/002-pokedex' />
      <div className='md:w-full md:h-full md:flex justify-center items-center gap-x-6'>
        <div className='flex items-center justify-around mb-12 md:mb-0 md:absolute md:w-full md:flex md:justify-between md:px-4'>
          <button className='group' onClick={() => setOffset(offset - 25)} disabled={offset === 0}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='size-12 text-gray-400 hover:text-white transition group-disabled:text-black/60'
            >
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
            disabled={offset === 1000}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='size-12 text-gray-400 hover:text-white transition group-disabled:text-black/60'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.97 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 0-1.06'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className='md:w-full md:h-full flex flex-col md:flex-row md:px-12'>
          {pokemonList.length > 0 ? (
            <div className='w-full h-full grid grid-cols-2 md:grid-cols-5 gap-6 mb-10'>
              {pokemonList.map((pokemon: Pokemon) => (
                <Link
                  href={`/002-pokedex/pokedex/${pokemon?.name}`}
                  key={pokemon?.name}
                  className='pokedex-box bg-white/80 p-2 shadow-xl group flex flex-col justify-center items-center'
                >
                  <Image
                    src={pokemon?.sprites?.other?.["official-artwork"].front_default}
                    alt={pokemon?.name}
                    width={100}
                    height={100}
                    loading='lazy'
                  />
                  <div className='text-blue-950 text-center'>
                    [{formatNumber(pokemon?.id)}]{" "}
                    <span className='capitalize'>{pokemon?.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <Loading />
          )}
          <div className='hidden md:absolute md:-bottom-0 md:left-[47%] md:text-white'>
            {offset} - 1025
          </div>
        </div>
      </div>
    </div>
  )
}
