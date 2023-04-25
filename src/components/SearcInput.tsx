import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch(searchQuery: string | null | undefined): void;
}

const SearcInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
