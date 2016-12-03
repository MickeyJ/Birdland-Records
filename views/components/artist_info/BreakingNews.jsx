import React from 'react'

import {Banner} from '../../../build'

const BreakingNews = (props) => {

  const { news } = props;

  return (
    <Banner className="artist-info-item-container bg-white" style={{margin: '0', minHeight: 200}} shadow={true}>
      <h1 className="info-title">BREAKING NEWS</h1>
      <div className="title-underline"></div>

      {news.length
        ?(
        <div id="artist-news">
          {news.map((x,i) =>(
            <div key={i} className="news_item">
              <p className="title">{x.title}</p>
              <img src={x.image} alt="news item image" />
              <p className="text">
                {x.text}
              </p>
            </div>
          ))}
        </div>
      )
        : <h4 className="coming-soon">Coming Soon!</h4>
      }

    </Banner>
  )
};

export default BreakingNews