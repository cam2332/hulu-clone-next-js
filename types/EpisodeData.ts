import CastData from './CastData'
import CrewData from './CrewData'

export default interface EpisodeData {
  air_date: string
  crew: CrewData[]
  episode_number: number
  guest_stars: CastData[]
  id: number
  name: string
  overview: string
  production_code: string | null
  season_number: number
  still_path: string | null
  vote_average: number
  vote_count: number
}