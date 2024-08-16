// import "./App.css";
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebarComponent";
import Header from "./components/header/headerCompoonent";

function App() {
  const [isBubbleClicked, setIsBubbleClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleBubbleClick = () => {
    setIsBubbleClicked(!isBubbleClicked);
  };

  const handleButtonClick = () => {
    setSelectedButton(buttonType);
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
              {!selectedButton && (
                <>
                  {/* Button Bubble */}
                  <button
                    type="button"
                    id="buttonBubble"
                    onClick={handleBubbleClick}
                    className={`w-12 h-12 bg-primary-blue rounded-full self-end shadow-md z-50 relative`}
                  ></button>
                  {/* Button Inbox */}
                  <div
                    className={`flex flex-col items-center absolute z-1 transition-all duration-500 transform ${
                      isBubbleClicked
                        ? "translate-x-[-60px] opacity-100"
                        : "translate-x-[0px] opacity-0"
                    }`}
                  >
                    <span className="font-latoBold text-sm text-primary-white mb-1">
                      Inbox
                    </span>
                    <button
                      type="button"
                      id="buttonModalInbox"
                      onClick={() => handleButtonClick("Inbox")}
                      className="w-10 h-10 bg-primary-white rounded-full shadow-md"
                    ></button>
                  </div>
                  {/* Button Inbox */}
                  <div
                    className={`flex flex-col items-center absolute z-20 transition-all duration-500 transform ${
                      isBubbleClicked
                        ? "translate-x-[-115px] opacity-100"
                        : "translate-x-[0px] opacity-0"
                    }`}
                  >
                    <span className="font-latoBold text-sm text-primary-white mb-1">
                      Task
                    </span>
                    <button
                      type="button"
                      id="buttonModalTask"
                      onClick={() => handleButtonClick("Task")}
                      className="w-10 h-10 bg-primary-white rounded-full shadow-md"
                    ></button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
