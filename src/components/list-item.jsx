import { useState, useEffect } from 'react'
import { Box, Image, Heading } from '@chakra-ui/react'
import FundButton from './fund-button'

const ListItem = ({ project }) => {
  const [receivedFunds, setReceivedFunds] = useState(0)

  useEffect(() => {
    setReceivedFunds(
      window.web3.utils.fromWei(project.received.toString(), 'Ether')
    )
  }, [project])

  return (
    <Box
      h="350px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      d="flex"
      flexDir="column"
    >
      <Image
        src={`https://ipfs.infura.io/ipfs/${project.imageHash}`}
        alt="Project image"
        objectFit="cover"
        h="175px"
      />
      <Box m={2}>
        <Heading as="h4" size="sm" lineHeight="tight">
          {project.title}
        </Heading>
        <p>{project.description}</p>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box as="span" fontSize="sm">
            {receivedFunds} / {project.goal} ETH
          </Box>
          <FundButton projectId={project.id} />
        </Box>
      </Box>
    </Box>
  )
}

export default ListItem
