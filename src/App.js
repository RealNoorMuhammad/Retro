import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import "./App.css";
import Coming from '../src/Components/ComingSoon'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div >
       <Coming/>
      </div>
    </ThemeProvider>
  );
};

export default App;
