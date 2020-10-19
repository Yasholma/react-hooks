import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import * as Yup from "yup";

const Register = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={({ email, password }, formikBag) => {
        setIsLoading(true);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            setIsLoading(false);
            history.push("/");
          })
          .catch((err) => {
            setIsLoading(false);
            if (err.code === "auth/email-already-in-use") {
              formikBag.setFieldError("email", err.message);
            } else if (err.code === "auth/weak-password") {
              formikBag.setFieldError("password", err.message);
            }
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required().email(),
        password: Yup.string().required().min(6),
      })}
    >
      <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
          <Form className="m-65 w-10/12">
            <h1 className="w-full text-4xl tracking-widest text-center my-2">
              Register
            </h1>
            <div className="w-full my-6">
              <Field
                name="email"
                type="text"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Email"
              />

              <ErrorMessage name="email">
                {(error) => (
                  <p className="w-full p-2 mt-2 rounded text-xs bg-red-300 text-red-700">
                    {error}
                  </p>
                )}
              </ErrorMessage>
            </div>
            <div className="w-full my-6">
              <Field
                name="password"
                type="password"
                className="p-2 rounded shadow w-full text-black"
                placeholder="Email"
              />
              <ErrorMessage name="password">
                {(error) => (
                  <p className="w-full p-2 mt-2 rounded text-xs bg-red-300 text-red-700">
                    {error}
                  </p>
                )}
              </ErrorMessage>
            </div>
            <div className="w-full my-6">
              <button
                type="submit"
                className={`inline-flex justify-center text-center font-semibold w-full items-center px-4 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 ${
                  isLoading && "cursor-not-allowed"
                }`}
                disabled={isLoading}
              >
                {isLoading && (
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
                {isLoading ? "Processing" : "Register"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
