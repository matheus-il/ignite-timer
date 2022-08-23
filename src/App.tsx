import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./themes/default";

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Hello</h1>
    </ThemeProvider>
  )
}
