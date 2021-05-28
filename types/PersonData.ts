import MovieData from './MovieData'
import TvShowData from './TvShowData'

export default interface PersonData {
  id: number
	name: string
	profile_path: string
	adult: boolean
	popularity: number
	known_for: Array<MovieData | TvShowData>
}