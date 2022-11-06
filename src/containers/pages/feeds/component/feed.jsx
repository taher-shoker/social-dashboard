import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { addLike, removeLike } from "shared/helpers/utils";
import { useQueryClient } from "react-query";


function Feed({ item }) {
    const queryClient = useQueryClient();
    const isLiked = item?.isLike
    const [favColor, setFavColor] = React.useState(isLiked || false);


    const handleFav = (id) => {
        setFavColor(!favColor);
        if (favColor) {
            removeLike(id)
            queryClient.invalidateQueries(["feeds"]);
        } else {
            addLike(id)
            queryClient.invalidateQueries(["feeds"]);
        }
    };


    useEffect(() => {
        setFavColor(isLiked);
    }, [isLiked]);

    return (
        <div className="feed">
            <div className="img-box">
                <img src={item.feedSrc} alt="" />
            </div>
            <div className="feed-info">
                <div className="feed-account">
                    <div className="avatar">
                        <img src={item.src} alt="" loading="lazy" />
                    </div>
                    <h5>{item.name}</h5>
                </div>
                <div className="actions">
                    <button className={favColor ? 'active' : 'like'} onClick={()=>handleFav(item.id)}>
                        <FontAwesomeIcon icon={faHeart} />
                        {item.likesCount}
                    </button>
                    <button className="comment">
                        <FontAwesomeIcon icon={faCommentDots} />
                        {item.commentsCount}
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Feed;