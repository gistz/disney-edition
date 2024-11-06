import { Component, Input } from '@angular/core';
import { DisneyCharacter } from '../../models/disney-api-response';
import { DatePipe, JsonPipe } from '@angular/common';
import { MediaListComponent } from './media-list/media-list.component';

@Component({
  selector: 'app-character-profile',
  standalone: true,
  imports: [DatePipe, MediaListComponent, JsonPipe],
  templateUrl: './character-profile.component.html',
  styleUrl: './character-profile.component.scss',
})
export class CharacterProfileComponent {
  @Input() characterDetails: DisneyCharacter | null = null;
}
