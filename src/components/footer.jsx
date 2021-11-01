import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SocialButton from './social-button'

const Footer = () => (
  <Box borderTopWidth={1} borderStyle="solid" as="footer">
    <Container
      as={Stack}
      minW="100%"
      minH="55px"
      py={4}
      direction="row"
      spacing={4}
      justify="space-between"
      align="center"
    >
      <Text>© 2021 Ben Lemaitre. All rights reserved</Text>
      <Stack direction="row" spacing={6}>
        <SocialButton href="https://github.com/BenLemaitre" label="Github">
          <FaGithub />
        </SocialButton>
        <SocialButton
          href="https://linkedin.com/in/benjamin-lemaitre-393b0a141/"
          label="Linkedin"
        >
          <FaLinkedin />
        </SocialButton>
      </Stack>
    </Container>
  </Box>
)

export default Footer
