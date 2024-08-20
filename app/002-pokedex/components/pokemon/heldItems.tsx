import Image from "next/image"

export default function HeldItems({ heldItems }: any) {
	return (
		<div className='w-full border-t border-yellow-900/10 py-4'>
			<div className='flex flex-col items-center'>
				<span className='text-xl font-bold'>Held Items</span>
				{heldItems.length > 0 ? (
					heldItems.map((item: any, index: number) => (
						<div key={index} className='flex items-center juc gap-x-2 text-sm'>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`}
								alt={item.item.name}
								width={20}
								height={20}
								className='size-6'
								loading='lazy'
							/>
							<span className='capitalize'>{item.item.name.split("-").join(" ")}</span>
						</div>
					))
				) : (
					<div>No held items</div>
				)}
			</div>
		</div>
	)
}
