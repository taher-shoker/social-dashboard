import React from "react";
import Logo from 'shared/assets/images/logo.png'


function SideBar() {

  return (
    <div className="col-md-2 side-bar">
        <div className="logo-box">
            <img src={Logo} alt=''/>
            <span>Qeema</span>
        </div>
        <div className="links-box">
            <h4 className="side-title">Menu</h4>
        </div>
    </div>
  );
}

export default SideBar;