import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DATA } from "../../data"
import { KEY } from "../../localKey";
import SearchBar from "../SearchBar/SearchBar";

const VideoResults = (props) => {
    const [videoSearch, setVideoSearch] = useState(DATA[0]["items"]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let mounted = true;
        if (mounted) {

        }
        return () => (mounted = false);
    },  []);

    const getVideos = async () => {
        try {
            console.log(search)
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&type=video&part=snippet&maxResults=4`
            );

            console.log(response.data.items)
            setVideoSearch(response.data.items);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div>
            <SearchBar getVideos={getVideos} search={search} setSearch={setSearch}/>
                <div>

                </div>
            </div>
        </div>
    );
};

export default VideoResults