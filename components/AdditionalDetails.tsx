import { useState } from 'react'
import Image from 'next/image'
import FlipMove from 'react-flip-move'
import MovieData from '../types/MovieData'
import MovieDetailsData from '../types/MovieDetailsData'
import TvShowDetailsData from '../types/TvShowDetailsData'
import TvShowData from '../types/TvShowData'
import Results from './Results'
import VideoData from '../types/VideoData'

function AdditionalDetails({
  movie,
  results
}: {
  movie: MovieDetailsData | TvShowDetailsData,
  results: MovieData[] | TvShowData[]
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
    </div>
  )
}

export default AdditionalDetails
