import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import {
  Box,
  Image,
  Heading,
  Progress,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

const ListItem = ({ project }) => {
  const [receivedFunds, setReceivedFunds] = useState(0)

  useEffect(() => {
    setReceivedFunds(
      window.web3.utils.fromWei(project.received.toString(), 'Ether')
    )
  }, [project])

  return (
    <NextLink href={`/project/${project.id}`}>
      <Box
        h="375px"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        d="flex"
        flexDir="column"
        cursor="pointer"
        boxShadow="lg"
      >
        <Image
          src={`https://ipfs.infura.io/ipfs/${project.imageHash}`}
          alt="Project image"
          objectFit="cover"
          h="175px"
        />
        <Box
          h="100%"
          m={4}
          d="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box>
            <Heading as="h3" size="sm" lineHeight="tight" color="whatsapp.600">
              {project.title}
            </Heading>
            <Text noOfLines={3} my={2}>
              {project.description}
            </Text>
          </Box>
          <Stack spacing={2}>
            <Progress
              value={(receivedFunds / project.goal) * 100}
              colorScheme="whatsapp"
              bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
              borderRadius="md"
            />
            <Text>
              <b>⟠ {receivedFunds} raised</b> of ⟠ {project.goal}
            </Text>
          </Stack>
        </Box>
      </Box>
    </NextLink>
  )
}

export default ListItem
