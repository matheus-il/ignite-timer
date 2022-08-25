import { ThemeProvider } from "styled-components";
import { Button } from "./component/Button/Button";
import { defaultTheme } from "./themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <Button />
    </ThemeProvider>
  )
}
