import React, { useEffect, useState } from "react";
import { db1 } from "./Firebase";
import { Button, TextField } from "@mui/material";
import { auth } from "./Firebase";
import firebase from "firebase/compat/app";
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
  push,
} from "firebase/database";
export const SendMassage = () => {
  const [input, setInput] = useState("");
  const InputHandler = (e) => {
    setInput(e.target.value);
  };
  const sendHandler = () => {
    const { uid, photoURL } = auth.currentUser;
    db1.collection("chats").add({
      text: input,
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        style={{ width: "80%",marginLeft:"4%" }}
        label="type your massage..."
        value={input}
        variant="outlined"
        onChange={InputHandler}
      />{" "}
      {""}{" "}
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
