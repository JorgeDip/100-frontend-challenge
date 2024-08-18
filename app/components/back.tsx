import Link from "next/link"

export default function Back() {
  return (
    <Link className='absolute left-10' href='/'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        className='size-14 opacity-35 hover:opacity-100 transition-opacity'
      >
        <path
          fill='currentColor'
          fill-rule='evenodd'
          d='M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95z'
          clip-rule='evenodd'
        />
      </svg>
    </Link>
  )
}
