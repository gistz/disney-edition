export interface DisneyCharacter {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

export interface Info {
  totalPages?: number;
  count: number;
  previousPage?: string;
  nextPage?: string;
}

export interface DisneyApiResponse {
  info: Info;
  data: DisneyCharacter[] | DisneyCharacter;
}
