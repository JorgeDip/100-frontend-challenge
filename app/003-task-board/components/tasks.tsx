"use client"
import React, { useEffect, useState } from "react"
import NewTask from "./newTask"
import Board from "./boards"

type Task = {
	id: any
	title: string
	priority: "high" | "medium" | "low"
	status: "to-do" | "in-progress" | "under-review" | "done"
	description: string
	date: string
}

export default function Tasks() {
	const [tasks, setTasks] = useState<Task[]>([])
	const [modal, setModal] = useState({ isOpen: false, board: "" })

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem("tasks") as string))
	}, [])

	const handleSubmit = (event: any) => {
		event.preventDefault()
		const title = event.target.title.value
		const priority = event.target.priority.value
		const status = event.target.status.value
		const description = event.target.description.value

		if (!title || !priority || !status || !description || title.length > 50) return

		const inputs: Task = {
			id: new Date(),
			title,
			priority,
			status,
			description,
			date: new Date().toLocaleDateString(),
		}

		setModal({ isOpen: false, board: "" })
		if (typeof window !== "undefined") {
			localStorage.setItem("tasks", JSON.stringify([...tasks, inputs]))
		}
		return setTasks([...tasks, inputs])
	}

	const onDelete = (id: any) => {
		const confirmPropmt = confirm("Are you sure you want to delete this task?")
		if (confirmPropmt) {
			if (typeof window !== "undefined") {
				localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)))
			}
			setTasks(tasks.filter((task) => task.id !== id))
		}
	}

	return (
		<div className='w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4'>
			<Board
				board='To do'
				onClick={() => setModal({ isOpen: true, board: "to-do" })}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "to-do")}
			/>

			<Board
				board='In progress'
				onClick={() => setModal({ isOpen: true, board: "in-progress" })}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "in-progress")}
			/>

			<Board
				board='Under review'
				onClick={() => setModal({ isOpen: true, board: "under-review" })}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "under-review")}
			/>

			<Board
				board='Done'
				onClick={() => setModal({ isOpen: true, board: "done" })}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "done")}
			/>

			{modal.isOpen && (
				<NewTask
					board={modal.board}
					onSubmit={handleSubmit}
					onClose={() => setModal({ isOpen: false, board: "" })}
				/>
			)}
		</div>
	)
}
