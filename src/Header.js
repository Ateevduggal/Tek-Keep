import React from "react";
import Logo from "./Logo.png";

//there are many ways using which we can display images in our React app. Since, React is all about components, so we have to import the logo as a component assuming that it has a default exported

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="header d-flex justify-content-center align-items-center">
            <img src={Logo} alt="Logo" className="logo ml-3" />
            <p className="text mx-3 mt-3 fs-4 text-white fw-bold">TEK KEEP</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
