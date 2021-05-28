import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { ForwardedRef, forwardRef } from 'react'
import { useRouter } from 'next/router'
import MovieData from '../types/MovieData'
import TvShowData from '../types/TvShowData'

const Thumbnail = forwardRef((
  { result }: { result: MovieData | TvShowData },
  ref: ForwardedRef<HTMLDivElement>
) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const router = useRouter()

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/movie/${result.id}`)}
      className='p-2 group cursor-pointer transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        layout='responsive'
        height='1080'
        width='1920'
        src={
          `${BASE_URL}${result.backdrop_path ||
            result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2
          className='truncate max-w-md mt-1 text-2xl text-white transition-all
            duration-100 ease-in-out group-hover:font-bold'>
          {result.title || result.original_title}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {(result as MovieData).release_date ||
            (result as TvShowData).first_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
