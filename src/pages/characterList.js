import { useSelector, useDispatch } from "react-redux";
import CardMap from "../components/CardMap";
import { getCharacterThunk } from "../store/modules/characters/thunk";
import ButtonNextandBack from "../components/ButtonNextandBack";
import Header from "../components/Header";
import InputBox from "../components/InputBox";

const PokeHomePage = () => {
  const characterList = useSelector((state) => state.characterList);

  const nextPage = useSelector((state) => state.nextPage);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <InputBox />
      <CardMap list={characterList} />
      <ButtonNextandBack
        next={() => dispatch(getCharacterThunk(nextPage[0]))}
        previous={() => dispatch(getCharacterThunk(nextPage[1]))}
      />
    </>
  );
};

export default PokeHomePage;
