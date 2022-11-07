import React, { useState } from "react";
import { sortByFeeds } from "shared/helpers/utils";
import Feed from "./component/feed";
import { useFeeds } from "./feed.services";


function Feeds() {
  const { feeds,isSuccess } = useFeeds()
  const [sortBy, setSortBy] = useState('all')

  const handelSortBy = (e) => {
    console.log(e.target.value)
    setSortBy(e.target.value)
    sortByFeeds(e.target.value)
  }
  return (
    <div className="feeds">
      <div className="header">
        <h4>Feeds</h4>
        <div className="sort-by">
          <ul>
            <li>
              <button className={sortBy === 'all' ? 'active' : ''} value='all' onClick={(e) => handelSortBy(e)}>all</button>
            </li>
            <li>
              <button className={sortBy === 'following' ? 'active' : ''} value='following' onClick={(e) => handelSortBy(e)}>following</button>
            </li>
            <li>
              <button className={sortBy === 'newest' ? 'active' : ''} value='newest' onClick={(e) => handelSortBy(e)}>newest</button>
            </li>
            <li>
              <button className={sortBy === 'popular' ? 'active' : ''} value='popular' onClick={(e) => handelSortBy(e)}>popular</button>
            </li>

          </ul>
        </div>
      </div>
      <div className="feeds-box">
        <div className="row">

          {isSuccess &&
            feeds?.map(f =>
              <div className="col-md-6" key={f.id}>
                <Feed item={f}/>
              </div>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Feeds;