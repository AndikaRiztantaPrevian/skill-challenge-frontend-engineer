import React, { useState, useEffect, useRef } from "react";
import Icons from "../icon/Icons";

const DropdownDelete = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const dropdownDeleteRef = useRef(null);

  const toggleDeleteDropdown = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownDeleteRef.current &&
      !dropdownDeleteRef.current.contains(event.target)
    ) {
      setIsDeleteOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownDeleteRef}>
      <button onClick={toggleDeleteDropdown} className="focus:outline-none">
        <Icons.DotIcon width={20} height={20} color="#828282" />
      </button>
      {isDeleteOpen && (
        <div className="absolute right-0 mt-2 w-20 bg-[#FFFFFF] border border-primary-gray-light rounded-[5px] shadow-md">
          <ul>
            <li className="px-4 py-2 text-indicator-red hover:bg-gray-100 cursor-pointer font-latoBold">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const DropdownFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownFilterRef = useRef(null);

  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownFilterRef.current &&
      !dropdownFilterRef.current.contains(event.target)
    ) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block font-latoBold text-primary-gray-darken text-sm xl:text-md" ref={dropdownFilterRef}>
      <button onClick={toggleFilterDropdown} className="focus:outline-none border border-primary-gray rounded-[5px] flex items-center justify-between px-3 w-[118px] h-[40px]">
        <p>My Tasks</p>
        <div className={isFilterOpen ? "" : "rotate-180"}>
            <Icons.ExpandIcon width={10} height={10} color={`#4F4F4F`} />
        </div>
      </button>
      {isFilterOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[180px] bg-[#FFFFFF] border border-primary-gray-light rounded-[5px] shadow-md">
          <ul>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer border-b border-primary-gray-light">
              Personal Errands
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Urgent To-Do
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export {DropdownDelete, DropdownFilter};
