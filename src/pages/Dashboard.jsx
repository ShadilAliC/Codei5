import React, { useEffect } from "react";
import MyChart from "../components/ui/graph/UserCount";

import {
  User,
  Bell,
  HelpCircle,
  HelpingHand,
  DollarSign,
  LogOut,
} from "lucide-react";
import { getUserCount } from "../apis/apiService";

function Dashboard() {
  useEffect(()=>{
    const fetchData=async()=>{

      const res=await getUserCount();
      console.log(res,'sssssssss');
    }
    fetchData()
  },[])
  return (
    <div className="p-5 h-fit  sm:p-6 w-full">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="w-full mt-2  bg-white text-black relative rounded-[2.5em] p-8 h-48 transform transition-transform duration-400 hover:scale-95 active:scale-90 shadow-xl">
        <div className="flex flex-col h-full transition-transform duration-400 hover:scale-[0.96]">
          <div className="flex ">
            <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <p className="font-semibold pl-2 text-lg">Users.</p>
          </div>

          <h1 className="text-end text-lg font-bold">10</h1>
        </div>

        <div className="absolute inset-0 grid place-items-center pointer-events-none"></div>
      </div>
      {/* <MyChart /> */}
    </div>
  );
}

export default Dashboard;
