import React from "react";
import MessageBox from "../components/MessageBox";
function MessageSection() {
  return (
    <div className="h-full w-[48vw] p-4 ">
      <div className="flex items-center justify-between shadow-sm py-2">
          <p className=" font-bold text-lg">Luis - Github</p>
          <div className="flex items-center gap-2">
            <i className="bg-gray-200 p-1.5 rounded-md fa-solid fa-ellipsis"></i>
            <i class="bg-gray-200 p-1.5 px-2 rounded-md fa-solid fa-moon"></i>
            <div className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md">
              <i class="fa-regular fa-rectangle-xmark"></i>
              <p>Close</p>
            </div>
          </div>
      </div>
      <MessageBox />
    </div>
  );
}

export default MessageSection;
