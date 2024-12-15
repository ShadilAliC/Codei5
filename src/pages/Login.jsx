import React from "react";
import login from "../assets/images/login.png";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:flex md:w-2/3 bg-primary/5 justify-center items-center p-8">
        <img
          className="max-w-full h-auto object-contain"
          src={login}
          alt="Login"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12 font-poppins">
        <a className="text-3xl md:text-3xl text-primary font-bold mb-2 cursor-pointer">
          Welcome To Codei5!
        </a>
        <p className="text-sm md:text-base text-[rgba(var(--dark),1)] mb-8">
          Sign in with your data that you entered during your registration
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
