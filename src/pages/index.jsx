import NextLink from 'next/link'
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

const Homepage = () => {
  return (
    <Flex w={'full'} h={'100vh'} justifyContent={'center'}>
      <Stack
        w={'full'}
        as={Box}
        textAlign={'center'}
        spacing={6}
        py={{ base: 20, md: 36 }}
        maxW={'2xl'}
      >
        <Text
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          eiusmod tempor
        </Text>
        <Stack direction={'row'} spacing={6} alignSelf={'center'}>
          <NextLink href="/projects">
            <Button fontSize={'sm'} fontWeight={400} variant={'outline'}>
              Discover
            </Button>
          </NextLink>
          <NextLink href="/create-project">
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
            >
              Start Project
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default Homepage
