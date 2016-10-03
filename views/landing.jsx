import React, { Component } from 'react'
import DefaultLayout from './layout'

import ArtistLink from './components/ArtistLink'

export default class Landing extends Component{
  render() {
    const {artist_data} = this.props;

    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div id="artist-thumb-container" className="row cell-3000-3 cell-1300-2 cell-750-1 cell-380-1">

            <ArtistLink
              id="britt-image"
              pathname={`/${artist_data[0].path}`}
              image_url="images/artists/BRITT_1.jpg"
              artist_name="BRITT MARGIT"
            />

            <ArtistLink
              id="-image"
              pathname={`/${artist_data[1].path}`}
              image_url="images/artists/ROBYN_1.jpg"
              artist_name="ROBYN SHERWELL"
            />

            <ArtistLink
              id="-image"
              pathname={`/${artist_data[2].path}`}
              image_url="images/artists/ELISE_2.jpg"
              artist_name="ELISE LEGENDRE"
            />

            <ArtistLink
              id="-image"
              pathname={`/${artist_data[3].path}`}
              image_url="images/artists/CAGES_1.jpg"
              artist_name="CAGES OF LIGHT"
            />

            <ArtistLink
              id="-image"
              pathname={`/${artist_data[4].path}`}
              image_url="images/artists/DOGWOOD_1.jpg"
              artist_name="DOGWOOD HEART"
            />

            <ArtistLink
              id="-image"
              pathname={`/${artist_data[5].path}`}
              image_url="images/artists/FAIRYLIGHTS_2.jpg"
              artist_name="THE FAIRYLIGHTS"
            />

        </div>
        <script src="preloader.js"></script>
      </DefaultLayout>
    )
  }
}