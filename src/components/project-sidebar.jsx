import { Stack, Text, Progress, Button } from '@chakra-ui/react'
import { FaShareSquare, FaHandHoldingHeart } from 'react-icons/fa'

const ProjectSidebar = ({ id, received, goal }) => {
  return (
    <Stack
      p={2}
      spacing={8}
      direction="column"
      border="1px"
      borderColor="#353538"
      borderRadius="md"
    >
      <Text>
        <b>⟠ {received} raised</b> of ⟠ {goal}
      </Text>
      <Progress colorScheme="teal" value={(received / goal) * 100} />
      <Button
        leftIcon={<FaShareSquare />}
        bgGradient="linear(to-b, yellow.700, yellow.400)"
      >
        Share
      </Button>
      <Button
        leftIcon={<FaHandHoldingHeart />}
        bgGradient="linear(to-b, yellow.700, yellow.400)"
      >
        Donate
      </Button>
      {/* <Text>{project.donators.length} Donators so far!</Text> */}
    </Stack>
  )
}

export default ProjectSidebar
