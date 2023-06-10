import { Link, Outlet, useLocation } from "react-router-dom";
import { FaBook, FaChalkboardTeacher, FaHome, FaUserTie, FaWallet } from 'react-icons/fa';
import Navber from "../Pages/Shared/Navbar/Navber";
import WelcomePage from "../Pages/Dashbord/Mycart";

const Dashbord = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/dashbord/mycart');
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
            <Navber></Navber>
          <Outlet></Outlet>
          { noHeaderFooter || <WelcomePage></WelcomePage>}
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-slate-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content pt-20">
            
            <li>
              <Link to='/dashbord/mycart'><FaBook></FaBook> My Added Class</Link>
            </li>
            <li>
              <a><FaWallet></FaWallet> Payment Histroy</a>
            </li>
            <li>
              <Link to='/'><FaHome></FaHome> Go To Home</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to='/instructors'><FaUserTie></FaUserTie>Instructors</Link>
            </li>
            <li>
              <Link to='/classes'><FaChalkboardTeacher></FaChalkboardTeacher> Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
