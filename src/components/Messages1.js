import React, { useState } from 'react';
import './Messages1.css'; // Import the CSS file for styling

const Messages1 = () => {
  // State to manage messages and input field
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') return; // Ignore empty messages

    // Add the new message to the list of messages
    setMessages([...messages, newMessage]);
    setNewMessage(''); // Clear the input field
  };

  return (
    <div className="messages-container">
      <h1>Chat with seller</h1>
      <div className="messages-box">
        {/* Displaying messages */}
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message}</p>
            </div>
          ))
        ) : (
          <p>No messages yet</p>
        )}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages1;
