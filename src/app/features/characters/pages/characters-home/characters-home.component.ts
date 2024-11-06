import { Component, OnInit } from '@angular/core';
import { DisneyCharacter } from '../../models/disney-api-response';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';
import { DisneyCssClassesEnum } from '../../../../core/enum/disney-css-classes.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-home',
  standalone: true,
  imports: [CommonModule, CharactersListComponent],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.scss',
})
export class CharactersHomeComponent implements OnInit {
  defaultCharacters: DisneyCharacter[] = [];
  featuredCharacters: DisneyCharacter[] = [];

  disneyClasses = DisneyCssClassesEnum;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.featuredCharacters = data['featuredCharacters'];
      this.defaultCharacters = data['defaultCharacters'];
    });
  }
}
