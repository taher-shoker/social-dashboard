import React from "react";


function Story({item}) {
  return (
    <div className="story">
        <div className="avatar">
            <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg" alt="" />
        </div>
        <div className="av-name">taher {item}</div>
        
    </div>
  );
}

export default Story;