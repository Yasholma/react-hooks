import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store";

const Header = () => {
  const [isLoggedIn] = useContext(AppContext);
  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="w-full p-4 bg-gray-900">
      <div className="container mx-auto">
        <ul className="flex justify-between">
          <div className="flex">
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="underline"
                className="font-semibold transition ease-in duration-200 text-gray-400 hover:text-gray-100"
              >
                Home
              </NavLink>
            </li>

            <li className="ml-5">
              <NavLink
                to="/gallery"
                activeClassName="underline"
                className="font-semibold transition ease-in duration-200 text-gray-400 hover:text-gray-100"
              >
                Gallery
              </NavLink>
            </li>

            <li className="ml-5">
              <NavLink
                to="/tensorflow"
                activeClassName="underline"
                className="font-semibold transition ease-in duration-200 text-gray-400 hover:text-gray-100"
              >
                Tensorflow
              </NavLink>
            </li>
          </div>

          <li>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="font-semibold transition ease-in duration-200 text-gray-400 hover:text-gray-100"
              >
                Logout
              </button>
            ) : (
              <React.Fragment>
                <NavLink
                  to="/login"
                  activeClassName="underline"
                  className="font-semibold mr-4 transition ease-in duration-200 text-gray-400 hover:text-gray-100"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  activeClassName="underline"
                  className="font-semibold transition ease-in duration-200 text-gray-400 hover:text-gray-100"
                >
                  Register
                </NavLink>
              </React.Fragment>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
