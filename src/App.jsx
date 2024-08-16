import { useState } from "react";
import Sidebar from "./components/sidebar/sidebarComponent";
import Header from "./components/header/headerCompoonent";

function App() {
  const [isBubbleClicked, setIsBubbleClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

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
  };

  return (
    <>
      <div className="h-full flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="w-full">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="bg-primary-gray-darken h-[92.75%] flex justify-end items-end p-5">
            <div className="w-fit h-[90px] flex flex-row-reverse justify-end items-center relative py-2">
              {/* Button Bubble */}
              {!selectedButton && (
                <button
                  type="button"
                  id="buttonBubble"
                  onClick={handleBubbleClick}
                  className={`w-12 h-12 bg-primary-blue rounded-full self-end shadow-md relative z-30`}
                ></button>
              )}

              {/* Button Inbox */}
              <div
                className={`flex flex-col h-full ${selectedButton === "Inbox" ? "justify-end" : "justify-center"} py-2 items-center absolute transition-all duration-500 z-20 transform ${
                  isBubbleClicked
                    ? "translate-x-[-5px]"
                    : "translate-x-[0px]"
                } ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
                style={{
                  right: selectedButton === "Inbox" ? "-0px" : "70px",
                  zIndex: selectedButton === "Inbox" ? 50 : 20,
                }}
              >
                <span className={`font-latoBold text-[0.7rem] text-primary-white mb-1 ${selectedButton ? "hidden" : ""}`}>
                  Inbox
                </span>
                <button
                  type="button"
                  id="buttonModalInbox"
                  onClick={() => handleButtonClick("Inbox")}
                  className={`${
                    selectedButton === "Inbox" ? "w-12 h-12 bg-indicator-orange" : "w-10 h-10 bg-primary-white mt-6"
                  } ${isBubbleClicked ? "mt-0" : ""} rounded-full shadow-md`}
                ></button>
              </div>

              {/* Button Task */}
              <div
                className={`flex flex-col h-full ${selectedButton === "Task" ? "justify-end" : "justify-center"} py-2 items-center absolute transition-all duration-500 z-10 transform ${
                  isBubbleClicked
                    ? "translate-x-[-70px]"
                    : "translate-x-[0px]"
                } ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
                style={{
                  right: selectedButton === "Task" ? "-0px" : "70px",
                  zIndex: selectedButton === "Task" ? 50 : 10,
                }}
              >
                <span className={`font-latoBold text-[0.7rem] text-primary-white mb-1 ${selectedButton ? "hidden" : ""}`}>
                  Task
                </span>
                <button
                  type="button"
                  id="buttonModalTask"
                  onClick={() => handleButtonClick("Task")}
                  className={`${
                    selectedButton === "Task" ? "w-12 h-12 bg-indicator-purple" : "w-10 h-10 bg-primary-white mt-6"
                  } ${isBubbleClicked ? "mt-0" : ""} rounded-full shadow-md`}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
