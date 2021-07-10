import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css";


function Video({image,title, channel, views , timestamp, channelImage  }) {
    return (
        <div  className="video">
            <img className="video_thumbnail" src={image} alt="" />

            {/* to load internal image in react use the below code */}
            {/* <img className="imga" src={require("./bmw.png")} ></img>   */}
            
            <div className="video_info">
                <Avatar className="video_avatar" alt={channel} src={channelImage} />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel} </p>
                    <p> {views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
