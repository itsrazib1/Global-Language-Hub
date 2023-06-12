import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
 
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSingin = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('Current user', currentUser);

      // get and set token
      if(currentUser){
        axios.post('https://b7a12-summer-camp-server-side-itsrazib1.vercel.app/jwt',{email:currentUser.email})
        .then(data =>{
          // console.log(data.data.token);
          localStorage.setItem('assess-token',data.data.token)
        })
      }
      else{
        localStorage.removeItem('assess-token')
      }


      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSingin
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
