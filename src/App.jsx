import React, { useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import HomeScreen from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfilePage from "./pages/ProfilePage";

 
function App() { 
  const dispatch = useDispatch(); 
  const navigate = useNavigate()
  const user = useSelector(selectUser); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        console.log("user", user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
        navigate('/')
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app"> 
        <Routes>
          {user.user === null ? (
            <Route path="/" element={<Login />} />
          ) : (
            <> 
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfilePage/>} />
            </>
          )}
        </Routes> 
    </div>
  );
}

export default App;
