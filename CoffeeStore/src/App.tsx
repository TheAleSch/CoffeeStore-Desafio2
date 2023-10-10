import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "../src/styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Header } from "./components/Header";
import { Router } from "./components/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
