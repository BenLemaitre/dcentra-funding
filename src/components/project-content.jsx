import { useEffect, useState } from 'react'
import { Stack, Image, Divider, Text } from '@chakra-ui/react'

const ProjectContent = ({ project }) => {
  const [creationDate, setCreationDate] = useState('01/01/1975')

  useEffect(() => {
    const formattedDate = new Date(project.date * 1000)
    setCreationDate(formattedDate.toLocaleDateString())
  }, [project])

  return (
    <Stack direction="column">
      <Image
        src={`https://ipfs.infura.io/ipfs/${project.imageHash}`}
        alt="project image"
        borderRadius="md"
      />
      <Divider />
      <Stack direction="row" spacing={4}>
        <Text>{creationDate}</Text>
        <Divider orientation="vertical" height={4} />
        <Text>{project.category}</Text>
      </Stack>
      <Divider />
      <Text>{project.description}</Text>
    </Stack>
  )
}

export default ProjectContent
