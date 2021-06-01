import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests, {
  fetchMoviesByGenreId,
  fetchTrending,
  fetchTopRated,
  fetchMoviesByYear,
  fetchMoviesByCastId,
  fetchMoviesByCrewId
} from '../utils/requests'
import ResultsData from '../types/ResultsData'

export default function Home({
  page,
  results,
  totalPages,
  totalResults
}: ResultsData): JSX.Element {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Nav />
      <Results
        page={page}
        results={results}
        totalPages={totalPages} 
        totalResults={totalResults} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = (context.query.genre as string)
  const releaseYear = (context.query.release_year as string | undefined)
  const castId = (context.query.castId as string | undefined)
  const crewId = (context.query.crewId as string | undefined)
  const page = parseInt((context.query.page as string | undefined) || '1')
  let request: ResultsData = {
    page: 0,
    results: [],
    totalPages: 0,
    totalResults: 0
  }

  const extractResults = (results: any): ResultsData => {
    return {
      page: results.page,
      results: results.results,
      totalPages: results.total_pages,
      totalResults: results.total_results
    }
  }

  if (castId) {
    request = await fetch(
      `https://api.themoviedb.org/3${fetchMoviesByCastId(castId, page)}`
    ).then(res => res.json())
    .then(results => extractResults(results))
  } else if (crewId) {
    request = await fetch(
      `https://api.themoviedb.org/3${fetchMoviesByCrewId(crewId, page)}`
    ).then(res => res.json())
    .then(results => extractResults(results))
  } else if (releaseYear) {
    request = await fetch(
      `https://api.themoviedb.org/3${fetchMoviesByYear(releaseYear, page)}`
    ).then(res => res.json())
    .then(results => extractResults(results))
  } else if (genre && genre.length > 0) {
    if (genre === 'fetchTrending') {
      request = await fetch(
        `https://api.themoviedb.org/3${fetchTrending(page)}`
      ).then(res => res.json())
      .then(results => extractResults(results))
    } else if (genre === 'fetchTopRated') {
      request = await fetch(
        `https://api.themoviedb.org/3${fetchTopRated(page)}`
      ).then(res => res.json())
      .then(results => extractResults(results))
    } else {
      request = await fetch(
        `https://api.themoviedb.org/3${requests[genre]?.url ||
        fetchMoviesByGenreId(genre, page) || fetchTrending(page)}`
      ).then(res => res.json())
      .then(results => extractResults(results))
    }
  } else {
    request = await fetch(
      `https://api.themoviedb.org/3${fetchTrending(page)}`
    ).then(res => res.json())
    .then(results => extractResults(results))
  }

  return {
    props: {
      page: request.page,
      results: request.results,
      totalPages: request.totalPages,
      totalResults: request.totalResults
    }
  }
}