import Head from 'next/head'
import Header from '../../components/Header'

export default function MovieNotFound(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Not found</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="theme-color" content="#204fa5" />
      </Head>
      <Header />
      <div className='pb-10 md:pb-0 relative md:static'>
        <div
          className='absolute top-0 left-0 right-20 overflow-hidden
            bg-gradient-to-t md:bg-gradient-to-r from-[#204fa5] to-[#204ea500]
            h-full w-full -z-1' />
        <div className={`flex flex-col px-10 md:px-20 md:py-16 space-y-7 
          md:space-y-14 min-h-full pt-2/3 md:pt-6`}>
          <p className='text-white font-bold text-3xl md:text-6xl'>
            Not found
          </p>
          <p className={`text-white max-w-sm md:max-w-2xl md:text-xl 
            md:whitespace-normal`}>
            Can't find movie you're looking for
          </p>
        </div>
      </div>
    </div>
  )
}
