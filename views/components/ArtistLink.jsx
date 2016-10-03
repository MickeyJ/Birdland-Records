import React from 'react'

import {BoxButton} from '../../build'

const buttonWithIcon = (props) =>(
  <div>
    <span style={{position: 'relative', right: 10}}>VIEW ARTIST</span>
    <img style={{position: 'absolute', display: 'inline', width: 24, height: 24, top: '50%', right: 15, marginTop: -12}} src="icons/arrow-right.png" alt="" />
  </div>
)

const ArtistLink = (props) => (
  <div className="artist-link col-3 grid-box">
      <div id={props.id} className="image-container hoverable">
        <a href={props.pathname}>
          <div className="artist-link-overlay">
            {/*<img style={{zIndex: -1}} src={props.image_url} className="overlay-filter" />*/}

            <div className="overlay-inner">
              <h3>{props.artist_name}</h3>
              <div className="overlay-btn">
                <BoxButton
                  style={{width: 150, fontSize: 15}}
                  text={buttonWithIcon()}
                />

              </div>
            </div>

          </div>
        </a>
      </div>
    <span className="artist-name">
      {props.artist_name}
    </span>
  </div>
);

export default ArtistLink