import MovieData from './MovieData'
import CollectionData from './CollectionData'
import GenreData from './GenreData'
import CompanyData from './CompanyData'
import CountryData from './CountryData'
import LanguageData from './LanguageData'

export default interface MovieDetailsData extends MovieData {
  belongs_to_collection: CollectionData;
	budget: number;
	genres: GenreData[];
	homepage: string;
	imdb_id: string;
	production_companies: CompanyData[];
	production_countries: CountryData[];
	revenue: number;
	runtime: number;
	spoken_languages: LanguageData[];
	status: string;
	tagline: string;
}