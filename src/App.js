import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./theme/DarkTheme";
import HomePage from "./customer/pages/HomePage/HomePage";
import MultipleItemCarosel from "./customer/pages/HomePage/MultipleItemCarosel";
import Routers from "./routers/Routers";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
      <Routers/>
      
    </ThemeProvider>
  );
}

export default App;
