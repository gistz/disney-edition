import { Routes } from '@angular/router';
import { CharactersHomeComponent } from './features/characters/pages/characters-home/characters-home.component';
import { CharacterDetailsComponent } from './features/characters/pages/character-details/character-details.component';
import { FeaturedCharactersResolver } from './features/characters/services/featured-character.resolver';
import { DefaultCharactersResolver } from './features/characters/services/default-characters.resolver';
import { CharacterSearchComponent } from './features/characters/pages/character-search/character-search.component';
import { UserProfileComponent } from './features/users/pages/user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: CharactersHomeComponent,
    resolve: {
      featuredCharacters: FeaturedCharactersResolver,
      defaultCharacters: DefaultCharactersResolver,
    },
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent,
    resolve: {
      featuredCharacters: FeaturedCharactersResolver,
    },
  },
  {
    path: 'search/:name',
    component: CharacterSearchComponent,
    resolve: {
      featuredCharacters: FeaturedCharactersResolver,
    },
  },

  {
    path: 'user',
    component: UserProfileComponent,
  },
];
