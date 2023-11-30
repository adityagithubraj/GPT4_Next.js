// components/Chat.js
import { useState } from 'react';

const Chat = () => {
  const url = "https://dark-puce-toad-cape.cyclic.app/";
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    const message = userInput.trim();
    if (message !== "") {
      setMessages([...messages, { role: "user", message }]);
      setUserInput("");

      try {
        const response = await fetch(`${url}/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chats: message }),
        });

        const data = await response.json();
        console.log(data);

        const botReply = data.output;
        setMessages([...messages, { role: "bot", message: botReply }]);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Pro Chat</h2>
      <div className="mainchatbox">
        <div className="reschat">
          {messages.map((msg, index) => (
            <div key={index} className={`chat ${msg.role}`}>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
