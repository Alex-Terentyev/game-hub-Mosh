import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useLookup from "../hooks/useLookup";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookup(useGenres().data, selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookup(usePlatforms().data, selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
