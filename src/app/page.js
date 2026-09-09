"use client";

import React, { useState, useEffect, useRef } from "react";
import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import { toast } from "react-toastify";
import JoinForm from "@/components/JoinForm";
import { socket } from "@/socket";
import { LuUsersRound } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";

function Home() {
  const containerRef = useRef(null);
  const [room, setRoom] = useState("");
  const [joined, setjoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (userName.trim() !== "" && room.trim() !== "") {
      socket.emit("join_room", { room, userName });
      setjoined(true);
      toast.success(`${userName} با موفقیت به گروه ${room} پیوست`);
    } else {
      toast.error("لطفا نام کاربری و نام اتاق را وارد کنید");
    }
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { message, sender: userName },
    ]);
    socket.emit("message", { room, message, sender: userName });
  };

  useEffect(() => {
    socket.on("user_joined", (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message, sender: "system" },
      ]);
    });

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("user_joined");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === userName
    ) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="size-full">
      {!joined ? (
        <div className="min-h-full bg-surface-subtle flex items-center justify-center">
          <JoinForm
            userName={userName}
            setUserName={setUserName}
            room={room}
            setRoom={setRoom}
            onSubmit={handleJoinRoom}
          />
        </div>
      ) : (
        <div className="flex h-full min-h-dvh flex-col bg-background">
          <header className="shrink-0 border-b border-gray-300 bg-surface/80 backdrop-blur-sm">
            <div className="w-full max-w-3xl flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-subtle text-primary"
                aria-hidden="true"
              >
                <LuUsersRound className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="truncate text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {room}
                </h1>
              </div>
            </div>
          </header>

          <main ref={containerRef} className="flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-thin">
            <div className="flex-1 px-1 pt-4 pb-16 sm:px-2 sm:pt-6 sm:pb-20">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
                  <div
                    className="mb-4 flex size-14 items-center justify-center rounded-full bg-surface-muted text-muted"
                    aria-hidden="true"
                  >
                    <IoChatboxOutline className="size-7" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    هنوز پیامی ارسال نشده
                  </p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col gap-2 sm:gap-2.5 px-2 sm:px-3">
                  <div className="flex-1"></div>
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      message={message.message}
                      sender={message.sender}
                      isOwner={userName === message.sender}
                    />
                  ))}
                </div>
              )}
            </div>

            <ChatForm onSubmit={handleSendMessage} />
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
