import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar";

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <div className="App">
        <Box sx={{ display: 'flex' }}>
          <Nav
          drawerWidth={drawerWidth} 
          handleDrawerToggle={handleDrawerToggle} 
          />
          <Sidebar 
          drawerWidth={drawerWidth} 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle}
          />
          <Box
          component="main"
          sx={{ 
            flexGrow: 1, p: 3, 
            height: '100vh',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            bgcolor: '#fafafa', 
          }}
          >
          <Toolbar />
            <Typography variant="h1">main contents here...</Typography>
          </Box>
        </Box>
      </div>`
    </>
  );
}

export default App;
