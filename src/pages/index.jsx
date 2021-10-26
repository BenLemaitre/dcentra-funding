import NextLink from 'next/link'
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Container,
  Heading
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Homepage = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" variant="page-title" textAlign="center" mb={6}>
          Lorem ipsum dolor sit amet consectetur
        </Heading>
        <Stack direction="column" spacing={6}>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor. Lorem ipsum dolor sit amet consectetur adipiscing
            elit sed do eiusmod tempor.
          </Text>
          <Box direction="row" alignSelf="center">
            <NextLink href="/projects">
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={'outline'}
                mx={6}
                colorScheme="teal"
              >
                Discover
              </Button>
            </NextLink>
            <NextLink href="/create-project">
              <Button
                fontSize={'sm'}
                fontWeight={600}
                mx={6}
                colorScheme="teal"
              >
                Start Project
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Homepage
