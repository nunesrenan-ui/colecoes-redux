import Card from "./Card";
import { CardMapContainer } from "../styles/CardMapStyle";

const CardMap = ({ list, children }) => {
  return (
    <CardMapContainer>
      {children}
      {list.map(({ image, name, url }, index) => (
        <Card
          key={index}
          image={
            image ||
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(
              url.split("/")[6]
            )}.png`
          }
          name={name}
        />
      ))}
    </CardMapContainer>
  );
};

export default CardMap;
