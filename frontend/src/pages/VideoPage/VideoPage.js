import React, { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { KEY } from '../../localKey';
import useAuth from '../../hooks/useAuth';


const VideoPage = () => {
    const [user, token] = useAuth();
    const [videos, viewVideos] = useState([]);
    const { videoId } = useParams();

    useEffect(() => {
        getVideos();
    }, [token]);

async function getVideos(){
    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=4&relatedToVideoId=${videoId}&key=${KEY}`, (videos))
        console.log(response.data.items);
        viewVideos(response.data.items);
    } catch (error) {
        console.log(error.response.data);
    }
}

const VidPlayer = styled.iframe`
border-radius: 10px;
display: block;
margin: auto;
`

return (
        <>
            <div className="title-container">
                <h1>Results for {user.username}</h1>
            </div>
                <div className="vid-player">
                <VidPlayer title="ytplayer"
                        type="text/html"
                        width="460"
                        height="360"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                </VidPlayer>
                </div>
                <div>
                <RelatedVideos VideoArray={videos} />
                </div>
        </>
    );

}