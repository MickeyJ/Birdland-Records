import React from 'react'

const ArtistLink = (props) => (
  <div className="artist-link col-3">
      <a href={props.pathname}>
        <img className="hoverable" src={props.image_url} alt={props.artist_name} />
      </a>
      <span className="artist-name">
        {props.artist_name}
      </span>
  </div>
);

export default ArtistLink