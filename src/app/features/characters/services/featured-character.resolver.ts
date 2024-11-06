import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { DisneyApiService } from './disney-api.service';
import { DisneyCharacter } from '../models/disney-api-response';
import { featuredCharacters } from '../models/default-characters';

@Injectable({
  providedIn: 'root',
})
export class FeaturedCharactersResolver implements Resolve<DisneyCharacter[]> {
  constructor(private disneyApiService: DisneyApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<DisneyCharacter[]> {
    const storedCharacters = localStorage.getItem('featuredCharacters');
    if (storedCharacters) {
      return of(JSON.parse(storedCharacters));
    } else {
      return this.disneyApiService
        .getCharactersByIds(featuredCharacters.map((character) => character.id))
        .pipe(
          tap((characters) => {
            localStorage.setItem(
              'featuredCharacters',
              JSON.stringify(characters),
            );
          }),
        );
    }
  }
}
