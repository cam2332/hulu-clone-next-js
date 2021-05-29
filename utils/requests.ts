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
export const fetchMovieCredits = (movieId: string): Request => {
  return {
    title: 'Movie Details',
    url: `/movie/${movieId}/credits?api_key=${API_KEY}`,
  }
}
export const fetchMovieRecommendations = (movieId: string): Request => {
  return {
    title: 'Movie Recommendations',
    url: `/movie/${movieId}/recommendations?api_key=${API_KEY}`,
  }
}
export const fetchMoviesByGenreId = (genreId: string): string => {
  return `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
}
export const fetchTrending = {
  title: 'Trending',
  url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}
export const fetchTopRated = {
  title: 'Top rated',
  url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
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