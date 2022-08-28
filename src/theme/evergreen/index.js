import { defaultTheme } from 'evergreen-ui'
import { theme } from '../constants'
import * as customThemes from './components'

export const useEvergreenTheme = () => {
  const customComponents = Object.fromEntries(
    Object.entries(customThemes).map(([key, fn]) => [key, fn(theme)])
  )
  return {
    ...defaultTheme,
    components: {
      ...defaultTheme.components,
      ...customComponents,
      Spinner: {
        ...defaultTheme.components.Spinner,
        baseStyle: {
          color: theme.eggShell
        }
      }
    }
  }
}
