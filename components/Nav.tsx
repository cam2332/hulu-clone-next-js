import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav(): JSX.Element {
  const router = useRouter()

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide p-1'>
        <h2
            onClick={() => router.push('/?genre=fetchTrending')}
            className='nav-text'>Trending</h2>
        <h2
            onClick={() => router.push('/?genre=fetchTopRated')}
            className='nav-text'>Top rated</h2>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='nav-text'>{title}</h2>
        ))}
      </div>
      <div className='absolute top-0 left-0 bg-gradient-to-r
      from-[#06202A] h-10 w-14' />
      <div className='absolute top-0 right-0 bg-gradient-to-l
      from-[#06202A] h-10 w-14' />
    </nav>
  )
}

export default Nav
