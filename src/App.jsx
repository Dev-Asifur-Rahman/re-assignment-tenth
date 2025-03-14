import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";
import { Context } from "./Context/context";
import { Auth } from "./Firebase/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";

function App() {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const context = {
    loading,
    setLoading,
    user,
    Auth,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (User) => {
      if (User) {
        setUser(User);
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
          <ToastContainer />
      </Context.Provider>
    </>
  );
}

export default App;
