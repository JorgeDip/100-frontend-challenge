"use client"
import React, { use, useEffect, useMemo, useState } from "react"
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
	const [tasks, setTasks] = useState<Task[]>(
		localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") as string) : []
	)
	const [modal, setModal] = useState(false)

	const handleSubmit = (event: any) => {
		event.preventDefault()
		const title = event.target.title.value
		const priority = event.target.priority.value
		const status = event.target.status.value
		const description = event.target.description.value

		if (!title || !priority || !status || !description) return

		const inputs: Task = {
			id: new Date(),
			title,
			priority,
			status,
			description,
			date: new Date().toLocaleDateString(),
		}

		setModal(false)
		localStorage.setItem("tasks", JSON.stringify([...tasks, inputs]))
		return setTasks([...tasks, inputs])
	}

	const onDelete = (id: any) => {
		const confirmPropmt = confirm("Are you sure you want to delete this task?")
		if (confirmPropmt) {
			localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)))
			setTasks(tasks.filter((task) => task.id !== id))
		}
	}

	return (
		<div className='w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4'>
			<Board
				board='To do'
				onClick={() => setModal(true)}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "to-do")}
			/>

			<Board
				board='In progress'
				onClick={() => setModal(true)}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "in-progress")}
			/>

			<Board
				board='Under review'
				onClick={() => setModal(true)}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "under-review")}
			/>

			<Board
				board='Done'
				onClick={() => setModal(true)}
				onDelete={onDelete}
				tasks={tasks.filter((task) => task.status === "done")}
			/>

			{modal && <NewTask onSubmit={handleSubmit} onClose={() => setModal(false)} />}
		</div>
	)
}
