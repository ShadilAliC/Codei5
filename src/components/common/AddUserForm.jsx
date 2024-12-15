import React from "react";
import { useForm, Controller } from "react-hook-form";
import { AddUser } from "../../apis/apiService";

const AddUserForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await AddUser(data);
      console.log(response, "sss");
    } catch (err) {
      console.log(err);
    }

    onClose();
  };
  const roles = [
    { id: "64f7b9eac9ab4c0123456789", name: "Admin" },
    { id: "64f7b9eac9ab4c0123456790", name: "User" },
    { id: "64f7b9eac9ab4c0123456791", name: "Manager" },
  ];
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen p-10  bg-pri4 bg-opacity-50">
        <div className="relative p-4 w-full max-w-xl">
          <div className="relative bg-white rounded-lg shadow max-h-[90svh] overflow-auto  dark:bg-gray-700  hidescroll">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-primary dark:text-white">
                Add New User
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4 font-poppins">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-primary dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      placeholder="Enter your First Name"
                      className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:primborder-primary focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-primary dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      placeholder="Enter you Last Name"
                      className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:primborder-primary focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="font-poppins">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-primary dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Enter your Email"
                    className="bg-gray-50 border border-gray-300 font-poppins text-primary text-sm rounded-lg focus:[rgba(var(--primary),1)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-[rgba(var(--primary),1)] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="font-poppins">
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-primary dark:text-white"
                  >
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    {...register("mobile", {
                      required: "Mobile number is required",
                    })}
                    placeholder="Enter your Mobile Number"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:[rgba(var(--primary),1)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-[rgba(var(--primary),1)] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
                <div className="font-poppins">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-primary dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: 8,
                    })}
                    placeholder="Enter you Password"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:[rgba(var(--primary),1)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-[rgba(var(--primary),1)] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full  items-center gap-1.5 font-poppins">
                  <label
                    htmlFor="picture"
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Picture
                  </label>
                  <input
                    id="image"
                    {...register("image")}
                    type="file"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                  />
                </div>

                <div className="font-poppins">
                  <label
                    htmlFor="designation"
                    className="block mb-2 text-sm font-medium text-primary dark:text-white"
                  >
                    Designation
                  </label>
                  <input
                    id="designation"
                    {...register("designation", {
                      required: "Designation is required",
                    })}
                    placeholder="Enter your Designation"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:[rgba(var(--primary),1)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-[rgba(var(--primary),1)] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.designation.message}
                    </p>
                  )}
                </div>
                <div className="font-poppins">
                  <label
                    htmlFor="date_of_joining"
                    className="block mb-2 text-sm font-medium text-primary dark:text-white"
                  >
                    Date of Joining
                  </label>
                  <input
                    id="date_of_joining"
                    type="date"
                    {...register("date_of_joining", {
                      required: "Date of joining is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:[rgba(var(--primary),1)] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)] focus:border-[rgba(var(--primary),1)] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  {errors.date_of_joining && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.date_of_joining.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="relative flex items-center font-poppins">
                    <input
                      id="status"
                      type="checkbox"
                      {...register("status")}
                      className="peer h-4 w-4 appearance-none border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-[rgba(var(--primary),0.5)]"
                    />
                    <svg
                      className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block stroke-white left-0.5 top-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <label
                    htmlFor="status"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Active
                  </label>
                </div>

                <div className="font-poppins">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <Controller
                    name="role"
                    control={control}
                    rules={{ required: "Role is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        id="role"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white appearance-none"
                      >
                        <option
                          value=""
                          className="bg-gray-50 dark:bg-gray-600"
                        >
                          Select a role
                        </option>
                        {roles.map((role) => (
                          <option
                            className="bg-gray-50 dark:bg-gray-600"
                            key={role.id}
                            value={role.id}
                          >
                            {role.name}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end items-end gap-3">
                  <button
                    onClick={onClose}
                    type="button"
                    className="flex items-center justify-center text-primary hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    className="flex items-center justify-center px-8 text-white bg-btn_bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
