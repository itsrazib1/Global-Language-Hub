import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../../Providers/Authprovider";
import Sociallogin from "../SocialLogin/Sociallogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
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
          <div className="w-64">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              />
              <span
                className="absolute mt-5 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <button
              className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4"
              onClick={handleLogin}
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
              <Sociallogin></Sociallogin>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
