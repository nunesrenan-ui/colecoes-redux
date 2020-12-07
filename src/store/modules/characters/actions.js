import {
  GET_CHARACTER_LIST,
  PAGE_SETTINGS,
  FIND_CHARACTER,
} from "./actionsType";

export const getCharacterList = (characterList) => ({
  type: GET_CHARACTER_LIST,
  characterList,
});

export const setUrl = (nextUrl, prevUrl) => ({
  type: PAGE_SETTINGS,
  nextUrl,
  prevUrl,
});

export const findCharacter = (character) => ({
  type: FIND_CHARACTER,
  character,
});
