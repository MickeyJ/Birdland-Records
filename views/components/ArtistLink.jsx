import React from 'react'


const ArtistLink = (props) => (
  <div className="artist-link col-3">
      <div id={props.id} className="image-container hoverable">
        <img src={props.image_url} alt={props.artist_name} />
        <a href={props.pathname}>
          <div className="artist-link-overlay">View Artist</div>
        </a>
      </div>
    <span className="artist-name">
      {props.artist_name}
    </span>
  </div>
);

export default ArtistLink