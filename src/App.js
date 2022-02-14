import React, { useState, useEffect } from "react";
import AppRouter from "./components/AppRouter";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, authService } from "./firebase";

import { CssBaseline, LinearProgress } from "@mui/material";


function App() {
  // get user object here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userObj, setUserObj] = useState("");
	const drawerWidth = 240;
  

  const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	};

  useEffect(() => {
    const sub = onAuthStateChanged(authService, user => {
      if (user) {
        const collectionRef = collection(db, "users");
        const q = query(collectionRef, where("email", "==", user.email));
        onSnapshot(q, (snapshot) => 
          setUserObj(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        )
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
      userObj={userObj}
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      authService={authService}
      /> 
      :
      <LinearProgress />
      }
    </>
  );
}

export default App;
