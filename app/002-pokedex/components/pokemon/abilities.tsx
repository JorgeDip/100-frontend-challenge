export default function Abilities(abilities: any) {
	return (
		<div className='w-full border-t border-yellow-900/10 pt-3'>
			<div className='flex flex-col items-center'>
				<span className='text-xl font-bold'>Abilities</span>
				{abilities?.abilities.map((ability: any, index: number) => (
					<div key={index} className='flex items-center gap-x-2 text-sm'>
						<span className='capitalize'>{ability.ability.name.split("-").join(" ")}</span>
					</div>
				))}
			</div>
		</div>
	)
}
