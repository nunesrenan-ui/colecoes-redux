import {
  GET_CHARACTER_LIST,
  PAGE_SETTINGS,
  FIND_CHARACTER,
} from "./actionsType";

export const characterListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CHARACTER_LIST:
      const { characterList } = action;
      return [...characterList];

    default:
      return state;
  }
};

export const setPageReducer = (state = "", action) => {
  switch (action.type) {
    case PAGE_SETTINGS:
      const { nextUrl, prevUrl } = action;
      return [nextUrl, prevUrl];

    default:
      return state;
  }
};

export const setCharacterReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_CHARACTER:
      const { character } = action;
      return [...character];
    default:
      return state;
  }
};
