import React from "react";

function MessageBox() {
  return (
    <div className="mt-14">
      <div className="flex gap-2 items-end">
        <p className="w-2 h-2 p-3.5 mb-2 text-white flex justify-center items-center rounded-full bg-blue-700 font-bold text-sm">
          L
        </p>
        <div className="bg-gray-200 p-4 w-full mr-10 rounded-xl text-[1.02rem] ">
          <p className="mb-2">
            I bought a product from your store in November as a Christmas gift
            for a member of my family. However, it turns out they have something
            very similar already. I was hoping you'd be able to refund me, as it
            is un-opened.
          </p>
          <p className="text-gray-500 font-[500] text-sm">
            <i className="mr-3 text-sm fa-solid fa-message"></i>1min
          </p>
        </div>
      </div>
      {/* NEXT CHAT */}
      <div className="flex justify-end mt-8">
        <div className="flex items-end">
          <div className=" bg-blue-500/20 p-4 w-full mr-4 rounded-xl text-[1.02rem]">
            <p className="mb-2">Let me just look into this for you, Luis.</p>
            <div className="text-gray-500 font-[500] text-sm text-end">
              seen • 1min
            </div>
          </div>
          <p className="w-2 h-2 p-3.5 mb-2 text-white flex justify-center items-center rounded-full bg-pink-400 font-bold text-sm">
            A
          </p>
        </div>
      </div>
      {/* InputBox */}
      <div className="absolute bottom-0  w-[46vw] p-3">
        <div className="  shadow-lg border border-black/20 w-full mt-8 flex flex-col pl-4 p-2 gap-2 rounded-2xl">
          <div className="flex items-center ">
            <i className="mr-3 text-sm fa-solid fa-message"></i>
            <p className="font-bold">Chat</p>
            <i className=" fa-solid fa-angle-down"></i>
          </div>
          <input
            className="text-bold text-gray-600 outline-0"
            placeholder="Use Ctrl+K for shortcuts"
          />
          <div className="flex justify-between items-center mr-3 mt-12">
            <div className="flex gap-2 p-2">
              <i className=" border-r-2 pr-2 fa-solid fa-bolt"></i>
              <i className="pl-1 pr-2 fa-solid fa-bookmark"></i>
              <i className=" fa-solid fa-face-smile"></i>
            </div>
            <div className="flex items-center p-2 gap-2">
              <p className="text-bold pr-2 border-r border-black/30">Send</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
