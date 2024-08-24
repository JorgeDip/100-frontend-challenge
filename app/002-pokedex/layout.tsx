import { Suspense } from "react"
import Knot from "./components/knot"
import "./styles.css"
import Loading from "./components/loading"

export const metadata = {
	title: "002 - Pokedex",
	openGraph: {
		title: "002 - Pokedex",
	},
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main
			className='w-full flex justify-center items-center min-h-screen bg-gradient-to-t from-zinc-800 to-zinc-900'
			style={{
				backgroundImage: "url(/images/pokedex/bg-pokedex.jpg)",
				position: "fixed",
				backgroundSize: "cover",
			}}>
			<section className='flex shadow-xl rounded-xl lg:border-2 lg:border-[#3a2722] lg:shadow-[5px_10px_0px_2px_#2b1612]'>
				<div className='w-24 hidden items-center bg-gradient-to-b from-[#2b1612] to-[#362420] border-r-4 border-[#4E342E] lg:flex lg:rounded-l-lg z-10'>
					<Knot />
				</div>
				<div className='w-screen h-screen bg-pattern-pokedex bg-blue-950 lg:w-[1024px] lg:h-[600px] xl:w-[1360px] xl:h-[850px] lg:rounded-r-lg'>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</div>
			</section>
		</main>
	)
}
