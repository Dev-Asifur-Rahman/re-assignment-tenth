import React, { useRef } from "react";
import "./login.css";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";

const Login = () => {

  const h1 = useRef(null)

    useGSAP(()=>{
        gsap.from(h1.current,{
            y:-50,
            opacity:0,
            duration:0.8,
            delay:1,
            ease: Power2.out
            
        })
    })

  const login = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    fetch("http://localhost:5000/doc/hello", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="body">
      <Helmet><title>
        LogIn</title></Helmet>
      <form onSubmit={login} className="box">
        <h1 ref={h1} className="my-10 text-5xl font-bold text-white">Login</h1>
        <input required type="email" name="email" placeholder="Email" />
        <input required type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
