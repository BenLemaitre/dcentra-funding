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
import IndexBanner from '../components/index-banner'

const Homepage = () => {
  return (
    <Layout>
        <IndexBanner />
    </Layout>
  )
}

export default Homepage
