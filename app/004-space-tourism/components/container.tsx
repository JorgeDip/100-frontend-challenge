import { Barlow_Condensed } from "next/font/google"

const barlow_condensed = Barlow_Condensed({ weight: ["200", "300"], subsets: ["latin"] })

export default function Container({
	children,
	number,
	title,
}: {
	children: React.ReactNode
	number: string
	title: string
}) {
	return (
		<section className='h-full flex flex-col items-center md:justify-center md:items-center lg:gap-y-24 lg:items-start lg:justify-start'>
			<h1
				className={`flex gap-x-6 uppercase text-blue-100 text-xl ${barlow_condensed.className} lg:text-3xl lg:px-60`}>
				<span className='font-bold text-gray-400'>{number}</span> {title}
			</h1>
			{children}
		</section>
	)
}
