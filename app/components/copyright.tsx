export default function Copyright({ link, author }: { link: string; author: string }) {
  return (
    <footer className='md:absolute md:bottom-4 flex flex-col items-center justify-center gap-y-4 md:py-10 text-center text-sm'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='underline-offset-2 hover:underline transition'
      >
        <span>© {author}</span>
      </a>
    </footer>
  )
}
