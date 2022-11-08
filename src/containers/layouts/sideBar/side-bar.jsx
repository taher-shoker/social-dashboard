import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "shared/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBookmark, faGear, faCommentDots,faBars } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [active, setActive] = useState("home");
  const [showContent, setShowContent] = useState(false);
  const [editable, setEditable] = useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 992) {
      setEditable(false);
      setShowContent(true);
    } else {
      setEditable(true);
      setShowContent(false);
    }
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 992) {
        setShowContent(true);
        setEditable(false);
      } else {
        setShowContent(false);
        setEditable(true);
      }
    });
  }, []);

  return (
    <div className="col-lg-2 side-bar">
      <div className="d-flex align-items-center justify-content-between">
      <div className="logo-box" >
        <img src={Logo} alt="" />
        <span>Qeema</span>
      </div>
     {editable && <FontAwesomeIcon size="xl" color="purple" icon={faBars} onClick={() => editable && setShowContent((s) => !s)} />}
      </div>
      <div className="links-box" hidden={!showContent}>
        <h4 className="side-title">Menu</h4>
        <ul className="sidebar-list list-unstyled">
          <li className="iconTabs">
            <NavLink to="/" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="iconTabs ">
            <NavLink
              to="/messages"
              className={active === "messages" ? "active" : ""}
              onClick={() => setActive("messages")}
            >
              <FontAwesomeIcon icon={faCommentDots} />
              <span>Messages</span>
            </NavLink>
          </li>
          <li className="iconTabs ">
            <NavLink
              to="/profile"
              className={active === "profile" ? "active" : ""}
              onClick={() => setActive("profile")}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="iconTabs">
            <NavLink
              to="/saved-post"
              className={active === "savedPost" ? "active" : ""}
              onClick={() => setActive("savedPost")}
            >
              <FontAwesomeIcon icon={faBookmark} />
              <span>Saved Post</span>
            </NavLink>
          </li>
          <li className="iconTabs">
            <NavLink
              to="/settings"
              className={active === "settings" ? "active" : ""}
              onClick={() => setActive("settings")}
            >
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
