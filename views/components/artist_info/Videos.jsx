import React from 'react'

import {Banner} from '../../../build'

const Videos = (props) => {

  return (
    <Banner className="artist-info-item-container bg-white" style={{margin: '0', minHeight: 200}} shadow={true}>
      <h1 className="info-title">VIDEOS</h1>
      <div className="title-underline"></div>

      <div id="artist-videos">

        {props.videos.map((x,i) =>(
          <iframe className="video" width="420" height="240" src={x} frameBorder="0"></iframe>
        ))}

      </div>

    </Banner>
  )
};

export default Videos