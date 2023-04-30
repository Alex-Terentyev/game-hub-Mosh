import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null /* <p>{error.message}</p> */;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <Spinner />}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY={2} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                mr={2}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize={"md"}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
