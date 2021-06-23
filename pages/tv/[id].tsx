import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import {
  fetchTrending,
  fetchTvShowDetails,
  fetchTvShowDetailsWithSeasons,
  fetchTvShowCredits,
  fetchTvShowRecommendations
} from '../../utils/requests'
import TvShowDetails from '../../components/TvShowDetails'
import AdditionalTvShowDetails from '../../components/AdditionalTvShowDetails'
import TvShowDetailsData from '../../types/TvShowDetailsData'
import TvShowData from '../../types/TvShowData'
import MovieTvShowCreditsData from '../../types/MovieTvShowCreditsData'
import ResultsData from '../../types/ResultsData'

export default function Details(
  {
    tvShow,
    results,
    credits
  }: {
    tvShow: TvShowDetailsData,
    results: TvShowData[],
    credits: MovieTvShowCreditsData
  }): JSX.Element {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <Head>
        <title>{tvShow.name || tvShow.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="theme-color" content="#204fa5" />
      </Head>
      <Header />
      <div
        className='hidden md:block absolute top-0 h-full-94 w-full -z-1 
          overflow-hidden pb-3/4 md:pb-0 sm-landscape:pb-3/4 min-h-s65'>
        <Image
          layout='fill'
          objectFit='cover'
          quality={100}
          src={
            `${BASE_URL}${tvShow.backdrop_path || tvShow.poster_path}` ||
            `${BASE_URL}${tvShow.poster_path}`
          }
          />
      </div>
      <div
        className='md:hidden absolute top-0 h-full w-full -z-1 
          overflow-hidden min-h-s65'>
        <Image
          layout='fill'
          objectFit='cover'
          src={
            `${BASE_URL}${tvShow.poster_path}`
          }
          />
      </div>
      <div className='min-h-s65'>
        <div
          className='absolute top-0 left-0 right-20 overflow-hidden
            bg-gradient-to-t md:bg-gradient-to-r from-[#204fa5] to-[#204ea500]
            h-full w-full -z-1 pb-3/4 min-h-s65' />
        <TvShowDetails tvShow={tvShow} />
      </div>
      <AdditionalTvShowDetails tvShow={tvShow} results={results} credits={credits} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tvShowId = (context.query.id as string)
  const page = parseInt((context.query.page as string | null) || '1')

  const extractResults = (results: any): ResultsData => {
    return {
      page: results.page,
      results: results.results,
      totalPages: results.total_pages,
      totalResults: results.total_results
    }
  }

  const requestTvShow: TvShowDetailsData | null = await fetch(
    `https://api.themoviedb.org/3${fetchTvShowDetails(tvShowId)}`,
  ).then((res) => res.json()).then(async (jsonTvShowDetails) => {
    if (jsonTvShowDetails.hasOwnProperty('success')) {
      if (jsonTvShowDetails.success === false) {
        return null
      }
    }

    const requestTvShowWithSeasons: TvShowDetailsData | null = await fetch(
      `https://api.themoviedb.org/3${fetchTvShowDetailsWithSeasons(
        tvShowId,
        jsonTvShowDetails.seasons.length
      )}`,
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
    
    return requestTvShowWithSeasons
  }).catch((error) => {
    return null
  })

  const requestResults: ResultsData | null = await fetch(
    `https://api.themoviedb.org/3${fetchTvShowRecommendations(tvShowId) ||
    fetchTrending(page)}`
  ).then(res => res.json()).then(results => {
    if (results.hasOwnProperty('results')) {
      return extractResults(results)
    }
    return null
  }).catch((error) => {
    return null
  })

  const requestTvShowCredits: MovieTvShowCreditsData | null = await fetch(
    `https://api.themoviedb.org/3${fetchTvShowCredits(tvShowId)}`,
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

  if (requestTvShow === null || requestResults === null) {
    context.res.setHeader('location', '/tv/404')
    context.res.statusCode = 302
    context.res.end()
  }

  return {
    props: {
      tvShow: requestTvShow,      
      credits: requestTvShowCredits,
      page: requestResults?.page,
      results: requestResults?.results,
      totalPages: requestResults?.totalPages,
      totalResults: requestResults?.totalResults
    }
  }
}
