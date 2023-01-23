import React, { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { KEY } from '../../localKey';
import useAuth from '../../hooks/useAuth';
import VideoComments from '../../components/VideoComments/VideoComments';


const VideoPage = (props) => {
    const [video, setVideo] = useState([]);
    const [relatedVideos, setRelatedVideos] = useState([]);
    const { videoId } = useParams();

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            getVideoInfo();
            getRelatedVideos();
        }
        return () => (mounted = false);
    },  [videoId]);

    async function getVideoInfo(){
        const response =  await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${KEY}`
        );
        setVideo(response["data"]["items"][0]);
    } 
    


    async function getRelatedVideos() {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}&part=snippet`
        );
        setRelatedVideos(response["data"]["items"]);
    }


return (
        <div>
            <div>
                <div className='videocontainer'>
                    <div>
                        <div>
                            <br></br>
                        </div>

                        <iframe
                            id="ytplayer"
                            type="text/html"
                            width="640"
                            height="360"
                            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                            frameBorder="0"
                        ></iframe>
                        <VideoComments videoId={video.id} />
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default VideoPage;