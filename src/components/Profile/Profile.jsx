import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return    (
        <div className={s.content}>
            <div>
                <img alt='#' src='https://wallpapers.com/images/featured/beautiful-beach-pictures-j4g4bsole88brlvw.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;