import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


function ChannelRow({channelName, subscriber, no_of_videos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" />
            <div className="channelRow_text">
                <h4>{channelName }  {<   CheckCircleOutlineOutlinedIcon /> } </h4>
                <p>{subscriber} subscriber . {no_of_videos} videos</p>
                <p> {description} </p>
            </div>
            <div className="subscribe_icon">
                <h3>Subscribe</h3>
            </div>
        </div>
    )
}

export default ChannelRow


 