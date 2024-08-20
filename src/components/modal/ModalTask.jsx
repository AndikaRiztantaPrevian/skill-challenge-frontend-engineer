import React, { useState, useEffect } from "react";
import Icons from "../icon/Icons";
import {DropdownDelete, DropdownFilter} from "../dropdown/DropdownTask";

const ModalTask = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isExpandOne, setIsExpandOne] = useState(true);
  const [isExpandTwo, setIsExpandTwo] = useState(true);
  const [isExpandThree, setIsExpandThree] = useState(true);
  const [isExpandFour, setIsExpandFour] = useState(false);
  const [isExpandFive, setIsExpandFive] = useState(false);

  const handleExpandOneOpen = () => {
    setIsExpandOne(true);
  }
  const handleExpandOneClose = () => {
    setIsExpandOne(false);
  }

  const handleExpandTwoOpen = () => {
    setIsExpandTwo(true);
  }
  const handleExpandTwoClose = () => {
    setIsExpandTwo(false);
  }

  const handleExpandThreeOpen = () => {
    setIsExpandThree(true);
  }
  const handleExpandThreeClose = () => {
    setIsExpandThree(false);
  }

  const handleExpandFourOpen = () => {
    setIsExpandFour(true);
  }
  const handleExpandFourClose = () => {
    setIsExpandFour(false);
  }

  const handleExpandFiveOpen = () => {
    setIsExpandFive(true);
  }
  const handleExpandFiveClose = () => {
    setIsExpandFive(false);
  }

  useEffect(() => {
    if (isOpen) {
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mb-16 sm:w-7/12 xl:w-2/5 h-3/4 bg-primary-blue">
        <style jsx>
            {`
                input[type="checkbox"]:checked::before {
                    content: '\\2713';
                    display: block;
                    width: 100%;
                    height: 100%;
                    color: gray;
                    text-align: center;
                    line-height: 14px;
                    font-weight: 700;
                }
            `}
        </style>
        <div className="w-full h-full rounded-md shadow-md relative bg-[#FFFFFF]">
            <div className="h-full overflow-hidden py-[24px] px-[32px]">
                <div className="flex w-full mb-[20px] justify-between">
                    <div className="w-[290px] flex justify-center">
                        <DropdownFilter />
                    </div>
                    <div className="">
                        <button id="buttonFormRepeater" type="button" className="bg-primary-blue font-latoBold text-[#FFFFFF] text-sm w-[100px] h-[40px] rounded-[5px]">New Task</button>
                    </div>
                </div>
                {isLoading ? (
                    <>
                        <div className="flex flex-col justify-center items-center h-full w-full">
                            <div>
                                <Icons.LoadingIcon width={86} height={86} color={`#C4C4C4`} />
                            </div>
                            <div>
                                <p className="animate-pulse">Loading Chats ...</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="max-h-full overflow-y-auto pe-1">
                            <div className="border-b-[1px] border-primary-gray pb-[20px]">
                                {isExpandOne ? (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Close off Case #012920- RODRIGUES, Amiguel</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">2 Days Left</p>
                                                <p>12/06/2021</p>
                                                <button className="mt-[6px]" onClick={handleExpandOneClose} type="button"><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                        <div className="body-form">
                                            <div className="flex items-center px-7 mb-[13px]">
                                                <Icons.ClockIcon width={20} height={20} color={`#2F80ED`} />
                                                <input type="date" className="w-[193px] h-[40px] px-2 ms-[18px] text-primary-gray-darken border-[1px] border-primary-gray-light rounded-[5px]" defaultValue="2021-06-12"/>
                                            </div>
                                            <div className="flex px-7">
                                                <div>
                                                    <Icons.PencilIcon width={15} height={15} color={`#2F80ED`} />
                                                </div>
                                                <textarea type="text" className="ms-[23px] text-primary-gray-darken text-sm w-full h-fit outline-[1px] outline-primary-gray-light">Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!</textarea>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Close off Case #012920- RODRIGUES, Amiguel</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">2 Days Left</p>
                                                <p>12/06/2021</p>
                                                <button onClick={handleExpandOneOpen} type="button" className={isExpandOne ? "" : "rotate-180 mt-[6px]"}><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="border-b-[1px] border-primary-gray py-[20px]">
                                {isExpandTwo ? (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">4 Days Left</p>
                                                <p>14/06/2021</p>
                                                <button className="mt-[6px]" onClick={handleExpandTwoClose} type="button"><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                        <div className="body-form">
                                            <div className="flex items-center px-7 mb-[13px]">
                                                <Icons.ClockIcon width={20} height={20} color={`#2F80ED`} />
                                                <input type="date" className="w-[193px] h-[40px] px-2 ms-[18px] text-primary-gray-darken border-[1px] border-primary-gray-light rounded-[5px]" defaultValue="2021-06-14"/>
                                            </div>
                                            <div className="flex px-7">
                                                <div>
                                                    <Icons.PencilIcon width={15} height={15} color={`#2F80ED`} />
                                                </div>
                                                <textarea type="text" className="ms-[23px] text-primary-gray-darken text-sm w-full h-fit outline-[1px] outline-primary-gray-light">All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.</textarea>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">4 Days Left</p>
                                                <p>14/06/2021</p>
                                                <button onClick={handleExpandTwoOpen} type="button" className={isExpandTwo ? "" : "rotate-180 mt-[6px]"}><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="border-b-[1px] border-primary-gray py-[20px]">
                                {isExpandThree ? (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Set up appointment with Dr Blake</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">10 Days Left</p>
                                                <p>22/06/2021</p>
                                                <button className="mt-[6px]" onClick={handleExpandThreeClose} type="button"><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                        <div className="body-form">
                                            <div className="flex items-center px-7 mb-[13px]">
                                                <Icons.ClockIcon width={20} height={20} color={`#2F80ED`} />
                                                <input type="date" className="w-[193px] h-[40px] px-2 ms-[18px] text-primary-gray-darken border-[1px] border-primary-gray-light rounded-[5px]" defaultValue="2021-06-22"/>
                                            </div>
                                            <div className="flex px-7">
                                                <div>
                                                    <Icons.PencilIcon width={15} height={15} color={`#2F80ED`} />
                                                </div>
                                                <textarea type="text" className="ms-[23px] text-primary-gray-darken text-sm w-full h-fit outline-[1px] outline-primary-gray-light">No Description</textarea>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" />
                                                <p className="font-latoBold max-w-[280px]">Set up appointment with Dr Blake</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                <p className="text-indicator-red">10 Days Left</p>
                                                <p>22/06/2021</p>
                                                <button onClick={handleExpandThreeOpen} type="button" className={isExpandThree ? "" : "rotate-180 mt-[6px]"}><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="border-b-[1px] border-primary-gray py-[20px]">
                                {isExpandFour ? (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" checked/>
                                                <p className="font-latoBold max-w-xs line-through text-primary-gray">Contact Mr Caleb - video conference?</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                {/* <p className="text-indicator-red">4 Days Left</p> */}
                                                <p>03/06/2021</p>
                                                <button onClick={handleExpandFourClose} type="button" className="rotate-0 mt-[6px]"><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                        <div className="body-form">
                                            <div className="flex items-center px-7 mb-[13px]">
                                                <Icons.ClockIcon width={20} height={20} color={`#2F80ED`} />
                                                <input type="date" className="w-[193px] h-[40px] px-2 ms-[18px] text-primary-gray-darken border-[1px] border-primary-gray-light rounded-[5px]" defaultValue="2021-06-03"/>
                                            </div>
                                            <div className="flex px-7">
                                                <div>
                                                    <Icons.PencilIcon width={15} height={15} color={`#2F80ED`} />
                                                </div>
                                                <textarea type="text" className="ms-[23px] text-primary-gray-darken text-sm w-full h-fit outline-[1px] outline-primary-gray-light">No Description</textarea>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" checked/>
                                                <p className="font-latoBold max-w-xs line-through text-primary-gray">Contact Mr Caleb - video conference?</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                {/* <p className="text-indicator-red">10 Days Left</p> */}
                                                <p>03/06/2021</p>
                                                <button onClick={handleExpandFourOpen} type="button" className={isExpandFour ? "" : "rotate-180 mt-[6px]"}><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="border-b-[1px] border-primary-gray py-[20px] mb-5">
                                {isExpandFive ? (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" checked/>
                                                <p className="font-latoBold max-w-xs line-through text-primary-gray">Assign 3 homework to Client A</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                {/* <p className="text-indicator-red">4 Days Left</p> */}
                                                <p>02/06/2021</p>
                                                <button onClick={handleExpandFiveClose} type="button" className="rotate-0 mt-[6px]"><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                        <div className="body-form">
                                            <div className="flex items-center px-7 mb-[13px]">
                                                <Icons.ClockIcon width={20} height={20} color={`#2F80ED`} />
                                                <input type="date" className="w-[193px] h-[40px] px-2 ms-[18px] text-primary-gray-darken border-[1px] border-primary-gray-light rounded-[5px]" defaultValue="2021-06-02"/>
                                            </div>
                                            <div className="flex px-7">
                                                <div>
                                                    <Icons.PencilIcon width={15} height={15} color={`#2F80ED`} />
                                                </div>
                                                <textarea type="text" className="ms-[23px] text-primary-gray-darken text-sm w-full h-fit outline-[1px] outline-primary-gray-light">No Description</textarea>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="header-form flex justify-between font-latoRegular text-primary-gray-darken text-sm mb-[16px]">
                                            <div className="flex gap-x-3">
                                                <input type="checkbox" className="w-[18px] h-[18px] mt-[2px] appearance-none border-[2px] border-primary-gray rounded-sm checked:bg-[#FFFFFF] checked:border-transparent focus:outline-none cursor-pointer" checked/>
                                                <p className="font-latoBold max-w-xs line-through text-primary-gray">Assign 3 homework to Client A</p>
                                            </div>
                                            <div className="flex items-start gap-x-4">
                                                {/* <p className="text-indicator-red">10 Days Left</p> */}
                                                <p>02/06/2021</p>
                                                <button onClick={handleExpandFiveOpen} type="button" className={isExpandFive ? "" : "rotate-180 mt-[6px]"}><Icons.ExpandIcon width={10} height={8} color={`#4F4F4F`} /></button>
                                                <DropdownDelete />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  );
};

export default ModalTask;
