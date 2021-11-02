import NextLink from 'next/link'
import { Stack, Text } from '@chakra-ui/react'

const CategoryButton = ({ href, label, children }) => (
  <NextLink href={href} passHref>
    <Stack
      cursor="pointer"
      flexDir="column"
      justifySelf="center"
      alignItems="center"
      w={24}
    >
      {children}
      <Text>{label}</Text>
    </Stack>
  </NextLink>
)

export default CategoryButton
