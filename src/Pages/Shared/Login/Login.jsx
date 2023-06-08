import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Providers/Authprovider';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {singIn} = useContext(AuthContext) ;

  const handleLogin = (event) => {
    event.preventDefault();
    const emailValue = email; // Use the 'email' state value instead of 'form.email.value'
    const passwordValue = password; // Use the 'password' state value instead of 'form.password.value'
    console.log(emailValue, passwordValue);
    singIn(emailValue, passwordValue)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
  };
  

  return (
  <div className=' '>
      <Helmet>
        <title>Global Language Hub|Login</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center border-2 bg-red-300 h-[500px]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="w-64">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />
          <span
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button
          className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-gray-600">
          Dont have an account?{' '}
          <Link to='/singup' className="text-blue-500">
            Register here
          </Link>
        </p>
        <button className='flex btn mx-auto ' >
            Or login with: <FaGoogle className='mt-1 ms-3 ' />
            </button>
      </div>
    </div>
  </div>
  );
};

export default Login;
