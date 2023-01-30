import React, { useState, useEffect } from 'react';
import VidPresenter from '../VidPresenter/VidPresenter';
import styled from 'styled-components'

const FlexContainer = styled.ul`
display: flex;
flex-wrap: wrap;
`


const VideoMapper = ({vidArray}) => {
    return (
        <FlexContainer>
            {vidArray.map(el => <VidPresenter key={el.id.videoId} video = {el}/>)}
        </FlexContainer>
    )
}

export default VideoMapper;