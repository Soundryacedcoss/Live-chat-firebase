import React from 'react';
import './App.css';
import { Chat } from './Chat';
import { auth } from './Firebase';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  const [user]=useAuthState(auth)
  console.log(user);
  return (
    <div className="App">
      <h2 style={{textAlign:"center",paddingTop:"4%"}}>Hey... lets Chat</h2>
     <b>{user?<Chat/>: <b style={{float:"right"}}><SignIn/></b> }</b> 
    </div>
  );
}

export default App;
