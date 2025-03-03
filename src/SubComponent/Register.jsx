import React, { useRef } from "react";
import "./register.css";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "../Firebase/firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
  const h1 = useRef(null);
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

  const register = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const photoURL = target.photo.value;
    const password = target.password.value;
    if (password.length < 6) {
      toast.warn("Must be at least 6 characters long")
    } else if (!/[A-Z]/.test(password)) {
      toast.warn("Must contain an uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      toast.warn("Must contain a lowercase letter");
    } else {
      createUserWithEmailAndPassword(Auth, email, password)
        .then((res) => {
          updateProfile(Auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          }).then((res) => {
            Swal.fire({
              title: "Registered Successfully",
              icon: "success",
              draggable: true,
            }).then((res) => navigate("/"));
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          }).then((res) => target.reset());
        });
    }
  };
  return (
    <div className="body">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form onSubmit={register} className="box flex flex-col items-center">
        <h1 ref={h1} className="my-10 text-5xl font-bold text-white">
          Register
        </h1>
        <input required type="text" name="name" placeholder="Username" />
        <input required type="email" name="email" placeholder="Email" />
        <input required type="text" name="photo" placeholder="PhotURL" />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" value="Register" />
        <Link to={"/login"}>
          <p className="text-white hover:underline">
            Login if dont have an account
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
