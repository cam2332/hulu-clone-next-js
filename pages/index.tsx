import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests, {
  fetchMoviesByGenreId,
  fetchTrending,
  fetchTopRated
} from '../utils/requests'
import MovieData from '../types/MovieData'
import TvShowData from '../types/TvShowData'

export default function Home({
  results
}: { results: MovieData[] | TvShowData[] }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = (context.query.genre as string)
  let request: MovieData[] | TvShowData[] = []

  if (genre.length > 0) {
    if (genre === 'fetchTrending') {
      request = await fetch(
        `https://api.themoviedb.org/3${fetchTrending.url}`
      ).then(res => res.json()).then(results => results.results)
    } else if (genre === 'fetchTopRated') {
      request = await fetch(
        `https://api.themoviedb.org/3${fetchTopRated.url}`
      ).then(res => res.json()).then(results => results.results)
    } else {
      request = await fetch(
        `https://api.themoviedb.org/3${requests[genre]?.url ||
        fetchMoviesByGenreId(genre) || requests.fetchTrending.url}`
      ).then(res => res.json()).then(results => results.results)
    }
  }
  
  return {
    props: {
      results: request
    }
  }
}