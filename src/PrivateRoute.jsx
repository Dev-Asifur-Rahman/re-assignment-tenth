import React, { useContext } from "react";
import { Context } from "./Context/context";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(Context);
  if (loading) {
    return (
      <div className="w-full py-5 flex justify-center items-center">
        <span className="loading loading-spinner loading-xl text-success"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
