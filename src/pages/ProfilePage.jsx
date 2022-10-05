import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfilePage.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  console.log("user", user.user);

  const signingOut = () => {
    signOut(auth); 
    dispatch(logout);
  };
  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage__body">
        <h1>Edit Profile</h1>
        <div className="profilePage__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
            alt=""
          />
          <div className="profilePage__details">  
              <h2>{user?.user?.email}</h2>
              <div className="profilePage___plans">
                <button
                  onClick={() => signingOut()}
                  className="profilePage__signOut"
                >
                  Sign Out
                </button>
              </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
