import React from 'react'

const svgSize = 150;

const SiteHeader = (props) => (
  <div id="site-header">

    <div id="birdland-logo-container">
      <a href="/" >
        <svg viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <filter id="dropShadow">
            <feOffset result = "offOut" in = "SourceGraphic" dx = "0" dy = "2"/>
            <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
            <feGaussianBlur result = "blurOut" in = "matrixOut" stdDeviation = "2"/>
            <feBlend in = "SourceGraphic" in2 = "blurOut" mode = "normal"/>
          </filter>
          <image filter="url(#dropShadow)" xlinkHref="images/BL_logo3.png" x="0" y="0" height={`${svgSize}px`} width={`${svgSize}px`}/>
        </svg>
      </a>
    </div>

  </div>
);

export default SiteHeader