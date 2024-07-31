import React from 'react';
import s from "./Profile.module.css";

const Profile = () =>{
    return    (
        <div className={s.content}>
            <div>
                <img alt='#' src='https://wallpapers.com/images/featured/beautiful-beach-pictures-j4g4bsole88brlvw.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>);
}

export default Profile;