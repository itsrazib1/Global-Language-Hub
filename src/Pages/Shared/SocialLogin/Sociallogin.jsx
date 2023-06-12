import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
// import { useLocation, useNavigate } from "react-router-dom";

const Sociallogin = () => {
  const { googleSingin } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();
  const handleGoogleSingin = () => {
    googleSingin()
    .then((result) => {
      
      const loggedInUser = result.user;
      
      console.log(loggedInUser);

      const saveUser = {name:loggedInUser.displayName,email:loggedInUser.email}
        fetch("https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/users",{
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
      // navigate(from ,{replace:true});
    });
  };
  return (
    <div>
      <button onClick={handleGoogleSingin} className="flex ">
        <img
          className="w-6 me-3"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"
          alt=""
        />
        <p className="mt-1">Sign Up With Google</p>
      </button>
    </div>
  );
};

export default Sociallogin;
