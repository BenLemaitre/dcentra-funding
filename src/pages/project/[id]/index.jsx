import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getProject } from '../../../libs/utils'
import { Heading, Container, SimpleGrid, GridItem } from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'

import ProjectSidebar from '../../../components/project-sidebar'
import ProjectContent from '../../../components/project-content'

const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState({})
  const [received, setReceived] = useState(0)

  // todo: add donators to contract
  useEffect(() => {
    let isCurrent = true

    getProject(id).then(project => {
      if (isCurrent) {
        setProject(project)
        setReceived(
          window.web3.utils.fromWei(project.received.toString(), 'Ether')
        )
      }
    })

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <Layout title={project.title}>
      <Container my={8} minW="100%">
        <Heading as="h1" fontWeight={600} fontSize={{ sm: '2xl', md: '4xl' }}>
          {project.title}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <ProjectContent project={project} />
          </GridItem>
          <GridItem colSpan={1}>
            <ProjectSidebar
              id={project.id}
              received={received}
              goal={project.goal}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Project
