import Back from "../components/back"
import Tasks from "./components/tasks"

export const metadata = {
	title: "003 - Task Board",
	openGraph: {
		title: "003 - Task Board",
	},
}

export default function TaskBoardPage() {
	return (
		<div className='bg-slate-400/30 min-h-screen p-8 md:p-16 flex flex-col'>
			<div className='relative bottom-4 right-4 md:bottom-14 md:right-24'>
				<Back />
			</div>
			<div className='mb-8'>
				<h1 className='font-extrabold text-3xl'>Boards</h1>
			</div>
			<Tasks />
		</div>
	)
}
