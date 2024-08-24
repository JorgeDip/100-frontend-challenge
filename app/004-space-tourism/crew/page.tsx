"use client"
import Image from "next/image"
import Header from "../components/header"
import { crew } from "@/app/utils/004-space-tourism/data.json"

import { Barlow_Condensed } from "next/font/google"
import { Bellefair } from "next/font/google"
import { Barlow } from "next/font/google"
import { useState } from "react"
import Container from "../components/container"
import CrewMenu from "../components/crew-menu"

const barlow_condensed = Barlow_Condensed({ weight: ["200", "300"], subsets: ["latin"] })
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] })
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] })

export default function CrewPage() {
	const [crews, setCrews] = useState("Douglas Hurley")
	return (
		<main className='flex flex-col min-h-screen md:h-screen bg-[url(/images/space-tourism/crew/background-crew-mobile.jpg)] md:bg-[url(/images/space-tourism/crew/background-crew-tablet.jpg)] lg:bg-[url(/images/space-tourism/crew/background-crew-desktop.jpg)] lg:fixed bg-cover bg-center'>
			<Header />
			<Container number='02' title='Meet your crew'>
				{crew
					.filter((crew: any) => crew.name === crews)
					.map((crew: any) => (
						<div
							key={crew.name}
							className='w-full flex flex-col items-center gap-y-8 mt-12 lg:mt-0 lg:flex-row lg:gap-x-16 lg:px-60'>
							<div className='w-full h-full flex flex-col gap-y-8 text-blue-100 px-12 lg:p-0'>
								<div className='w-full flex flex-col items-center lg:items-start'>
									<span
										className={`${bellefair.className} text-lg text-gray-400 uppercase lg:text-3xl`}>
										{crew.role}
									</span>
									<span
										className={`${bellefair.className} text-2xl text-blue-100 uppercase lg:text-5xl`}>
										{crew.name}
									</span>
								</div>
								<div className='h-48 font-light text-center lg:h-full lg:text-start lg:text-lg'>
									{crew.bio}
								</div>
								<CrewMenu setCrew={setCrews} crews={crew.name} />
							</div>
							<div className='shrink-0 flex justify-center px-20 mb-20 lg:mb-0 '>
								<Image
									src={crew.images.webp}
									width={1000}
									height={1000}
									alt={crew.name}
									className='w-96 h-96 '
									style={{
										filter: "drop-shadow(0 0 5px rgba(0, 0, 0, .5))",
										mask: "linear-gradient(to bottom, black 80%, transparent 100%)",
									}}
								/>
							</div>
						</div>
					))}
			</Container>
		</main>
	)
}
