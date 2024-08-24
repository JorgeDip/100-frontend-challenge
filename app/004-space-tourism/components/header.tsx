"use client"
import Image from "next/image"
import { useState } from "react"
import { Barlow_Condensed } from "next/font/google"
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"

const barlow_condensed = Barlow_Condensed({
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

export default function Header() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className='flex items-center justify-between p-6 md:p-0 lg:pt-8'>
			<div className='md:shrink-0 md:py-4 md:px-10'>
				<Image
					src='/images/space-tourism/shared/logo.svg'
					width={100}
					height={100}
					alt='Space Tourism'
					className='size-9 md:size-16'
				/>
			</div>
			<button onClick={() => setIsOpen(true)} className='md:hidden'>
				<Image
					src='/images/space-tourism/shared/icon-hamburger.svg'
					width={20}
					height={20}
					alt='Menu'
					className='size-6'
				/>
			</button>
			<nav
				className={`${
					isOpen ? "flex flex-col absolute h-screen inset-0 bg-zinc-900 text-white z-10" : "hidden"
				} md:flex md:w-full md:justify-end md:backdrop-blur-lg md:bg-white/10 lg:w-[850px] lg:before:absolute lg:before:w-[58rem] lg:before:h-[1px] lg:before:bg-white/20 lg:before:-left-[56rem] lg:before:top-1/2 ${
					barlow_condensed.className
				}`}>
				<button onClick={() => setIsOpen(false)} className='self-end px-6 py-7 mb-20 md:hidden'>
					<Image
						src='/images/space-tourism/shared/icon-close.svg'
						width={24}
						height={24}
						alt='Close'
						className={`${isOpen ? "block" : "hidden"}`}
					/>
				</button>
				<ul className='h-full flex flex-col md:flex-row md:text-white'>
					<li className='pl-8 py-4 md:p-0'>
						<Link
							href='/004-space-tourism/'
							className={`flex gap-x-2 tracking-widest text-xl font-thin focus:border-r-8 md:focus:border-r-0 focus:border-white md:p-8 md:border-b-2 md:border-white/0 md:hover:border-white transition-all ${
								pathname === "/004-space-tourism" ? "md:border-white/100" : ""
							}`}
							onClick={() => setIsOpen(false)}>
							<span className='font-medium'>00</span> Home
						</Link>
					</li>
					<li className='pl-8 py-4 md:p-0'>
						<Link
							href='/004-space-tourism/destination'
							className={`flex gap-x-2 tracking-widest text-xl font-thin focus:border-r-8 md:focus:border-r-0 focus:border-white md:p-8 md:border-b-2 md:border-white/0 md:hover:border-white transition-all ${
								pathname === "/004-space-tourism/destination" ? "md:border-white/100" : ""
							}`}
							onClick={() => setIsOpen(false)}>
							<span className='font-medium'>01</span> Destination
						</Link>
					</li>
					<li className='pl-8 py-4 md:p-0'>
						<Link
							href='/004-space-tourism/crew'
							className={`flex gap-x-2 tracking-widest text-xl font-thin focus:border-r-8 md:focus:border-r-0 focus:border-white md:p-8 md:border-b-2 md:border-white/0 md:hover:border-white transition-all ${
								pathname === "/004-space-tourism/crew" ? "md:border-white/100" : ""
							}`}
							onClick={() => setIsOpen(false)}>
							<span className='font-medium'>02</span> Crew
						</Link>
					</li>
					<li className='pl-8 py-4 md:p-0'>
						<Link
							href='/004-space-tourism/technology'
							className={`flex gap-x-2 tracking-widest text-xl font-thin focus:border-r-8 md:focus:border-r-0 focus:border-white md:p-8 md:border-b-2 md:border-white/0 md:hover:border-white transition-all ${
								pathname === "/004-space-tourism/technology" ? "md:border-white/100" : ""
							}`}
							onClick={() => setIsOpen(false)}>
							<span className='font-medium'>03</span> Technology
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
