import Image from "next/image"

type PokemonDetailsProps = {
  props: Pokemon
}
export default function PokemonDetails({ props }: PokemonDetailsProps) {
  return (
    <div className='w-full h-full bg-gray-200 md:rounded-r-xl p-14'>
      <div>
        <div>
          <Image
            src={props?.sprites?.other?.home.front_default}
            alt={props?.name}
            width={384}
            height={384}
            loading='lazy'
            className='size-64'
          />
        </div>
        <div className='capitalize'>{props?.name}</div>
      </div>
    </div>
  )
}
