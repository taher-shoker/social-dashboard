import Feeds from "containers/pages/feeds/feeds";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feeds />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
