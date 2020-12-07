import { HeaderContainer } from "../styles/HeaderStyle";
import { RiHome2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <div onClick={() => history.goBack()}>
        <RiHome2Line />
      </div>
      <div onClick={() => history.push("/favorites")}>
        <MdFavoriteBorder />
      </div>
    </HeaderContainer>
  );
};

export default Header;
