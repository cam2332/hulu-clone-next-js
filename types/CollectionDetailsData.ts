import CollectionData from './CollectionData'
import MovieData from './MovieData'

export default interface CollectionDetailsData extends CollectionData {
  overview: string
  parts: MovieData[]
}