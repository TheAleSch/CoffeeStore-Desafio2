import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "../src/styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
