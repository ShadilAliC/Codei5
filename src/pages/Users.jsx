import React, { useEffect, useState } from "react";
import { getUsers } from "../apis/apiService";
import AddUserForm from "../components/common/AddUserForm";
import Modal from "../components/common/Modal";
import login from "../assets/images/login.png";
import { Plus, Search } from "lucide-react";
import Pagination from "../components/common/Pagination";

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "+1 234 567 8901",
    image: "/placeholder.svg?height=50&width=50",
    designation: "Software Engineer",
    dateOfJoining: "2023-01-15",
    status: "Active",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    mobile: "+1 987 654 3210",
    image: "/placeholder.svg?height=50&width=50",
    designation: "Product Manager",
    dateOfJoining: "2022-11-01",
    status: "Block",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    mobile: "+1 555 123 4567",
    image: "/placeholder.svg?height=50&width=50",
    designation: "UX Designer",
    dateOfJoining: "2023-03-20",
    status: "Active",
  },
];

function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(10);
  const options = [10, 100, 200];

  const handleValueChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedValue(value);
    onValueChange(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const Response = await getUsers();
      console.log(Response, "ssss");
    };
    fetchData();
  }, []);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-5 sm:p-6 w-screen sm:w-full ">
      <h1 className="text-2xl font-poppins uppercase  text-primary font-semibold  mb-1">
        Users
      </h1>
      <div className=" border rounded-md shadow-sm">
        <div className="w-full flex justify-between items-center p-4 mb-2 font-poppins">
          <div className="relative inline-block text-left">
            <select
              value={selectedValue}
              onChange={handleValueChange}
              className="custom-select block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option} per page
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="text-gray-500 w-5 h-5" />
              </span>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),1)] focus:border-transparent"
                placeholder="Search..."
              />
            </div>
            <button
              onClick={openModal}
              type="button"
              className="relative w-[100px] h-[37px] cursor-pointer rounded-md flex items-center border border-btn_bg bg-btn_bg transition-all duration-300 hover:bg-btnborder-btn_bg active:border-primary active:bg-primary"
            >
              <span className="text-white font-semibold translate-x-[20px] transition-all duration-300 hover:text-transparent">
                Add
              </span>
              <span className="absolute h-full w-[20px] bg-btn_bg border-btn_bg flex items-center justify-center translate-x-[70px] transition-all duration-300 hover:w-[98px] hover:translate-x-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  className="w-[18px] stroke-white"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="relative shadow-lg border sm:rounded-lg overflow-x-auto ">
          <table className="w-full min-w-[800px] text-sm text-left text-primary dark:text-gray-400">
            <thead className="text-[14px] text-primary  bg-gray-100 dark:bg-gray-700 dark:text-gray-400 font-poppins">
              <tr>
                <th scope="col" className="px-4 py-3  ">
                  No
                </th>
                <th scope="col" className="px-4 py-3  ">
                  First Name
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Last Name
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Email
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Mobile
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Image
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Designation
                </th>
                <th scope="col" className="px-4 py-3 ">
                  Date Of Joining
                </th>

                <th scope="col" className="px-3 py-3 ">
                  Status
                </th>
                <th scope="col" className="px-2 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="bg-white border-b text-[13px] text-gray-500 font-poppins dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-2 ">{index + 1}</td>

                  <td className="px-4 py-2 ">{user.firstName}</td>
                  <td className="px-4 py-3 ">{user.lastName}</td>
                  <td className="px-4 py-3 ">{user.email}</td>
                  <td className="px-4 py-3 ">{user.mobile}</td>
                  <td className="px-4 py-3 ">
                    <img
                      src={login}
                      alt={`${user.firstName} ${user.lastName}`}
                      className=" w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3 ">{user.designation}</td>
                  <td className="px-4 py-3 ">{user.dateOfJoining}</td>
                  <td className="px-2 py-3 ">
                    <span
                      className={`px-2 py-0 rounded-md  text-xs ${
                        user.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      <button className=" bg-btn_bg text-xs text-white rounded-md px-2 py-1">
                        Edit
                      </button>
                      <button className=" bg-red-500 text-xs text-white rounded-md px-2 py-1">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <Pagination/>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddUserForm onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default Users;
