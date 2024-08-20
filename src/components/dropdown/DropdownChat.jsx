import { useState, useEffect, useRef } from "react";
import Icons from "../icon/Icons";

const DropdownChat = () => {
  const [isDropdownChatClicked, setDropdownChatClicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownChatClicked = () => {
    setDropdownChatClicked(!isDropdownChatClicked);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownChatClicked(false);
    }
  };

  useEffect(() => {
    if (isDropdownChatClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownChatClicked]);

  return (
    <div className="relative inline-block">
      <button onClick={handleDropdownChatClicked}>
        <Icons.DotIcon width={20} height={20} color={`#4F4F4F`} />
      </button>
      {isDropdownChatClicked && (
        <div
          ref={dropdownRef}
          className="border border-primary-gray-light rounded-[5px] absolute top-full left-0 mt-2 bg-white z-10 bg-[#FFFFFF] shadow-md"
        >
          <ul className="font-latoRegular">
            <li className="text-primary-blue border-b-[1px] border-primary-gray-light px-4 py-2 cursor-pointer">
              Edit
            </li>
            <li className="text-indicator-red px-4 py-2 cursor-pointer">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownChat;
