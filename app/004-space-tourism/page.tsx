import { Link } from "next-view-transitions"
import Header from "./components/header"
import { Barlow_Condensed } from "next/font/google"
import { Bellefair } from "next/font/google"
import { Barlow } from "next/font/google"

const barlow_condensed = Barlow_Condensed({ weight: ["300"], subsets: ["latin"] })
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] })
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] })

export default function SpaceTourism() {
	return (
		<main className='flex flex-col h-full bg-[url(/images/space-tourism/home/background-home-mobile.jpg)] md:bg-[url(/images/space-tourism/home/background-home-tablet.jpg)] lg:bg-[url(/images/space-tourism/home/background-home-desktop.jpg)] bg-cover bg-center'>
			<Header />
			<section className='h-full flex flex-col items-center justify-center md:gap-x-20 lg:flex-row lg:justify-between lg:px-60'>
				<div className='w-full flex flex-col items-center justify-center gap-y-6 p-8 md:px-64 lg:w-[600px] lg:items-start lg:px-0'>
					<span
						className={`uppercase text-2xl font-extralight ${barlow_condensed.className} text-blue-100 md:text-4xl`}>
						so, you want to travel to
					</span>
					<h1 className={`${bellefair.className} uppercase text-7xl md:text-9xl text-white`}>space</h1>
					<p className={`${barlow.className} text-blue-100 text-xl text-center lg:text-start`}>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
						hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
						this world experience!
					</p>
				</div>
				<div className='group shrink-0'>
					<Link
						href='/004-space-tourism/destination'
						className={`text-2xl ${bellefair.className} bg-white text-black rounded-full size-40 flex items-center justify-center md:size-64 lg:size-80 uppercase md:text-4xl group-hover:underline`}>
						Explore
					</Link>
				</div>
			</section>
		</main>
	)
}
