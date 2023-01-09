import React, { useState } from "react";
import { db1 } from "./Firebase";
import { Button, TextField } from "@mui/material";
import { auth } from "./Firebase";
import firebase from 'firebase/compat/app'
export const SendMassage = () => {
  // state for input box
  const [input, setInput] = useState("");
  // taking value from input...
  const InputHandler = (e: any) => {
    setInput(e.target.value);
  };
  // Send button function
  const sendHandler = () => {
    // taking id and photo of currunt user
    const { uid, photoURL } = auth.currentUser as any;
    // Adding massage to firebase database
    db1.collection("chats").add({
      text: input,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };
  return (
    <div>
      {/* input box */}
      <TextField
        id="outlined-basic"
        style={{ width: "80%", marginLeft: "4%", marginBottom: "4%" }}
        label="type your massage..."
        value={input}
        variant="outlined"
        onChange={InputHandler}
      />{" "}
      {""}{" "}
      {/*  send button */}
      <Button
        variant="contained"
        style={{ padding: "1% 2%" }}
        onClick={sendHandler}
      >
        SEND
      </Button>
    </div>
  );
};
