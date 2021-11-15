import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getProjects } from '../libs/utils'
import Layout from '../components/layouts/article'
import ListItem from '../components/list-item'

import { SimpleGrid, Heading, Container } from '@chakra-ui/react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const router = useRouter()
  const { category } = router.query

  useEffect(() => {
    let isCurrent = true

    getProjects(category).then(projects => {
      if (isCurrent) {
        setProjects(projects)
      }
    })
    return () => {
      isCurrent = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title="Projects">
      <Container py={4}>
        <Heading as="h1" textAlign="center" mb={6}>
          Projects from our community
        </Heading>
        <SimpleGrid columns={[1, 2]} gap={6}>
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
