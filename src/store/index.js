import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  characterListReducer,
  setPageReducer,
  setCharacterReducer,
} from "./modules/characters/reducer";

const reducers = combineReducers({
  characterList: characterListReducer,
  nextPage: setPageReducer,
  findCharacter: setCharacterReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
