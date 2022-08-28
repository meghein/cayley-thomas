import { defaultTheme } from 'evergreen-ui'
const { components: { Input: defaultInput } } = defaultTheme

export const Input = themeContext => {
  const {
    borderSize,
    cream,
    purple,
    baseFontSize,
    deepTaupe,
    bodyFont
  } = themeContext
  return {
    ...defaultInput,
    appearances: {
      ...defaultInput.appearances,
      default: {
        backgroundColor: 'transparent',
        border: `${borderSize} ${cream}`,
        color: purple,
        fontSize: baseFontSize,
        _focus: {
          borderColor: deepTaupe
        }
      }
    },
    baseStyle: {
      ...defaultInput.baseStyle,
      borderRadius: 4,
      fontFamily: bodyFont
    }
  }
}
