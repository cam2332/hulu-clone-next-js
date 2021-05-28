import TvShowData from './TvShowData'
import PersonData from './PersonData'
import GenreData from './GenreData'
import NetworkData from './NetworkData'
import CompanyData from './CompanyData'
import SeasonData from './SeasonData'
import VideoData from './VideoData'

export default interface TvShowDetailsData extends TvShowData {
  created_by: PersonData[]
	episode_run_time: number[]
	genres: GenreData[]
	homepage: string
	in_production: boolean
	languages: string[]
	networks: NetworkData[]
	number_of_episodes: number
	number_of_seasons: number
	production_companies: CompanyData[]
	seasons: SeasonData[]
	status: string
	type: string
	last_air_date: Date
	videos: {results: VideoData[]}
}