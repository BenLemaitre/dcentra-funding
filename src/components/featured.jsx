import { useState, useEffect } from 'react'
import { getProjects } from '../libs/utils'
import { Heading, Stack, SimpleGrid } from '@chakra-ui/react'
import ListItem from './list-item'

const Featured = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let isCurrent = true

    getProjects().then(projects => {
      if (isCurrent) {
        setProjects(projects)
      }
    })
    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <Stack py={10}>
      <Heading as="h3" size="md">
        Featured
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={10}>
        {projects.map((project, key) => {
          return project.title !== '' ? (
            <ListItem project={project} key={key} />
          ) : (
            <div style={{ display: 'none' }} />
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}

export default Featured
