import React from 'react'

import {Banner} from '../../../build'

const Events = (props) => {

  return (
    <Banner className="artist-info-item-container bg-grey light" style={{margin: '0', minHeight: 200}} shadow={true}>
      <h1 className="info-title">EVENTS</h1>
      <div className="title-underline"></div>

      <h4 className="coming-soon">Coming Soon!</h4>

    </Banner>
  )
};

export default Events