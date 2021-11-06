import { useState } from 'react'
import {
  Container,
  Stack,
  Heading,
  Text,
  useToast,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Form from '../components/form'
import { createProject } from '../libs/utils'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
})

const CreateProject = () => {
  const [buffer, setBuffer] = useState({})
  const [filename, setFilename] = useState('')

  const toast = useToast()

  const captureFile = e => {
    e.preventDefault()

    const file = e.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setBuffer(reader.result)
      setFilename(file.name)
    }
  }

  const handleSubmit = async (e, project) => {
    e.preventDefault()

    const ipfsResult = await ipfs.add(buffer)
    const hasCreatedProject = await createProject({
      ...project,
      path: ipfsResult.path
    })

    if (hasCreatedProject) {
      toast({
        title: 'Congratulations!',
        description: 'Your project was successfully created!',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
    } else {
      toast({
        title: 'Error!',
        description: 'An error has occured!',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }

  return (
    <Layout title="Create a project">
      <Container>
        <Stack
          rounded={'md'}
          p={{ base: 4, sm: 6, md: 8 }}
          mt="50px"
          alignSelf="center"
          spacing={{ base: 8 }}
          bg={useColorModeValue('#fbf8f6', '#291b12')}
        >
          <Stack spacing={4}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Start your project
              <Text as={'span'} bgClip="text" color="teal">
                !
              </Text>
            </Heading>
            <Text fontSize={{ base: 'sm', sm: 'md' }}>
              Tell us more about your amazing project! We will help you get it
              funded!
            </Text>
            <Form
              handleSubmit={handleSubmit}
              captureFile={captureFile}
              filename={filename}
            />
          </Stack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default CreateProject
