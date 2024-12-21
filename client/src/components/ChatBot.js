import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import { IoIosArrowDown } from "react-icons/io";
import Chatform from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { CircleX, MessageSquareQuote } from "lucide-react";
const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Typing..."),
        { role: "model", text, isError },
      ]);
    };

    // Generate bot response based on user input
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] })); // Convert history to bot format

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Make the API call to get the bot's response
      // const response = await fetch(API_URL, requestOption);
      const response = await fetch(
        process.env.REACT_APP_API_URL,
        requestOption
      );

      console.log("API URL:", process.env.REACT_APP_API_URL);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!!");
      const apiResponsetext = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponsetext);
      console.log(data);
    } catch (error) {
      updateHistory(error.message, true); // Update chat history with error message
    }
  };

  // Auto scroll when chathistory updates
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className={`container z-50 ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="rounded-full">
          <MessageSquareQuote />
        </span>
        <span className="rounded-full">
          <CircleX />
        </span>
      </button>

      <div className="chatbot-popup w-96 relative h-96 bg-white rounded-lg shadow-2xl drop-shadow-2xl overflow-hidden">
        {/* Chatbot Header */}
        <div className="chat-header flex px-4 py-2 items-center justify-between bg-[#6D4fc2]">
          <div className="header-info flex space-x-2 items-center text-white">
            <ChatbotIcon />
            <h2 className="logo-text font-bold text-lg">ChatBot</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)}>
            <IoIosArrowDown className="mx-auto" />
          </button>
        </div>
        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body px-4 py-2">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey There 🔥 <br /> How can i Help you today?
            </p>
          </div>
          {/* Renders chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage className="line-clamp-2" key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer px-4 py-2">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
