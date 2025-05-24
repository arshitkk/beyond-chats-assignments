import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import { data } from "../data/chatBoxData";
function InboxSection() {
  const [selectedBox, setSelectedBox] = useState("");
  return (
    <div className="w-fit h-full p-4 ">
      <div className=" flex justify-between items-center p-2 shadow-md ">
        <p className=" text-lg font-[700]">Your Inbox</p>
        <img
          className="h-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8hGpUwVDHtDztS8oLd9L1MUhOBSfyeCrqSRouPamnHXQYS3T"
          alt="toggle-icon"
        />
      </div>
      <div className="m-1 flex justify-between p-1">
        <div className="border w-fit p-0.5 rounded-sm border-black/30 flex items-center gap-1">
          <button>5 Open</button>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="border w-fit p-0.5 rounded-sm border-black/30 flex items-center gap-1">
          <button>Waiting Longest</button>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div>
        {data.map((data) => (
          <ChatBox
            key={data.id}
            data={data}
            selectedBox={selectedBox === data.id}
            onClick={() => {
              setSelectedBox(data.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default InboxSection;
