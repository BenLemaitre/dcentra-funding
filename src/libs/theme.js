import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fbfcfa', '#202023')(props)
    }
  })
}

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

// const fonts = {
//   heading: "'M PLUS Rounded 1c'"
// }

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false // temp
}

const theme = extendTheme({
  config,
  styles,
  components,
  // fonts,
  colors
})

export default theme
