import React, { useState } from "react";

function Chat() {
  const [pendingMessage, setPendingMessage] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          className="border-1 focus:outline-none rounded-sm"
          onChange={(e) => {
            setPendingMessage(e.target.value);
          }}
        />
        <button 
        className="border-1 rounded-sm mx-1 bg-slate-50"
        onClick={(e) => {
          setMessage(pendingMessage);
        }}>Send</button>
      </form>
    </div>
  );
}

export default Chat;
