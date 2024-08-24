import { Barlow_Condensed } from "next/font/google"

const barlow_condensed = Barlow_Condensed({ weight: ["200", "300"], subsets: ["latin"] })
export default function DestinationsMenu({
	setDestination,
	destination,
}: {
	setDestination: (des: string) => void
	destination: string
}) {
	return (
		<div className={`flex justify-center lg:justify-start gap-x-4 ${barlow_condensed.className}`}>
			<button
				className={`pb-2 border-b-2 border-white/0 hover:border-white transition-all uppercase lg:text-xl ${
					destination === "Moon" ? "border-white/100" : ""
				}`}
				onClick={() => setDestination("Moon")}>
				Moon
			</button>
			<button
				className={`pb-2 border-b-2 border-white/0 hover:border-white transition-all uppercase lg:text-xl ${
					destination === "Mars" ? "border-white/100" : ""
				}`}
				onClick={() => setDestination("Mars")}>
				Mars
			</button>
			<button
				className={`pb-2 border-b-2 border-white/0 hover:border-white transition-all uppercase lg:text-xl ${
					destination === "Europa" ? "border-white/100" : ""
				}`}
				onClick={() => setDestination("Europa")}>
				Europa
			</button>
			<button
				className={`pb-2 border-b-2 border-white/0 hover:border-white transition-all uppercase lg:text-xl ${
					destination === "Titan" ? "border-white/100" : ""
				}`}
				onClick={() => setDestination("Titan")}>
				Titan
			</button>
		</div>
	)
}
