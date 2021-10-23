import Logo from './logo'

import { Box, Flex, Button, Stack } from '@chakra-ui/react'

const Navbar = ({ account }) => {
  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}
      >
        <Logo />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {account ? (
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'}>
              {account.substring(0, 6)}...
              {account.substring(38, 42)}
            </Button>
          ) : (
            <span />
          )}
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar
