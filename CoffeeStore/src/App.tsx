import { ThemeProvider } from "styled-components";

import { Button } from "./components/Button";
import { defaultTheme } from "./assets/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Hello</Button>
    </ThemeProvider>
  );
}

export default App;
