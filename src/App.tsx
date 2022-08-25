import { ThemeProvider } from "styled-components";
import { Button } from "./component/Button/Button";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
