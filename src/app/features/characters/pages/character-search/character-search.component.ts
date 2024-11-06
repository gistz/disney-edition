import { Component, OnInit } from '@angular/core';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { DisneyCssClassesEnum } from '../../../../core/enum/disney-css-classes.enum';
import { ActivatedRoute } from '@angular/router';
import { DisneyApiService } from '../../services/disney-api.service';
import { DisneyCharacter } from '../../models/disney-api-response';
import { EMPTY, Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-search',
  standalone: true,
  imports: [CharactersListComponent, SlicePipe, AsyncPipe],
  templateUrl: './character-search.component.html',
  styleUrl: './character-search.component.scss',
})
export class CharacterSearchComponent implements OnInit {
  disneyClasses = DisneyCssClassesEnum;
  featuredCharacters: DisneyCharacter[] = [];
  searchedCharacters$: Observable<DisneyCharacter[]> = EMPTY;
  searchName: string = '';
  searchCount: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private disneyApiService: DisneyApiService,
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.featuredCharacters = data['featuredCharacters'];
    });

    this.route.params.subscribe((params) => {
      this.searchName = params['name'];
      this.searchedCharacters$ = this.disneyApiService
        .getCharacterByName(this.searchName)
        .pipe(
          tap((res) => {
            this.searchCount = res.info.count;
          }),
        )
        .pipe(
          map((response) => {
            if (Array.isArray(response.data)) {
              return response.data as DisneyCharacter[];
            } else {
              return [response.data as DisneyCharacter];
            }
          }),
        );
    });
  }
}
