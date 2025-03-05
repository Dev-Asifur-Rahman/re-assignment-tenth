import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { Context } from "../Context/context";
import Footer from "../Footer";
import { signOut } from "firebase/auth";
import { Auth } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const MainHome = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(user)
  const closeDropdown = () => {
    setIsOpen(false);
  };

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
            <div className="relative">
              {/* Dropdown Button */}
              <div
                role="button"
                onClick={toggleDropdown}
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                    className="text-white"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="menu menu-sm absolute left-0 mt-3 w-52 rounded-box bg-black p-2 shadow z-10">
                  <li>
                    <Link to="/" onClick={closeDropdown}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/allreviews" onClick={closeDropdown}>
                      All Reviews
                    </Link>
                  </li>
                  {user &&
                    <li>
                      <Link to="/addreviews" onClick={closeDropdown}>
                        Add Review
                      </Link>
                    </li>
                  }
                  {user &&
                    <li>
                      <Link to="/myreviews" onClick={closeDropdown}>
                        My Review
                      </Link>
                    </li>
                  }
                  {user &&
                    <li>
                      <Link to="/gamewatchlist" onClick={closeDropdown}>
                        Watchlist
                      </Link>
                    </li>
                  }
                </ul>
              )}
            </div>
            <p className=" text-xl font-bold lg:inline md:inline hidden">
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
              <div className="flex items-center gap-2">
                <div className="name h-[40px] w-[40px] rounded-full"><img className="h-full w-full rounded-full" src={user?.photoURL} alt="image" /></div>
                <Tooltip anchorSelect=".name" place="left">{user.displayName}</Tooltip>
                <button onClick={signout} className="btn">
                  SignOut
                </button>
              </div>
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
