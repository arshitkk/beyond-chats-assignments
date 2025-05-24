import { useState } from "react";

function ChatBox({ data, onClick, selectedBox }) {
  const [clicked, setClicked] = useState(false);
  const [unclickedAll, setUnclickedAll] = useState(true);
  return (
    <div
      onClick={onClick}
      className={`${data.opacity} flex items-end ${
        selectedBox ? "bg-blue-600/25" : ""
      } hover:bg-blue-600/25 rounded-xl p-2 m-1 cursor-pointer `}
    >
      <div className="mr-4 ">
        <p
          className={`${data.color} flex justify-center items-center  text-white font-bold rounded-full w-11 h-11 text-xl`}
        >
          L
        </p>
      </div>
      <div className="text-sm ">
        {" "}
        <p className="font-bold">{data.name}</p>
        <p>{data.msg}</p>
      </div>
      <p className="text-xs m-auto w-15 text-end ">{data.time}</p>
    </div>
  );
}

export default ChatBox;
