import React from "react";
import { Box, Image } from "@chakra-ui/react";
import FundButton from "./FundButton";

const ListItem = ({ project }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={`https://ipfs.infura.io/ipfs/${project.imageHash}`}
        alt="Project image"
      />

      <Box p="6">
        {/* <Badge borderRadius="full" px="2" colorScheme="green">
          New
        </Badge> */}
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.title}
        </Box>

        <Box>{project.description}</Box>

        <Box d="flex" mt="2" justifyContent="space-between" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {project.received} / {project.goal} ETH
          </Box>
          <FundButton />
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
