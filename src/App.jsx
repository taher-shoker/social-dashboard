import Content from "containers/layouts/content/content";
import SideBar from "containers/layouts/sideBar/side-bar";
import React from "react";
import "shared/assets/styles/main.scss";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
