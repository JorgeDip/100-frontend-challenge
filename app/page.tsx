import Image from "next/image"
import Challenges from "./utils/challenges.json"

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen flex flex-col items-center gap-y-10'>
      <header className='bg-yellow-100 w-full h-80 flex flex-col items-center justify-center shadow-sm'>
        <h1 className='text-[5rem] font-bold text-black'>100 Challenges</h1>
        <p className='text-xl text-[#A2345C]'>
          100 Challenges is a collection of 100 creative challenges to help you grow as a frontend
          developer.
        </p>
      </header>

      <section className=''>
        <h2 className='text-2xl font-bold mb-10'>Challenges</h2>
        <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {Challenges.challenges.map((challenge: any) => (
            <li key={challenge.id}>
              <a href={`/${challenge.link}`}>
                <div className='bg-white p-4 rounded-lg shadow-md'>
                  <Image src={challenge.image} alt={challenge.title} width={200} height={200} />
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
