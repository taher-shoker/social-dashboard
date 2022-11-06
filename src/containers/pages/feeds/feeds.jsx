import React, { useState } from "react";
import Feed from "./component/feed";


function Feeds() {
  const [sortBy,setSortBy] =useState('all')
  const item={
    src:'',
    avSrc:'',
    accountName:''
  }
  const handelSortBy =(e)=>{
    console.log(e.target.value)
    setSortBy(e.target.value)
  }
  return (
    <div className="feeds">
      <div className="header">
        <h4>Feeds</h4>
        <div className="sort-by">
          <ul>
            <li>
              <button className={sortBy === 'all' ? 'active' : ''} value='all' onClick={(e)=>handelSortBy(e)}>all</button>
            </li>
            <li>
              <button className={sortBy === 'following' ? 'active' : ''} value='following' onClick={(e)=>handelSortBy(e)}>following</button>
            </li>
            <li>
              <button className={sortBy === 'newest' ? 'active': ''} value='newest' onClick={(e)=>handelSortBy(e)}>newest</button>
            </li>
            <li>
              <button className={sortBy === 'popular' ? 'active' : ''} value='popular' onClick={(e)=>handelSortBy(e)}>popular</button>
            </li>
           
          </ul>
        </div>
      </div>
       <Feed item={item}/> 
    </div>
  );
}

export default Feeds;