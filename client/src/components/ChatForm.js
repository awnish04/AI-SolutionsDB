import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const Chatform = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return; // if the input is empty, return without doing anything
    inputRef.current.value = "";
    // update chat history with the user's mesge
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Add a thinking placeholder for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Typing..." },
      ]);
      generateBotResponse([
        ...chatHistory, // latest chat history
        { role: "user", text: userMessage }, // the user message
      ]);
    }, 100);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handelFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button>
        <FaArrowUp className="mx-auto" />
      </button>
    </form>
  );
};

export default Chatform;
