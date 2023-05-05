import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      borderRadius="5px"
      _hover={{
        transform: "scale(1.05)",
        transition: "0.2s",
      }}
      cursor={"pointer"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
