import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import requests from '../../utils/requests'
import MovieDetails from '../../components/MovieDetails'

export default function Details({movie}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{movie.title || movie.original_title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="theme-color" content="#204fa5" />
      </Head>
      <Header />
      <div
        className='hidden md:block absolute top-0 h-full w-full -z-1 overflow-hidden'>
        <Image
          layout='fill'
          objectFit='cover'
          quality={100}
          src={
            `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_URL}${movie.poster_path}`
          }
          />
      </div>
      <div
        className='md:hidden absolute top-0 h-full w-full -z-1 overflow-hidden'>
        <Image
          layout='fill'
          objectFit='cover'
          src={
            `${BASE_URL}${movie.poster_path}`
          }
          />
      </div>
      <div className='pb-10 md:pb-0 relative md:static pt-2/3 md:pt-6'>
        <div
          className='absolute top-0 left-0 right-20 overflow-hidden
          bg-gradient-to-t md:bg-gradient-to-r from-[#204fa5] to-[#204ea500]
          h-full w-full -z-1' />
        <MovieDetails props={movie} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const movieId = context.query.id

  const requestMovie = await fetch(
    `https://api.themoviedb.org/3${requests.fetchMovieDetails(movieId).url}`,
  ).then((res) => res.json())

  return {
    props: { movie: requestMovie }
  }
}
