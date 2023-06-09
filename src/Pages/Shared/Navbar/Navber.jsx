import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authprovider";
import './Navber.css'


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  

  const [activeRoute, setActiveRoute] = useState('');

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  
  const handleSetActiveRoute = (route) => {
    setActiveRoute(route);
  };

  const item1 = (
    <>
      <li className={activeRoute === 'home' ? 'active' : ''}>
      <Link to="/" onClick={() => handleSetActiveRoute('home')}>
        Home
      </Link>
    </li>
      
    <li className={activeRoute === 'instructors' ? 'active' : ''}>
      <Link to='/instructors' onClick={() => handleSetActiveRoute('instructors')}>Instructors</Link>
    </li>
    <li className={activeRoute === 'classes' ? 'active' : ''}>
      <Link to='classes' onClick={() => handleSetActiveRoute('classes')}>Classes</Link>
    </li>
      {user ? (
        <>
          <li>
            <Link className="text-rose-900 font-bold" to="/" onClick={logOut}>
              Logout
            </Link>
          </li>
          <li className="text-xs mt-3 text-white">Hello,{user.email}</li>
          
          <li className="ms-2">
            <Link to ='/dashbord' >Dashbord</Link>
          </li>
          
           <img className="rounded-full h-10" src={user.photoURL}alt="" />
          
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                onClick={handleNavbarToggle}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 bg-slate-950 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isNavbarOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <a className="btn btn-ghost normal-case text-xl" href="/">
                <img
                  className="w-12 h-12"
                  src="https://i.ibb.co/F3Y4Rpr/1200px-GLH-Hotel-Management-logo-svg.png"
                  alt="Logo"
                />
                Global Language Hub
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ul className="menu menu-horizontal px-1">{item1}</ul>
            </div>
          </div>
        </div>
      </div>

      {isNavbarOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{item1}</div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
