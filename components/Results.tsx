import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
import Movie from '../types/MovieData'
import TvShowData from '../types/TvShowData'

function Results(props: { results: Movie[] | TvShowData[]}): JSX.Element {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center'>
      {props.results.map((result: Movie | TvShowData) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
