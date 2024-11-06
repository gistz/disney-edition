import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { DisneyApiService } from './disney-api.service';
import { DisneyCharacter } from '../models/disney-api-response';
import { defaultCharacters } from '../models/default-characters';

@Injectable({
  providedIn: 'root',
})
export class DefaultCharactersResolver implements Resolve<DisneyCharacter[]> {
  constructor(private disneyApiService: DisneyApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<DisneyCharacter[]> {
    const storedCharacters = localStorage.getItem('defaultCharacters');
    if (storedCharacters) {
      return of(JSON.parse(storedCharacters));
    } else {
      return this.disneyApiService
        .getCharactersByIds(
          defaultCharacters.map((character) => character.id, true),
        )
        .pipe(
          tap((characters) => {
            localStorage.setItem(
              'defaultCharacters',
              JSON.stringify(characters),
            );
          }),
        );
    }
  }
}
