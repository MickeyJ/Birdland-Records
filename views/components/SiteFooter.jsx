import React from 'react'

const SiteFooter = (props) => (
  <div id="site-footer" className="row">

    <div id="social-icons" className="col-3">
      <a href="#FB" >
        <img src="icons/fb-shadow.png" alt="FB" />
      </a>
      <a href="#BL email" >
        <img src="icons/mail.png" style={{height: 40, width: 40, marginBottom: 5}} alt="BL" />
      </a>
      <a href="#!TW" >
        <img src="icons/tw-shadow.png"  alt="TW" />
      </a>
    </div>


  </div>
);

export default SiteFooter