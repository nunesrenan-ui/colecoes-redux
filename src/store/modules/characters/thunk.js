import axios from "axios";
import { getCharacterList, setUrl, findCharacter } from "./actions";

export const getCharacterThunk = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => {
      dispatch(getCharacterList(res.data.results));
      dispatch(
        setUrl(
          res.data.next || res.data.info.next,
          res.data.previous || res.data.info.prev
        )
      );
    })
    .catch((err) => console.log(err));
};

export const findCharacterThunk = (url, setShowImage, setErrorMsg) => (
  dispatch
) => {
  axios
    .get(url)
    .then((res) => {
      dispatch(findCharacter(res.data.forms || res.data.results));
      setShowImage(true);
      setErrorMsg(false);
    })
    .catch(() => {
      setShowImage(false);
      setErrorMsg(true);
    });
};
