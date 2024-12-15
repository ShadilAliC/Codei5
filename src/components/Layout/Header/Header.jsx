import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import ProfileMenu from "../../Profile/ProfileMenu";
import { LayoutGrid } from "lucide-react";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="bg-body_color w-full shadow-md  sticky top-0 z-20 py-3">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <div className="w-full flex  items-center ">

      <LayoutGrid className=""/>
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <>
              
              {/* <LayoutGrid /> */}
        
                      {/* <XMarkIcon className="h-6 w-6" /> */}
              </>
            ) : (
              <></>
              // <LayoutGrid className="h-6 w-6" />
            )}
          </button>

          <div className="flex-1 max-w-lg mx-4  relative mb-3 sm:mb-0 ">
            <div className="w-full flex justify-end items-center">
              <button
                className="md:hidden pt-1.5 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleSearch}
                aria-label="Toggle Search"
              >
               {!isSearchVisible? <MagnifyingGlassIcon className="h-5 w-5" />:  <button
                className="md:hidden absolute right-3 mt-[19px] transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={toggleSearch}
                aria-label="Close Search"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>} 
              </button>
            </div>
            <div
              className={`md:block ${
                isSearchVisible ? "block" : "hidden"
              } absolute inset-0 md:relative`}
            >
              <input
      type="text"
      name="text"
      placeholder="Search here..."
      className="w-full max-w-[420px] h-[45px] p-[12px] rounded-[8px] border border-light-gray outline-none transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0px_0px_20px_-18px_rgba(0,0,0,0.25)] 
        hover:border-[2px] hover:shadow-[0px_0px_20px_-17px_rgba(0,0,0,0.25)]
        active:scale-[0.95]
        focus:border-primary"
    />
              {/* <MagnifyingGlassIcon className="h-5 w-5  text-gray-400 absolute left-3 top-[20px] transform -translate-y-1/2" /> */}
              {/* <button
                className="md:hidden absolute right-3 mt-[19px] transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={toggleSearch}
                aria-label="Close Search"
              >
                <XMarkIcon className="h-5 w-5" />
              </button> */}
            </div>
          </div>
          </div>
          

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <BellIcon className="h-6 w-6" />
              </button>
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Notification 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Notification 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Notification 3
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none transition-transform hover:scale-110 hover:shadow-custom"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
                  alt="Rounded avatar"
                />
              </button>
              {isProfileOpen && <ProfileMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
