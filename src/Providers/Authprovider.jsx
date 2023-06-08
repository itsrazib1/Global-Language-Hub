import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
 
const Authprovider = ({ children }) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);



const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  
  

const singIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(email,password)
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

useEffect( () =>{
  const unsubscribe =   onAuthStateChanged(auth,Currentuser =>{
        setUser(Currentuser);
        console.log('Current user',Currentuser);
        setLoading(false)
    });
    return () =>{
        return unsubscribe();
    }
},[])

const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut
}

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
