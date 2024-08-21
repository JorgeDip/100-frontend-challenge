import Image from "next/image"
import Moves from "../../components/pokemon/moves"
import Stats from "../../components/pokemon/stats"
import Forms from "../../components/pokemon/forms"
import Abilities from "../../components/pokemon/abilities"
import HeldItems from "../../components/pokemon/heldItems"
import Types from "../../components/pokemon/types"

type PokemonDetailsProps = {
	props: Pokemon
	forms: any[]
}

export default function PokemonDetails({ props, forms }: PokemonDetailsProps) {
	console.log(props)
	return (
		<div className='w-full h-full bg-gray-200 p-12 lg:p-8 xl:p-12 overflow-auto lg:overflow-hidden lg:flex lg:items-center lg:gap-x-6 lg:rounded-r-xl'>
			<div className='w-full h-full flex flex-col items-center lg:gap-x-4 lg:flex-row gap-y-4 xl:h-full xl:justify-between'>
				<div className='w-full h-full shrink-0 flex flex-col border border-white/30 rounded-md shadow-md lg:w-64 xl:w-72'>
					<div className='bg-white/30 rounded-t-md capitalize text-3xl font-medium text-center py-3'>
						{props?.name}
					</div>
					<div className='bg-white/30 rounded-t-md border-y border-yellow-900/10'>
						<Image
							src={props?.sprites?.other?.home.front_default}
							alt={props?.name}
							width={1000}
							height={1000}
							priority={true}
							className='m-auto lg:size-32 xl:size-64'
						/>
					</div>
					{/* Forms */}
					<Forms forms={forms} />
					<div className='flex flex-col items-center gap-y-4 mt-6'>
						{/* types */}
						<Types types={props?.types} />
						{/* Height and Weight */}
						<div className='flex gap-x-2'>
							<span className='flex items-center gap-x-1'>
								{props?.weight / 10}
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='size-5'>
									<path
										fill='currentColor'
										d='M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 6v8h2v-2.5l1 1V19h2v-2l-2-2l2-2v-2H9v1.5l-1 1V11zm9 0c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h3v-5h-2v3h-1v-4h3v-2z'
									/>
								</svg>
							</span>
							<span className='flex items-center'>{props?.height / 10}m</span>
						</div>
						{/* abilities */}
						<Abilities abilities={props?.abilities} />
						{/* held items */}
						<HeldItems heldItems={props.held_items} />
					</div>
				</div>
				<div className='w-full flex flex-col items-start gap-y-2 xl:h-full'>
					{/* stats */}
					<Stats stats={props?.stats} />
					{/* moves */}
					<Moves moves={props?.moves} />
				</div>
			</div>
		</div>
	)
}
