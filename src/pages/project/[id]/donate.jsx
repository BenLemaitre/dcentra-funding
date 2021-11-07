import { useState } from 'react'
import { useRouter } from 'next/router'
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
  NumberInputField
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'

const Donate = () => {
  const router = useRouter()
  const { id } = router.query
  const [donation, setDonation] = useState(0)

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
            Donate {id}
          </Heading>
          <Box>
            <Text fontWeight="bold">Thanks for supporting Project...</Text>
            <Text>Your donations will benefit .....</Text>
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
          <Button colorScheme="whatsapp">Submit</Button>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Donate
