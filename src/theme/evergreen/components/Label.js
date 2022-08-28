import { defaultTheme } from 'evergreen-ui'
const { components: { Label: defaultLabel } } = defaultTheme

export const Label = themeContext => {
  const { baseFontSize } = themeContext
  return {
    ...defaultLabel,
    baseStyle: {
      ...defaultLabel.baseStyle,
      color: 'inherit',
      fontSize: baseFontSize
    }
  }
}
