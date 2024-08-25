import { useState } from "react"

export default function NewTask({
	onSubmit,
	onClose,
	board,
}: {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	onClose: () => void
	board: string
}) {
	const [characterCounter, setCharacterCounter] = useState({
		text: 0,
		textarea: 0,
	})

	const handleCharacterCounter = (e: any) => {
		e.preventDefault()
		const type = e.target.type
		const value = e.target.value.length
		setCharacterCounter({ ...characterCounter, [type]: value })
	}
	return (
		<div className='absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center'>
			<div
				className='w-screen h-screen -z-10 fixed top-0 left-0 bg-black/10 backdrop-blur-sm'
				onClick={onClose}></div>
			<form onSubmit={onSubmit} className='bg-white w-96 flex flex-col gap-y-4 p-4 rounded-lg'>
				<span className='font-bold text-xl'>Create a task</span>
				<label>
					<span className='text-sm text-black/80'>Title</span>
					<div className='relative flex items-center'>
						<input
							type='text'
							name='title'
							placeholder='Task title'
							className='w-full p-2 pr-12 rounded-md border border-black/20'
							autoFocus
							onChange={handleCharacterCounter}
							required></input>
						<span
							className={`absolute right-2 py-1 px-2 text-sm rounded-md ${
								characterCounter.text > 50 ? "bg-red-400 text-white" : "bg-black/10"
							}`}>
							{characterCounter.text}
						</span>
					</div>
				</label>

				<label>
					<span className='text-sm text-black/80'>Board</span>
					<select name='status' defaultValue={board} className='w-full p-2 border border-black/20 rounded-md'>
						<option value='to-do'>To do</option>
						<option value='in-progress'>In progress</option>
						<option value='under-review'>Under review</option>
						<option value='done'>Done</option>
					</select>
				</label>
				<label>
					<span className='text-sm text-black/80'>Description</span>
					<div className='relative'>
						<textarea
							name='description'
							placeholder='Task description'
							className='w-full h-72 p-2 pb-10 border border-black/20 rounded-md'
							onChange={handleCharacterCounter}
							required></textarea>
						<span className='absolute bottom-4 right-3 bg-black/10 py-1 px-2 text-sm rounded-md'>
							{characterCounter.textarea}
						</span>
					</div>
				</label>

				<div className='w-full flex items-end gap-x-8'>
					<label className='w-full'>
						<span className='text-sm text-black/80'>Priority</span>
						<select name='priority' className='w-full p-2 border border-black/20 rounded-md'>
							<option value='high'>High</option>
							<option value='medium'>Medium</option>
							<option value='low'>Low</option>
						</select>
					</label>
					<div className='w-full flex justify-end'>
						<button className='p-2 hover:text-black/50' onClick={onClose}>
							Close
						</button>
						<button className='p-2 border border-black/20 rounded-md hover:bg-black/10'>Create task</button>
					</div>
				</div>
			</form>
		</div>
	)
}
