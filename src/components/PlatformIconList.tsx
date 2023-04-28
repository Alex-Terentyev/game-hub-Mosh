import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md/index";
import { SiNintendo } from "react-icons/si/index";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
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
