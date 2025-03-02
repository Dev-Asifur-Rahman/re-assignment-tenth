import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Context } from "../Context/context";
import Footer from "../Footer";
import { signOut } from "firebase/auth";
import { Auth } from "../Firebase/firebase";
import Swal from "sweetalert2";

const MainHome = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  function signout() {
    signOut(Auth).then((res) => {
      Swal.fire({
        title: "Logged Out",
        icon: "success",
        draggable: true,
      }).then((res) => {
        navigate("/");
      });
    });
  }
  return (
    <div>
      <section className="nav-sec">
        <div className="navbar bg-[#333333] shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <p className="text-xl font-bold lg:inline md:inline hidden">
              Chill Gamer
            </p>
          </div>
          <div className="nav-ul navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/allreviews"}>All Reviews</NavLink>
              {user && <NavLink to={"/addreviews"}>Add Reviews</NavLink>}
              {user && <NavLink to={"/myreviews"}>My Reviews</NavLink>}
              {user && <NavLink to={"/gamewatchlist"}>Watchlist</NavLink>}
            </ul>
          </div>
          <div className="navbar-end gap-1">
            {!user && (
              <Link to={"/login"}>
                {" "}
                <button className="btn">Login</button>{" "}
              </Link>
            )}
            {!user && (
              <Link to={"/register"}>
                <button className="btn">Register</button>
              </Link>
            )}
            {user && (
              <button onClick={signout} className="btn">
                SignOut
              </button>
            )}
          </div>
        </div>
      </section>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
