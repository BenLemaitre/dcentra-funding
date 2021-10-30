import Logo from './logo'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Button,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  Link,
  IconButton
} from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const NavItem = ({ href, path, children }) => {
  return (
    <NextLink href={href} passHref>
      <Button
        size="sm"
        variant="unstyled"
        p={2}
        display={{ base: 'none', lg: 'inline-flex' }}
      >
        {children}
      </Button>
    </NextLink>
  )
}

const Navbar = ({ path }) => {
  return (
    <Box as="nav" minH={'55px'} w="100%" borderBottom={1} borderStyle={'solid'}>
      <Container d="flex" p={2} maxW="container.lg.md">
        <Box align="left" flex={1}>
          <Button size="sm" mx={2} variant="outline" leftIcon={<SearchIcon />}>
            Search
          </Button>
          <NavItem href="/projects" path={path}>
            Discover
          </NavItem>
          <NavItem href="/create-project" path={path}>
            Start a project
          </NavItem>
        </Box>
        <Box alignSelf="center" align="center" flex={1}>
          <Logo />
        </Box>
        <Box mx={2} align="right" flex={1}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Menu"
              />
              <MenuList>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Discover</MenuItem>
                </NextLink>
                <NextLink href="/create-project" passHref>
                  <MenuItem as={Link}>Start a project</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
