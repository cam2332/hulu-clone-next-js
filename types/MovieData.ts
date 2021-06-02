export default interface MovieData {
  id: number
	title: string
	original_title: string
  poster_path: string
  adult: boolean
	overview: string
	release_date: string
  genre_ids: number[]
	original_language: string
	backdrop_path: string
	popularity: number
	vote_count: number
	video: boolean
	vote_average: number
	media_type: string
}