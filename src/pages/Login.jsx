import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";

const Login = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleSubmission = (e) => {
    if (isLogging) return;
    e.preventDefault();
    setIsLogging(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        setIsLogging(false);
        setError("");
        history.replace("/");
      })
      .catch((err) => {
        setIsLogging(false);
        setError("Incorrect credentials");
        console.log(err);
      });
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
        <form className="m-65 w-10/12" onSubmit={handleSubmission}>
          {!!error && (
            <p className="w-full p-2 mt-2 rounded bg-red-300 text-red-700">
              {error}
            </p>
          )}
          <h1 className="w-full text-4xl tracking-widest text-center my-2">
            Login
          </h1>
          <div className="w-full my-6">
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Email"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full my-6">
            <input
              type="password"
              name="password"
              id="password"
              className="p-2 rounded shadow w-full text-black"
              placeholder="Password"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full my-6">
            <button
              type="submit"
              className={`inline-flex justify-center text-center font-semibold w-full items-center px-4 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 ${
                isLogging && "cursor-not-allowed"
              }`}
              disabled={isLogging}
            >
              {isLogging && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {isLogging ? "Processing" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
