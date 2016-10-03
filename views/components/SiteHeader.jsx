import React from 'react'

const svgSize = 150;

const SiteHeader = (props) => (
  <div id="site-header">

    <div id="birdland-logo-container">
      <a href="/" >
        <svg viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <image  xlinkHref="images/BL_logo3.png" x="0" y="0" height={`${svgSize}px`} width={`${svgSize}px`}/>
        </svg>
      </a>
    </div>

  </div>
);

export default SiteHeader