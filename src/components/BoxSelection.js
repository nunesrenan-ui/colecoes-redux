import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCharacterThunk } from "../store/modules/characters/thunk";

const BoxSelection = ({ imgDiv1, imgDiv2 }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const defaultPokemonUrl =
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=0";
  const defaultRickAndMortyUrl =
    "https://rickandmortyapi.com/api/character/?page=1";

  return (
    <div>
      <div
        onClick={() => {
          dispatch(getCharacterThunk(defaultPokemonUrl));
          history.push("/poke");
        }}
      >
        <img src={imgDiv1} alt="any" />
      </div>
      <div
        onClick={() => {
          dispatch(getCharacterThunk(defaultRickAndMortyUrl));
          history.push("/rickandmorty");
        }}
      >
        <img src={imgDiv2} alt="any" />
      </div>
    </div>
  );
};

export default BoxSelection;
