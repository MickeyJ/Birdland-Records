import React from 'react'

const ArtistBannerImage = (props) => {
  const { artist } = props;

  return (
    <div id="artist-image-container">

      <img className="artist-page-image" src={artist.image} alt={artist.name} />
      <div className="artist-name-overlay">
        <span>{artist.name.toUpperCase()}</span>
      </div>

    </div>
  )
};

export default ArtistBannerImage