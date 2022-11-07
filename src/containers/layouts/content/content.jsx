import React from "react";
import AppRoutes from "routes";
import InfoSide from "../infoSide/info-side";
import Stories from "../stories/stories";

function Content() {
  return (
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-9 order-2 order-md-1">
          <Stories />
          <hr />
          <AppRoutes />
        </div>
        <div className="col-md-3 order-1 order-md-2">
          <InfoSide />
        </div>
      </div>
    </div>
  );
}

export default Content;
