import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { KEY } from "../../localKey"
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    getVideos();
  }, [token]);


  async function getVideos() {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=NBAHighlights&key=${KEY}&part=snippet&type=video&maxResults=4`, (videos));
      
      console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }

    function handleSubmit(event) {
      event.preventDefault();
      getVideos()
    }
   
  return (
    <>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
        <button className="button" type="submit">Search</button>
        </form>

      </div>
    </>
  );
};

export default HomePage;
