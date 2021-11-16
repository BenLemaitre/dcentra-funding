import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { fundProject, getProject } from '../../../libs/utils'
import {
  Container,
  Divider,
  Button,
  Box,
  Text,
  Heading,
  Stack,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  useToast
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'

const Donate = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState({})
  const [formattedCreatorAddress, setFormattedCreatorAddress] = useState('')
  const [donation, setDonation] = useState(0)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  // will need to refactor to avoid useless data fetching
  useEffect(() => {
    let isCurrent = true

    getProject(id).then(project => {
      if (isCurrent) {
        setProject(project)
        setFormattedCreatorAddress(
          `${project.creator.substring(0, 6)}...${project.creator.substring(
            38,
            42
          )}`
        )
      }
    })

    return () => {
      isCurrent = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmitTransfer = async () => {
    setLoading(true)

    const amountInWei = window.web3.utils.toWei(donation, 'Ether')
    const hasFundedProject = await fundProject(id, amountInWei)

    if (hasFundedProject) {
      toast({
        title: 'Thanks!',
        description: "You've successfully funded a project!",
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      return
    }

    toast({
      title: 'Sorry!',
      description: 'An error has occured!',
      status: 'error',
      duration: 5000,
      isClosable: true
    })

    setLoading(false)
  }

  const handleChange = e => {
    setDonation(e.target.value)
  }

  return (
    <Layout title="Donation">
      <Container>
        <Stack
          rounded={'md'}
          p={{ base: 4, sm: 6, md: 8 }}
          mt={8}
          alignSelf="center"
          bg={useColorModeValue('#fbf8f6', '#291b12')}
          spacing={6}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          >
            Your donation
          </Heading>
          <Box>
            <Text fontWeight="bold">Thanks for supporting {project.title}</Text>
            <Text>Your donations will benefit {formattedCreatorAddress}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Enter your donation (in ETH)</Text>
            <NumberInput precision={2}>
              <NumberInputField onChange={handleChange} />
            </NumberInput>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Button
            colorScheme="whatsapp"
            onClick={onSubmitTransfer}
            isLoading={loading}
            loadingText="Submitting"
            spinnerPlacement="start"
          >
            Submit
          </Button>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Donate
