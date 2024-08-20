import Image from "next/image"

type PokemonDetailsProps = {
	props: Pokemon
}

enum PokemonTypeColor {
	normal = "bg-[#A0A29F]",
	fighting = "bg-[#D3425F]",
	flying = "bg-[#A1BBEC]",
	poison = "bg-[#B763CF]",
	ground = "bg-[#DA7C4D]",
	rock = "bg-[#C9BB8A]",
	bug = "bg-[#92BC2C]",
	ghost = "bg-[#5F6DBC]",
	steel = "bg-[#5695A3]",
	fire = "bg-[#FBA54C]",
	water = "bg-[#539DDF]",
	grass = "bg-[#5FBD58]",
	electric = "bg-[#F2D94E]",
	psychic = "bg-[#FA8581]",
	ice = "bg-[#81D4FA]",
	dragon = "bg-[#0C69C8]",
	dark = "bg-[#595761]",
	fairy = "bg-[#EE90E6]",
	none = "bg-[#FFFFFF]",
}

export default function PokemonDetails({ props }: PokemonDetailsProps) {
	return (
		<div className='w-full h-full md:flex md:items-center md:gap-x-6 bg-gray-200 md:rounded-r-xl p-12 overflow-auto'>
			<div className='w-72 shrink-0 flex flex-col bg-yellow-200/35 rounded-t-full shadow-md'>
				<div className='p-2'>
					<div className='bg-white/60 rounded-t-full'>
						<Image
							src={props?.sprites?.other?.home.front_default}
							alt={props?.name}
							width={1000}
							height={1000}
							loading='lazy'
							className='size-64 m-auto'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-y-4 mt-6'>
					<span className='capitalize text-3xl font-medium'>{props?.name}</span>
					<div className='flex gap-x-2'>
						{props?.types.map((type: any, index: number) => (
							<div
								key={index}
								className={`${
									PokemonTypeColor[type.type.name as keyof typeof PokemonTypeColor]
								} text-white text-xs font-bold flex items-center p-2 rounded-md gap-x-2`}
							>
								<Image
									src={`/images/pokemon-types/${type.type.name}.svg`}
									className='size-4'
									width={20}
									height={20}
									alt={type.type.name}
								/>
								<span className='capitalize'>{type.type.name}</span>
							</div>
						))}
					</div>
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
					<div className='w-full border-b border-yellow-900/10 mb-2 block'></div>
					<div className='mb-6 '>
						<span className='text-xl font-bold'>Abilities</span>
						{props?.abilities.map((ability: any, index: number) => (
							<div key={index} className='flex items-center gap-x-2 text-sm'>
								<span className='capitalize'>{ability.ability.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* stats */}
			<div className='w-72 mt-16 md:mt-0 md:w-full h-[550px] flex flex-col md:self-end'>
				<div className='bg-yellow-200/35 shadow-md rounded-xl'>
					<div className='flex items-center pl-4 border-b border-yellow-900/10 mb-2'>
						<span className='border border-yellow-900/10 rounded-md text-xs p-1'>+ Eff</span>
						<span className='text-xl font-bold py-4 px-2'>Stats</span>
					</div>
					{props?.stats.map((stat: any, index: number) => (
						<div key={index} className='flex items-center gap-x-2 p-4'>
							<span className='border border-yellow-900/10 rounded-md text-xs p-1'>+ {stat.effort}</span>
							<span className='text-sm font-bold capitalize ml-3'>
								{stat.stat.name.split("-").join(" ")}
							</span>
							<span className='text-sm'>{stat.base_stat}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
