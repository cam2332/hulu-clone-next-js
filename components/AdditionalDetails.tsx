import { useState } from 'react'
import Image from 'next/image'
import FlipMove from 'react-flip-move'
import MovieData from '../types/MovieData'
import MovieDetailsData from '../types/MovieDetailsData'
import TvShowDetailsData from '../types/TvShowDetailsData'
import TvShowData from '../types/TvShowData'
import Results from './Results'
import VideoData from '../types/VideoData'
import MovieTvShowCreditsData from '../types/MovieTvShowCreditsData'

function AdditionalDetails({
  movie,
  results,
  credits
}: {
  movie: MovieDetailsData | TvShowDetailsData,
  results: MovieData[] | TvShowData[],
  credits: MovieTvShowCreditsData
  }): JSX.Element {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  const [tab, setTab] = useState(0)

  return (
    <div className="h-full w-full bg-[#06202A]">
      <div
        className="flex space-x-9 px-10 md:px-20 border-b-2 border-gray-700">
        <div
          className={`py-8 border-b-4 
            ${tab === 0 ? 'border-[#3fa4e7]' : 'border-[#06202A]'}`}>
          <p
            onClick={() => setTab(0)}
            className="text-gray-300 hover:text-[#70a2ff] 
              font-bold cursor-pointer">
            YOU MAY ALSO LIKE
          </p>
        </div>
        {movie.videos.results && (
          <div
            className={`py-8 border-b-4
              ${tab === 1 ? 'border-[#3fa4e7]' : 'border-[#06202A]'}`}>
            <p
              onClick={() => setTab(1)}
              className="text-gray-300 hover:text-[#70a2ff] 
                font-bold cursor-pointer">
              EXTRAS
              </p>
          </div>
        )}
        <div
          className={`py-8 border-b-4 
            ${tab === 2 ? 'border-[#3fa4e7]' : 'border-[#06202A]'}`}>
          <p
            onClick={() => setTab(2)}
            className="text-gray-300 hover:text-[#70a2ff] 
              font-bold cursor-pointer">
            DETAILS
          </p>
        </div>
      </div>
      {tab === 0 &&
        <div className='px-10 md:px-20'>
          <Results results={results} />
        </div>
      }
      {movie.videos.results && tab === 1 &&
        <div className='px-10 md:px-20'>
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
          3xl:flex flex-wrap justify-center'>
          {movie.videos.results.map((video: VideoData) => (
            <div
              key={video.id}
              className='p-2 group cursor-pointer transition duration-200
                ease-in transform sm:hover:scale-105 hover:z-50'>
              <Image
                layout='responsive'
                height='480'
                width='854'
                src={
                  `${BASE_URL}${movie.backdrop_path ||
                    movie.poster_path}` ||
                  `${BASE_URL}${movie.poster_path}`
                }
              />
              <div className='p-2'>
                <p className='text-xl text-white'>
                  {`${movie.title || movie.original_title} - ${video.type}`}
                </p>
              </div>
            </div>
          ))}
        </FlipMove>
        </div>
      }
      {tab === 2 &&
        <div className='px-10 md:px-20 space-y-4 md:space-y-8 py-8 md:py-16'>
          <p className='text-white font-bold md:text-xl'>
              About this movie
            </p>
            <p className='text-white font-bold text-2xl md:text-5xl'>
              {movie.title || movie.original_title}
          </p>
          <div className='flex space-x-2'>
            <p className='font-bold text-gray-400 md:text-xl'>
            Starring:
            </p>
            <p className='text-gray-400 md:text-xl'>
              {credits.cast.slice(0, 2).map(
                (cast, index) =>
                  (index ? ', ' : '') + (cast.name || cast.original_name)
              )}
            </p>
          </div>
          <div className='flex space-x-2'>
            <p className='font-bold text-gray-400 md:text-xl'>
            Directors:
            </p>
            <p className='text-gray-400 md:text-xl'>
              {credits.crew.filter((crew) => crew.job === 'Producer').slice(0, 2).map(
                (crew, index) =>
                  (index ? ', ' : '') + (crew.name || crew.original_name)
              )}
            </p>
        </div>
        {/* change to div and make list of links to genres */}
        <p className='flex items-center text-gray-400 
          font-bold md:text-xl'>
          {movie.genres && movie.genres.length > 0 &&
            `${movie.genres.map(genre => genre.name + ' • ').join('')}`}{' '}
          {(movie as MovieDetailsData).release_date &&
            (movie as MovieDetailsData).release_date.substring(0, 4) ||
          (movie as TvShowDetailsData).first_air_date &&
            (movie as TvShowDetailsData).first_air_date.substring(0, 4)}{' '}
        </p>
        </div>
      }
    </div>
  )
}

export default AdditionalDetails