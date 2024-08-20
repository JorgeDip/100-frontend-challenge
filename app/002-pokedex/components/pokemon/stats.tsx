export default function Stats(stats: any) {
	return (
		<div className='w-full h-full flex items-center'>
			<div className='w-full mt-4 lg:mt-0 lg:w-full lg:h-full flex flex-col self-start'>
				<div className='border border-white/30 rounded-md shadow-md'>
					<div className='bg-white/30 flex items-center justify-center lg:justify-start pl-4 rounded-t-md border-b border-yellow-900/10 mb-2'>
						<span className='w-full text-xl font-bold py-4 px-2'>Base Stats</span>
						<div className='w-16 shrink-0'>
							<span className='bg-green-200 border border-yellow-900/10 rounded-lg text-xs p-1'>
								+ Effort
							</span>
						</div>
					</div>
					{stats?.stats.map((stat: any, index: number) => (
						<div key={index} className='flex items-center gap-x-2 p-4 justify-center lg:justify-start'>
							<span className='w-32 text-sm font-bold capitalize ml-3 shrink-0'>
								{stat.stat.name.split("-").join(" ")}
							</span>
							<div className='w-full bg-white/50 rounded-full'>
								<div
									style={{ width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%` }}
									className='bg-yellow-400/50 rounded-full text-center'>
									<span className='text-xs'>{stat.base_stat}</span>
								</div>
							</div>
							<div className='w-16 flex justify-center'>
								<span
									className={`${
										stat.effort > 0 ? "bg-green-200" : "bg-white/40"
									} border border-yellow-900/10 rounded-lg text-xs p-1 shrink-0`}>
									+ {stat.effort}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
