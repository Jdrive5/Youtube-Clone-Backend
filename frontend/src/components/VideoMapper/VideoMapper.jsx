import React, { useState, useEffect } from 'react';
import VideoList from '../VideoList/VideoList';


const VideoMapper = ({videos}) => {
    return (
        <div>
            {videos.map(video => <VideoList key={video.id} video={video}/>)}
        </div>
    )
}

export default VideoMapper;