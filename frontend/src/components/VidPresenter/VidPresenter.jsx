import React from 'react';
import styled from "styled-components"

const Panel = styled.li`
width: 600px;
padding: 1rem;
display: grid;
place-content: center;
background-color: grey;
box-shadow: 2px 3px 8px -2px rgba(0,0,0,0.255);
margin: 1rem;
border-radius: 3px
`


const VidPresenter = ({video}) => {
    return ( 
        <Panel>
            <img 
                src={video.snippet.thumbnails.high.url} 
                height={video.snippet.thumbnails.high.height} 
                width={video.snippet.thumbnails.high.width}
                alt=""/>
            <h2>{video.snippet.title}</h2>
        </Panel>);
}


export default VidPresenter;