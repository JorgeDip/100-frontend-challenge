import { Link } from "next-view-transitions"

export default function PokedexBack({ href, onClick }: { href: string; onClick?: () => void }) {
	if (onClick) {
		return (
			<button onClick={onClick} className='absolute top-4 right-4 lg:top-3 lg:right-3 xl:top-4 xl:right-4 z-10'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					className='size-8 lg:size-6 text-gray-400 hover:text-gray-600 transition'>
					<path fill='currentColor' d='M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z' />
				</svg>
			</button>
		)
	}
	return (
		<Link href={href} className='absolute top-4 right-4 lg:top-3 lg:right-3 xl:top-4 xl:right-4 z-10'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				className='size-8 lg:size-6 text-gray-400 hover:text-gray-600 transition'>
				<path fill='currentColor' d='M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z' />
			</svg>
		</Link>
	)
}
