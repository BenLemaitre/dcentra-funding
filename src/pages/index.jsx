import NextLink from 'next/link'
import { Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import IndexBanner from '../components/index-banner'
import Featured from '../components/featured'

const Homepage = () => {
  return (
    <Layout>
      <IndexBanner />
      <Featured />
    </Layout>
  )
}

export default Homepage
