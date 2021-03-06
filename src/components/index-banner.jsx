import NextLink from 'next/link'
import Image from 'next/image'
import {
  Stack,
  Heading,
  Button,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import illustration from '../../public/index-banner.svg'

const IndexBanner = () => (
  // large screens
  <Stack pos="relative" pt={8}>
    <Image src={illustration} alt="illustration" objectFit="cover" />
    <Stack
      pos="absolute"
      spacing={3}
      color={useColorModeValue('#262524', '#c8c3bc')}
      top={9}
    >
      <Heading fontWeight={600} fontSize={{ sm: '2xl', md: '4xl' }}>
        Trusted fundraising for all of life&apos;s moments
      </Heading>
      <Text fontWeight={600}>
        Get help. Give kindness. Start in just 5 minutes.
      </Text>
      <NextLink href="/create-project" passHref>
        <Button borderRadius="lg" colorScheme="whatsapp" w="200px">
          Start a Project
        </Button>
      </NextLink>
    </Stack>
  </Stack>
)

export default IndexBanner
