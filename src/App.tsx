import React from 'react';
import './App.css';
import { Chat } from './Chat';
import { auth } from './Firebase';
import { SignIn } from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
function App() {
  // account detailks and authorization of user
  const [user] = useAuthState(auth as any)
  return (
    <div className="App">
      <h2 style={{ textAlign: "center", paddingTop: "2%" }}>Hey... let's Chat</h2>
      <b>{user ? <Chat /> : <b style={{ textAlign: "center", marginBottom: "40%" }}><SignIn /></b>}</b>
    </div>
  );
}

export default App;
