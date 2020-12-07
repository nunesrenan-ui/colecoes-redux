import { FooterContainer } from "../styles/FooterStyle";

const ButtonNextandBack = ({ next, previous }) => {
  return (
    <FooterContainer>
      <div>
        <button onClick={previous}>Previous Page</button>
      </div>
      <div>
        <button onClick={next}>Next Page</button>
      </div>
    </FooterContainer>
  );
};

export default ButtonNextandBack;
