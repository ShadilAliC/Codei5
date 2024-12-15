import React from "react";
import { useForm } from "react-hook-form";
import { adminLogin } from "../../apis/apiService";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const loginResponse = await adminLogin(data);
      if (loginResponse.status == 200) {
        localStorage.setItem(
          "AccessToken",
          loginResponse.data.data.bearer_token
        );
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-md font-poppins font-medium text-primary"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 text-sm bg-bodybg_color border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-[rgba(var(--primary),1)]"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2 ">
        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className="block text-md font-poppins  font-medium text-primary leading-[1.5]"
          >
            Password
          </label>
          <a
            href="#"
            className="text-sm text-primary focus:outline-none font-poppins"
          >
            Forgot Password?
          </a>
        </div>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-[rgba(var(--primary),1)]"
          placeholder="Enter your Password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            {...register("rememberMe")}
            className="peer h-4 w-4 appearance-none border border-gray-300 rounded bg-white checked:bg-primary checked:border-pribg-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
          htmlFor="remember-me"
          className="ml-2 block text-sm text-[rgba(var(--secondary),1)]"
        >
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-btn_bg hover:bg-btn_bg/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Sign In
      </button>

      <p className="text-sm text-gray-600 ">
        Don't Have Your Account yet?{" "}
        <a
          href="#"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}

export default LoginForm;
