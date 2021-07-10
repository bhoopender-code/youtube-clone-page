import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';



function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header ">
            <div className="header_left">
            {/* <Avatar/> */}
                <MenuIcon />
                <Link to="/">
                    <img alt="logo" className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"></img>

                </Link>
            </div>

            <div  className="header_input">
                <input placeholder='Search' value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div>

            <div className="header_icons">
                <VideoCallIcon className="header_icon"  fontSize="large" />
                <AppsIcon className="header_icon" fontSize="large" />
                <NotificationsIcon className="header_icon" fontSize="large" />
                {/* <Avatar /> */}
                <AccountCircleIcon className="header_icon" fontSize="large" src=""/>
            </div>
        </div>
    )
}

export default Header
