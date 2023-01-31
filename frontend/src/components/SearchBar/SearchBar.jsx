import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css'


const SearchBar = (props) => {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <div className='searchbar'>
                <div className='searchtext'> Search Videos</div>
                <div className='searchform'>
                    <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={props.search}
                    onChange={(event) => props.setSearch(event.target.value)}
                    ></input>
                    </form>
                    <div>
                        <button onClick={() => props.getVideos()}>Search Here</button>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SearchBar;