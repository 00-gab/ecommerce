import React, { useState } from "react";
import { CssBaseline } from "@mui/material";

import AppRouter from "./components/AppRouter";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppRouter
      isLoggedIn={isLoggedIn}
      />
    </>
  );
}

export default App;
