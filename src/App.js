import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter.js';
import img from './IMG.JPG';



function App() {
  // State for storing messages
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to handle adding a new message
  const handleAddMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };


  return (
    <div className="App">
      <header className="App-header">

        


        {/* Photograph */}
        <img src={img} alt="Your Name" className="profile-photo" />

        {/* Introduction */}
        <h1>Wei-Chan Tsai</h1>
        <p>NTUEE Cybersecurity Master Student</p>

        {/* Message Board */}
        <div className="message-board">
          <h2>Message Board</h2>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Leave a message"
          />
          <button onClick={handleAddMessage}>Add Message</button>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <p>{message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visitor Counter */}
        <div className="visitor-counter">
          <Counter/>
        </div>
        
      </header>
    </div>
  );
}




export default App;
