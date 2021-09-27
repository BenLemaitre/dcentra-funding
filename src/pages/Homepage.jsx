import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      justifyContent={"center"}
      bgGradient="linear(to-b, white,green.100)"
    >
      <Stack
        w={"full"}
        as={Box}
        textAlign={"center"}
        spacing={6}
        py={{ base: 20, md: 36 }}
        maxW={"2xl"}
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          eiusmod tempor
        </Text>
        <Stack direction={"row"} spacing={6} alignSelf={"center"}>
          <Link to="/projects">
            <Button
              fontSize={"sm"}
              bg={"gray.100"}
              fontWeight={400}
              variant={"outline"}
            >
              Discover
            </Button>
          </Link>
          <Link to="/create">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"green.400"}
              _hover={{
                bg: "green.300",
              }}
            >
              Start Project
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Homepage;
