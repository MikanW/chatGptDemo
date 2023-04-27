import { useChatGpt } from "@/hook/useChatGpt";
import React, { useState } from "react";

function Chat() {
  const [pendingMessage, setPendingMessage] = useState("");
  const [message, setMessage] = useState("");
  const { data, role, isLoading, isError } = useChatGpt(message);

  return (
    <div className="border-1 flex-col">
      <div className="border-1 bg-white justify-start my-2">Hello</div>
      <div className="border-1 bg-white justify-end my-2">Hey</div>
      <input
        type="text"
        className="border-1 focus:outline-none rounded-sm"
        onChange={(e) => {
          setPendingMessage(e.target.value);
        }}
      />
      <button
        className="border-1 rounded-sm mx-1 bg-slate-50"
        onClick={() => {
          setMessage(pendingMessage);
        }}
      >
        Send
      </button>
      <h1>{message}</h1>
      <h1>{data}</h1>
    </div>
  );
}

export default Chat;
