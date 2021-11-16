import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/provider'
import { Spinner, Text, Heading, Stack } from '@chakra-ui/react'

import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import metamaskError from '../../public/metamask-error.svg'

import { loadWeb3 } from '../libs/utils'

const Website = ({ Component, pageProps, router }) => {
  const [loading, setLoading] = useState(true)
  const [hasMetamask, setHasMetamask] = useState(false)

  useEffect(() => {
    const load = async () => {
      setHasMetamask(await loadWeb3())
      setLoading(false)
    }

    load()
  }, [])

  if (hasMetamask) {
    return (
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            {loading ? (
              <Spinner size="xl" position="absolute" left="50%" top="50%" />
            ) : (
              <Component {...pageProps} key={router.route} />
            )}
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider theme={theme}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Stack alignItems="center" alignSelf="center" p={12}>
            <Heading size="md">Welcome to Dcentra-Funding</Heading>
            <Image src={metamaskError} alt="metamask error" width="670px" />
            <Text fontWeight="bold">
              Please use Metamask to connect your wallet to Ropsten Test
              Network.
            </Text>
          </Stack>
        </AnimatePresence>
      </ChakraProvider>
    )
  }
}

export default Website
