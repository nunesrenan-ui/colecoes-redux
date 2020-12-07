import { CardContainer } from "../styles/CardStyle";

const Card = ({ image, name }) => {
  return (
    <CardContainer>
      <div>
        <img src={image} alt="any" />
      </div>
      <p>{name}</p>
    </CardContainer>
  );
};

export default Card;
