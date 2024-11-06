import { Component, Input } from '@angular/core';
import { DisneyCharacter } from '../../models/disney-api-response';
import { JsonPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SkeletonCharacterCardComponent } from '../../../../shared/skeleton-character-card/skeleton-character-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    JsonPipe,
    NgStyle,
    RouterLink,
    SkeletonCharacterCardComponent,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent {
  @Input() characters: DisneyCharacter[] | null = [];
  @Input() config: {
    bgColor?: string;
    title?: string;
    titleColor?: string;
  } = {
    bgColor: 'disney-light-blue',
    title: 'Featured Characters',
    titleColor: 'white',
  };

  protected readonly Array = Array;
}
