"use client"
import Image from "next/image"
import Container from "../components/container"
import Header from "../components/header"
import { useState } from "react"
import { technology } from "@/app/utils/004-space-tourism/data.json"
import TechnologyMenu from "../components/technology-menu"

import { Barlow_Condensed } from "next/font/google"
import { Bellefair } from "next/font/google"
import { Barlow } from "next/font/google"
const barlow_condensed = Barlow_Condensed({ weight: ["200", "300"], subsets: ["latin"] })
const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] })
const barlow = Barlow({ weight: ["400"], subsets: ["latin"] })

export default function TechnologyPage() {
	const [technologys, setTechnologys] = useState("Launch vehicle")
	return (
		<main className='w-full flex flex-col min-h-screen md:h-screen bg-[url(/images/space-tourism/technology/background-technology-mobile.jpg)] md:bg-[url(/images/space-tourism/technology/background-technology-tablet.jpg)] lg:bg-[url(/images/space-tourism/technology/background-technology-desktop.jpg)] lg:fixed bg-cover bg-center'>
			<Header />
			<Container number='03' title='Space Launch 101'>
				{technology
					.filter((tech: any) => tech.name === technologys)
					.map((tech: any) => (
						<div key={tech.name} className='w-full flex flex-col mt-12 lg:mt-0 lg:px-60 lg:flex-row'>
							<div className='shrink-0 lg:hidden'>
								<Image
									src={tech.images.landscape}
									width={500}
									height={500}
									alt={tech.name}
									className='h-64 object-cover object-bottom md:h-full md:m-auto'
								/>
							</div>
							<div className='hidden shrink-0 lg:block lg:order-2'>
								<Image
									src={tech.images.portrait}
									width={500}
									height={500}
									alt={tech.name}
									className=''
								/>
							</div>
							<div className='w-full flex flex-col items-center lg:order-1 lg:flex-row lg:gap-x-6'>
								<div className='my-8 lg:order-1'>
									<TechnologyMenu setTechnology={setTechnologys} technologys={tech.name} />
								</div>
								<div className='w-full flex flex-col items-center gap-y-4 text-blue-100 lg:order-2 lg:items-start '>
									<span className={`text-gray-400 text-xl uppercase ${bellefair.className}`}>
										The terminology...
									</span>
									<h1 className={`text-blue-100 text-3xl uppercase ${bellefair.className} `}>
										{tech.name}
									</h1>
									<p
										className={`${barlow.className} px-12 mb-20 text-center lg:mb-0 lg:p-0 lg:text-start lg:w-[900px]`}>
										{tech.description}
									</p>
								</div>
							</div>
						</div>
					))}
			</Container>
		</main>
	)
}
