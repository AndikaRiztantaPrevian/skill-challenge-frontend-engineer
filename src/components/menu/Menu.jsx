import React, { useState } from "react";
import ModalInbox from "../modal/ModalInbox";
import ModalTask from "../modal/ModalTask";
import Icons from "../icon/Icons";

const Menu = () => {
  const [isBubbleClicked, setIsBubbleClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [isModalInboxOpen, setIsModalInboxOpen] = useState(false);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);

  const handleBubbleClick = () => {
    setIsBubbleClicked(!isBubbleClicked);
  };

  const handleButtonClick = (buttonType) => {
    if (selectedButton === buttonType) {
      setIsBubbleClicked(true);
      setSelectedButton(null);
    } else {
      setIsBubbleClicked(false);
      setSelectedButton(buttonType);
    }

    if (buttonType === "Inbox") {
      setIsModalInboxOpen(!isModalInboxOpen);
      setIsModalTaskOpen(false);
    } else if (buttonType === "Task") {
      setIsModalTaskOpen(!isModalTaskOpen);
      setIsModalInboxOpen(false);
    }
  };

  return (
    <>
      {/* Modal */}
      {isModalInboxOpen && (
        <ModalInbox isOpen={isModalInboxOpen} onClose={() => setIsModalInboxOpen(false)} />
      )}
      {isModalTaskOpen && (
        <ModalTask isOpen={isModalTaskOpen} onClose={() => setIsModalTaskOpen(false)} />
      )}
      <div className="w-fit h-[90px] flex flex-row-reverse justify-end items-center relative py-2">
        {/* Button Bubble */}
        {!selectedButton && (
          <button type="button" id="buttonBubble" onClick={handleBubbleClick} className={`w-12 h-12 bg-primary-blue rounded-full self-end shadow-md relative z-30 flex items-center justify-center`}>
            <Icons.MenuIcon width={15} height={26} color={`white`} />
          </button>
        )}

        {/* Button Inbox */}
        <div className={`flex flex-col h-full mt-2 py-2 ${selectedButton === "Inbox" ? "justify-end" : "justify-center"} items-center absolute transition-all duration-500 z-20 transform ${isBubbleClicked ? "translate-x-[-5px]" : "translate-x-[0px]"} ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
          style={{
            right: selectedButton === "Inbox" ? "-0px" : "70px",
            zIndex: selectedButton === "Inbox" ? 50 : 20,
          }}
        >
          <span className={`font-latoBold text-[0.7rem] text-[#FFFFFF] ${selectedButton ? "hidden" : ""}`} >
            Inbox
          </span>
          <button type="button" id="buttonModalInbox" onClick={() => handleButtonClick("Inbox")} className={`${selectedButton === "Task" ? "mt-7" : "mt-2"} ${selectedButton === "Inbox" ? "w-12 h-12 bg-indicator-purple": "w-10 h-10 bg-[#FFFFFF]"} ${isBubbleClicked ? "mt-0" : ""} rounded-full shadow-md flex items-center justify-center`}>
            <Icons.InboxIcon
              width={`${selectedButton === "Inbox" ? "20" : "18"}`}
              height={`${selectedButton === "Inbox" ? "20" : "18"}`}
              color={`${selectedButton === "Inbox" ? "#FFFFFF" : "#8885FF"}`}
            />
          </button>
        </div>

        {/* Button Task */}
        <div className={`flex flex-col h-full mt-2 py-2 ${selectedButton === "Task" ? "justify-end" : "justify-center"} items-center absolute transition-all duration-500 z-10 transform ${isBubbleClicked ? "translate-x-[-70px]" : "translate-x-[0px]"} ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
          style={{
            right: selectedButton === "Task" ? "-0px" : "70px",
            zIndex: selectedButton === "Task" ? 50 : 10,
          }}
        >
          <span className={`font-latoBold text-[0.7rem] text-[#FFFFFF] ${selectedButton ? "hidden" : ""}`}>
            Task
          </span>
          <button type="button" id="buttonModalTask" onClick={() => handleButtonClick("Task")} className={`${selectedButton === "Inbox" ? "mt-7" : "mt-2"} ${selectedButton === "Task" ? "w-12 h-12 bg-indicator-orange": "w-10 h-10 bg-[#FFFFFF]"} ${isBubbleClicked ? "mt-0" : ""} rounded-full shadow-md flex items-center justify-center`}>
            <Icons.TaskIcon
              width={`${selectedButton === "Task" ? "20" : "18"}`}
              height={`${selectedButton === "Task" ? "20" : "18"}`}
              color={`${selectedButton === "Task" ? "#FFFFFF" : "#FFC085"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
