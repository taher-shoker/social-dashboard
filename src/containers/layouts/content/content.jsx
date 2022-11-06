import Feeds from "containers/pages/feeds/feeds";
import React from "react";
import InfoSide from "../infoSide/info-side";
import Stories from "../stories/stories";

function Content() {

  return (
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-9">
            <Stories/>
            <hr/>
            <Feeds/>
        </div>
        <div className="col-md-3">
        <InfoSide/>
        </div>
      </div>
    </div>
  );
}

export default Content;