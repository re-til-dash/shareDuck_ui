import { ThemeProvider } from "styled-components";
import LightTheme from "./style/LightTheme";

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      
    </ThemeProvider>
  );
}

export default App;
