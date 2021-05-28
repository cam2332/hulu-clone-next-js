import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import requests, {
  fetchMovieDetails,
  fetchMoviesByGenre
} from '../../utils/requests'
import MovieDetails from '../../components/MovieDetails'
import AdditionalDetails from '../../components/AdditionalDetails'
import MovieDetailsData from '../../types/MovieDetailsData'
import TvShowDetailsData from '../../types/TvShowDetailsData'
import MovieData from '../../types/MovieData'
import TvShowData from '../../types/TvShowData'

export default function Details(
  {
    movie,
    results
  }: {
    movie: MovieDetailsData | TvShowDetailsData,
    results: MovieData[] | TvShowData[]
  }): JSX.Element {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <Head>
        <title>{movie.title || movie.original_title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="theme-color" content="#204fa5" />
      </Head>
      <Header />
      <div
        className='hidden md:block absolute top-0 h-full w-full -z-1 
          overflow-hidden'>
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
        className='md:hidden absolute top-0 h-full w-full -z-1 
          overflow-hidden'>
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
        <MovieDetails movie={movie} />
      </div>
      <AdditionalDetails movie={movie} results={results} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movieId = (context.query.id as string)

  const requestMovie: MovieDetailsData | TvShowDetailsData = await fetch(
    `https://api.themoviedb.org/3${fetchMovieDetails(movieId).url}`,
  ).then((res) => res.json())

  const requestResults: MovieData[] | TvShowData[] = await fetch(
    `https://api.themoviedb.org/3${fetchMoviesByGenre(requestMovie.genres[0])?.url ||
    requests.fetchTrending.url}`
  ).then(res => res.json()).then(results => results.results)

  return {
    props: { movie: requestMovie, results: requestResults }
  }
}