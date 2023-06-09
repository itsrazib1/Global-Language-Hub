import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../../Providers/Authprovider";
import { useForm } from "react-hook-form";
import Sociallogin from "../SocialLogin/Sociallogin";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Global Language Hub | Login</title>
      </Helmet>
      <div className="md:flex flex-row text-center">
        <div className="md:w-[50%] justify-center mt-16">
          <img src="../../../../public/img/ielts.jpg" alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col text-center bg-sky-100 items-center justify-center h-[500px]">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="w-64" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-4">Email is required</p>
            )}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-4">Password is required</p>
              )}
              <span
                className="absolute mt-5 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button
              className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4"
              type="submit"
            >
              Login
            </button>
            <p className="text-gray-600">
              Dont have an account? <br />
              <Link to="/signup" className="text-blue-500">
                Register here
              </Link>
            </p>
            <button className="flex btn mx-auto mt-8">
              <Sociallogin />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
