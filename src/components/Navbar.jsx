import React from "react";
import { HStack, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack bg="gray.600" justifyContent="space-between">
      <Link to="/">Home</Link>
      <Text>0x00000</Text>
    </HStack>
  );
};

export default Navbar;
