import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const sidebarItems = [
  {
    name: 'Products',
    icon: <Inventory2Icon />,
  },
  {
    name: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    name: 'Transactions',
    icon: <PaymentsIcon />,
  },
];

const drawerContent = (
  <div>
    <Toolbar>
      <SupervisorAccountIcon />
      <Typography variant="h5" sx={{ ml: '8px' }}>Admin</Typography>
    </Toolbar>
    <Divider />
    <List>
      {sidebarItems.map(item => (
        <ListItem button key={item.name}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      <ListItem button key="settings">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </div>
);

const container = window !== undefined ? () => window.document.body : undefined;

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
          <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: '#fff',
            color: 'text.primary'
          }}
          >
          <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            Responsive drawer
            </Typography>
          </Toolbar>
          </AppBar>
          <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
          >
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true, }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
              {drawerContent}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
              {drawerContent}
            </Drawer>
          </Box>
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
