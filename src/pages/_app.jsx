import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/provider'
import { Spinner } from '@chakra-ui/react'

import Layout from '../components/layouts/main'
import theme from '../libs/theme'

import { loadWeb3 } from '../libs/utils'

const Website = ({ Component, pageProps, router }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      await loadWeb3()
      setLoading(false)
    }

    load()
  }, [])

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
}

export default Website
