import data from "@/app/utils/004-space-tourism/data.json"
import { Bellefair } from "next/font/google"
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] })

export default function TechnologyMenu({
	setTechnology,
	technologys,
}: {
	setTechnology: (tech: string) => void
	technologys: string
}) {
	return (
		<div className='flex gap-x-8 lg:flex-col lg:gap-y-4'>
			{data.technology.map((tech: any, index: number) => (
				<button
					key={index}
					className={`shrink-0 ${
						tech.name === technologys ? "bg-white text-black" : "text-white"
					} size-12 border border-gray-500 rounded-full ${bellefair.className} lg:size-20 lg:text-2xl`}
					onClick={() => setTechnology(tech.name)}>
					{index + 1}
				</button>
			))}
		</div>
	)
}
