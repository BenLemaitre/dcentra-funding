import { Button, VisuallyHidden } from '@chakra-ui/react'

const SocialButton = ({ href, label, children }) => (
  <Button rounded="full" w={12} h={12} as="a" href={href}>
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Button>
)

export default SocialButton
