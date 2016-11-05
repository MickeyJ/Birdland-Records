import React from 'react'

const ArtistBannerImage = (props) => {
  const { artist } = props;

  return (
    <div id="artist-image-container">

      <img className="artist-page-image" src={artist.img_url} alt={artist.name} />
      <div className="artist-name-overlay">
        <span>{artist.name}</span>
      </div>

    </div>
  )
};

export default ArtistBannerImage