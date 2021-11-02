import { useRouter } from 'next/router'
import {
  Heading,
  Container,
  Stack,
  Text,
  Divider,
  Image,
  Progress,
  Button
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'

const Project = () => {
  const router = useRouter()
  const { id } = router.query

  // todo: get project by id
  const project = {
    title: 'Soirée Bio2',
    imageHash:
      'https://d2g8igdw686xgo.cloudfront.net/60766063_1635074777703816_r.jpeg',
    description:
      'Coucou donc je vous rappelle les conditions : pour 15 € on aura un bar pour nous, avec 6 postes de jeux en réalité virtuel à notre disposition, un buffet salé charcuterie/fromage/végétarien, et deux boisson compris (on vous délivrera des tiquets boisson à votre entrée).',
    category: 'education',
    creationDate: '11/01/2021',
    received: '2.03',
    goal: '10',
    donations: '42',
    donators: [
      { address: '0x0', amount: '0.02' },
      { address: '0x1', amount: '2' }
    ]
  }

  return (
    <Layout title={project.title}>
      <Container my={8} minW="100%">
        <Heading fontWeight={600} fontSize={{ sm: '2xl', md: '4xl' }}>
          {project.title}
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
          <Stack direction="column">
            <Image
              src={project.imageHash}
              alt="project image"
              borderRadius="md"
            />
            <Divider />
            <Stack direction="row" spacing={4}>
              <Text>{project.creationDate}</Text>
              <Divider orientation="vertical" height={4} />
              <Text>{project.category}</Text>
            </Stack>
            <Divider />
            <Text>{project.description}</Text>
          </Stack>
          <Stack
            p={2}
            spacing={8}
            direction="column"
            w="100%"
            border="1px"
            borderColor="#353538"
            borderRadius="md"
          >
            <Text>
              <b>⟠ {project.received} raised</b> of ⟠ {project.goal}
            </Text>
            <Progress
              colorScheme="teal"
              value={(project.received / project.goal) * 100}
            />
            <Button colorScheme="yellow">Share</Button>
            <Button colorScheme="yellow">Donate</Button>
            <Text>{project.donators.length} Donators so far!</Text>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Project
