import { HelpCircle } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between w-screen sm:w-full  text-primary  py-3 border-t px-4 gap-2 sm:gap-0">
      <h1 className="text-sm sm:text-base text-center sm:text-left">
        Copyright © {new Date().getFullYear()} codei5. All rights reserved. V1.0.0
      </h1>
      <div className="flex items-center gap-1">
  <p className="text-sm sm:text-base text-primary cursor-pointer">
    Need Help
  </p>
  <HelpCircle className="w-4 h-4 text-primary" />
</div>

    </footer>
  );
}

export default Footer;

