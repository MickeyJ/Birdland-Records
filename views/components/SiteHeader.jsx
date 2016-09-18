import React from 'react'

const svgSize = 150;

const SiteHeader = (props) => (
  <div id="site-header">

    <div id="birdland-logo-container">
      <svg viewBox={`0 0 ${svgSize} ${svgSize}`}>
        <image xlinkHref="images/BL_logo3.svg" x="0" y="0" height={`${svgSize}px`} width={`${svgSize}px`}/>
      </svg>
    </div>

  </div>
);

export default SiteHeader