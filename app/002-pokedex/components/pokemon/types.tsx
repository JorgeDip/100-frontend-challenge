import Image from "next/image"

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

export default function Types(types: any) {
	return (
		<div className='flex gap-x-2'>
			{types?.types.map((type: any, index: number) => (
				<div
					key={index}
					className={`${
						PokemonTypeColor[type.type.name as keyof typeof PokemonTypeColor]
					} text-white text-xs font-bold flex items-center p-2 rounded-lg gap-x-2`}
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
	)
}
