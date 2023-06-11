import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import Swal from "sweetalert2";
import Sociallogin from "../SocialLogin/Sociallogin";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoURL: "",
    gender: "",
    phoneNumber: "",
    address: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      confirmPassword,
      photoURL,
      gender,
      phoneNumber,
      address,
    } = formData;

    if (email.trim() === "" || password.trim() === "") {
      console.log("Email and password cannot be empty");
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Email and password cannot be empty",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Passwords do not match",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long, contain a capital letter, and a special character."
      );
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title:
          "Password must be at least 6 characters long, contain a capital letter, and a special character.",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const userData = {
      name,
      email,
      photoURL,
      phoneNumber,
      address,
      gender,
    };

    createUser(email, password,name,photoURL, userData)
      .then(() => {
        const saveUser = {name:name,email:email}
        fetch("http://localhost:5000/users",{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json() )
        .then(data => {
          if(data.insertedId){
            alert ("User created successfully!")
          }
        })

        console.log("User created successfully!");
      })

      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  return (
    <div className="md:flex my-10 sm:block">
      <div className="md:w-[40%] mt-10">
        <img
          src="https://cengage.force.com/resource/1607465003000/loginIcon"
          alt=""
        />
      </div>
      <div className="md:w-[60%] max-w-md mx-auto rounded-xl mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Password error message */}
          {passwordError && (
            <p className="text-red-500 text-sm mb-4">{passwordError}</p>
          )}

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="photoURL"
            id="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter the URL of your photo"
          />

          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter your gender"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>

          <div className="ms-20 btn mt-3">
            <Sociallogin></Sociallogin>
          </div>

          <p className="mt-9   text-gray-600 ms-20">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
