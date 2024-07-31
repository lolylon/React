import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <>
            <div className={s.item}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>

        </>
    );
}

export default Post;