import { useState } from "react";

const Menu = () => {
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
    <div className="w-fit h-[90px] flex flex-row-reverse justify-end items-center relative py-2">
      {/* Button Bubble */}
      {!selectedButton && (
        <button
          type="button"
          id="buttonBubble"
          onClick={handleBubbleClick}
          className={`w-12 h-12 bg-primary-blue rounded-full self-end shadow-md relative z-30 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="26"
            viewBox="0 0 18 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4427 0.335868C13.3618 0.948573 13.6101 2.19031 12.9974 3.10937L5.73704 14H16C16.7376 14 17.4153 14.4059 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0284 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8096 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.594 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890568C10.2819 -0.0284895 11.5237 -0.276837 12.4427 0.335868Z"
              fill="white"
            />
          </svg>
        </button>
      )}

      {/* Button Inbox */}
      <div
        className={`flex flex-col h-full mt-2 ${
          selectedButton === "Inbox" ? "justify-end" : "justify-center"
        } py-2 items-center absolute transition-all duration-500 z-20 transform ${
          isBubbleClicked ? "translate-x-[-5px]" : "translate-x-[0px]"
        } ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
        style={{
          right: selectedButton === "Inbox" ? "-0px" : "70px",
          zIndex: selectedButton === "Inbox" ? 50 : 20,
        }}
      >
        <span
          className={`font-latoBold text-[0.7rem] text-primary-white mb-1 ${
            selectedButton ? "hidden" : ""
          }`}
        >
          Inbox
        </span>
        <button
          type="button"
          id="buttonModalInbox"
          onClick={() => handleButtonClick("Inbox")}
          className={`${
            selectedButton === "Inbox"
              ? "w-12 h-12 bg-indicator-purple"
              : "w-10 h-10 bg-primary-white mt-6"
          } ${
            isBubbleClicked ? "mt-0" : ""
          } rounded-full shadow-md flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${selectedButton === "Inbox" ? "24" : "18"}`}
            height={`${selectedButton === "Inbox" ? "24" : "18"}`}
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
              fill={`${selectedButton === "Inbox" ? "#FFFFFF" : "#8885FF"}`}
            />
          </svg>
        </button>
      </div>

      {/* Button Task */}
      <div
        className={`flex flex-col h-full mt-2 ${
          selectedButton === "Task" ? "justify-end" : "justify-center"
        } py-2 items-center absolute transition-all duration-500 z-10 transform ${
          isBubbleClicked ? "translate-x-[-70px]" : "translate-x-[0px]"
        } ${!isBubbleClicked && !selectedButton ? "hidden" : ""}`}
        style={{
          right: selectedButton === "Task" ? "-0px" : "70px",
          zIndex: selectedButton === "Task" ? 50 : 10,
        }}
      >
        <span
          className={`font-latoBold text-[0.7rem] text-primary-white mb-1 ${
            selectedButton ? "hidden" : ""
          }`}
        >
          Task
        </span>
        <button
          type="button"
          id="buttonModalTask"
          onClick={() => handleButtonClick("Task")}
          className={`${
            selectedButton === "Task"
              ? "w-12 h-12 bg-indicator-orange"
              : "w-10 h-10 bg-primary-white mt-6"
          } ${
            isBubbleClicked ? "mt-0" : ""
          } rounded-full shadow-md flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`${selectedButton === "Task" ? "24" : "18"}`}
            height={`${selectedButton === "Task" ? "24" : "18"}`}
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.92984 4.40063H26.5614C27.9445 4.40063 29.076 5.53221 29.076 6.91526V23.2603C29.076 24.6433 27.9445 25.7749 26.5614 25.7749H3.92984C2.5468 25.7749 1.41522 24.6433 1.41522 23.2603V6.91526C1.41522 5.53221 2.5468 4.40063 3.92984 4.40063ZM3.9298 6.91528V23.2603H13.9883V6.91528H3.9298ZM26.5614 23.2603H16.5029V6.91528H26.5614V23.2603ZM25.3042 11.3158H17.7603V13.2018H25.3042V11.3158ZM17.7603 14.4591H25.3042V16.3451H17.7603V14.4591ZM25.3042 17.6024H17.7603V19.4883H25.3042V17.6024Z"
              fill={`${selectedButton === "Task" ? "#FFFFFF" : "#F8B76B"}`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Menu;
