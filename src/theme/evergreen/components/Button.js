import { defaultTheme } from 'evergreen-ui'
const { components: { Button: defaultButton } } = defaultTheme

export const Button = themeContext => {
  const {
    bodyFont,
    borderSize,
    purple,
    baseFontSize,
    blackCoral,
    disabled,
    eggShell,
    bone,
    spaceCadet
  } = themeContext
  return {
    ...defaultButton,
    baseStyle: {
      ...defaultButton.baseStyle,
      borderRadius: 32,
      fontFamily: bodyFont,
      paddingY: 24,
      _disabled: {
        ...defaultButton.baseStyle._disabled,
        pointerEvents: 'all'
      },
      _focus: {
        boxShadow: 'none'
      }
    },
    appearances: {
      ...defaultButton.appearances,
      default: {
        ...defaultButton.appearances.default,
        backgroundColor: 'transparent',
        border: `${borderSize} ${purple}`,
        color: purple,
        fontSize: baseFontSize,
        _active: {
          backgroundColor: blackCoral
        },
        _disabled: {
          color: disabled,
          borderColor: disabled
        },
        _hover: {
          backgroundColor: purple,
          color: eggShell
        }
      },
      destructive: {
        ...defaultButton.appearances.destructive,
        fontSize: baseFontSize
      },
      minimal: {
        ...defaultButton.appearances.minimal,
        fontSize: baseFontSize,
        color: purple,
        _hover: {
          backgroundColor: bone
        }
      },
      primary: {
        ...defaultButton.appearances.primary,
        backgroundColor: purple,
        border: `${borderSize} ${purple}`,
        color: eggShell,
        fontSize: baseFontSize,
        _active: {
          backgroundColor: spaceCadet,
          border: `${borderSize} ${spaceCadet}`
        },
        _disabled: {
          borderColor: disabled,
          backgroundColor: disabled
        },
        _hover: {
          backgroundColor: spaceCadet,
          border: `${borderSize} ${spaceCadet}`
        }
      }
    }
  }
}
