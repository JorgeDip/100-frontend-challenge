export default function Moves(moves: any) {
	return (
		<div className='w-full h-full flex items-center'>
			<div className='w-full mt-4 lg:mt-0 lg:w-full lg:h-full flex flex-col self-start'>
				<div className='h-full border border-white/30 rounded-md shadow-md'>
					<div className='bg-white/30 flex items-center justify-center lg:justify-start pl-4 rounded-t-md border-b border-yellow-900/10'>
						<span className='w-full text-xl font-bold py-4 px-2'>Moves</span>
					</div>

					<div className='w-full h-64 grid grid-cols-4  overflow-y-auto'>
						{moves?.moves.map((move: any, index: number) => (
							<div key={index} className='p-2'>
								<div className='flex items-center gap-x-2 text-sm p-4 border border-white/40 shadow-md rounded-md'>
									<span className='capitalize'>{move.move.name.split("-").join(" ")}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
