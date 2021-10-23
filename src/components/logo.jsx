import Link from 'next/link'
import Image from 'next/image'
import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import svgLogo from '../../public/logo.svg'

const Logo = () => (
  <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    <Link href="/">
      <Flex direction="row" align={'center'} cursor="pointer">
        <Image src={svgLogo} width={48} height={48} alt="logo" />
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontWeight="bold"
          fontSize={'x-large'}
          ml={3}
        >
          DCentra-Funding
        </Text>
      </Flex>
    </Link>
  </Flex>
)

export default Logo
