import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FaBook,
  FaChalkboardTeacher,
  FaHome,
  FaUserTie,
  FaUsers,
  FaWallet,
  FaBookMedical
} from "react-icons/fa";
import Navber from "../Pages/Shared/Navbar/Navber";
import WelcomePage from "../Pages/Dashbord/Mycart";

const Dashbord = () => {
  const location = useLocation();
  const isAdmin = true;
  const noHeaderFooter = location.pathname.includes("/dashbord/mycart") || location.pathname.includes("/dashbord/alluser");

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-[#eb45ca] text-white btn-xs my-3 drawer-button lg:hidden"
          >
            Open drawer
          </label>
          
          <Outlet></Outlet>
          {noHeaderFooter || <WelcomePage></WelcomePage>}
        </div>
        <div className="drawer-side bg-slate-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content pt-20">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashbord/alluser">
                    <FaUsers></FaUsers> All User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBookMedical></FaBookMedical> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Go To Home
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li>
                  <NavLink to="/instructors">
                    <FaUserTie></FaUserTie>Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classes">
                    <FaChalkboardTeacher></FaChalkboardTeacher> Classes
                  </NavLink>
                </li>
                {/*  */}
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashbord/mycart">
                    <FaBook></FaBook> My Added Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashbord/paymenthistory">
                    <FaWallet></FaWallet> Payment Histroy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Go To Home
                  </NavLink>
                </li>

                <div className="divider"></div>
                <li>
                  <NavLink to="/instructors">
                    <FaUserTie></FaUserTie>Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classes">
                    <FaChalkboardTeacher></FaChalkboardTeacher> Classes
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
