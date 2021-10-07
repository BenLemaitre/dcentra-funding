import React from "react";
import { Box, Image } from "@chakra-ui/react";

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

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {project.received} ETH / {project.goal} ETH
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;
