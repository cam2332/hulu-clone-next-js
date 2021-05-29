import CastData from './CastData'
import CrewData from './CrewData'

export default interface MovieTvShowCreditsData {
  id: number
  cast: CastData[]
  crew: CrewData[]
}