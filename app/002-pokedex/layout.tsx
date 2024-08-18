import Back from "../components/back"
import Knot from "./components/knot"
import "./styles.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className='flex flex-col justify-center items-center h-screen bg-gradient-to-t from-zinc-800 to-zinc-900'
      style={{ backgroundImage: "url(/images/bg-pokedex.jpg)" }}
    >
      <div className='flex justify-center items-center'>
        <Back />
      </div>
      <section className='flex shadow-xl border-2 border-[#3a2722] rounded-xl'>
        <div className='w-24 hidden md:flex items-center bg-gradient-to-b from-[#2b1612] to-[#362420] border-r-4 border-[#4E342E] rounded-l-lg'>
          <Knot />
        </div>
        <div className='h-screen bg-pattern-pokedex bg-blue-950 md:w-[1360px] md:h-[850px] rounded-r-lg'>
          {children}
        </div>
      </section>
    </main>
  )
}
