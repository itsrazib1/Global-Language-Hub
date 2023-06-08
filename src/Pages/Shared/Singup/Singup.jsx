import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authprovider';


const Singup = () => {
  const {createUser} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    photoURL: '',
    gender: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password , confirmPassword, photoURL, gender, phoneNumber, address } = formData;
    createUser(email, password , confirmPassword, photoURL, gender, phoneNumber, address)
      .then(() => {
        console.log('User created successfully!');
      })
      .catch((error) => {
        console.log('Error creating user:', error);
      });
    console.log(formData);
  };

  return (
    <div className='md:flex my-10 sm:block '>
        <div className='md:w-[40%] mt-10'>
            <img src="https://cengage.force.com/resource/1607465003000/loginIcon" alt="" />
        </div>
<div className=" md:w-[60%] max-w-md mx-auto rounded-xl mt-10 ">
      <form onSubmit={handleSubmit} className="bg-sky-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">


        {/*  */}
        <div className='flex gap-4'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
       {/*  */}

       {/*  */}
       <div className='flex gap-4'>
       <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
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
       {/*  */}
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="photoURL"
            id="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter the URL of your photo"
          />
        </div>
        {/*  */}
        <div className='flex gap-4'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
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
        {/*  */}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
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
            Sing Up
          </button>
          
        </div>
        <div className='ms-20 btn mt-3'>
        <button className='flex '>
            <img className='w-6 me-3' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="" />
            <p className='mt-1'>Sing UP With Google</p>
          </button>
        </div>
        <p className="text-gray-600 ms-20">
          Alredy ahve an account?{' '}
          <Link to='/login' className="text-blue-500">
            Login 
          </Link>
        </p>
      </form>
    </div>
    </div>
    
  );
};

export default Singup;
