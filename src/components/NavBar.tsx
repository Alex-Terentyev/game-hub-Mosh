import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearcInput from "./SearcInput";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack padding={"10px"}>
      <Image
        cursor={"pointer"}
        src={logo}
        boxSize={"60px"}
        onClick={() => navigate("/")}
      />
      <SearcInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
