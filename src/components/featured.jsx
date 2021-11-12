import { useState, useEffect } from 'react'
import { getFeaturedProjects } from '../libs/utils'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import ListItem from './list-item'

const Featured = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let isCurrent = true

    getFeaturedProjects().then(projects => {
      if (isCurrent) {
        setProjects(projects)
      }
    })
    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <Stack my={20}>
      <Heading as="h2" size="md">
        Featured
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={10}>
        {projects.map((project, key) => (
          <ListItem project={project} key={key} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default Featured
