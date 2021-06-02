import MovieData from './MovieData'
import TvShowData from './TvShowData'

export default interface ResultsData {
  page: number,
  results: MovieData[] | TvShowData[],
  totalPages: number
  totalResults: number
}