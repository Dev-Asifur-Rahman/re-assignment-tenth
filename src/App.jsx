import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";
import { Context } from "./Context/context";
import { Auth } from "./Firebase/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user,setUser] = useState({})
  const [loading,setLoading] = useState(true)
  const context = {
    loading,
    user,
    Auth
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Context.Provider value={context}>
          {" "}
          <RouterProvider router={router}></RouterProvider>
      </Context.Provider>
    </>
  );
}

export default App;
