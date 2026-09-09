import React from "react";
import { IoChatboxOutline } from "react-icons/io5";

function JoinRoomForm({ userName, room, setUserName, setRoom, onSubmit }) {
  return (
    <div className="w-full min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <form
        className="bg-surface border border-gray-300 rounded-2xl shadow-lg w-full max-w-[420px] p-6 sm:p-8 flex flex-col gap-6 sm:gap-7"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-2 text-center">
          <div
            className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-subtle text-primary"
            aria-hidden="true"
          >
            <IoChatboxOutline className="size-6" />
          </div>
          <h1 className="text-xl lg:text-[22px] font-semibold tracking-tight text-foreground">
            پیوستن به گروه
          </h1>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-foreground flex items-center gap-1">
              <span>نام کاربری</span>
              <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
              className="w-full min-h-11 px-3.5 pt-2.5 pb-3 text-sm leading-normal bg-surface border border-gray-500 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-foreground flex items-center gap-1">
              <span>نام گروه</span>
              <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              placeholder="نام گروه خود را وارد کنید"
              className="w-full min-h-11 px-3.5 pt-2.5 pb-3 text-sm leading-normal bg-surface border border-gray-500 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center min-h-11 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-lg transition-[background-color,transform,box-shadow] duration-150 ease-out hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer"
        >
          پیوستن به گروه
        </button>
      </form>
    </div>
  );
}

export default JoinRoomForm;
