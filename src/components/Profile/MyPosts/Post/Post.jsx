import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {

    // console.log(props.message);
    return (
        <>
            <div className={s.item}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </>


    );
}

export default Post;