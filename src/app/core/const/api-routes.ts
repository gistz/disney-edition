export const API_ROUTES = {
  CHARACTERS: 'https://api.disneyapi.dev/character',
  CHARACTER_BY_ID: (id: number | string) =>
    `https://api.disneyapi.dev/character/${id}`,
  CHARACTER_BY_NAME: (name: string) =>
    `https://api.disneyapi.dev/character?name=${name}`,
};
