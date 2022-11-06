import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from 'shared/assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUser,faBookmark,faGear, faCommentDots } from '@fortawesome/free-solid-svg-icons'



function SideBar() {
const [active,setActive] = useState('home')
  return (
    <div className="col-md-2 side-bar">
      <div className="logo-box">
        <img src={Logo} alt='' />
        <span>Qeema</span>
      </div>
      <div className="links-box">
        <h4 className="side-title">Menu</h4>
        <ul className='sidebar-list list-unstyled'>
          <li className='iconTabs'>
            <NavLink to="/" className={active  === 'home' ?'active':''} onClick={()=>setActive('home')}>
            <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </NavLink>
          </li>

          <li className='iconTabs '>
            <NavLink to="/messages" className={active  === 'messages' ?'active':''} onClick={()=>setActive('messages')} >
            <FontAwesomeIcon icon={faCommentDots} />

              <span>Messages</span>
            </NavLink>
          </li>

          <li className='iconTabs '>
            <NavLink to="/profile" className={active  === 'profile' ?'active':''} onClick={()=>setActive('profile')}>
            <FontAwesomeIcon icon={faUser} />

              <span>Profile</span>
            </NavLink>
          </li>

          <li className='iconTabs' >
            <NavLink to="/saved-post" className={active  === 'savedPost' ? 'active':''} onClick={()=>setActive('savedPost')} >
            <FontAwesomeIcon icon={faBookmark} />
              <span>Saved Post</span>
            </NavLink>
          </li>
          <li className='iconTabs'>
            <NavLink to="/settings" className={active  === 'settings' ?'active':''} onClick={()=>setActive('settings')}>
            <FontAwesomeIcon icon={faGear} />

              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;