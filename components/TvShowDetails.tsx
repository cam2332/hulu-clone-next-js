import React from 'react'
import { PlayIcon } from '@heroicons/react/solid'
import TvShowDetailsData from '../types/TvShowDetailsData'

function TvShowDetails({ tvShow }: {
  tvShow: TvShowDetailsData
}): JSX.Element {
  const [overviewExpanded, setOverviewExpanded] = React.useState(false)

  return (
    <div className={`flex flex-col justify-end px-10 md:px-20 md:py-16 space-y-7 
      md:space-y-14 min-h-s65 pb-20 md:pt-6`}>
      <p className='text-white font-bold text-3xl md:text-6xl'>
        {tvShow.name || tvShow.original_name}
      </p>
      <p
        onClick={() => setOverviewExpanded(!overviewExpanded)}
        className={`text-white max-w-sm md:max-w-2xl md:text-xl 
        ${!overviewExpanded && 'truncate'} md:whitespace-normal`}>
        {tvShow.overview}
      </p>
      <p className='flex items-center opacity-100 text-white 
        font-bold md:text-xl'>
        {tvShow.genres && tvShow.genres.length > 0 &&
          `${tvShow.genres.map(genre => genre.name + ' • ').join('')}`}{' '}
        {tvShow.first_air_date && tvShow.first_air_date.substring(0, 4)}{' '}
      </p>
      <div className='flex space-x-4 h-11 md:h-14'>
        <div className='flex items-center justify-center w-32 md:w-40
        bg-white rounded-sm space-x-3 cursor-pointer'>
          <div className=''>
            <PlayIcon className='h-6 md:h-9 text-black' />
          </div>
          <p className='md:text-xl text-black font-medium'>PLAY</p>
        </div>
      </div>
    </div>
  )
}

export default TvShowDetails

