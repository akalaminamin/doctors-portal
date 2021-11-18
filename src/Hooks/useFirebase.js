import initalizeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";

initalizeAuthentication();
const useFirebase = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(true);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   handle login state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getIdToken(user)
          .then((idToken) =>{
            setToken(idToken)
          })
      } else {
        setCurrentUser("");
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // handle google sign in
  const signInWithGoogle = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAuthError("");
        setCurrentUser(res.user);
        googleSignInDataSave(res.user.email, res.user.displayName);
        const redirect_url = location?.state?.from || "/";
        history.replace(redirect_url);
      })
      .catch((err) => {
        setAuthError("Failed to login!! Please try again");
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   create new account using email & password
  const createNewAccount = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        setCurrentUser(result.user);
        const newUser = { email, displayName: name };
        setCurrentUser(newUser);
        emailSignInDataSave(email, name);
        // update user name
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((err) => {
        setAuthError("Failed To create And Account!!!");
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };

  //   login using email and password
  const signIn = (email, password, history, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        const redirect_url = location?.state?.from || "/";
        history.replace(redirect_url);
        setCurrentUser(result.user);
      })
      .catch((err) => {
        setAuthError("Failed to login");
        console.log(err.message);
      });
  };
  // signout
  const logOut = () => {
    signOut(auth).then();
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${currentUser?.email}`)
      .then((res) => setAdmin(res.data?.admin));
  }, [currentUser?.email]);

  // save data in database
  const emailSignInDataSave = (email, displayName) => {
    const user = { email, displayName };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res);
    });
  };

  // update data in database
  const googleSignInDataSave = (email, displayName) => {
    const user = { email, displayName };
    axios.put("http://localhost:5000/users", user).then((res) => {
      console.log(res);
    });
  };
  return {
    admin,
    isLoading,
    token,
    currentUser,
    createNewAccount,
    signInWithGoogle,
    authError,
    setAuthError,
    logOut,
    signIn,
  };
};

export default useFirebase;
