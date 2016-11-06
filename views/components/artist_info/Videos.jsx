import React from 'react'

import {Banner} from '../../../build'

const Videos = (props) => {

  return (
    <Banner className="artist-info-item-container bg-white" style={{margin: '0', minHeight: 200}} shadow={true}>
      <h1 className="info-title">VIDEOS</h1>
      <div className="title-underline"></div>


        {props.videos.length
          ?(
            <div id="artist-videos">
              {props.videos.map((x,i) =>(
                <iframe key={i} className="video" src={x} frameBorder="0"></iframe>
              ))}
            </div>
          )
          : <h4 className="coming-soon">Coming Soon!</h4>
        }


    </Banner>
  )
};

export default Videos