import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Flex, Text } from '@chakra-ui/react'
import svgLogo from '../../public/logo.svg'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  cursor: pointer;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => (
  <Link href="/">
    <a>
      <LogoBox>
        <Image src={svgLogo} width={24} height={24} alt="logo" />
        <Text fontWeight="bold" ml={3} letterSpacing={'tighter'}>
          DCentra-Funding
        </Text>
      </LogoBox>
    </a>
  </Link>
  // </Flex>
)

export default Logo
