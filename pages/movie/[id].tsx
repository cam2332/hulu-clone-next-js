import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import requests, {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieRecommendations
} from '../../utils/requests'
import MovieDetails from '../../components/MovieDetails'
import AdditionalDetails from '../../components/AdditionalDetails'
import MovieDetailsData from '../../types/MovieDetailsData'
import TvShowDetailsData from '../../types/TvShowDetailsData'
import MovieData from '../../types/MovieData'
import TvShowData from '../../types/TvShowData'
import MovieTvShowCreditsData from '../../types/MovieTvShowCreditsData'

export default function Details(
  {
    movie,
    results,
    credits
  }: {
    movie: MovieDetailsData | TvShowDetailsData,
    results: MovieData[] | TvShowData[],
    credits: MovieTvShowCreditsData
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
        className='hidden md:block absolute top-0 h-full-94 w-full -z-1 
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
      <div className=''>
        <div
          className='absolute top-0 left-0 right-20 overflow-hidden
            bg-gradient-to-t md:bg-gradient-to-r from-[#204fa5] to-[#204ea500]
            h-full w-full -z-1' />
        <MovieDetails movie={movie} />
      </div>
      <AdditionalDetails movie={movie} results={results} credits={credits} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movieId = (context.query.id as string)

  const requestMovie: MovieDetailsData | TvShowDetailsData | null = await fetch(
    `https://api.themoviedb.org/3${fetchMovieDetails(movieId).url}`,
  ).then((res) => res.json()).then((json) => {
    if (json.hasOwnProperty('success')) {
      if (json.success === false) {
        return null
      }
    }
    return json
  }).catch((error) => {
    return null
  })

  const requestResults: MovieData[] | TvShowData[] | null = await fetch(
    `https://api.themoviedb.org/3${fetchMovieRecommendations(movieId)?.url ||
    requests.fetchTrending.url}`
  ).then(res => res.json()).then(results => {
    if (results.hasOwnProperty('results')) {
      return results.results
    }
    return null
  }).catch((error) => {
    return null
  })

  const requestMovieCredits: MovieTvShowCreditsData | null = await fetch(
    `https://api.themoviedb.org/3${fetchMovieCredits(movieId).url}`,
  ).then((res) => res.json()).then((json) => {
    if (json.hasOwnProperty('success')) {
      if (json.success === false) {
        return null
      }
    }
    return json
  }).catch((error) => {
    return null
  })

  if (requestMovie === null) {
    context.res.setHeader('location', '/movie/not_found_404')
    context.res.statusCode = 302
    context.res.end()
  }

  return {
    props: {
      movie: requestMovie,
      results: requestResults,
      credits: requestMovieCredits
    }
  }
}
