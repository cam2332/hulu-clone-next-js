const API_KEY = process.env.API_KEY

interface Request {
  title: string
  url: string
}

export const fetchMovieDetails = (movieId: string): Request => {
  return {
    title: 'Movie Details',
    url: `/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
  }
}
export const fetchMovieCredits = (movieId: string): string => {
  return `/movie/${movieId}/credits?api_key=${API_KEY}`
}
export const fetchMovieRecommendations = (movieId: string): string => {
  return `/movie/${movieId}/recommendations?api_key=${API_KEY}`
}
export const fetchMoviesByGenreId = (genreId: string, page: number): string => {
  return `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
}
export const fetchMoviesByYear = (year: string, page: number): string => {
  return `/discover/movie?api_key=${API_KEY}&release_date.gte=${year}-01-01&release_date.lte=${year}-12-12&page=${page}`
}
export const fetchMoviesByCastId = (castId: string, page: number): string => {
  return `/discover/movie?api_key=${API_KEY}&with_cast=${castId}&page=${page}`
}
export const fetchMoviesByCrewId = (crewId: string, page: number): string => {
  return `/discover/movie?api_key=${API_KEY}&with_crew=${crewId}&page=${page}`
}
export const fetchTrending = (page: number): string => {
  return `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}`
}
export const fetchTopRated = (page: number): string => {
  return `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
}
const fetchActionMovies = {
  title: 'Action',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}
const fetchComedyMovies = {
  title: 'Comedy',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
}
const fetchHorrorMovies = {
  title: 'Horror',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}
const fetchRomanceMovies = {
  title: 'Romance',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}
const fetchMystery = {
  title: 'Mystery',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
}
const fetchSciFi = {
  title: 'Sci-Fi',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}
const fetchWestern = {
  title: 'Western',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
}
const fetchAnimation = {
  title: 'Animation',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}
const fetchTV = {
  title: 'TV Movie',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

const requests: {[index: string]: Request} = {
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchMystery,
  fetchSciFi,
  fetchWestern,
  fetchAnimation,
  fetchTV
}

export default requests