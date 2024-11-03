import React, { useRef, useState } from "react";
import Header from "./Header";
import validateInput from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validateInput(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <>
      <div className="h-screen bg-custom-bg bg-cover bg-center">
        <Header />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black text-white w-3/12 p-12 my-1 mx-auto right-0 left-0 flex justify-center items-center flex-col bg-opacity-80 rounded-sm"
        >
          <h1 className="text-3xl font-bold p-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="p-4 my-2 w-full bg-slate-800 rounded-md bg-opacity-70"
              type="text"
              placeholder=" Full Name"
            />
          )}
          <input
            ref={email}
            className="p-4 my-2 w-full bg-slate-800 rounded-md bg-opacity-70"
            type="text"
            placeholder=" Email or mobile number"
          />
          <input
            ref={password}
            className="p-4 my-2 w-full bg-slate-800 rounded-md bg-opacity-70"
            type="password"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="text-red-500 font-semibold text-lg py-1">
              {errorMessage}
            </p>
          )}
          <button
            onClick={handleButtonClick}
            className="p-4 my-2 bg-red-600 w-full rounded-md"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4 text-gray-400">
            {isSignIn ? "New to Geminiflix? " : "Already Registered? "}
            <span
              className="font-semibold text-white cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Sign In Now" : "Sign Up Now"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
