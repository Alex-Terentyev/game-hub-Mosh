import { Box, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();

  return (
    <Box>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </Box>
  );
};

export default GenreList;
