type PokemonDetailsProps = {
  props: Pokemon | undefined
}
export default function PokemonDetails({ props }: PokemonDetailsProps) {
  return <div className='w-full h-full bg-white rounded-r-xl p-14'>{props?.name}</div>
}
