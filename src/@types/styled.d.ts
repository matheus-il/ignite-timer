import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// armazena typagem do tema criado
type defaultThemeType = typeof defaultTheme

// sobrescreve o tema padrão extendendo o tema criado por nós
declare module 'styled-components' {
  export interface DefaultTheme extends defaultThemeType {}
}
