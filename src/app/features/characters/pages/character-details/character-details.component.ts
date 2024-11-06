import { Component, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, SlicePipe } from '@angular/common';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { DisneyApiService } from '../../services/disney-api.service';
import { DisneyCharacter } from '../../models/disney-api-response';
import { EMPTY, Observable } from 'rxjs';
import { DisneyCssClassesEnum } from '../../../../core/enum/disney-css-classes.enum';
import { ActivatedRoute } from '@angular/router';
import { CharacterProfileComponent } from '../../components/character-profile/character-profile.component';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [
    AsyncPipe,
    CharactersListComponent,
    SlicePipe,
    JsonPipe,
    CharacterProfileComponent,
  ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  featuredCharacters: DisneyCharacter[] = [];
  characterDetail$: Observable<DisneyCharacter> = EMPTY;
  disneyClasses = DisneyCssClassesEnum;

  constructor(
    private route: ActivatedRoute,
    private disneyApiService: DisneyApiService,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.featuredCharacters = data['featuredCharacters'];
    });

    this.route.params.subscribe((params) => {
      const characterId = params['id'];
      this.characterDetail$ =
        this.disneyApiService.getCharacterById(characterId);
    });
  }
}
