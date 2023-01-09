import React from 'react'
import { Button } from "@mui/material";
import { auth } from "./Firebase";
export const SignOut = () => {
  const SignOutHandler = () => {
    // Account logout functinality..
    let confirm=window.confirm("Your account will logOut :/")
    if (confirm) {
    auth.signOut()
    }
  }
  return (
    <div >
      <Button variant="outlined" onClick={SignOutHandler} style={{marginLeft:"85%"}}>Sign Out</Button>
    </div>
  )
}
