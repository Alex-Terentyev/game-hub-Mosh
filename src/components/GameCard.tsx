import { Card, Heading, CardBody, Text, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          vero, temporibus
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
