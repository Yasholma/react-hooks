import React, { useState, useEffect } from "react";
import { Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import firebase from "./config/firebase";
import AppContext from "./store";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLoader from "./components/AppLoader";
import NotFound from "./pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedRoute from "./routes/AnimatedRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setIsLoading(false);
    });
  });

  return (
    <AppLoader isLoading={isLoading}>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch key={location.pathname} location={location}>
            {routes.map((route) => {
              if (route.requiresAuth) {
                return (
                  <ProtectedRoute key={route.name} {...route}>
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
                      <route.component />
                    </motion.div>
                  </ProtectedRoute>
                );
              }
              if (route.guest) {
                return (
                  <GuestRoute key={route.name} {...route}>
                    <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
                      <route.component />
                    </motion.div>
                  </GuestRoute>
                );
              }
              return (
                <AnimatedRoute key={route.name} {...route}>
                  <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
                    <route.component />
                  </motion.div>
                </AnimatedRoute>
              );
            })}
            <AnimatedRoute path="*">
              <NotFound />
            </AnimatedRoute>
          </Switch>
        </AnimatePresence>
      </AppContext.Provider>
    </AppLoader>
  );
}

export default App;
