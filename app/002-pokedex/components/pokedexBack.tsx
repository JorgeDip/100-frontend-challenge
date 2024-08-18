import { Link } from "next-view-transitions"

export default function PokedexBack({
  href,
  onClick,
  black,
}: {
  href: string
  onClick?: () => void
  black?: boolean
}) {
  if (onClick) {
    return (
      <button onClick={onClick} className='absolute top-4 left-2 z-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className={`size-8 ${black ? "text-black" : "text-white"}`}
        >
          <g
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
          >
            <path d='m3.5 9.32l5.21-5.21a1.214 1.214 0 0 1 1.724 0l5.209 5.21' />
            <path d='M20.5 20.249h-7.286a3.643 3.643 0 0 1-3.643-3.643V3.759' />
          </g>
        </svg>
      </button>
    )
  }
  return (
    <Link href={href} className='absolute top-4 left-2 z-10'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        className={`size-8 ${black ? "text-black" : "text-white"}`}
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1'
        >
          <path d='m3.5 9.32l5.21-5.21a1.214 1.214 0 0 1 1.724 0l5.209 5.21' />
          <path d='M20.5 20.249h-7.286a3.643 3.643 0 0 1-3.643-3.643V3.759' />
        </g>
      </svg>
    </Link>
  )
}
