import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import UserContext from "./UserContext";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false,
  };
  static contextType = UserContext;
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.context.updateCurrentUser();
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    console.log(this.context);
    console.log(isAuthenticated);
    if (!isLoaded) return null;

    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
              }}
            />
          );
        }}
      />
    );
  }
}

PrivateRoute = withRouter(PrivateRoute);

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Index} />

        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/landing" component={Landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
