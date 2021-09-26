import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo.svg";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Flex direction="row" align={"center"}>
              <Image src={Logo} boxSize="48px" alt="logo" />
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                fontSize="x-large"
                color={useColorModeValue("gray.800", "white")}
              >
                DCentra-Funding
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"}>
            0x00000000000
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
