import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md/index";
import { SiNintendo } from "react-icons/si/index";

import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    windows: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iphone: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(({ slug }) => (
        <Icon color={"gray.500"} as={iconMap[slug]} key={slug} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
