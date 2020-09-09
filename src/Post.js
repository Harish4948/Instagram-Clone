import React, { useEffect } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
// import {db} from './firebase';
function Post({key,username,caption,imageUrl}) {
   
   

    return (
        <div className="post">
            <div className="post__header">
            <Avatar className="post__avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h3>{username}</h3>
                {/* header (avatar + username) */}
            </div>
            <img className="post__image" src={imageUrl} alt=""></img>
    <h4 className="post__text"><strong>{username} </strong>{caption}</h4>

        </div>
    )
}

export default Post
