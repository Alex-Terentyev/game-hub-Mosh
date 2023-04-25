import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearcInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<BsSearch />} />
      <Input borderRadius={15} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};

export default SearcInput;
