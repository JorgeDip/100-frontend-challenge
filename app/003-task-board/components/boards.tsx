export default function Board({
	board,
	onClick,
	onDelete,
	tasks,
}: {
	board: string
	onClick: () => void
	onDelete: (id: Date) => void
	tasks: any[]
}) {
	return (
		<div>
			<button className='font-bold text-xl hover:underline mb-6' onClick={onClick}>
				{board} <span className='font-normal'>+</span>
			</button>
			{tasks.map((task) => (
				<div key={task.title} className='bg-white p-4 rounded-xl mb-6 shadow-md relative'>
					<div className='w-full flex flex-col gap-y-4 gap-x-4 pb-4'>
						<div className='flex justify-between'>
							<span
								className={`uppercase font-bold ${
									task.priority === "high"
										? "bg-pink-500"
										: task.priority === "medium"
										? "bg-blue-500"
										: "bg-green-500"
								} text-white text-xs rounded-md p-1`}>
								{task.priority}
							</span>
							<span className='text-xs text-gray-500'>{task.date}</span>
						</div>
						<div className='break-all'>
							<h2 className='font-bold text-xl'>{task.title}</h2>
							<p className='text-sm'>{task.description}</p>
						</div>
					</div>

					<div className='absolute right-2 bottom-2 md:right-4 md:bottom-4'>
						<button
							className='p-2 border border-black/20 rounded-md hover:bg-black/10'
							onClick={() => onDelete(task.id)}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='size-5'>
								<path
									fill='currentColor'
									d='m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z'
								/>
							</svg>
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
