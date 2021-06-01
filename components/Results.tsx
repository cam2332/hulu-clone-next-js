import { useRouter } from 'next/router'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
import MovieData from '../types/MovieData'
import TvShowData from '../types/TvShowData'
import Pagination from './Pagination'
import ResultsData from '../types/ResultsData'

function Results({ page, results, totalPages }: ResultsData): JSX.Element {
  const router = useRouter()

  return (
    <div className='pb-10'>
      <FlipMove className='results-container'>
        {results.map((result: MovieData | TvShowData) => (
          <Thumbnail key={result.id} result={result} />
        ))}      
      </FlipMove>
      {totalPages > 0 && (
        <div className='flex justify-center'>
        <Pagination
          page={page}
          totalPages={totalPages}
          onChange={(newPage: number) =>
            router.push({
              pathname: router.pathname,
              query: { page: newPage }
            })
          } />
        </div>
      )}
    </div>
  )
}

export default Results
