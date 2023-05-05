import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
