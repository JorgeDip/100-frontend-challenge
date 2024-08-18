import Image from "next/image"
import Challenges from "./utils/challenges.json"

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen flex flex-col items-center gap-y-10'>
      <header className='bg-gray-300 w-full h-80 flex flex-col items-center justify-center shadow-sm'>
        <h1 className='text-[5rem] font-bold text-black'>100 Challenges</h1>
        <p className='text-xl text-[#A2345C]'>
          100 Challenges is a collection of 100 creative challenges to help you grow as a frontend
          developer.
        </p>
      </header>

      <section className=''>
        <h2 className='text-2xl font-bold mb-10'>Challenges</h2>
        <ul className='max-w-[1140px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {Challenges.challenges.map((challenge: any) => (
            <li key={challenge.id}>
              <a href={`/${challenge.link}`} className='block bg-white rounded-lg shadow-md group'>
                <div className='overflow-hidden'>
                  <Image
                    src={challenge.image}
                    className='w-full h-full object-contain rounded-t-lg group-hover:scale-125 transition'
                    alt={challenge.title}
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl font-bold'>{challenge.title}</h3>
                  <p className='text-gray-700'>{challenge.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
