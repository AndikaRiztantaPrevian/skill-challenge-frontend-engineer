import React, { useState } from "react";
import Icons from "../icon/Icons";

const ModalInbox = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isOpen]);

  const handleContactClick = () => {
    setIsChatOpen(true);
  };

  const handleBackClick = () => {
    setIsChatOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="mb-16 w-2/5 h-3/4">
      <div className="w-full h-full rounded-md shadow-md relative bg-[#FFFFFF]">
        {/* Loading */}
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div>
              <Icons.LoadingIcon width={86} height={86} color={`#C4C4C4`} />
            </div>
            <div>
              <p className="animate-pulse">Loading Chats ...</p>
            </div>
          </div>
        ) : isChatOpen ? (
          // Chat Menu
          <div className="h-1/6 py-[24px] px-[32px] flex items-center border-b-[1px] border-primary-gray-light">
            <div>
              <button
                className="text-primary-blue mb-4"
                onClick={handleBackClick}
              >
                <Icons.ArrowXIcon width={32} height={31} color={`#4F4F4F`} />
              </button>
            </div>
            <div className="">
              {/* Chat content goes here */}
              <p>Chat with [Contact Name]</p>
              <p>3 Participants</p>
            </div>
          </div>
        ) : (
          // Contact List
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
                <div className="cursor-pointer flex items-center justify-between" onClick={handleContactClick} >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalInbox;
