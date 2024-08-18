import Image from "next/image"
import Back from "../components/back"
import "./styles.css"
import Copyright from "../components/copyright"

export const metadata = {
  title: "001 - Profile Card",
  openGraph: {
    title: "001 - Profile Card",
  },
}
export default function ProfileCard() {
  return (
    <main className='grid place-items-center items-center h-screen md:w-screen bg-001-profile pb-20 md:pb-0'>
      <Back />

      <section className='flex flex-col w-96 h-[600px] bg-white rounded-[2.5rem] shadow-xl'>
        <div className='flex items-center justify-center bg-pink-800 rounded-t-[2.3rem] w-full h-full relative'>
          <div className='custom-shape-divider-bottom-1'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
              className='absolute bottom-0 left-0'
            >
              <path
                d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                className='shape-fill'
              ></path>
            </svg>
          </div>

          <div className='rounded-full border-4 border-pink-950 border-opacity-40'>
            <Image
              src='https://i.pravatar.cc/150?u=a042581f4e29026704c'
              alt='Profile Picture'
              className='size-36 rounded-full'
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className='flex flex-col justify-between gap-y-10 px-12 py-8'>
          <div className='flex flex-col items-center gap-y-1'>
            <span className='text-3xl font-medium'>Johnny Rogers</span>
            <small className='text-xs'>@jonnyrogers</small>
          </div>

          <div className='flex items-center justify-center gap-x-4'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='size-8'>
              <path
                fill='currentColor'
                d='M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z'
              />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='size-8'>
              <path
                fill='currentColor'
                d='M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z'
              />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='size-7'>
              <path
                fill='currentColor'
                d='M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z'
              />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='size-7'>
              <path
                fill='currentColor'
                d='M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693'
              />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='size-7'>
              <path
                fill='currentColor'
                d='M9.565 7.421C8.207 5.007 6.754 3.038 6.648 2.893A7.88 7.88 0 0 0 2.311 8.38c.206.004 3.482.043 7.254-.959m.978 2.64a11 11 0 0 1 .309-.094a26 26 0 0 0-.637-1.336C6.169 9.843 2.287 9.755 2.15 9.751q-.006.125-.007.25c0 2.019.763 3.861 2.016 5.252l-.005-.006s2.15-3.814 6.389-5.186m-5.372 6.133v-.004c-.058-.045-.12-.086-.178-.135c.106.085.178.139.178.139M8.118 2.372l-.015.004c.006-.002.014-.002.014-.002zm7.071 1.732A7.83 7.83 0 0 0 10 2.143c-.639 0-1.258.078-1.852.221c.12.16 1.595 2.119 2.938 4.584c2.962-1.109 4.081-2.812 4.103-2.844M10 19.2a9.2 9.2 0 0 1-9.199-9.199A9.2 9.2 0 0 1 10 .8a9.2 9.2 0 0 1 9.2 9.201A9.2 9.2 0 0 1 10 19.2m1.336-7.914c-4.611 1.607-6.134 4.838-6.165 4.904a7.82 7.82 0 0 0 4.828 1.666a7.8 7.8 0 0 0 3.067-.621c-.116-.689-.573-3.096-1.679-5.967zm.354-3.166q.276.56.523 1.139q.087.204.17.406c2.713-.342 5.385.238 5.473.256a7.84 7.84 0 0 0-1.787-4.912c-.018.023-1.279 1.843-4.379 3.111m1.171 2.785c1.031 2.836 1.449 5.142 1.529 5.611a7.86 7.86 0 0 0 3.367-5.27c-.156-.05-2.356-.747-4.896-.341'
              />
            </svg>
          </div>

          <div className='text-center text-sm font-medium'>
            Crafting is a creative process that involves combining various materials and tools to
            create something new and unique.
          </div>

          <div className='flex gap-x-4 items-center justify-center'>
            <button className='bg-001-button-primary text-white py-2 w-1/2 border border-white rounded-full hover:bg-pink-700 transition'>
              Follow
            </button>

            <button className='bg-white text-black text-opacity-70 py-2 w-1/2 border border-black/20 rounded-full hover:bg-black/10 transition'>
              Message
            </button>
          </div>
        </div>
      </section>
      <Copyright
        link='https://app.bigdevsoon.me/challenges/profile-card/browser'
        author='BigDevSoon'
      />
    </main>
  )
}
