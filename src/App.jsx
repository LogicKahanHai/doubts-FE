import Navbar from './components/Navbar'
import './App.css'
import QuestionsContainer from './components/questions/QuestionsContainer'
import { useState } from 'react'
import UserDetails from './components/UserDetails';
import { useEffect } from 'react';

function App() {
  const [sender, setSender] = useState({
    name: localStorage.getItem('senderName') ? localStorage.getItem('senderName') : "",
    msg: "",
    email: localStorage.getItem('senderEmail') ? localStorage.getItem('senderEmail') : "",
    time: null,
  });

  useEffect(() => {
    localStorage.setItem('senderName', sender.name);
    localStorage.setItem('senderEmail', sender.email);
  }, [sender.name, sender.email]);


  const addSender = (name, email) => {
    console.log(name, email);
    setSender({ ...sender, name, email });
    console.log(sender);
  }

  const overlayStyle = {
    position: 'fixed',
    display: (!sender.name || !sender.email) ? 'block' : 'none',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 2,
  };

  return (
    <>
      <Navbar />
      {console.log(sender)}
      <div id='overlay' style={overlayStyle}>
        <UserDetails addSender={addSender} prevName={localStorage.getItem("senderName")} prevEmail={localStorage.getItem("senderEmail")} />
      </div>
      <div className="container d-flex justify-content-center">
        <div className='d-block'>
          <h1>Welcome, {sender.name ? sender.name : 'User'}!</h1>
          <p className="text-muted">
            You can ask your questions below
          </p>
          <QuestionsContainer sender={sender} setSender={setSender} />
        </div>
      </div>
    </>
  )
}

export default App
