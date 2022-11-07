import React from "react";

function Story({ item, className }) {
  return (
    <div className="story">
      <div className={className ? "avatar you" : "avatar"}>
        <img src={item.src} alt={item.name} loading="lazy" />
      </div>
      <div className="av-name">{item.name}</div>
    </div>
  );
}

export default Story;
