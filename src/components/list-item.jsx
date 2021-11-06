import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Image,
  Heading,
  Progress,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'

const ItemText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

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
        h="350px"
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
            <ItemText my={2}>{project.description}</ItemText>
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
