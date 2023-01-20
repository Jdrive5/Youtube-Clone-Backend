import React from "react";
import { Link } from "react-router-dom";



const VideoList = ({ video }) => {
    return (
        <div className="videosbox">
            <div className="videoframe">
                <div className="videobox">
                    <ul>{video.snippet.title.replace(/&#39;|&amp;/gi, "'")}</ul>
                    <Link to={`/${video.id.videoId}`}>
                        <div className="image">
                            <img
                                className="image"
                                src={video.snippet.thumbnails.medium.url}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
    
};

export default VideoList