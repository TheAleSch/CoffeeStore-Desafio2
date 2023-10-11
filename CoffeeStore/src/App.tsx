//theme
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/themes/default";
import { GlobalStyle } from "./styles/globals";
//router
import { Router } from "./components/router";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "@phosphor-icons/react";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IconContext.Provider
        value={{
          color: "white",
          size: 24,
          weight: "fill",
          mirrored: false,
        }}
      >
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
