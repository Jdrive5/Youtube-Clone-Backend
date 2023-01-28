import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { KEY } from '../../localKey';
import VideoComments from '../../components/VideoComments/VideoComments';
import "./VideoPage.css";
import VideoMapper from '../../components/VideoMapper/VideoMapper';


const VideoPage = () => {
    const [videos, setVideos] = useState([]);

    const getVids =  async()=>{
        await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=DldQhe4azr4&type=video&maxResults=4&key=${KEY}&part=snippet`)
                    .then(res => {setVideos(res.data.items)})
    } 
    


return (
        <div>
            <iframe
                title="main-vid-player"
                id="player" 
                type="text/html" 
                width="640" 
                height="390"
                src={`http://www.youtube.com/embed/iUbuI3tT9KU?enablejsapi=1&origin=http://example.com`}
                frameborder="0"
            ></iframe>
        </div>
    );

};

export default VideoPage;