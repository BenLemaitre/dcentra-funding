import { useState, useEffect } from 'react'
import { getProjects } from '../libs/utils'
import Layout from '../components/layouts/article'
import ListItem from '../components/list-item'

import { SimpleGrid, Heading, Container } from '@chakra-ui/react'

const Projects = () => {
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
    <Layout>
      <Container>
        <Heading as="h3" textAlign="center" mb={6}>
          Projects from our community
        </Heading>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          {projects.map((project, key) => {
            return project.title !== '' ? (
              <ListItem project={project} key={key} />
            ) : (
              <div style={{ display: 'none' }} />
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
