import React from "react";
import {
  User,
  Bell,
  HelpCircle,
  HelpingHand,
  DollarSign,
  LogOut,
} from "lucide-react";

function ProfileMenu() {
  return (
    <div className="absolute right-0 w-48 bg-white rounded-md  shadow-2xl py-1 p-2  z-10 font-poppins">
      <div className="flex items-center p-4 gap-2 border-b">
        <img
          className="w-8 h-8 rounded-full"
          src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
          alt="Rounded avatar"
        />
        <h3 className="text-lg font-semibold">Admin</h3>
      </div>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-primary hover:bg-gray-100  rounded-md "
      >
        <User className="w-5 h-5 mr-2" />
        Profile Details
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-primary hover:bg-gray-100 rounded-md"
      >
        <Bell className="w-5 h-5 mr-2" />
        Notifications
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-primary hover:bg-gray-100 rounded-md "
      >
        <HelpCircle className="w-5 h-5 mr-2" />
        Help
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-primary hover:bg-gray-100 rounded-md "
      >
        <HelpingHand className="w-5 h-5 mr-2" />
        FAQ
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-primary hover:bg-gray-100 rounded-md "
      >
        <DollarSign className="w-5 h-5 mr-2" />
        Pricing
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-md text-red-500 bg-[#f0ced2] hover:bg-gray-100 rounded-md "
      >
        <LogOut className="w-5 h-5 mr-2" />
        Log Out
      </a>
    </div>
  );
}

export default ProfileMenu;
