import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import Login from "../Pages/Shared/Login/Login";
import Singup from "../Pages/Shared/Singup/Singup";
import Error from "../Pages/Shared/Error/Error";
import Instructors from "./Instructors/Instructors";
import Classes from "../Classes/Classes";
import Dashboard from "../Pages/Dashbord/Dashbord";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord";
import Alluser from "../Pages/Alluser/Alluser";
import AddedClass from "../Layout/Addedclass";
import Payment from "../Layout/Payment";




 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <Singup></Singup>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
        
      ]
    },
    {
      path:"/dashbord",
      element:<Dashbord></Dashbord>,
      children:[
        {
          path:'mycart',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> 
        },
        
        {
          path:'alluser',
          element:<Alluser></Alluser>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'addedclass',
          element:<AddedClass></AddedClass>
        },
        {
          path:'paymenthistory',
          element:<AddedClass></AddedClass>
        },
      ]
      
    }
    
  ]);