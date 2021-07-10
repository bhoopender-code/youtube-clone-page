import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'





function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow channelName="channel Name  " subscriber="45K" no_of_video="450" description="description fo the channel channel channel channel channel channel channel channel channel channel channel channel   "   />

            <hr />

            <VideoRow title="video title of the " channelName="name of the channel" timestamp="2 days ago" views = "450K" subscriber="120K" description=' description fo the video ' />
             
        </div>
    )
}

export default SearchPage
