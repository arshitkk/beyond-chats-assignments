import React, { useState } from "react";
import img from "../assets/chatBotLogo.png";
function CopilotSection() {
  const buttons = ["AI Copilot", "Details"];
  const [selectedBox, setSelectedBox] = useState("AI Copilot");
  return (
    <div className="shadow p-3 h-screen w-[25rem]">
      <div className=" w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.10),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.10),_transparent_50%)] pointer-none">
        <div className="  w-90  mt-2 pl-7 flex gap-4 border-b-2 bg-white border-black/10">
          {buttons.map((button) => (
            <button
              className={`font-[600] pb-2.5 text-base
            ${
              selectedBox === button
                ? "bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent border-b-2 border-purple-800"
                : "text-gray-700"
            }
          `}
              onClick={(e) => {
                setSelectedBox(e.target.innerText);
              }}
            >
              {button === "AI Copilot" ? (
                <div className="flex gap-2 items-center">
                  <img className="h-4 " src={img} alt="" />
                  <p>{button}</p>
                </div>
              ) : (
                <p>{button}</p>
              )}
            </button>
          ))}
        </div>
        <div className="  flex flex-col justify-between items-center pt-88 bg-transparent">
          <div className=" flex flex-col justify-center items-center  ">
            <img className="h-7 " src={img} alt="" />
            <p className="font-bold mt-1">Hi, I'm Fin AI Copilot</p>
            <p className="text-sm text-gray-600">
              Ask me anything about this conversation
            </p>
          </div>
          <div className=" w-full h-full p-2 rounded-md pt-36 ">
            <div className="bg-white rounded-md shadow-2xl border border-black/20 w-fit p-1 mb-2">
              Suggested: 💸How to get rufund?
            </div>
            <input
              type="text"
              placeholder="Ask a question"
              className="shadow-xl border border-black/40 bg-white 
              h-full w-full p-3 rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopilotSection;
