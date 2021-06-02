import TvShowData from './TvShowData'
import TvShowCreatorData from './TvShowCreatorData'
import GenreData from './GenreData'
import NetworkData from './NetworkData'
import CompanyData from './CompanyData'
import SeasonData from './SeasonData'
import VideoData from './VideoData'
import CountryData from './CountryData'
import LanguageData from './LanguageData'
import EpisodeData from './EpisodeData'

export default interface TvShowDetailsData extends TvShowData {
  created_by: TvShowCreatorData[]
	episode_run_time: number[]
	first_air_date: string
	genres: GenreData[]
	homepage: string
	id: number
	in_production: boolean
	languages: string[]
	last_air_date: string
	last_episode_to_air: EpisodeData
	name: string
	networks: NetworkData[]
	number_of_episodes: number
	number_of_seasons: number
	origin_country: string[]
	original_language: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: CompanyData[]
	production_countries: CountryData[]
	seasons: SeasonData[]
	spoken_languages: LanguageData[]
	status: string
	tagline: string
	type: string
	vote_average: number
	vote_count: number
	videos: {results: VideoData[]}
}