"use client"
import Image from "next/image"
import Header from "../components/header"
import data from "@/app/utils/004-space-tourism/data.json"

import { Barlow_Condensed } from "next/font/google"
import { Bellefair } from "next/font/google"
import { Barlow } from "next/font/google"
import { useState } from "react"
import Container from "../components/container"
import DestinationsMenu from "../components/destinations-menu"

const barlow_condensed = Barlow_Condensed({ weight: ["200", "300"], subsets: ["latin"] })
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] })
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] })

export default function DestinationPage() {
	const [destination, setDestination] = useState("Moon")
	return (
		<main className='flex flex-col min-h-screen md:h-screen bg-[url(/images/space-tourism/destination/background-destination-mobile.jpg)] md:bg-[url(/images/space-tourism/destination/background-destination-tablet.jpg)] lg:bg-[url(/images/space-tourism/destination/background-destination-desktop.jpg)] lg:fixed bg-cover bg-center'>
			<Header />
			<Container number='01' title='pick your destination'>
				{data.destinations
					.filter((dest: any) => dest.name === destination)
					.map((des: any) => (
						<div
							key={des.name}
							className='flex flex-col items-center gap-y-8 mt-12 lg:mt-0 lg:flex-row lg:gap-x-16 lg:px-60'>
							<div className='shrink-0 flex justify-center'>
								<Image
									src={des.images.webp}
									width={2000}
									height={2000}
									alt={des.name}
									className='size-40 lg:size-[32rem] animate-spin [animation-duration:60s]'
								/>
							</div>
							<div className='flex flex-col gap-y-8 text-blue-100 px-12'>
								<DestinationsMenu setDestination={setDestination} destination={des.name} />
								<div className='flex flex-col items-center lg:items-start'>
									<h1 className={`text-6xl font-bold ${bellefair.className} uppercase`}>
										{des.name}
									</h1>
									<p className={`h-24 text-center py-4 ${barlow.className} lg:text-start`}>
										{des.description}
									</p>
								</div>
								<div className='flex flex-col items-center gap-y-4 border-t-[1px] border-white/10 pt-12 pb-20 lg:flex-row lg:gap-x-16'>
									<div className='flex flex-col items-center gap-y-2 lg:items-start'>
										<span
											className={`uppercase  ${barlow_condensed.className} text-gray-400 font-light lg:text-lg`}>
											AVG. Distance
										</span>
										<span className={`${bellefair.className} text-3xl uppercase`}>
											{des.distance}
										</span>
									</div>
									<div className='flex flex-col items-center gap-y-2 lg:items-start'>
										<span
											className={`uppercase  ${barlow_condensed.className} text-gray-400 font-light lg:text-lg`}>
											EST. Travel Time
										</span>
										<span className={`${bellefair.className} text-3xl uppercase`}>
											{des.travel}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
			</Container>
		</main>
	)
}
