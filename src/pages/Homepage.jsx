import React from "react";
import { Link } from "react-router-dom";
import { Center, Button, ButtonGroup } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Center h="100px">
      <ButtonGroup spacing="6" width="250px">
        <Link to="/projects">
          <Button colorScheme="teal" size="sm" variant="outline">
            Discover
          </Button>
        </Link>
        <Link to="/create">
          <Button colorScheme="teal" size="sm">
            Start Project
          </Button>
        </Link>
      </ButtonGroup>
    </Center>
  );
};

export default Homepage;
