import Logo from './logo'

import { Box, Flex, Button, Stack, Container } from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = ({ account }) => {
  return (
    <Box as="nav" minH={'60px'} w="100%" borderBottom={1} borderStyle={'solid'}>
      <Container
        display="flex"
        p={2}
        maxW="container.lg.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>
        <Box ml={5} align="right" flex={1}>
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

/* {account ? (
  <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'}>
    {account.substring(0, 6)}...
    {account.substring(38, 42)}
  </Button>
) : (
  <span />
)} */
