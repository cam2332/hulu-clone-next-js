import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'

export default function MovieNotFound(): JSX.Element {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Not found</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="theme-color" content="#204fa5" />
      </Head>
      <Header />
      <div className='pb-10 relative md:static'>
        <div
          className='fixed top-0 left-0 right-0 bottom-0 overflow-hidden
            bg-gradient-to-r from-[#204fa5] to-[#204ea500]
            -z-1' />
        <div className={`flex flex-col items-center justify-center space-y-7 
          md:space-y-14`}>
          <p className='text-white font-bold text-4xl md:text-8xl'>
            404
          </p>
          <p className={`text-white md:text-xl
            md:whitespace-normal`}>
            Page not found
          </p>
          <button
            onClick={() => router.push('/')}
            style={{outline: 'none'}}
            className='group p-3 px-4 transition duration-100 transform hover:scale-110 
            bg-blue-100 hover:bg-transparent border-blue-200 border-2 rounded-md'>
            <p
              className='cursor-pointer select-none font-medium text-blue-900 
              group-hover:text-blue-200'>
                BACK TO HOME
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
