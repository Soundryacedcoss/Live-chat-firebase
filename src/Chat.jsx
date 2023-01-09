import React, { useEffect, useState } from "react";
import { db1 } from "./Firebase";
import { auth } from "./Firebase";
import {
  getDatabase,
  ref,
  onValue,
  update,
  remove,
  push,
} from "firebase/database";
import { SignOut } from "./SignOut";
import { SendMassage } from "./SendMassage";
export const Chat = () => {
  const [massages, setMassages] = useState([]);
  useEffect(() => {
    db1
      .collection("chats")
      .orderBy("createdAt")
    //   .limit(10)
      .onSnapshot((snapshot) => {
        setMassages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(massages);

  return (
    <div>
      <div>
       <b><SignOut /></b> 
        <div className="Chat">
        {massages.map(({ uid, text, photoURL }) => (
          <div key={Math.random()} className={`massages ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
             <img className="UserImg" src={photoURL} alt="" />{" "}
           <p className="msg">{text}</p> 
          </div>
        ))}
        </div>
        <SendMassage />
      </div>
    </div>
  );
};
