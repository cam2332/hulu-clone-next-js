import React from 'react'
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/solid'
function MovieDetails({ props }) {
  const [overviewExpanded, setOverviewExpanded] = React.useState(false)

  return (
    <div className='flex flex-col px-10 md:px-20 md:py-16 space-y-7 md:space-y-14 min-h-full'>
      <p className='text-white font-bold text-3xl md:text-6xl'>
        {props.title || props.original_title}
      </p>
      <p
        onClick={() => setOverviewExpanded(!overviewExpanded)}
        className={`text-white max-w-sm md:max-w-2xl md:text-xl 
        ${!overviewExpanded && 'truncate'} md:whitespace-normal`}>
        {props.overview}
      </p>
      <p className='flex items-center opacity-100 font-white font-bold md:text-xl'>
        {props.genres && props.genres.length > 0 &&
          `${props.genres.map(genre => genre.name + ' • ').join('')}`}{' '}
          {props.media_type && `${props.media_type} •`}{' '}
        {props.release_date && props.release_date.substring(0, 4) ||
          props.first_air_date && props.first_air_date.substring(0, 4)}{' '}
      </p>
      <div className='flex space-x-4 h-11 md:h-14'>
        <div className='flex items-center justify-center w-32 md:w-40
        bg-white rounded-sm space-x-3 cursor-pointer'>
          <div className=''>
            <PlayIcon className='h-6 md:h-9 text-black' />
          </div>
          <p className='md:text-xl text-black font-medium'>PLAY</p>
        </div>
        <div className='flex items-center justify-center w-32 md:w-44 
        bg-white bg-opacity-30 rounded-sm space-x-3 cursor-pointer'>
          <div className=''>
            <ArrowRightIcon className='h-5 md:h-8 text-white' />
          </div>
          <p className='md:text-xl text-gray-50 font-medium '>DETAILS</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails

