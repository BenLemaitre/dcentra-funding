import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh" display="flex" flexDir="column">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dcentra-Funding - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="130ch" flex="1">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
