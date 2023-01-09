import React, { useEffect, useState ,useRef} from "react";
import { db1 } from "./Firebase";
import { auth } from "./Firebase";
import { SignOut } from "./SignOut";
import { SendMassage } from "./SendMassage";
export const Chat = () => {
  // Defining type of auth currentuser
  auth.currentUser as null
  // State for store massage
  const [massages, setMassages] = useState([]);

  useEffect(() => {
    db1
      .collection("chats")
      .orderBy("createdAt")
      .onSnapshot((snapshot: any) => {
        // setting the massage in state
        setMassages(snapshot.docs.map((doc: any) => doc.data()));
      });
  }, []);
  const v1 = auth.currentUser as any
  return (
    <div>
      <div>
        <b><SignOut /></b>
        <div className="Chat">
          {massages.map(({ uid, text, photoURL }) => (
            // taking all values here from firebase database..
            <div key={Math.random()} className={`massages ${uid === v1.uid ? 'sent' : 'received'}`}>
              <img className="UserImg" src={photoURL} alt="" />{" "}
              <p className="msg">{text}</p>
            </div>
          ))}
        </div>
        <div>
          <SendMassage/>
        </div>
      
      </div>
    </div>
  );
};
