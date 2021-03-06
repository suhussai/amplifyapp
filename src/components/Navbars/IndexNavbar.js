/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../UserContext";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import AppName from "components/Globals/AppName.js";
import { toast } from "react-toastify";
import Auth from "@aws-amplify/auth";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";

export default function Navbar(props) {
  const history = useHistory();
  const context = React.useContext(UserContext);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function authHandler(state, authData) {
    if (state === AuthState.SignedOut) {
      toast.success("GoodBye!", {
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
      history.push({
        pathname: "/auth",
      });
    }
  }

  async function signOut() {
    try {
      await Auth.signOut({ global: true });
      toast.success("Wow so easy!", { autoClose: 1500 });
      history.push({
        pathname: "/login",
      });
    } catch (error) {
      console.log("error signing out:", error);
    }
  }

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <AppName></AppName>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              {context.user && context.user.attributes ? (
                <li className="flex items-center">
                  <AmplifySignOut
                    handleAuthStateChange={authHandler}
                  ></AmplifySignOut>
                </li>
              ) : (
                <Link to="/auth/login">
                  <li className="flex items-center">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
