import React, { Component } from "react";
import { Auth, Hub } from "aws-amplify";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Routes from "./Routes";
import UserContext from "./UserContext";
import "./App.css";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    currentUser: {},
    isLoaded: false,
  };
  componentDidMount() {
    this.updateCurrentUser();
    Hub.listen("auth", (data) => {
      console.log("Listening for all messages: ", data);
      this.updateCurrentUser();
      if (data.payload.event !== "signIn") {
      }
    });
  }

  updateCurrentUser = async (user) => {
    if (user) {
      this.setState({ currentUser: user });
      return;
    }
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ currentUser: user, isLoaded: true });
    } catch (err) {
      console.log(err);
      this.setState({ currentUser: null, isLoaded: true });
    }
  };

  setAlert = (status, message) => {
    if (alert) {
      this.setState({
        alert: {
          status: status,
          message: message,
        },
      });
      return;
    }
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          updateCurrentUser: this.updateCurrentUser,
          isLoaded: this.state.isLoaded,
        }}
      >
        <div className="App">
          <ToastContainer></ToastContainer>
          <Routes />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
