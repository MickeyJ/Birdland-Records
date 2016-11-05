import React from 'react'

const ArtistSocialLinks = (props) => {
  const { artist } = props;
  const { links } = artist.info;

  return (
    <div id="artist-links-container">

      <div className="artist-links">
        <a className="artist-official-link hoverable" href={links.website} target="_blank">
          OFFICIAL SITE
        </a>
        <div className="artist-social-links">

          <a href={links.facebook} target="_blank">
            <img src="icons/fb-shadow.png" style={{height: 38, width: 38, marginBottom: 3}} alt="FB" />
          </a>

          <a href={links.twitter} target="_blank">
            <img src="icons/tw-shadow.png" style={{height: 42, width: 42, marginTop: 9}}  alt="TW" />
          </a>

          <a href={links.instagram} target="_blank">
            <img src="icons/instagram.png" style={{height: 32, width: 32, marginLeft: 4, marginRight: 4, marginBottom: 7}}  alt="IG" />
          </a>

          <a href={links.soundcloud} target="_blank">
            <img src="icons/soundcloud.png" style={{height: 43, width: 43, marginLeft: 4, marginRight: 4, marginBottom: 2}} alt="SC" />
          </a>

          <a href={links.youtube} target="_blank">
            <img src="icons/youtube.png" style={{height: 30, width: 40, marginLeft: 4, marginRight: 4, marginBottom: 8}} alt="YT" />
          </a>

        </div>
      </div>

    </div>
  )
};

export default ArtistSocialLinks