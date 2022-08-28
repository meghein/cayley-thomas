import { defaultTheme } from 'evergreen-ui'

const { components: { Heading: defaultHeading } } = defaultTheme

const boldSize = (fontSize, fontWeight = 100) => ({ fontSize, fontWeight })
const normalSize = fontSize => ({ fontSize })

export const Heading = themeContext => {
  const { purple, capitalFont } = themeContext

  return {
    ...defaultHeading,
    baseStyle: {
      ...defaultHeading.baseStyle,
      color: purple,
      fontFamily: capitalFont
    },
    sizes: {
      900: boldSize('2.5rem', 400),
      800: boldSize('2.125rem'), // h1
      700: boldSize('1.875rem'), // h2
      600: boldSize('1.5rem'), // h3
      500: boldSize('1.25rem'), // h4
      400: boldSize('1.125rem'), // h5
      300: boldSize('1rem'), // h6
      200: normalSize('0.875rem'),
      100: {
        ...normalSize('0.5rem'),
        textTransform: 'uppercase'
      }
    }
  }
}
