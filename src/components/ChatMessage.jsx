"use client";

import React from "react";

function ChatMessage({ sender, message, isOwner }) {
  const isSystem = sender === "system";

  if (isSystem) {
    return (
      <div className="flex justify-center px-2 py-1" role="status">
        <div
          className="max-w-[min(90%,24rem)] px-3 py-1.5 rounded-full
      bg-gray-200/75 text-system text-xs font-medium"
        >
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isOwner ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[min(85%,28rem)] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isOwner
            ? "bg-primary text-white rounded-br-md"
            : "bg-surface border border-gray-300 text-foreground rounded-bl-md shadow-xs"
        }`}
      >
        {!isSystem && (
          <div
            className={`text-xs font-medium mb-1 ${
              isOwner ? "text-white/75" : "text-muted"
            }`}
          >
            {sender}
          </div>
        )}
        <div
          className={`text-sm sm:text-[0.9375rem] leading-relaxed break-words ${
            isOwner ? "text-white" : "text-foreground"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
