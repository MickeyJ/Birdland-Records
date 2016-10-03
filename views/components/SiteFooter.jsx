import React from 'react'

const SiteFooter = (props) => (
  <div id="site-footer" className="row2">

    <div id="social-icons" className="col-3">

      <a href="#!TW" >
        <img src="icons/tw-shadow.png" style={{height: 52, width: 52, marginBottom: -3}}  alt="TW" />
      </a>
      <a href="#FB" >
        <img src="icons/fb-shadow.png" alt="FB" />
      </a>
      <a href="#BL email" >
        <img src="icons/mail_2.png" style={{height: 45, width: 45, marginBottom: 2}} alt="BL" />
      </a>

    </div>

  </div>
);

export default SiteFooter