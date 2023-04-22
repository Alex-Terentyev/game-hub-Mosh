import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="hotpink" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="skyBlue">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="beige">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
