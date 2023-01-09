import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "./Firebase";
export const SignIn = () => {
  // SignIn button functinality
  const SignInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Poppup will display for signin account
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={SignInHandler}
        style={{ marginBottom: "4%" }}
      >
        Sign In
      </Button>
    </div>
  );
};
