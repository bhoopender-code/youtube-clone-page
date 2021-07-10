import { Avatar } from '@material-ui/core';
import { SportsMma } from '@material-ui/icons';
import React from 'react';
import './VideoRow.css';





function VideoRow({title, channelName, views, timestamp, description, subscriber}) {
    return (
        <div className="videoRow">
            <img className="videoRow_thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
            {/* <div className="videoRow_avatar">
                <Avatar />
            </div> */}
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline" > {channelName} .  <span className="videoRow_subs"> <span className="videoRow_subNumber">{subscriber}</span> subscriber </span>   {views} views . {timestamp} </p>
                <p className="videoRow_description" >{description} </p>

            </div>
        </div>
    )
}






export default VideoRow
