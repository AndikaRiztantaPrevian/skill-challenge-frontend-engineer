import React, { useState } from "react";
import Icons from "../icon/Icons";
import DropdownChat from "../dropdown/DropdownChat";

const ModalInbox = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpenOne, setIsChatOpenOne] = useState(false);
  const [isChatOpenTwo, setIsChatOpenTwo] = useState(false);
  const [isChatOpenThree, setIsChatOpenThree] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isOpen]);

  const handleContactClick = () => {
    setIsChatOpenOne(true);
  };

  const handleBackClick = () => {
    setIsChatOpenOne(false);
  };

  const handleContactClickTwo = () => {
    setIsChatOpenTwo(true);
  };

  const handleBackClickTwo = () => {
    setIsChatOpenTwo(false);
  };

  const handleContactClickThree = () => {
    setIsChatOpenThree(true);
  };

  const handleBackClickThree = () => {
    setIsChatOpenThree(false);
  };

  if (!isOpen) return null;

  return (
    <div className="mb-16 w-2/5 h-3/4">
      <div className="w-full h-full rounded-md shadow-md relative bg-[#FFFFFF]">
        {/* Loading */}
        {isChatOpenOne ? (
          <>
            <div className="h-full flex flex-col">
              {/* Chat Menu Header */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-5 xl:px-[32px] flex items-center border-b-[1px] border-primary-gray-light">
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button onClick={handleBackClick}>
                    <Icons.ArrowXIcon width={24} height={24} color={`#4F4F4F`} />
                  </button>
                </div>
                <div className="modal-header w-full mx-3">
                  <div className="max-w-xs xl:max-w-xl">
                    <p className="font-latoBold sm:text-[14px] xl:text-[16px] text-primary-blue truncate">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
                  </div>
                  <p className="font-latoRegular sm:text-[12px] xl:text-[14px]">3 Participants</p>
                </div>
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button>
                    <Icons.CloseIcon width={14} height={14} color={`#4F4F4F`} />
                  </button>
                </div>
              </div>
              {/* Bubble Message */}
              <div className="chat-container w-full flex-grow overflow-y-auto px-[24px] py-2">
                {/* Chat Content */}
                {/* Chat Right */}
                <div className="chat-content flex flex-col items-end">
                  <div className="name font-latoBold text-chats-purple text-[14px] mb-1">You</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-chats-purple-light ms-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">No worries. It will be completed ASAP. I’ve asked him yesterday.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Indicator Date */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex-1 border-t-[1px] border-primary-gray-darken"></div>
                  <p className="font-latoBold text-primary-gray-darken">Today June 09, 2021</p>
                  <div className="flex-1 border-t-[1px] border-primary-gray-darken"></div>
                </div>
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">Mary Hilda</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-orange-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Chat Right */}
                <div className="chat-content flex flex-col items-end mb-2">
                  <div className="name font-latoBold text-chats-purple text-[14px] mb-1">You</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-chats-purple-light ms-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">Mary Hilda</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-orange-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Sure thing, Claren</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Indicator New Message */}
                <div className="flex items-center space-x-4 py-4">
                  <div className="flex-1 border-t-[1px] border-indicator-red"></div>
                  <p className="font-latoBold text-indicator-red">New Message</p>
                  <div className="flex-1 border-t-[1px] border-indicator-red"></div>
                </div>
                {/* Chat Left */}
                <div className="chat-content flex flex-col">
                  <div className="name font-latoBold text-chats-green text-[14px] mb-1">Obaidullah Amarkhil</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-green-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Morning. I’ll try to do them. Thanks</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
              </div>
              {/* Message Input */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-5 xl:px-[32px] flex justify-between items-center">
                <div className="w-[84%] grid">
                  <input type="text" className="border border-solid border-primary-gray rounded-[5px] h-[40px] px-3" placeholder="Type a new message"/>
                </div>
                <div className="w-[14%] grid h-full">
                  <button className="font-latoRegular text-[#FFFFFF] bg-primary-blue rounded-[5px] h-[40px]">Send</button>
                </div>
              </div>
            </div>
          </>
        ) : isChatOpenTwo ? (
          <>
            <div className="h-full flex flex-col">
              {/* Chat Menu Header */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-5 xl:px-[32px] flex items-center border-b-[1px] border-primary-gray-light">
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button onClick={handleBackClickTwo}>
                    <Icons.ArrowXIcon width={24} height={24} color={`#4F4F4F`} />
                  </button>
                </div>
                <div className="modal-header w-full mx-3">
                  <div className="max-w-xs xl:max-w-xl">
                    <p className="font-latoBold sm:text-[14px] xl:text-[16px] text-primary-blue truncate">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
                  </div>
                  <p className="font-latoRegular sm:text-[12px] xl:text-[14px]">3 Participants</p>
                </div>
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button>
                    <Icons.CloseIcon width={14} height={14} color={`#4F4F4F`} />
                  </button>
                </div>
              </div>
              {/* Bubble Message */}
              <div className="chat-container w-full flex-grow overflow-y-auto px-[24px] py-2">
                {/* Chat Content */}
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">Mary Hilda</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-orange-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Just Fill me in for his updates yea?</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Chat Right */}
                <div className="chat-content flex flex-col items-end mb-2">
                  <div className="name font-latoBold text-chats-purple text-[14px] mb-1">You</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-chats-purple-light ms-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">No worries. It will be completed ASAP. I’ve asked him yesterday.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Indicator Date */}
                <div className="flex items-center space-x-4 pt-4 mb-2">
                  <div className="flex-1 border-t-[1px] border-primary-gray-darken"></div>
                  <p className="font-latoBold text-primary-gray-darken">Today June 09, 2021</p>
                  <div className="flex-1 border-t-[1px] border-primary-gray-darken"></div>
                </div>
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">Mary Hilda</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-orange-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Chat Right */}
                <div className="chat-content flex flex-col items-end mb-2">
                  <div className="name font-latoBold text-chats-purple text-[14px] mb-1">You</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-chats-purple-light ms-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">Mary Hilda</div>
                  <div className="flex flex-row">
                    <div className="bg-chats-orange-light me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Sure thing, Claren</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
                {/* Indicator New Chat */}
                <div className="flex justify-center items-center">
                  <div className="bg-stikers-blue text-primary-blue rounded-[5px] font-latoBold px-3 py-1">
                    New Message
                  </div>
                </div>
              </div>
              {/* Message Input */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-5 xl:px-[32px] flex justify-between items-center">
                <div className="w-[84%] grid">
                  <input type="text" className="border border-solid border-primary-gray rounded-[5px] h-[40px] px-3" placeholder="Type a new message"/>
                </div>
                <div className="w-[14%] grid h-full">
                  <button className="font-latoRegular text-[#FFFFFF] bg-primary-blue rounded-[5px] h-[40px]">Send</button>
                </div>
              </div>
            </div>
          </>
        ) : isChatOpenThree ? (
          <>
            <div className="h-full flex flex-col">
              {/* Chat Menu Header */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-5 xl:px-[32px] flex items-center border-b-[1px] border-primary-gray-light">
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button onClick={handleBackClickThree}>
                    <Icons.ArrowXIcon width={24} height={24} color={`#4F4F4F`} />
                  </button>
                </div>
                <div className="modal-header w-full mx-3">
                  <div className="max-w-xs xl:max-w-xl">
                    <p className="font-latoBold sm:text-[14px] xl:text-[16px] text-primary-blue truncate">FastVisa Support</p>
                  </div>
                </div>
                <div className="w-[4%] h-full flex justify-center items-center">
                  <button>
                    <Icons.CloseIcon width={14} height={14} color={`#4F4F4F`} />
                  </button>
                </div>
              </div>
              {/* Bubble Message */}
              <div className="chat-container w-full flex-grow overflow-y-auto px-[24px] py-2">
                {/* Chat Content */}
                {/* Chat Left */}
                <div className="chat-content flex flex-col mb-2">
                  <div className="name font-latoBold text-chats-orange text-[14px] mb-1">FastVisa Support</div>
                  <div className="flex flex-row">
                    <div className="bg-[#F8F8F8F8] me-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    {/* <div>
                      <DropdownChat />
                    </div> */}
                  </div>
                </div>
                {/* Chat Right */}
                <div className="chat-content flex flex-col items-end">
                  <div className="name font-latoBold text-chats-purple text-[14px] mb-1">You</div>
                  <div className="flex flex-row-reverse">
                    <div className="bg-chats-purple-light ms-2 px-2 py-1 font-latoRegular text-primary-gray-darken rounded-[5px]">
                      <div className="text-[14px] mb-1 max-w-lg">Hi, I need help with something can you help me ?</div>
                      <div className="text-[12px]">19:32</div>
                    </div>
                    <div>
                      <DropdownChat />
                    </div>
                  </div>
                </div>
              </div>
               {/* Indicator New Chat */}
               <div className="flex justify-center items-center sm:px-[24px] xl:px-[20px]">
                  <div className="bg-stikers-blue text-primary-gray-darken rounded-[5px] font-latoBold px-3 py-2 w-full flex items-center">
                    <Icons.LoadingIcon width={30} height={30} color={`#2F80ED`}/>
                    <p className="ms-3 sm:text-[12px] xl:text-[14px]">Please wait while we connect you with one of our team ...</p>
                  </div>
                </div>
              {/* Message Input */}
              <div className="w-full sm:py-[24px] xl:py-[16px] sm:px-[24px] xl:px-[20px] flex justify-between items-center">
                <div className="w-[84%] grid">
                  <input type="text" className="border border-solid border-primary-gray rounded-[5px] h-[40px] px-3" placeholder="Type a new message"/>
                </div>
                <div className="w-[14%] grid h-full">
                  <button className="font-latoRegular text-[#FFFFFF] bg-primary-blue rounded-[5px] h-[40px]">Send</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Contact List */}
            <div className="h-full overflow-hidden py-[24px] px-[32px]">
              <div className="flex items-center sm:max-h-full border-[1px] border-primary-gray px-16 py-[2px] rounded-[5px]">
                <div className="w-full grid">
                  <input type="text" placeholder="Search" className="outline-none"/>
                </div>
                <div>
                  <button>
                    <Icons.SearchIcon width={12} height={12} color={`#333333`}/>
                  </button>
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
                <div className="sm:max-h-full overflow-y-auto">
                  {/* Contact List */}
                  <div className="py-[22px] border-b-[1px] border-primary-gray">
                    <div className="cursor-pointer flex items-center justify-between" onClick={handleContactClick} >
                      {/* Photo Profile */}
                      <div id="photo-profile" className="flex justify-center -space-x-5 w-16">
                        <div class="bg-primary-white w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#8A8A8A`}/>
                        </div>
                        <div class="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#FFFFFF`}/>
                        </div>
                      </div>
                      <div className="sm:w-[75%] xl:w-10/12">
                        <div id="chat-content" className="flex">
                          <div id="username" className="font-latoBold text-primary-blue sm:text-[13px] xl:text-[16px] me-3 max-w-[67%]">109220-Naturalization</div>
                          <div id="time" className="font-latoRegular text-primary-gray-darken sm:text-[9px] xl:text-[14px] mt-[3px]">January 1,2021 19:10</div>
                        </div>
                        <div id="chat-detail">
                          <div id="username" className="font-latoBold sm:text-[12px] xl:text-[14px]">Cameron Phillips :</div>
                          <div id="message" className="font-latoRegular text-primary-gray-darken sm:text-[12px] xl:text-[14px]">Please check this out!</div>
                        </div>
                      </div>
                      {/* Indicator Notification */}
                      <div className="w-2 h-2">
                          <div className="w-2 h-2 bg-indicator-red rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="py-[22px] border-b-[1px] border-primary-gray">
                    <div className="cursor-pointer flex items-center justify-between" onClick={handleContactClickTwo} >
                      {/* Photo Profile */}
                      <div id="photo-profile" className="flex justify-center -space-x-5 w-16">
                        <div class="bg-primary-white w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#8A8A8A`}/>
                        </div>
                        <div class="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#FFFFFF`}/>
                        </div>
                      </div>
                      <div className="sm:w-[75%] xl:w-10/12">
                        <div id="chat-content" className="flex">
                          <div id="username" className="font-latoBold text-primary-blue sm:text-[13px] xl:text-[16px] me-3 max-w-[67%]">Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]</div>
                          <div id="time" className="font-latoRegular text-primary-gray-darken sm:text-[9px] xl:text-[14px] mt-[3px]">02/06/2021 10:45</div>
                        </div>
                        <div id="chat-detail">
                          <div id="username" className="font-latoBold sm:text-[12px] xl:text-[14px]">Ellen :</div>
                          <div id="message" className="font-latoRegular text-primary-gray-darken sm:text-[12px] xl:text-[14px]">Hey, please read.</div>
                        </div>
                      </div>
                      {/* Indicator Notification */}
                      <div className="w-2 h-2">
                          {/* <div className="w-2 h-2 bg-indicator-red rounded-full"></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="py-[22px] border-b-[1px] border-primary-gray">
                    <div className="cursor-pointer flex items-center justify-between" onClick={handleContactClickTwo} >
                      {/* Photo Profile */}
                      <div id="photo-profile" className="flex justify-center -space-x-5 w-16">
                        <div class="bg-primary-white w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#8A8A8A`}/>
                        </div>
                        <div class="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center">
                          <Icons.PersonIcon width={18} height={18} color={`#FFFFFF`}/>
                        </div>
                      </div>
                      <div className="sm:w-[75%] xl:w-10/12">
                        <div id="chat-content" className="flex">
                          <div id="username" className="font-latoBold text-primary-blue sm:text-[13px] xl:text-[16px] me-3 max-w-[67%]">8405-Diana SALAZAR MUNGUIA</div>
                          <div id="time" className="font-latoRegular text-primary-gray-darken sm:text-[9px] xl:text-[14px] mt-[3px]">01/06/2021 12:19</div>
                        </div>
                        <div id="chat-detail">
                          <div id="username" className="font-latoBold sm:text-[12px] xl:text-[14px]">Cameron Phillips :</div>
                          <div id="message" className="font-latoRegular text-primary-gray-darken sm:text-[12px] xl:text-[14px]">I understand your initial concerns and thats very valid, Elizabeth. But you ...</div>
                        </div>
                      </div>
                      {/* Indicator Notification */}
                      <div className="w-2 h-2">
                          {/* <div className="w-2 h-2 bg-indicator-red rounded-full"></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="py-[22px] border-b-[1px] border-primary-gray">
                    <div className="cursor-pointer flex items-center justify-between" onClick={handleContactClickThree} >
                      {/* Photo Profile */}
                      <div id="photo-profile" className="flex justify-center -space-x-5 w-16">
                        <div class="bg-primary-blue w-10 h-10 rounded-full flex justify-center items-center text-[#FFFFFF] font-latoBold">
                          F
                        </div>
                      </div>
                      <div className="sm:w-[75%] xl:w-10/12">
                        <div id="chat-content" className="flex">
                          <div id="username" className="font-latoBold text-primary-blue sm:text-[13px] xl:text-[16px] me-3 max-w-[67%]">FastVisa Support</div>
                          <div id="time" className="font-latoRegular text-primary-gray-darken sm:text-[9px] xl:text-[14px] mt-[3px]">01/06/2021 12:19</div>
                        </div>
                        <div id="chat-detail">
                          <div id="message" className="font-latoRegular text-primary-gray-darken sm:text-[12px] xl:text-[14px]">Hey there! Welcome to your inbox.</div>
                        </div>
                      </div>
                      <div>
                        {/* Indicator Notification */}
                        <div className="w-2 h-2">
                          {/* <div className="w-2 h-2 bg-indicator-red rounded-full"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalInbox;
