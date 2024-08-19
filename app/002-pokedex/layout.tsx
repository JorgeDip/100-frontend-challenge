import { Suspense } from "react"
import Back from "../components/back"
import Knot from "./components/knot"
import "./styles.css"
import Loading from "./components/loading"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className='w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-zinc-800 to-zinc-900'
      style={{ backgroundImage: "url(/images/bg-pokedex.jpg)", position: "fixed" }}
    >
      <div className='flex justify-center items-center'>
        <Back />
      </div>
      <section className='flex shadow-xl md:border-2 border-[#3a2722] rounded-xl'>
        <div className='w-24 hidden md:flex items-center bg-gradient-to-b from-[#2b1612] to-[#362420] border-r-4 border-[#4E342E] md:rounded-l-lg z-10'>
          <Knot />
        </div>
        <div className='w-full h-screen bg-pattern-pokedex bg-blue-950 md:w-[1360px] md:h-[850px] md:rounded-r-lg'>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </section>
    </main>
  )
}
