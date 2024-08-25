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

							<div className='absolute -right-2 -top-3'>
								<button
									className='p-1 bg-red-600 rounded-lg hover:bg-red-500 '
									onClick={() => onDelete(task.id)}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										className='size-5 text-white'>
										<path
											fill='currentColor'
											d='m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z'
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className='break-all'>
							<h2 className='font-bold text-xl'>{task.title}</h2>
							<p className='text-sm'>{task.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
