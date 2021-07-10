import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ondemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h1>side bar</h1> */}
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Trending" Icon={WhatshotIcon} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your Video" Icon={ondemandVideoIcon} />
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked Videos" Icon={ThumbUpIcon} />
            <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
            
            <hr />
        </div>
    )
}

export default Sidebar
