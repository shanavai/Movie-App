import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from 'react-router-dom'; 


const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); 

  const transitionNavBar=()=> {
    if(window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])


  return (
    <div className={`nav ${ show && `nav__black`}`}>
      <div className="nav__contents">
        <img 
         onClick={()=> navigate('/')}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="nav__logo"
        />
        <img 
          onClick={()=> navigate('/profile')}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
