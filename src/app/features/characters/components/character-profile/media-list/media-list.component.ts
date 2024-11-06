import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
})
export class MediaListComponent {
  @Input() mediaItems: string[] | undefined = [];
  @Input() title: string | undefined = '';
}
