import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layouts/main'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
  useEffect(() => {
    console.log('hit')
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
