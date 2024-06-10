import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase_config";
import useAxiosPublice from "../hooks/useAxiosPublice";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublice();
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const LogOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  
  // curren user information
  useEffect(() => {
    const changeAuthState = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const email = { email: currentUser?.email };
        axiosPublic.post("/jwt", email).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
          setUser(currentUser);
          setLoading(false);
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }

      console.log(currentUser);
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
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
