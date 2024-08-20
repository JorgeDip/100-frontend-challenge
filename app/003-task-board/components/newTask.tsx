export default function NewTask({
	onSubmit,
	onClose,
}: {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onClose: () => void
}) {
	return (
		<div className='absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center'>
			<div className='w-screen h-screen -z-10 fixed top-0 left-0 backdrop-blur-md' onClick={onClose}></div>
			<form onSubmit={onSubmit} className='flex flex-col gap-y-4 w-72'>
				<input
					type='text'
					name='title'
					placeholder='Task title'
					className='w-full p-2 rounded-md border border-black/20'
					autoFocus
					required
				/>
				<select name='priority' className='w-full p-2 border border-black/20 rounded-md'>
					<option value='high'>High priority</option>
					<option value='medium'>Medium priority</option>
					<option value='low'>Low priority</option>
				</select>
				<select name='status' className='w-full p-2 border border-black/20 rounded-md'>
					<option value='to-do'>To do</option>
					<option value='in-progress'>In progress</option>
					<option value='under-review'>Under review</option>
					<option value='done'>Done</option>
				</select>
				<textarea
					name='description'
					placeholder='Task description'
					className='w-full h-72 p-2 border border-black/20 rounded-md'
					required
				></textarea>
				<button className='p-2 border border-black/20 rounded-md hover:bg-black/10'>Create task</button>
			</form>
		</div>
	)
}
