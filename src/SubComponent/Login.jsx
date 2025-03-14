import React, { useContext, useRef } from "react";
import "./login.css";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Context } from "../Context/context";
import Swal from "sweetalert2";

const Login = () => {
  const h1 = useRef(null);
  const googleProvider = new GoogleAuthProvider();
  const { Auth, setLoading } = useContext(Context);
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(h1.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: Power2.out,
    });
  });

  const googlelogin = () => {
    setLoading(true);
    signInWithPopup(Auth, googleProvider)
      .then((res) => {
        Swal.fire({
          title: "Logged in Successfully",
          icon: "success",
          draggable: true,
        }).then((res) => navigate("/"));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        }).then((res) => target.reset());
      });
  };

  const login = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    console.log(email,password)
    signInWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        Swal.fire({
          title: "Logged in Successfully",
          icon: "success",
          draggable: true,
        }).then((res) => navigate("/"));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Password",
          footer: '<a href="#">Why do I have this issue?</a>',
        }).then((res) => target.reset());
      });
    
  };
  return (
    <div className="login-body">
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <div className=" login-container md:my-6 my-4 lg:my-10">
        <form onSubmit={login} className="box flex flex-col items-center">
          <h1 ref={h1} className="my-4 text-5xl font-bold text-white">
            Login
          </h1>
          <input required type="email" name="email" placeholder="Email" />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
          <Link to={"/register"}>
            <p className="text-white hover:underline">
              Register if dont have an account
            </p>
          </Link>
        </form>
        <p
          className="text-white cursor-pointer text-xl font-semibold hover:underline"
          onClick={googlelogin}
        >
          SignIn with Google
        </p>
      </div>
    </div>
  );
};

export default Login;
