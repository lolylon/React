import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";
// import Technologies from "./Header";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>

            {/*<Profile/>*/}

        </div>);
}

export default App;
