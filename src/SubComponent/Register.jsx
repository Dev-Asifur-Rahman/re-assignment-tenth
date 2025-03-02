import React, { useRef } from "react";
import './login.css'
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";


const Register = () => {
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
    
    const register = (e) =>{
        e.preventDefault()
        console.log('registered')
    }
  return (
    <div className="body">
      <Helmet><title>
        Register</title></Helmet>
      <form onSubmit={register} className="box">
        <h1 ref={h1} className="my-10 text-5xl font-bold text-white">Register</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
