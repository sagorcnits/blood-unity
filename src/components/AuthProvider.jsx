import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase_config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [dataLoad, setDataLoad] = useState(true);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const LoginUser = (email, password) => {
    setDataLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const LogOutUser = () => {
    setDataLoad(true);
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };




  // curren user information
  useEffect(() => {
    const changeAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setDataLoad(false);
      console.log(currentUser)
    });
    return () => {
      changeAuthState();
    };
  }, [loaded]);

  const authInfo = {
    createUser,
    LoginUser,
    LogOutUser,
    user,
    setLoaded,
    loaded,
    dataLoad,
   
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
