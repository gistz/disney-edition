import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import {
  DisneyApiResponse,
  DisneyCharacter,
} from '../models/disney-api-response';
import { API_ROUTES } from '../../../core/const/api-routes';
import { map } from 'rxjs/operators';
import { Character, featuredCharacters } from '../models/default-characters';

@Injectable({
  providedIn: 'root',
})
export class DisneyApiService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page: number = 1): Observable<DisneyApiResponse> {
    const url = `${API_ROUTES.CHARACTERS}?page=${page}`;
    return this.http.get<DisneyApiResponse>(url);
  }

  getCharacterById(id: number | string): Observable<DisneyCharacter> {
    const url = API_ROUTES.CHARACTER_BY_ID(id);
    return this.http.get<DisneyApiResponse>(url).pipe(
      map((disneyApiResponse) => {
        return disneyApiResponse.data as DisneyCharacter;
      }),
    );
  }

  getCharactersByIds(ids: number[]): Observable<DisneyCharacter[]> {
    return forkJoin(ids.map((id) => this.getCharacterById(id))).pipe(
      map((characters) => {
        return characters;
      }),
    );
  }

  getFeaturedCharacters(
    featuredCharactersParam: Character[] = featuredCharacters,
  ): Observable<DisneyCharacter[]> {
    return this.getCharactersByIds(
      featuredCharactersParam.map((character) => character.id, true),
    );
  }

  getCharacterByName(name: string): Observable<DisneyApiResponse> {
    const url = API_ROUTES.CHARACTER_BY_NAME(name);
    return this.http.get<DisneyApiResponse>(url);
  }
}
