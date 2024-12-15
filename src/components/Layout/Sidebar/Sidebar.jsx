import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  LayoutGrid,
} from "lucide-react";
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

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-[gray-800] text-white p-1 rounded-md"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? "" : <LayoutGrid className="h-5 w-5 text-primary" />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-bodybg_color text-gray-100 font-poppins border-x shadow-xl transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40 overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex justify-between items-center">
            <img className="w-48 " src={logo} alt="Logo" />
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
            >
              <X className="h-6 w-6 text-primary" />
            </button>
          </div>
          <nav className="flex-1">
            <ul className="px-2">
              {menuItems.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.submenu ? (
                    <div className=" hover:scale-105 transition-transform duration-400">
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
                                onClick={() =>
                                  window.innerWidth < 768 &&
                                  setIsSidebarOpen(false)
                                }
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
                      onClick={() =>
                        window.innerWidth < 768 && setIsSidebarOpen(false)
                      }
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
