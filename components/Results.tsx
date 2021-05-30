import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
import Movie from '../types/MovieData'
import TvShowData from '../types/TvShowData'

function Results(props: { results: Movie[] | TvShowData[]}): JSX.Element {
  return (
    <FlipMove className='results-container'>
      {props.results.map((result: Movie | TvShowData) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
