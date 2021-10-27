import { useState, useCallback, useRef } from 'react'
import { FiFile } from 'react-icons/fi'
import {
  Stack,
  Heading,
  Text,
  useToast
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

const CreateProject = ({ dcentra, account }) => {
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

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(titleField.value, descriptionField.value, goalField.value)
    // try {
    //   const result = await ipfs.add(buffer)
    //   console.log(result)

    //   dcentra.methods
    //     .createProject(
    //       titleField.value,
    //       descriptionField.value,
    //       goalField.value,
    //       result.path
    //     )
    //     .send({ from: account })
    //     .on('transactionHash', hash => {
    //       console.log('project was added')
    //       toast({
    //         title: 'Congratulations!',
    //         description: 'Your project was successfully created!',
    //         status: 'success',
    //         duration: 5000,
    //         isClosable: true
    //       })
    //     })
    // } catch (error) {
    //   console.error(error)
    // }
    const hasCreatedProject = await createProject()

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
      <Stack
        rounded={'md'}
        p={{ base: 4, sm: 6, md: 8 }}
        mt="50px"
        alignSelf="center"
        spacing={{ base: 8 }}
        bg={'blackAlpha.300'}
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
          <Form handleSubmit={handleSubmit} captureFile={captureFile} filename={filename} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default CreateProject
