import { useState } from "react";
import { useLocation } from "react-router-dom";
import { InputBoxContainer } from "../styles/InputBoxStyle";
import { findCharacterThunk } from "../store/modules/characters/thunk";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CardMap from "../components/CardMap";

const InputBox = () => {
  const character = useSelector((state) => state.findCharacter);
  const dispatch = useDispatch();
  const location = useLocation();
  const [inputName, setInputName] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleShowImage = () => {
    if (!inputName) {
      return;
    }
    let url = `https://rickandmortyapi.com/api/character/?name=${inputName}`;
    if (location.pathname === "/poke") {
      url = `https://pokeapi.co/api/v2/pokemon/${inputName}`;
    }
    dispatch(findCharacterThunk(url, setShowImage));
    setInputName("");
  };

  return (
    <>
      <InputBoxContainer>
        <div>
          <input onChange={handleInputName} value={inputName} />
        </div>
        <div>
          <button onClick={handleShowImage}>search</button>
        </div>
      </InputBoxContainer>
      {showImage && (
        <CardMap list={character}>
          <span onClick={() => setShowImage(false)}>
            <AiOutlineCloseCircle />
          </span>
        </CardMap>
      )}
    </>
  );
};

export default InputBox;
