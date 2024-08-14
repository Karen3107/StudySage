import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface ChatboxProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Dashboard of Page
const Chatbox: React.FC<ChatboxProps> = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const handleMessageSend = () => {
      if (inputText.trim() !== '') {
        setMessages(prevMessages => [...prevMessages, { text: inputText, sender: 'user' }]);
        setInputText('');
        // Simulate response from the bot (you can replace this with your own backend logic)
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { text: 'This is a response from the bot.', sender: 'bot' }]);
        }, 500);
      }
    };
  
    const handleInputChange = event => {
      setInputText(event.target.value);
    };
  
    return (
      <>
        <Typography variant='h2'>Chatbox</Typography>
        <div className="chatbox-container">
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender.toLowerCase()}`}>
                <span className="sender">{message.sender}: </span>
                <span>{message.text}</span>
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleMessageSend();
                }
              }}
              />
            <button onClick={handleMessageSend}>Send</button>
          </div>
        </div>
      </>
    );
}

export default Chatbox;