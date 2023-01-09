import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "./Firebase";
export const SignIn = () => {
  const SignInHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      SignIn
      <Button variant="outlined" onClick={SignInHandler}>
        Sign In
      </Button>
    </div>
  );
};
