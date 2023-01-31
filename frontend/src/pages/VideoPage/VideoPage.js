import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey';
import VideoComments from '../../components/VideoComments/VideoComments';
import "./VideoPage.css";
import VideoMapper from '../../components/VideoMapper/VideoMapper';


const VideoPage = () => {
    const [videos, setVideos] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "u-pf213sZ7JGdlxV2dmZcLKod54",
            "id": {
                "kind": "youtube#video",
                "videoId": "SnXcRf0LnSE"
            },
            "snippet": {
                "publishedAt": "2023-01-09T18:38:48Z",
                "channelId": "UCDSjAODXTpAHF9K4HqI6SNA",
                "title": "the META MCPR-300 SNIPER CLASS SETUP in WARZONE 2! (Modern Warfare 2)",
                "description": "Use code \"BOOYA\" in the Call of Duty store!\nIf you enjoyed the gameplay leave a like and subscribe for more!\nMake sure to follow my twitch if you haven't already and use code \"Booya\" for 5% off scuf products! http://scuf.co/Booya\nhttps://www.twitch.tv/gd_booya\nhttps://www.instagram.com/gd.booya/\nhttps://twitter.com/FaZeBooya\nhttps://www.tiktok.com/@booya?lang=en\nFor more Booya Subscribe to ~ https://www.youtube.com/channel/UC2u6A2xkmJgLyi34qMlC_fQ\n\n\n\n\n\n\nthe META MCPR-300 SNIPER CLASS SETUP in WARZONE 2! (Modern Warfare 2)\n#modernwarfare2  #warzone #callofduty\n\n\n\nDiazBiffle, Repullze, SuperEvan, Faze Swagg, Luckychamu, Faze Jsmoothhd, and Faze theboisantana, jgod\n^they all stink",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SnXcRf0LnSE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SnXcRf0LnSE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SnXcRf0LnSE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/SnXcRf0LnSE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/SnXcRf0LnSE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "FaZe Booya",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-09T18:38:48Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "y55MwZvktUyDpirAeYJhw8LzqLc",
            "id": {
                "kind": "youtube#video",
                "videoId": "TPYBn5FSXJ8"
            },
            "snippet": {
                "publishedAt": "2023-01-11T03:11:33Z",
                "channelId": "UCDSjAODXTpAHF9K4HqI6SNA",
                "title": "the *ONE CHEST* CHALLENGE in WARZONE 2!",
                "description": "Use code \"BOOYA\" in the Call of Duty store!\nIf you enjoyed the gameplay leave a like and subscribe for more!\nMake sure to follow my twitch if you haven't already and use code \"Booya\" for 5% off scuf products! http://scuf.co/Booya\nhttps://www.twitch.tv/gd_booya\nhttps://www.instagram.com/gd.booya/\nhttps://twitter.com/FaZeBooya\nhttps://www.tiktok.com/@booya?lang=en\nFor more Booya Subscribe to ~ https://www.youtube.com/channel/UC2u6A2xkmJgLyi34qMlC_fQ\n\n\n\n\nthe *ONE CHEST* CHALLENGE in WARZONE 2!\n#modernwarfare2  #warzone #callofduty\n\n\n\nDiazBiffle, Repullze, SuperEvan, Faze Swagg, Luckychamu, Faze Jsmoothhd, and Faze theboisantana, jgod\n^they all stink",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TPYBn5FSXJ8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TPYBn5FSXJ8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TPYBn5FSXJ8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/TPYBn5FSXJ8/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/TPYBn5FSXJ8/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "FaZe Booya",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-11T03:11:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "f21U5KPEmoKpPEsQs7ld_jZlwbQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "8aiV942nPtA"
            },
            "snippet": {
                "publishedAt": "2023-01-16T18:54:36Z",
                "channelId": "UCDSjAODXTpAHF9K4HqI6SNA",
                "title": "NEW WORLD RECORD with the BEST HONEY BADGER CLASS SETUP in WARZONE 2!",
                "description": "Use code \"BOOYA\" in the Call of Duty store!\nIf you enjoyed the gameplay leave a like and subscribe for more!\nMake sure to follow my twitch if you haven't already and use code \"Booya\" for 5% off scuf products! http://scuf.co/Booya\nhttps://www.twitch.tv/gd_booya\nhttps://www.instagram.com/gd.booya/\nhttps://twitter.com/FaZeBooya\nhttps://www.tiktok.com/@booya?lang=en\nFor more Booya Subscribe to ~ https://www.youtube.com/channel/UC2u6A2xkmJgLyi34qMlC_fQ\n\n\n\n\n\n\nNEW WORLD RECORD with the BEST HONEY BADGER CLASS SETUP in WARZONE 2! (Modern Warfare 2)\n#modernwarfare2  #warzone #callofduty\n\n\n\nDiazBiffle, Repullze, SuperEvan, Faze Swagg, Luckychamu, Faze Jsmoothhd, and Faze theboisantana, jgod\n^they all stink",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8aiV942nPtA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8aiV942nPtA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8aiV942nPtA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/8aiV942nPtA/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/8aiV942nPtA/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "FaZe Booya",
                "liveBroadcastContent": "none",
                "publishTime": "2023-01-16T18:54:36Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "4LWsGlmyATUvLrPgQ5GxQr_57Ew",
            "id": {
                "kind": "youtube#video",
                "videoId": "fseiDc4CEag"
            },
            "snippet": {
                "publishedAt": "2022-10-23T10:31:44Z",
                "channelId": "UCsy8leeyHC0B2XE8zUUe87Q",
                "title": "(No Commentary) Call of Duty Warzone: Rebirth Island - Best MP7 Class Gameplay",
                "description": "(No Commentary) Call of Duty Warzone: Rebirth Island - Best MP7 Class Gameplay\n\n#codwarzone\n#warzone\n#nocommentary\n#solowin\n#callofduty",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fseiDc4CEag/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fseiDc4CEag/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fseiDc4CEag/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/fseiDc4CEag/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/fseiDc4CEag/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Cartiier No Commentary ",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-23T10:31:44Z"
            }
        }
    ]);

    const getVids =  async()=>{
        await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=DldQhe4azr4&type=video&maxResults=4&key=${KEY}&part=snippet`)
                    .then(res => {setVideos(res.data.items)})
    } 
    


return (
        <div>
            <button
                onClick={() => {
                    getVids();
                }}
            >
                Related Videos
            </button>    
            <iframe
                title="main-vid-player"
                id="player" 
                type="text/html" 
                width="640" 
                height="390"
                src={`http://www.youtube.com/embed/iUbuI3tT9KU?enablejsapi=1&origin=http://example.com`}
                frameborder="0"
            ></iframe>
            <VideoComments videoId={videos} />
            <br></br>
            <div>
                <VideoMapper vidArray={videos}/>
            </div>
        </div>
    );

};

export default VideoPage;