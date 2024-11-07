export interface Character {
  id: number;
  name: string;
}

export const defaultCharacters: Character[] = [
  { id: 3347, name: 'Jafar' },
  { id: 3389, name: 'Jasmine' },
  { id: 156, name: 'Aladdin' },
  { id: 25, name: 'Abu' },
  { id: 2099, name: 'Elsa' },
  { id: 256, name: 'Anna' },
  { id: 3771, name: 'Kristoff' },
  { id: 4994, name: 'Olaf' },
];

export const featuredCharacters: Character[] = [
  { id: 571, name: 'Belle' },
  { id: 544, name: 'Beast' },
  { id: 4703, name: 'Mickey' },
  { id: 1947, name: 'Donald' },
];
