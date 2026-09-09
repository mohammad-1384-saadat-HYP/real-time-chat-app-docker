"use client";

import { useRef, useState } from "react";
import { LuSend } from "react-icons/lu";

const ChatForm = ({ onSubmit }) => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSubmit(message);
      setMessage("");
      inputRef.current?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-2.5 w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="پیام خود را بنویسید..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full min-h-11 px-3.5 pt-2.5 pb-3 pl-11.5 text-sm leading-normal bg-surface border border-gray-500 placeholder:text-muted-foreground focus:outline-none flex-1 rounded-full"
        autoComplete="off"
        autoFocus
      />
      <button
        type="submit"
        className={`flex items-center justify-center shrink-0 size-8.5 rounded-full absolute left-1 text-white active:scale-[0.97] cursor-pointer transition-all duration-150 ease-linear ${message.trim() ? "bg-primary hover:bg-primary-hover" : "bg-gray-400 hover:bg-gray-500"}`}
      >
        <LuSend className="size-5 -scale-x-100" />
      </button>
    </form>
  );
};

export default ChatForm;
