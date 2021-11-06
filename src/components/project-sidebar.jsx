import {
  Stack,
  Text,
  Progress,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { FaShareSquare, FaHandHoldingHeart } from 'react-icons/fa'

const ProjectSidebar = ({ id, received, goal }) => {
  return (
    <Stack
      p={2}
      spacing={8}
      direction="column"
      borderWidth={1}
      borderRadius="md"
    >
      <Text>
        <b>⟠ {received} raised</b> of ⟠ {goal}
      </Text>
      <Progress
        colorScheme="whatsapp"
        bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
        borderRadius="md"
        value={(received / goal) * 100}
      />
      <Button leftIcon={<FaShareSquare />} colorScheme="yellow">
        Share
      </Button>
      <Button leftIcon={<FaHandHoldingHeart />} colorScheme="yellow">
        Donate
      </Button>
      {/* <Text>{project.donators.length} Donators so far!</Text> */}
    </Stack>
  )
}

export default ProjectSidebar
