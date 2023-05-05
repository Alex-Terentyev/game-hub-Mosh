import { Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { id } = useParams();
  return <Heading>Game {id}</Heading>;
};

export default GameDetailPage;
