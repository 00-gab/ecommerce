import React, { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";

import { onAuthStateChanged } from "firebase/auth";
import { authService } from "./firebase";

import { CssBaseline, LinearProgress } from "@mui/material";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
	const drawerWidth = 240;
	
  const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	};

  useEffect(() => {
    const sub = onAuthStateChanged(authService, user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
    return sub;
  }, [])


  return (
    <>
      <CssBaseline />
      {init ?
      <AppRouter
      isLoggedIn={isLoggedIn}
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      /> 
      :
      <LinearProgress />
      }
    </>
  );
}

export default App;
