import React from 'react'

import { Banner, BoxButton } from '../../../build'

const Releases = (props) => {
    const {releases} = props;
  return (
    <Banner className="artist-info-item-container bg-grey light" style={{margin: '0', minHeight: 200}} shadow={true}>
      <h1 className="info-title">RELEASES</h1>
      <div className="title-underline"></div>

        {releases
          ?(
            <div id="artist-releases-slider">
              {releases.map((x, i) =>(
                <div key={i} className="release-slide">

                  <div className="release-image">

                    <img src={x.img_url} alt="123" />

                  </div>

                  <div className="release-info">

                    <div className="release-info-header">

                      <h5 className="date">
                        {x.date}
                      </h5>

                      <h1 className="title">
                        {x.title}
                      </h1>

                    </div>

                    <div className="release-links">

                      <a href={x.apple_music} target="_blank" className="link-btn">
                        <BoxButton
                          style={{width: 150, fontSize: 19}}
                          bgColor="#444"
                          txtColor="white"
                          text="APPLE MUSIC"
                        />
                      </a>

                      <a href={x.spotify} target="_blank" className="link-btn">
                        <BoxButton
                          style={{width: 150, fontSize: 19}}
                          bgColor="#444"
                          txtColor="white"
                          text="SPOTIFY"
                        />
                      </a>

                    </div>

                  </div>

                </div>
                
              ))}
            </div>
          )
          :(
            <h4 className="coming-soon">Coming Soon!</h4>
          )
        }

    </Banner>
  )
};

export default Releases