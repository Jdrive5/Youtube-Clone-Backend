import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { DATA } from "../../data";
import axios from "axios";
import { KEY } from "../../localKey"
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoMapper from "../../components/VideoMapper/VideoMapper";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoSearch, setVideoSearch] = useState(DATA[0]["items"]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    let mounted = true
    if (mounted) {

    }
    return () => (mounted = false);
  }, []);


  const fetchVideos = async () => {
    try {
        console.log(search)
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&type=video&maxResults=4`,);
      
      console.log(response.data.items);
      setVideoSearch(response.data.items);

    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
      <div>
      <SearchBar fetchVideos={fetchVideos} search={search} setSearch={setSearch}/>
        <div>
        <VideoMapper vidArray={videoSearch} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
