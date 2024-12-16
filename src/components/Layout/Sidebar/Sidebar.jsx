import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, ChevronDown, ChevronUp, X, LayoutGrid } from 'lucide-react';
import logo from "../../../assets/images/codei5-logo.png";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
    submenu: [
      { title: "Overview", path: "/" },
      { title: "Analytics", path: "/analytics" },
    ],
  },
  {
    title: "Users",
    icon: Users,
    path: "/users",
    submenu: [
      { title: "All Users", path: "/users" },
      { title: "Add User", path: "/users/add" },
      { title: "User Roles", path: "/users/roles" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
    submenu: [
      { title: "General", path: "/settings/general" },
      { title: "Security", path: "/settings/security" },
      { title: "Notifications", path: "/settings/notifications" },
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        toggleSidebar(true);
      } else {
        toggleSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-full h-full bg-primary bg-opacity-5 text-gray-100 font-poppins shadow-xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center">
            <img className="w-48" src={logo} alt="Logo" />
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => toggleSidebar(false)}
              aria-label="Close Sidebar"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="px-2">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.submenu ? (
                    <div className="hover:scale-105 transition-transform duration-400">
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-md transition-colors duration-200 ${
                          openSubmenu === item.title
                            ? "bg-primary text-white"
                            : "text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        <span className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3" />
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        </span>
                        {openSubmenu === item.title ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      {openSubmenu === item.title && (
                        <ul className="mt-2 space-y-1 ml-6">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                                  location.pathname === subItem.path
                                    ? "bg-primary text-white"
                                    : "text-primary hover:bg-primary hover:text-white"
                                }`}
                                onClick={() => window.innerWidth < 768 && toggleSidebar(false)}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path || "#"}
                      className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "bg-primary text-white"
                          : "text-gray-300 hover:bg-[rgba(var(--primary),0.1)] hover:text-white"
                      }`}
                      onClick={() => window.innerWidth < 768 && toggleSidebar(false)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => toggleSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

