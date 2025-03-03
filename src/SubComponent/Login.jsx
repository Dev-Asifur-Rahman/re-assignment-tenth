import React, { useContext, useRef } from "react";
import "./login.css";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Context } from "../Context/context";
import Swal from "sweetalert2";

const Login = () => {
  const h1 = useRef(null);
  const googleProvider = new GoogleAuthProvider();
  const { Auth,setLoading } = useContext(Context);
  const navigate = useNavigate()

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
    setLoading(true)
    signInWithPopup(Auth, googleProvider).then((res) =>{
      Swal.fire({
        title: "Logged in Successfully",
        icon: "success",
        draggable: true
      }).then(res=>navigate('/'));
    } );
  };

  const login = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    // fetch("http://localhost:5000/doc/hello", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div className="body">
      <Helmet>
        <title>LogIn</title>
      </Helmet>
      <div className="container ">
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
          className="text-white text-xl font-semibold hover:underline"
          onClick={googlelogin}
        >
          SignIn with Google
        </p>
      </div>
    </div>
  );
};

export default Login;
