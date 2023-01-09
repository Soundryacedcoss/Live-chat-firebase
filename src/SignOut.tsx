import React from 'react'
import { Button } from "@mui/material";
import { auth } from "./Firebase";
export const SignOut = () => {
  const SignOutHandler = () => {
    auth.signOut()
  }
  return (
    <div >
      <Button variant="outlined" onClick={SignOutHandler} style={{marginLeft:"85%"}}>Sign Out</Button>
    </div>
  )
}
