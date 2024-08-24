import { crew } from "@/app/utils/004-space-tourism/data.json"
export default function CrewMenu({ setCrew, crews }: { setCrew: (crew: string) => void; crews: string }) {
	return (
		<div className='flex gap-x-8 justify-center lg:justify-start'>
			{crew.map((crew: any) => (
				<button
					key={crew.name}
					onClick={() => setCrew(crew.name)}
					className={`p-2  ${crew.name === crews ? "bg-white" : "bg-zinc-400"} rounded-full`}></button>
			))}
		</div>
	)
}
