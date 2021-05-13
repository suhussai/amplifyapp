import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthState } from "@aws-amplify/ui-components";
import {
  AmplifyAuthenticator,
  AmplifyConfirmSignUp,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

export default function Login(props) {
  const history = useHistory();

  const authHandler = (state, authData) => {
    if (state === AuthState.SignedIn) {
      const title =
        " " +
        ((authData.attributes && authData.attributes.name) ||
          authData.attributes.email);
      toast.success("Welcome" + title + "!", {
        autoClose: 3000,
        pauseOnFocusLoss: false,
        toastId: title,
      });
      history.push({
        pathname: "/",
      });
    } else if (state === AuthState.SignedOut) {
      toast.success("GoodBye!", {
        autoClose: 3000,
        pauseOnFocusLoss: false,
        toastId: "GoodBye!",
      });
      history.push({
        pathname: "/auth",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <AmplifyAuthenticator
              usernameAlias="email"
              handleAuthStateChange={authHandler}
            >
              <AmplifySignIn
                slot="sign-in"
                usernameAlias="email"
              ></AmplifySignIn>
              <AmplifySignUp
                usernameAlias="email"
                slot="sign-up"
                formFields={[
                  {
                    type: "name",
                    label: "Name *",
                    placeholder: "Enter your name",
                    required: true,
                  },
                  { type: "email" },
                  { type: "password" },
                ]}
              ></AmplifySignUp>
              <AmplifyConfirmSignUp slot="confirm-sign-up"></AmplifyConfirmSignUp>
            </AmplifyAuthenticator>
          </div>
        </div>
      </div>
    </>
  );
}
