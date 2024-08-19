export default function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='animate-spin text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
          className='size-10'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m2.07 1a7.002 7.002 0 0 0 13.86 0h-4.1a3.001 3.001 0 0 1-5.66 0zm13.86-2a7.001 7.001 0 0 0-13.86 0h4.1a3.001 3.001 0 0 1 5.66 0zM12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  )
}
