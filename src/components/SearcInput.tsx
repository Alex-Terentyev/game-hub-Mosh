import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearcInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<BsSearch />} />
        <Input
          borderRadius={15}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearcInput;
