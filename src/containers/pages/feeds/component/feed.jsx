import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Feed({item}) {
  return (
    <div className="feed">
        <div className="img-box">
            <img src={item.src} alt="" />
        </div>
        <div className="feed-info">
            <div className="feed-account">
                <div className="avatar">
                    <img src={item.avSrc} alt="" loading="lazy"/>
                </div>
                <h5>{item.accountName}</h5>
            </div>
            <div className="actions">
                <button className="">
                <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
        </div>
        
    </div>
  );
}

export default Feed;